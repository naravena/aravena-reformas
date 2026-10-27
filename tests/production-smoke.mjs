import assert from 'node:assert/strict';
const base = new URL(process.env.BASE_URL || 'https://www.aravenareformas.es');
const routes = [
  { path: '/', canonical: 'https://www.aravenareformas.es/' },
  { path: '/reformas-malaga/', canonical: 'https://www.aravenareformas.es/reformas-malaga/' },
  { path: '/pintura-malaga/', canonical: 'https://www.aravenareformas.es/pintura-malaga/' },
  { path: '/pintura-airless-malaga/', canonical: 'https://www.aravenareformas.es/pintura-airless-malaga/' },
  { path: '/alisado-paredes-malaga/', canonical: 'https://www.aravenareformas.es/alisado-paredes-malaga/' },
  { path: '/pladur-malaga/', canonical: 'https://www.aravenareformas.es/pladur-malaga/' },
  { path: '/contacto/', canonical: 'https://www.aravenareformas.es/contacto/' },
  { path: '/pintar-techos-malaga/', canonical: 'https://www.aravenareformas.es/pintar-techos-malaga/' },
  { path: '/pintar-puertas-malaga/', canonical: 'https://www.aravenareformas.es/pintar-puertas-malaga/' },
  { path: '/pintar-muebles-cocina-malaga/', canonical: 'https://www.aravenareformas.es/pintar-muebles-cocina-malaga/' },
  { path: '/reparacion-paredes-malaga/', canonical: 'https://www.aravenareformas.es/reparacion-paredes-malaga/' },
  { path: '/falsos-techos-pladur-malaga/', canonical: 'https://www.aravenareformas.es/falsos-techos-pladur-malaga/' },
  { path: '/tabiques-pladur-malaga/', canonical: 'https://www.aravenareformas.es/tabiques-pladur-malaga/' },
  { path: '/cuanto-cuesta-pintar-piso-malaga/', canonical: 'https://www.aravenareformas.es/cuanto-cuesta-pintar-piso-malaga/' },
  { path: '/tipos-pintura-paredes-techos/', canonical: 'https://www.aravenareformas.es/tipos-pintura-paredes-techos/' },
  { path: '/preparar-paredes-antes-de-pintar/', canonical: 'https://www.aravenareformas.es/preparar-paredes-antes-de-pintar/' },
  { path: '/tipos-placas-pladur-malaga/', canonical: 'https://www.aravenareformas.es/tipos-placas-pladur-malaga/' },
  { path: '/guias-pintura-reformas-malaga/', canonical: 'https://www.aravenareformas.es/guias-pintura-reformas-malaga/' }
];
for (const route of routes) {
  const response = await fetch(new URL(route.path, base), { redirect: 'follow', signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, route.path + ' returned HTTP ' + response.status);
  assert.match(response.headers.get('content-type') || '', /text\/html/i, route.path + ' did not return HTML');
  const html = await response.text();
  assert.match(html, /<main\b/i, 'No main landmark: ' + route.path);
  assert.match(html, /<meta\s+name=["']description["']\s+content=["'][^"']{70,}["']/i, 'Missing/short meta description: ' + route.path);
  const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i) || [])[1] || '';
  assert.match(robots, /\bindex\b/i, 'Noindex or missing index directive: ' + route.path);
  assert.doesNotMatch(robots, /\bnoindex\b/i, 'Indexable route is marked noindex: ' + route.path);
  assert.equal([...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)].length, 1, 'Expected exactly one H1: ' + route.path);
  assert.ok(html.includes('<link rel="canonical" href="' + route.canonical + '"'), 'Canonical mismatch: ' + route.path);
  console.log('PASS ' + route.path + ' -> HTTP ' + response.status);
}
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]).sort();
assert.deepEqual(sitemapUrls, routes.map(route => route.canonical).sort(), 'Production sitemap must exactly cover all indexable routes');
for (const path of ['/proyectos/', '/privacidad.html']) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, path + ' returned HTTP ' + response.status);
  const html = await response.text();
  const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i) || [])[1] || '';
  assert.match(robots, /\bnoindex\b/i, 'Page should remain noindex: ' + path);
  assert.ok(!sitemapUrls.includes('https://www.aravenareformas.es' + path), 'Noindex page appears in sitemap: ' + path);
}
const home = await (await fetch(new URL('/', base), { signal: AbortSignal.timeout(20000) })).text();
assert.match(home, /<article class="service">[\s\S]*?href=["']\/pintura-airless-malaga\/["'][\s\S]*?<\/article>/i, 'Homepage does not link to Airless in service grid');
assert.doesNotMatch(home, /class=["']airless-featured["']/i, 'Airless should be an ordinary service card');
const paint = await (await fetch(new URL('/pintura-malaga/', base), { signal: AbortSignal.timeout(20000) })).text();
assert.match(paint, /href=["']\/pintura-airless-malaga\/["']/i, 'Painting page does not link to Airless');
const sitemapResponse = await fetch(new URL('/sitemap.xml', base), { signal: AbortSignal.timeout(20000) });
assert.equal(sitemapResponse.status, 200, 'sitemap.xml unavailable');
const sitemap = await sitemapResponse.text();
assert.ok(sitemap.includes('<loc>https://www.aravenareformas.es/pintura-airless-malaga/</loc><lastmod>'), 'Airless URL or lastmod missing from sitemap');
const robotsResponse = await fetch(new URL('/robots.txt', base), { signal: AbortSignal.timeout(20000) });
assert.equal(robotsResponse.status, 200, 'robots.txt unavailable');
const robotsText = await robotsResponse.text();
assert.ok(robotsText.includes('Sitemap: https://www.aravenareformas.es/sitemap.xml'), 'robots.txt does not advertise sitemap');
console.log('Production smoke checks passed.');
