/*
 * Aravena Reformas - GA4 with explicit analytics consent.
 * Set MEASUREMENT_ID to the real GA4 Measurement ID before publishing.
 */
(() => {
  const MEASUREMENT_ID = 'G-XXXXXXXXXX';
  if (!/^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID) || MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  const loadAnalytics = () => {
    if (window.__aravenaAnalyticsLoaded) return;
    window.__aravenaAnalyticsLoaded = true;
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
  };

  const consent = localStorage.getItem('aravena_analytics_consent');
  if (consent === 'accepted') loadAnalytics();
  if (consent) return;

  const banner = document.createElement('div');
  banner.setAttribute('role','dialog');
  banner.setAttribute('aria-label','Preferencias de analítica');
  banner.style.cssText='position:fixed;left:14px;right:14px;bottom:14px;z-index:9999;background:#111313;color:#fff;padding:16px;border:1px solid #3a3d3b;border-radius:10px;font:14px system-ui,-apple-system,Segoe UI,Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25)';
  banner.innerHTML='<strong>Analítica de la web</strong><p style="margin:7px 0 12px;color:#d0cec7">Podemos usar analítica para conocer visitas y acciones como clics en WhatsApp. Es opcional.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button id="aravenaAccept" style="padding:9px 14px;border:0;border-radius:7px;background:#c9972f;color:#fff;font-weight:700">Aceptar</button><button id="aravenaReject" style="padding:9px 14px;border:1px solid #666;border-radius:7px;background:transparent;color:#fff">Rechazar</button></div>';
  document.body.appendChild(banner);
  document.getElementById('aravenaAccept').onclick=()=>{localStorage.setItem('aravena_analytics_consent','accepted');banner.remove();loadAnalytics();};
  document.getElementById('aravenaReject').onclick=()=>{localStorage.setItem('aravena_analytics_consent','rejected');banner.remove();};
})();
