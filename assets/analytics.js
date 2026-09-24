/* Aravena Reformas — medición básica
 * 1) Sustituye GA_MEASUREMENT_ID por tu ID real de GA4 (G-XXXXXXXXXX).
 * 2) La analítica solo se carga después de aceptar cookies de analítica.
 */
const GA_MEASUREMENT_ID = "G-06YQGNJ08G";
const CONSENT_KEY = "aravena_analytics_consent";

function loadGA4() {
  if (!/^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) || GA_MEASUREMENT_ID === "G-06YQGNJ08G") return;
  if (window.__aravenaGA4Loaded) return;
  window.__aravenaGA4Loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(script);

  if (new URLSearchParams(location.search).get("utm_source") === "qr") {
    window.gtag("event", "qr_visit", {
      campaign_source: "qr",
      campaign_medium: new URLSearchParams(location.search).get("utm_medium") || "print",
      campaign_name: new URLSearchParams(location.search).get("utm_campaign") || "tarjeta_visita"
    });
  }
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

function setupAnalytics() {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent === "granted") loadGA4();

  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    link.addEventListener("click", () => {
      trackEvent("whatsapp_click", {
        cta_location: link.closest("header,main,footer")?.className || "page"
      });
    });
  });

  if (consent === null) {
    const banner = document.createElement("div");
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Preferencias de cookies");
    banner.innerHTML = `
      <div style="position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:720px;margin:auto;background:#111313;color:#fff;padding:18px 20px;border:1px solid #3b3f3d;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.25);font:14px/1.5 system-ui,-apple-system,Segoe UI,Arial,sans-serif">
        <strong style="display:block;margin-bottom:6px">Privacidad y analítica</strong>
        <span style="color:#ccc">Podemos usar Google Analytics para conocer visitas y acciones como clics en WhatsApp. La analítica solo se activa si la aceptas.</span>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
          <button id="aravenaAccept" style="border:0;border-radius:7px;padding:9px 14px;background:#c9972f;color:#fff;font-weight:700;cursor:pointer">Aceptar analítica</button>
          <button id="aravenaReject" style="border:1px solid #666;border-radius:7px;padding:9px 14px;background:transparent;color:#fff;font-weight:700;cursor:pointer">Rechazar</button>
          <a href="/privacidad.html" style="padding:9px 4px;color:#fff">Privacidad</a>
        </div>
      </div>`;
    document.body.appendChild(banner);
    document.getElementById("aravenaAccept").onclick = () => {
      localStorage.setItem(CONSENT_KEY, "granted");
      banner.remove();
      loadGA4();
    };
    document.getElementById("aravenaReject").onclick = () => {
      localStorage.setItem(CONSENT_KEY, "denied");
      banner.remove();
    };
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupAnalytics);
} else {
  setupAnalytics();
}
