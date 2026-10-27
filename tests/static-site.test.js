const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.aravenareformas.es';
const ROUTES = [
  { url: '/', file: 'index.html' },
  { url: '/reformas-malaga/', file: 'reformas-malaga/index.html' },
  { url: '/pintura-malaga/', file: 'pintura-malaga/index.html' },
  { url: '/pintura-airless-malaga/', file: 'pintura-airless-malaga/index.html' },
  { url: '/alisado-paredes-malaga/', file: 'alisado-paredes-malaga/index.html' },
  { url: '/pladur-malaga/', file: 'pladur-malaga/index.html' },
  { url: '/contacto/', file: 'contacto/index.html' },
  { url: '/pintar-techos-malaga/', file: 'pintar-techos-malaga/index.html' },
  { url: '/pintar-puertas-malaga/', file: 'pintar-puertas-malaga/index.html' },
  { url: '/pintar-muebles-cocina-malaga/', file: 'pintar-muebles-cocina-malaga/index.html' },
  { url: '/reparacion-paredes-malaga/', file: 'reparacion-paredes-malaga/index.html' },
  { url: '/falsos-techos-pladur-malaga/', file: 'falsos-techos-pladur-malaga/index.html' },
  { url: '/tabiques-pladur-malaga/', file: 'tabiques-pladur-malaga/index.html' },
  { url: '/cuanto-cuesta-pintar-piso-malaga/', file: 'cuanto-cuesta-pintar-piso-malaga/index.html' },
  { url: '/tipos-pintura-paredes-techos/', file: 'tipos-pintura-paredes-techos/index.html' },
  { url: '/preparar-paredes-antes-de-pintar/', file: 'preparar-paredes-antes-de-pintar/index.html' },
  { url: '/tipos-placas-pladur-malaga/', file: 'tipos-placas-pladur-malaga/index.html' },
  { url: '/guias-pintura-reformas-malaga/', file: 'guias-pintura-reformas-malaga/index.html' }
];
const EXCLUDED_PAGES = [
  { url: '/proyectos/', file: 'proyectos/index.html' },
  { url: '/privacidad.html', file: 'privacidad.html' }
];
function walkHtml(dir = ROOT) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', '.github'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkHtml(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}
function expectedFile(raw) {
  let pathname = raw.split(/[?#]/, 1)[0];
  try { pathname = decodeURIComponent(pathname); } catch (_) {}
  if (!pathname || pathname === '/') pathname = '/index.html';
  let relative = pathname.replace(/^\/+/, '');
  if (relative.endsWith('/')) relative += 'index.html';
  return path.resolve(ROOT, relative);
}
test('indexable pages have unique titles and descriptions, correct canonicals and one H1', () => {
  const titles = new Map();
  const descriptions = new Map();

  for (const route of ROUTES) {
    const file = path.join(ROOT, route.file);
    assert.ok(fs.existsSync(file), 'Missing page file: ' + route.file);
    const html = fs.readFileSync(file, 'utf8');
    const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1]?.trim() || '';
    assert.ok(title, 'Missing title: ' + route.url);
    assert.ok(!titles.has(title), 'Duplicate title "' + title + '" in ' + route.url + ' and ' + titles.get(title));
    titles.set(title, route.url);

    const descriptionMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const description = descriptionMatch ? descriptionMatch[1].trim() : '';
    assert.ok(description.length >= 70, 'Missing or too-short meta description: ' + route.url);
    assert.ok(!descriptions.has(description), 'Duplicate meta description in ' + route.url + ' and ' + descriptions.get(description));
    descriptions.set(description, route.url);

    assert.ok(html.includes('<link rel="canonical" href="' + SITE + route.url + '"'), 'Canonical mismatch: ' + route.url);
    const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    const robots = robotsMatch ? robotsMatch[1] : '';
    assert.ok(robots && !/\bnoindex\b/i.test(robots), 'Indexable page is marked noindex or has no robots directive: ' + route.url);

    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    assert.equal(h1s.length, 1, 'Expected one H1: ' + route.url);
    assert.ok(h1s[0][1].replace(/<[^>]+>/g, '').trim(), 'Empty H1: ' + route.url);
  }
});
test('local links, scripts, stylesheets and images resolve to files in the repository', () => {
  const failures = [];
  for (const file of walkHtml()) {
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
      const raw = match[1];
      if (!raw.startsWith('/') || raw.startsWith('//')) continue;
      const target = expectedFile(raw);
      if (!fs.existsSync(target)) failures.push(path.relative(ROOT, file) + ' -> ' + raw);
    }
  }
  assert.deepEqual(failures, [], failures.join('\n'));
});
test('sitemap exactly matches the indexable pages and has valid lastmod dates', () => {
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /^<\?xml\s+version=["']1\.0["']/i);
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
  const expected = ROUTES.map(route => SITE + route.url).sort();

  assert.ok(urls.length > 0, 'Empty sitemap');
  assert.equal(new Set(urls).size, urls.length, 'Duplicate URLs in sitemap');
  assert.deepEqual(urls.slice().sort(), expected, 'Sitemap must contain every indexable page and no noindex/unknown URLs');

  for (const url of urls) {
    const entry = sitemap.split('<loc>' + url + '</loc>')[1] || '';
    const lastmod = entry.trimStart().split('</lastmod>')[0];
    assert.ok(lastmod.startsWith('<lastmod>'), 'Missing lastmod for ' + url);
    const date = lastmod.slice('<lastmod>'.length);
    assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(date), 'Invalid lastmod for ' + url);
    const parsed = new URL(url);
    assert.equal(parsed.origin, SITE, 'Unexpected sitemap origin');
    assert.ok(fs.existsSync(expectedFile(parsed.pathname)), 'Sitemap URL has no local file: ' + url);
  }
});

test('noindex pages stay outside the sitemap', () => {
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  for (const route of EXCLUDED_PAGES) {
    const file = path.join(ROOT, route.file);
    assert.ok(fs.existsSync(file), 'Missing excluded page: ' + route.file);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes('<link rel="canonical" href="' + SITE + route.url + '"'), 'Canonical mismatch: ' + route.url);
    const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    assert.match(robotsMatch ? robotsMatch[1] : '', /\bnoindex\b/i, 'Page should remain noindex: ' + route.url);
    assert.ok(!sitemap.includes('<loc>' + SITE + route.url + '</loc>'), 'noindex page must not be listed in sitemap: ' + route.url);
  }
});

test('JSON-LD blocks parse as JSON', () => {
  const failures = [];
  for (const file of walkHtml()) {
    const html = fs.readFileSync(file, 'utf8');
    for (const m of html.matchAll(/<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi)) {
      try { JSON.parse(m[1]); } catch (error) { failures.push(path.relative(ROOT, file) + ': ' + error.message); }
    }
  }
  assert.deepEqual(failures, [], failures.join('\n'));
});
test('Airless is an equal-level service card on the homepage', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  assert.match(html, /<article class="service">[\s\S]*?<a href="\/pintura-airless-malaga\/">Pintura Airless en Málaga<\/a>[\s\S]*?<\/article>/);
  assert.doesNotMatch(html, /class="airless-featured"/);
  assert.equal((html.match(/<article class="service">/g) || []).length, 6);
});
