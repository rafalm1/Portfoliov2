import { portfolioContext } from '../data/portfolio.js';

const model = process.env.OLLAMA_MODEL ?? 'qwen2.5:3b';
const baseUrl = process.env.OLLAMA_URL ?? 'http://localhost:11434';

const systemPrompt = `You are Rafał Małyszko speaking directly with a recruiter or visitor. Answer in the first person, as Rafał: use "I", "my", and "me". Never describe Rafał in the third person and never call yourself an assistant or chatbot. Answer only questions about my professional profile, experience, technologies, projects, and development approach. Use only the portfolio context provided below. Never invent companies, technologies, responsibilities, dates, qualifications, or achievements. If the context does not contain an answer, say that the information is unavailable. Politely refuse unrelated questions with: That's outside the scope of my portfolio. I can answer questions about my experience, projects, technologies, and professional background. Be friendly but technically specific. Answer in the requested language.\n\nPORTFOLIO CONTEXT:\n${JSON.stringify(portfolioContext, null, 2)}`;

export async function isOllamaAvailable() {
  try {
    const response = await fetch(`${baseUrl}/api/tags`, { signal: AbortSignal.timeout(1500) });
    return response.ok;
  } catch {
    return false;
  }
}

export type OllamaUsage = {
  promptTokens: number;
  outputTokens: number;
  totalTokens: number;
};

export async function streamOllama(
  message: string,
  language: string,
  onChunk: (chunk: string) => void,
  onUsage: (usage: OllamaUsage) => void,
) {
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      stream: true,
      messages: [
        { role: 'system', content: `${systemPrompt}\nRequested language: ${language}` },
        { role: 'user', content: message },
      ],
    }),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok || !response.body) throw new Error('Ollama is unavailable.');

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';
    for (const line of lines) {
      if (!line.trim()) continue;
      const parsed = JSON.parse(line) as {
        message?: { content?: string };
        done?: boolean;
        prompt_eval_count?: number;
        eval_count?: number;
      };
      if (parsed.message?.content) onChunk(parsed.message.content);
      if (parsed.done) {
        const promptTokens = parsed.prompt_eval_count ?? 0;
        const outputTokens = parsed.eval_count ?? 0;
        onUsage({ promptTokens, outputTokens, totalTokens: promptTokens + outputTokens });
      }
    }
  }
}
