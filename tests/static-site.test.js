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
  { url: '/contacto/', file: 'contacto/index.html' }
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
test('service pages have title, meta description, canonical and one H1', () => {
  for (const route of ROUTES) {
    const file = path.join(ROOT, route.file);
    assert.ok(fs.existsSync(file), 'Missing page file: ' + route.file);
    const html = fs.readFileSync(file, 'utf8');
    assert.match(html, /<title>[^<]+<\/title>/i, 'Missing title: ' + route.url);
    assert.match(html, /<meta\s+name=["']description["']/i, 'Missing meta description: ' + route.url);
    assert.ok(html.includes('<link rel="canonical" href="' + SITE + route.url + '"'), 'Canonical mismatch: ' + route.url);
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
test('sitemap contains unique canonical URLs and every indexable service page', () => {
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /^<\?xml\s+version=["']1\.0["']/i);
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
  assert.ok(urls.length > 0, 'Empty sitemap');
  assert.equal(new Set(urls).size, urls.length, 'Duplicate URLs in sitemap');
  for (const route of ROUTES) assert.ok(urls.includes(SITE + route.url), 'Sitemap missing ' + route.url);
  for (const url of urls) {
    const entry = sitemap.split('<loc>' + url + '</loc>')[1] || '';
    assert.match(entry, /^\\s*<lastmod>\\d{4}-\\d{2}-\\d{2}<\\/lastmod>/, 'Missing lastmod for ' + url);
    const parsed = new URL(url);') + '</loc>\\s*<lastmod>\\d{4}-\\d{2}-\\d{2}</lastmod>'), 'Missing lastmod for ' + url);
    const parsed = new URL(url);
    assert.equal(parsed.origin, SITE, 'Unexpected sitemap origin');
    assert.ok(fs.existsSync(expectedFile(parsed.pathname)), 'Sitemap URL has no local file: ' + url);
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
