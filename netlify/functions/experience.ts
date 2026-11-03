// Netlify counterpart of GET /api/experience in server/src/app.ts.
// content/portfolio.json is gitignored, so it is bundled from the local disk at deploy time (netlify deploy --build),
// which keeps the experience data out of the public repository.
import content from '../../content/portfolio.json';

export default async () =>
  new Response(JSON.stringify({ ...content.experience, education: content.education }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
  });
