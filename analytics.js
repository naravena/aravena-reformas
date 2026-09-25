/*
 * Aravena Reformas — GA4
 * Set the real Measurement ID before publishing.
 *
 * Events:
 * - whatsapp_click
 * - phone_click
 * - email_click
 * - qr_visit
 *
 * Consent is required before GA4 loads.
 */
(() => {
  const MEASUREMENT_ID = 'G-06YQGNJ08G';
  const CONSENT_KEY = 'aravena_analytics_consent';

  if (!/^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID) || MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  const getUtmParams = () => {
    const params = new URLSearchParams(location.search);
    const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
    const current = {};
    let hasUtm = false;
    keys.forEach((key) => {
      const value = params.get(key);
      if (value) { current[key] = value; hasUtm = true; }
    });

    if (hasUtm) {
      try { sessionStorage.setItem('aravena_utm', JSON.stringify(current)); } catch (_) {}
    }

    try {
      const stored = JSON.parse(sessionStorage.getItem('aravena_utm') || '{}');
      return {
        utm_source: current.utm_source || stored.utm_source || undefined,
        utm_medium: current.utm_medium || stored.utm_medium || undefined,
        utm_campaign: current.utm_campaign || stored.utm_campaign || undefined,
        utm_content: current.utm_content || stored.utm_content || undefined,
        utm_term: current.utm_term || stored.utm_term || undefined
      };
    } catch (_) {
      return current;
    }
  };

  const send = (name, params = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        page_path: location.pathname,
        page_title: document.title,
        ...getUtmParams(),
        ...params
      });
    }
  };

  const trackQrVisit = () => {
    const params = new URLSearchParams(location.search);
    if (
      params.get('utm_source') === 'tarjeta' &&
      params.get('utm_medium') === 'qr' &&
      params.get('utm_campaign') === 'tarjeta_visita'
    ) {
      send('qr_visit', {
        qr_code: params.get('utm_content') || 'tarjeta'
      });
    }
  };

  const loadAnalytics = () => {
    if (window.__aravenaAnalyticsLoaded) return;
    window.__aravenaAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href
    });

    trackQrVisit();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(script);

    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-analytics-event]');
      if (!target) return;

      const eventName = target.dataset.analyticsEvent;
      send(eventName, {
        link_url: target.href || undefined,
        link_text: target.textContent.trim() || undefined
      });
    });
  };

  const currentConsent = localStorage.getItem(CONSENT_KEY);
  if (currentConsent === 'accepted') {
    loadAnalytics();
    return;
  }
  if (currentConsent === 'rejected') return;

  const banner = document.createElement('aside');
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Preferencias de analítica');
  banner.style.cssText = [
    'position:fixed','left:14px','right:14px','bottom:14px','z-index:9999',
    'background:#111313','color:#fff','padding:16px','border:1px solid #3a3d3b',
    'border-radius:10px','font:14px system-ui,-apple-system,Segoe UI,Arial,sans-serif',
    'box-shadow:0 10px 30px rgba(0,0,0,.25)'
  ].join(';');

  banner.innerHTML =
    '<strong>Analítica de la web</strong>' +
    '<p style="margin:7px 0 12px;color:#d0cec7">Podemos usar analítica para conocer visitas y acciones como clics en WhatsApp, teléfono y correo. Es opcional.</p>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    '<button id="aravenaAccept" type="button" style="padding:9px 14px;border:0;border-radius:7px;background:#c9972f;color:#fff;font-weight:700">Aceptar</button>' +
    '<button id="aravenaReject" type="button" style="padding:9px 14px;border:1px solid #666;border-radius:7px;background:transparent;color:#fff">Rechazar</button>' +
    '</div>';

  document.body.appendChild(banner);

  document.getElementById('aravenaAccept').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.remove();
    loadAnalytics();
  });

  document.getElementById('aravenaReject').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    banner.remove();
  });
})();
