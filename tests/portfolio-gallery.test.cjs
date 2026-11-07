const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'proyectos/index.html'), 'utf8');
test('10 real WebP images resolve locally and have descriptive ALT and dimensions', () => {
  const imgs = [...html.matchAll(/<img\s+[^>]*src="(\/assets\/proyectos\/[^\"]+\.webp)"[^>]*>/g)];
  assert.equal(imgs.length, 10);
  for (const [tag, href] of imgs) {
    assert.ok(fs.existsSync(path.join(root, href.slice(1))), 'Missing '+href);
    assert.match(tag, /alt="[^\"]{16,}"/);
    assert.match(tag, /width="1086" height="1448"/);
    assert.match(tag, /loading="lazy"/);
  }
});
test('gallery is indexable and in the sitemap', () => {
  assert.match(html, /name="robots" content="index,follow/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.aravenareformas\.es\/proyectos\/"/);
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /<loc>https:\/\/www\.aravenareformas\.es\/proyectos\/<\/loc>/);
});
test('gallery has relevant service links, four titled sections and JSON-LD', () => {
  const sections=[...html.matchAll(/<section class="work-project"/g)];
  assert.equal(sections.length, 4);
  assert.match(html, /href="\/pintura-malaga\/"/);
  assert.match(html, /href="\/alisado-paredes-malaga\/"/);
  assert.match(html, /href="\/reparacion-paredes-malaga\/"/);
  const ld=(html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/) || [])[1];
  assert.equal(JSON.parse(ld)['@type'],'CollectionPage');
});
