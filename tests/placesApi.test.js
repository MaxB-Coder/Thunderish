// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest';
import handler from '../api/places/v1/geocode/search.js';

/** Just enough of Vercel's request and response for the handler. */
function call(query, headers = { 'sec-fetch-site': 'same-origin' }) {
  const res = { statusCode: 200, headers: {}, body: undefined };
  res.status = (code) => ((res.statusCode = code), res);
  res.setHeader = (name, value) => (res.headers[name.toLowerCase()] = value);
  res.json = (body) => ((res.body = body), res);
  return handler({ query, headers }, res).then(() => res);
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe('the places proxy on Vercel', () => {
  it('searches Geoapify with the server-side key, and caches the answer for a day', async () => {
    vi.stubEnv('GEOAPIFY_KEY', 'server-key');
    const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ features: [] })));
    vi.stubGlobal('fetch', fetch);

    const res = await call({ text: '  Glasgow ' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ features: [] });
    const upstream = new URL(fetch.mock.calls[0][0]);
    expect(upstream.origin + upstream.pathname).toBe('https://api.geoapify.com/v1/geocode/search');
    expect(upstream.searchParams.get('text')).toBe('glasgow');
    expect(upstream.searchParams.get('apiKey')).toBe('server-key');
    expect(res.headers['cache-control']).toContain('s-maxage=86400');
    expect(JSON.stringify(res)).not.toContain('server-key');
  });

  it('rejects a missing or overlong search without calling Geoapify', async () => {
    vi.stubEnv('GEOAPIFY_KEY', 'server-key');
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    expect((await call({})).statusCode).toBe(400);
    expect((await call({ text: 'x'.repeat(101) })).statusCode).toBe(400);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('only answers the app itself, not other websites', async () => {
    vi.stubEnv('GEOAPIFY_KEY', 'server-key');
    vi.stubGlobal('fetch', vi.fn());
    expect((await call({ text: 'glasgow' }, { 'sec-fetch-site': 'cross-site' })).statusCode).toBe(403);
  });

  it('says so when Geoapify fails', async () => {
    vi.stubEnv('GEOAPIFY_KEY', 'server-key');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('nope', { status: 401 })));
    expect((await call({ text: 'glasgow' })).statusCode).toBe(502);
  });
});
