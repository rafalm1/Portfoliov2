import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

// Real portfolio content lives in content/portfolio.json, which is gitignored so it never lands in the public repo.
// content.example/portfolio.json is the committed placeholder used for local development on a fresh clone.

const projectSchema = z.object({ name: z.string(), description: z.string() });
const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  dates: z.string(),
  description: z.string(),
  technologies: z.string(),
  projects: z.array(projectSchema),
});
const faqSchema = z.object({ id: z.string(), aliases: z.array(z.string()), answer: z.string(), answerPl: z.string().optional() });
const contentSchema = z.object({
  experience: z.object({ en: z.array(experienceSchema), pl: z.array(experienceSchema) }),
  assistant: z.object({ context: z.record(z.unknown()), faq: z.array(faqSchema) }),
});

export type Experience = z.infer<typeof experienceSchema>;

function resolveContentFile() {
  const file = path.resolve(process.env.CONTENT_DIR ?? 'content', 'portfolio.json');
  if (existsSync(file)) return file;
  if (process.env.NODE_ENV === 'production') throw new Error(`Portfolio content not found: ${file}`);

  console.warn(`[content] ${file} not found, falling back to content.example/portfolio.json`);
  return path.resolve('content.example', 'portfolio.json');
}

const content = contentSchema.parse(JSON.parse(readFileSync(resolveContentFile(), 'utf8')));

export const experience = content.experience;
export const portfolioContext = content.assistant.context;
export const faq = content.assistant.faq;
