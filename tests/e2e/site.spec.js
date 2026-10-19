const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const ROUTES = ['/', '/reformas-malaga/', '/pintura-malaga/', '/pintura-airless-malaga/', '/alisado-paredes-malaga/', '/pladur-malaga/', '/contacto/', '/proyectos/', '/privacidad.html'];

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

test('language switching preserves links and updates labels without relying on nav order', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-language="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#mainNav [data-nav="services"]')).toHaveText('Services');
  await expect(page.locator('#mainNav [data-nav="projects"]')).toHaveText('Projects');
  await expect(page.locator('#servicios .service a[href="/pintura-airless-malaga/"]')).toHaveText('Airless painting in Málaga');
  await page.locator('[data-language="es"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('#servicios .service a[href="/pintura-airless-malaga/"]')).toHaveText('Pintura Airless en Málaga');
});

test('Airless page has its own English title and keeps its content headings', async ({ page }) => {
  await page.goto('/pintura-airless-malaga/');
  await expect(page.locator('main h1')).toHaveText('Pintura Airless en Málaga para paredes y techos');
  await expect(page.locator('main h2').first()).toHaveText('¿Qué es el sistema de pintura Airless?');
  await page.locator('[data-language="en"]').click();
  await expect(page.locator('main h1')).toHaveText('Airless painting in Málaga for walls and ceilings');
  await expect(page.locator('header nav a[href="/pintura-airless-malaga/"]')).toHaveText('Airless painting');
  await expect(page.locator('main h2').first()).not.toHaveText('Need an Airless painting quote?');
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

test('homepage and Airless page pass axe-core checks for serious and critical issues', async ({ page }) => {
  for (const route of ['/', '/pintura-airless-malaga/']) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    const failures = results.violations.filter(v => ['serious', 'critical'].includes(v.impact))
      .map(v => ({ id: v.id, impact: v.impact, description: v.description, targets: v.nodes.map(n => n.target) }));
    expect(failures, 'Accessibility violations on ' + route + ': ' + JSON.stringify(failures)).toEqual([]);
  }
});
