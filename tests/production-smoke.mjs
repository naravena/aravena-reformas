import assert from 'node:assert/strict';
const base = new URL(process.env.BASE_URL || 'https://aravenareformas.es');
const routes = [
  { path: '/', canonical: 'https://aravenareformas.es/' },
  { path: '/reformas-malaga/', canonical: 'https://aravenareformas.es/reformas-malaga/' },
  { path: '/pintura-malaga/', canonical: 'https://aravenareformas.es/pintura-malaga/' },
  { path: '/pintura-airless-malaga/', canonical: 'https://aravenareformas.es/pintura-airless-malaga/' },
  { path: '/alisado-paredes-malaga/', canonical: 'https://aravenareformas.es/alisado-paredes-malaga/' },
  { path: '/pladur-malaga/', canonical: 'https://aravenareformas.es/pladur-malaga/' },
  { path: '/contacto/', canonical: 'https://aravenareformas.es/contacto/' }
];
for (const route of routes) {
  const response = await fetch(new URL(route.path, base), { redirect: 'follow', signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, route.path + ' returned HTTP ' + response.status);
  assert.match(response.headers.get('content-type') || '', /text\\/html/i, route.path + ' did not return HTML');
  const html = await response.text();
  assert.match(html, /<main\\b/i, 'No main landmark: ' + route.path);
  assert.match(html, /<h1\\b[^>]*>[^<]+/i, 'No H1: ' + route.path);
  assert.ok(html.includes('<link rel="canonical" href="' + route.canonical + '"'), 'Canonical mismatch: ' + route.path);
  console.log('PASS ' + route.path + ' -> HTTP ' + response.status);
}
const home = await (await fetch(new URL('/', base), { signal: AbortSignal.timeout(20000) })).text();
assert.match(home, /<article class="service">[\\s\\S]*?href=["']\\/pintura-airless-malaga\\/["'][\\s\\S]*?<\\/article>/i, 'Homepage does not link to Airless in service grid');
assert.doesNotMatch(home, /class=["']airless-featured["']/i, 'Airless should be an ordinary service card');
const paint = await (await fetch(new URL('/pintura-malaga/', base), { signal: AbortSignal.timeout(20000) })).text();
assert.match(paint, /href=["']\\/pintura-airless-malaga\\/["']/i, 'Painting page does not link to Airless');
const sitemapResponse = await fetch(new URL('/sitemap.xml', base), { signal: AbortSignal.timeout(20000) });
assert.equal(sitemapResponse.status, 200, 'sitemap.xml unavailable');
assert.match(await sitemapResponse.text(), /<loc>https:\\/\\/aravenareformas\\.es\\/pintura-airless-malaga\\/<\\/loc>/, 'Airless URL missing from sitemap');
const robotsResponse = await fetch(new URL('/robots.txt', base), { signal: AbortSignal.timeout(20000) });
assert.equal(robotsResponse.status, 200, 'robots.txt unavailable');
assert.match(await robotsResponse.text(), /Sitemap:\\s*https:\\/\\/aravenareformas\\.es\\/sitemap\\.xml/i, 'robots.txt does not advertise sitemap');
console.log('Production smoke checks passed.');
