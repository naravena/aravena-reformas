const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const ROUTES = [
  '/', '/reformas-malaga/', '/pintura-malaga/', '/pintura-airless-malaga/',
  '/alisado-paredes-malaga/', '/pladur-malaga/', '/contacto/',
  '/pintar-techos-malaga/', '/pintar-puertas-malaga/',
  '/pintar-muebles-cocina-malaga/', '/reparacion-paredes-malaga/',
  '/falsos-techos-pladur-malaga/', '/tabiques-pladur-malaga/',
  '/cuanto-cuesta-pintar-piso-malaga/', '/tipos-pintura-paredes-techos/',
  '/preparar-paredes-antes-de-pintar/', '/tipos-placas-pladur-malaga/',
  '/guias-pintura-reformas-malaga/', '/proyectos/', '/privacidad.html'
];

test('all main pages render without JavaScript runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ROUTES) {
    const response = await page.goto(route);
    expect(response, 'No response for ' + route).not.toBeNull();
    expect(response.status(), 'Unexpected HTTP status for ' + route).toBe(200);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page).toHaveTitle(/.+/);
  }
  expect(errors).toEqual([]);
});

test('Airless remains one ordinary card among the homepage services', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#servicios .service')).toHaveCount(6);
  const link = page.locator('#servicios .service a[href="/pintura-airless-malaga/"]');
  await expect(link).toHaveText('Pintura Airless en Málaga');
  await expect(page.locator('.airless-featured')).toHaveCount(0);
  await expect(page.locator('.hero a[href="/pintura-airless-malaga/"]')).toHaveCount(0);
  await expect(page.locator('#mainNav a[href="/pintura-airless-malaga/"]')).toHaveCount(0);
});

test('language switching translates each service by its URL, not by card position', async ({ page }) => {
  const services = [
    { path: '/pintura-malaga/', es: 'Pintura en Málaga', en: 'Painting in Málaga', esText: 'Paredes, techos, puertas, mobiliario y otras superficies con preparación previa.', enText: 'Walls, ceilings, doors, furniture and other surfaces with proper preparation.' },
    { path: '/alisado-paredes-malaga/', es: 'Alisado y eliminación de gotelé', en: 'Wall smoothing and gotelé removal', esText: 'Preparación y alisado de paredes y techos para conseguir superficies uniformes.', enText: 'Wall and ceiling preparation and smoothing to achieve uniform surfaces.' },
    { path: '/pladur-malaga/', es: 'Pladur en Málaga', en: 'Plasterboard in Málaga', esText: 'Soluciones de pladur para divisiones, trasdosados, techos y mejoras interiores.', enText: 'Plasterboard solutions for partitions, linings, ceilings and interior improvements.' },
    { path: '/pintura-airless-malaga/', es: 'Pintura Airless en Málaga', en: 'Airless painting in Málaga', esText: 'Aplicación de pintura por pulverización a alta presión en paredes y techos amplios, cuando el espacio lo permite.', enText: 'High-pressure spray application for broad wall and ceiling surfaces when suitable for the space.' },
    { path: '/reparacion-paredes-malaga/', es: 'Reparación y preparación', en: 'Repair and preparation', esText: 'Masillado, reparación de superficies y trabajos previos antes del acabado.', enText: 'Filling, surface repairs and preliminary work before finishing.' },
    { path: '/reformas-malaga/', es: 'Reformas de interiores', en: 'Interior renovations', esText: 'Mejoras y renovación de espacios para adaptar la vivienda a tus necesidades.', enText: 'Improvements and space renovation to adapt the home to your needs.' }
  ];

  await page.goto('/');
  await page.locator('[data-language="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#mainNav [data-nav="services"]')).toHaveText('Services');
  await expect(page.locator('#mainNav [data-nav="projects"]')).toHaveText('Projects');

  for (const service of services) {
    const card = page.locator('#servicios .service').filter({ has: page.locator('a[href="' + service.path + '"]') });
    await expect(card.locator('h3 a')).toHaveText(service.en);
    await expect(card.locator('p')).toHaveText(service.enText);
    await expect(card.locator('h3 a')).toHaveAttribute('href', service.path);
  }

  await page.locator('[data-language="es"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  for (const service of services) {
    const card = page.locator('#servicios .service').filter({ has: page.locator('a[href="' + service.path + '"]') });
    await expect(card.locator('h3 a')).toHaveText(service.es);
    await expect(card.locator('p')).toHaveText(service.esText);
    await expect(card.locator('h3 a')).toHaveAttribute('href', service.path);
  }
});

test('Airless page translates its title, section headings and primary service content', async ({ page }) => {
  await page.goto('/pintura-airless-malaga/');
  await expect(page.locator('main h1')).toHaveText('Pintura Airless en Málaga para paredes y techos');
  await expect(page.locator('main h2')).toHaveText([
    'Cuándo puede resultar útil',
    'La preparación sigue siendo imprescindible',
    '¿Airless o rodillo?',
    'Pintura de techos y superficies amplias',
    'Qué influye en el presupuesto',
    'Preguntas frecuentes'
  ]);

  await page.locator('[data-language="en"]').click();
  await expect(page.locator('main h1')).toHaveText('Airless painting in Málaga for walls and ceilings');
  await expect(page.locator('header nav a[href="/pintura-airless-malaga/"]')).toHaveText('Airless painting');
  await expect(page.locator('main h2')).toHaveText([
    'When Airless can be useful',
    'Surface preparation is still essential',
    'Airless or roller?',
    'Painting ceilings and large surfaces',
    'What affects the quote',
    'Frequently asked questions'
  ]);
  await expect(page.locator('main .card h3').first()).toHaveText('Broad surfaces');
  await expect(page.locator('main .cta strong')).toHaveText('Need an Airless painting quote?');
  await expect(page).toHaveTitle(/Airless painting in Málaga/i);
});

test('theme changes and persists after reload', async ({ page }) => {
  await page.goto('/');
  const root = page.locator('html');
  const before = await root.getAttribute('data-theme');
  await page.locator('.theme-toggle').click();
  const after = await root.getAttribute('data-theme');
  expect(after).not.toBe(before);
  await page.reload();
  await expect(root).toHaveAttribute('data-theme', after);
});

test('contact links retain WhatsApp, phone and email destinations', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('a[data-analytics-event="whatsapp_click"][href^="https://wa.me/"]').first()).toHaveCount(1);
  await expect(page.locator('a[href^="tel:+34613112148"]').first()).toHaveCount(1);
  await expect(page.locator('a[href^="mailto:info@aravenareformas.es"]').first()).toHaveCount(1);
});

test('mobile navigation opens and closes after selecting an anchor', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile Chromium only');
  await page.goto('/');
  const menu = page.locator('#menuBtn');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mainNav')).toBeVisible();
  await page.locator('#mainNav [data-nav="services"]').click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page).toHaveURL(/#servicios$/);
});

test('pages have no failed first-party resource requests', async ({ page }) => {
  const baseURL = new URL(process.env.BASE_URL || 'http://127.0.0.1:4173');
  const failures = [];
  page.on('response', response => {
    const url = new URL(response.url());
    if (url.origin === baseURL.origin && response.status() >= 400) {
      failures.push({ url: url.pathname, status: response.status() });
    }
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(failures, 'First-party resource requests returned an error').toEqual([]);
});

test('homepage and Airless page pass axe-core checks for serious and critical issues', async ({ page }) => {
  for (const route of ['/', '/pintura-airless-malaga/']) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    const failures = results.violations.filter(v => ['serious', 'critical'].includes(v.impact))
      .map(v => ({ id: v.id, impact: v.impact, description: v.description, targets: v.nodes.map(n => n.target) }));
    expect(failures, 'Accessibility violations on ' + route + ': ' + JSON.stringify(failures)).toEqual([]);
  }
});
