// Must stay the first import: modules below read process.env when they are evaluated.
import 'dotenv/config';
import { existsSync } from 'node:fs';
import path from 'node:path';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { z } from 'zod';
import { education, experience, faq } from './data/portfolio.js';
import { findFaq, isPortfolioRelated } from './services/matcher.js';
import { isOllamaAvailable, streamOllama, type OllamaUsage } from './services/ollama.js';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST;
const isProduction = process.env.NODE_ENV === 'production';
const clientDist = path.resolve('dist');
const chatSchema = z.object({ message: z.string().trim().min(1).max(800), language: z.enum(['en', 'pl']).optional() });
const chatLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: 'draft-7', legacyHeaders: false });
const aiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-7', legacyHeaders: false });
const usage = {
  totalRequests: 0,
  faqRequests: 0,
  refusedRequests: 0,
  ollamaRequests: 0,
  promptTokens: 0,
  outputTokens: 0,
  totalTokens: 0,
  recentOllamaQuestions: [] as string[],
};
const shouldLogAi = process.env.LOG_AI_REQUESTS === 'true' || !isProduction;

// Behind nginx this must be 1 so rate limiting sees the visitor's IP instead of the proxy's.
app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 0));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        // The 3D skill cloud (troika-three-text) fetches fonts from jsDelivr and runs its layout in blob workers,
        // which load their code with importScripts(blob:) — that is checked against script-src.
        'connect-src': ["'self'", 'https://cdn.jsdelivr.net'],
        'script-src': ["'self'", 'blob:'],
        'worker-src': ["'self'", 'blob:'],
        // nginx redirects HTTP to HTTPS; upgrading here would break plain-HTTP checks (http://<server IP>) before the certificate exists.
        'upgrade-insecure-requests': null,
      },
    },
  }),
);
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:3000' }));
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', async (_request, response) => {
  const aiOnline = await isOllamaAvailable();
  response.json({ status: 'ok', services: { api: 'online', ai: aiOnline ? 'online' : 'offline' }, faqEntries: faq.length });
});

app.get('/api/experience', (_request, response) => {
  response.json({ ...experience, education });
});

app.post('/api/chat', chatLimiter, async (request, response) => {
  const parsed = chatSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: 'Please provide a message between 1 and 800 characters.' });
    return;
  }

  const { message, language = 'en' } = parsed.data;
  const knownAnswer = findFaq(message);
  if (knownAnswer) {
    usage.totalRequests += 1;
    usage.faqRequests += 1;
    const localizedAnswer = (language === 'pl' && knownAnswer.answerPl) || knownAnswer.answer;
    response.json({ answer: localizedAnswer, source: 'knowledge-base', intent: knownAnswer.id });
    return;
  }

  if (!isPortfolioRelated(message)) {
    usage.totalRequests += 1;
    usage.refusedRequests += 1;
    const refusal =
      language === 'pl'
        ? 'To pytanie wykracza poza zakres mojego portfolio. Mogę odpowiadać o moim doświadczeniu, projektach, technologiach i pracy zawodowej.'
        : 'That is outside the scope of my portfolio. I can answer questions about my experience, projects, technologies, and professional background.';
    response.json({ answer: refusal, source: 'scope-refusal' });
    return;
  }

  aiLimiter(request, response, async () => {
    usage.totalRequests += 1;
    usage.ollamaRequests += 1;
    usage.recentOllamaQuestions = [...usage.recentOllamaQuestions, message].slice(-20);
    if (shouldLogAi) console.info(`[AI] Ollama question: ${message}`);
    response.status(200).setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.setHeader('Transfer-Encoding', 'chunked');
    try {
      let requestUsage: OllamaUsage | undefined;
      await streamOllama(
        message,
        language,
        (chunk) => response.write(chunk),
        (result) => {
          requestUsage = result;
        },
      );
      if (requestUsage) {
        usage.promptTokens += requestUsage.promptTokens;
        usage.outputTokens += requestUsage.outputTokens;
        usage.totalTokens += requestUsage.totalTokens;
        if (shouldLogAi)
          console.info(
            `[AI] Tokens: prompt=${requestUsage.promptTokens} output=${requestUsage.outputTokens} total=${requestUsage.totalTokens}`,
          );
      }
      response.end();
    } catch {
      if (!response.headersSent)
        response.status(503).json({ error: 'The local AI assistant is unavailable. Try a common portfolio question or start Ollama.' });
      else response.end();
    }
  });
});

app.get('/api/usage', (_request, response) => {
  if (isProduction) {
    response.status(404).json({ error: 'Not found' });
    return;
  }
  response.json(usage);
});

app.use('/api', (_request, response) => response.status(404).json({ error: 'Not found' }));

// In production the API also serves the built frontend (npm run build -> dist/).
if (existsSync(path.join(clientDist, 'index.html'))) {
  app.use(
    express.static(clientDist, {
      index: false,
      setHeaders: (response, filePath) => {
        if (filePath.includes(`${path.sep}assets${path.sep}`)) response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      },
    }),
  );
  // Client-side routes (/experience, /about, ...) all render the same index.html.
  app.get('*', (_request, response) => {
    response.setHeader('Cache-Control', 'no-cache');
    response.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.use((_request, response) => response.status(404).json({ error: 'Not found' }));

export { app, port, host };
