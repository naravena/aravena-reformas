/*
 * Aravena Reformas - simple GA4 event tracking.
 * Configure MEASUREMENT_ID before publishing.
 */
(() => {
  const MEASUREMENT_ID = 'G-XXXXXXXXXX';
  if (!/^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID) || MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    page_title: document.title,
    page_location: window.location.href
  });

  const load = document.createElement('script');
  load.async = true;
  load.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(load);

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-analytics-event]');
    if (!target || typeof window.gtag !== 'function') return;
    window.gtag('event', target.dataset.analyticsEvent, {
      page_path: location.pathname,
      link_url: target.href || undefined
    });
  });
})();
