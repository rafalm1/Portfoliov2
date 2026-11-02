import { faq } from '../data/portfolio.js';

const allowedTerms = [
  'react',
  'vue',
  'typescript',
  'javascript',
  'frontend',
  'portfolio',
  'project',
  'experience',
  'technology',
  'skill',
  'career',
  'work',
  'hire',
  'testing',
  'three',
  'nuxt',
  'node',
  'express',
  'architecture',
  'design system',
  'mobile',
  'application',
  'approach',
  'redux',
  'pinia',
  'docker',
  'cypress',
  'jest',
  'doswiadczenie',
  'technologie',
  'technologia',
  'projekt',
  'projekty',
  'migracja',
  'migracje',
  'modernizacja',
  'modernizacje',
  'aplikacja',
  'aplikacje',
  'praca',
  'frontendowy',
  'zespol',
];
const blockedTerms = ['football', 'soccer', 'politics', 'recipe', 'medical', 'diagnosis', 'legal advice', 'weather', 'celebrity'];
const profileTerms = [
  'rafal',
  'his',
  'your',
  'you',
  'portfolio',
  'career',
  'experience',
  'work',
  'project',
  'hire',
  'developer',
  'moje',
  'moj',
  'mnie',
  'doswiadczenie',
  'moja',
  'mojej',
  'praca',
  'projekcie',
  'karierze',
];

export function normalizeMessage(message: string) {
  return message
    .toLocaleLowerCase('pl-PL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .replace(/[^a-z0-9\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function findFaq(message: string) {
  const normalized = normalizeMessage(message);
  return faq.find((item) => item.aliases.some((alias) => normalized.includes(normalizeMessage(alias)))) ?? null;
}

export function isPortfolioRelated(message: string) {
  const normalized = normalizeMessage(message);
  if (blockedTerms.some((term) => normalized.includes(term))) return false;
  return profileTerms.some((term) => normalized.includes(term)) && allowedTerms.some((term) => normalized.includes(term));
}
