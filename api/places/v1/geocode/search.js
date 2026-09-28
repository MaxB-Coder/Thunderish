/* eslint-env node */
// Geoapify place search for the Vercel deployment, with the key kept on the
// server (the GEOAPIFY_KEY environment variable). Same path and rules as
// maxblaschek.com's proxy, so one build of the app works on both.
const MAX_TEXT = 100;

export default async function handler(req, res) {
  // Browsers say where a request comes from; only the app itself may use this
  const site = req.headers['sec-fetch-site'];
  if (site && site !== 'same-origin') return res.status(403).json({ error: 'Not allowed' });

  // Normalised, so one cached answer serves every casing and spacing of a search
  const text = String(req.query.text ?? '').trim().toLowerCase();
  if (!text || text.length > MAX_TEXT) {
    return res.status(400).json({ error: `text must be 1-${MAX_TEXT} characters` });
  }

  const key = process.env.GEOAPIFY_KEY;
  if (!key) return res.status(500).json({ error: 'GEOAPIFY_KEY is not set on the server' });

  const url = new URL('https://api.geoapify.com/v1/geocode/search');
  url.searchParams.set('text', text);
  url.searchParams.set('apiKey', key);
  const upstream = await fetch(url);
  if (!upstream.ok) return res.status(502).json({ error: 'places request failed' });

  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  return res.status(200).json(await upstream.json());
}
