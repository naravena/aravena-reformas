(() => {
  'use strict';
  // The website uses one canonical Spanish URL per page. English text is selected
  // client-side without creating duplicate URLs, hreflang or unsupported dates.
  const content = {
  "es": {
    "pageTitle": "Trabajos reales de pintura y reformas en Málaga",
    "eyebrow": "Galería de trabajos · Málaga",
    "intro": "Una selección de fotografías de trabajos realizados por Aravena Reformas: protección de espacios, preparación de superficies, pintura y reparación. Cada imagen describe lo que muestra, sin presentar como comparativas trabajos cuya cronología no está verificada.",
    "galleryNote": "Trabajos documentados con fotografías reales. Las imágenes editadas se han optimizado para su visualización; no se utilizan como prueba técnica de un acabado o de la causa de daños.",
    "breadcrumb": "Proyectos",
    "ctaTitle": "¿Necesitas un presupuesto para un trabajo similar?",
    "ctaText": "Cuéntanos qué quieres pintar, reparar o alisar y, si puedes, comparte fotos del estado actual.",
    "ctaButton": "Consultar por WhatsApp",
    "title": "Trabajos reales de pintura y reformas en Málaga | Aravena Reformas",
    "desc": "Fotografías de trabajos reales de pintura, alisado y reparación de paredes y techos en Málaga. Conoce la preparación, el proceso y los acabados.",
    "pintura-interioresTag": "Pintura de interiores",
    "pintura-interioresTitle": "Pintura de paredes y techos interiores",
    "pintura-interioresDesc": "Las fotografías muestran la aplicación de pintura con rodillo en una estancia y una vista de paredes y techo pintados. La preparación del soporte y los tiempos de secado condicionan el acabado.",
    "pintura-interioresLink": "Ver servicio de pintura de interiores",
    "pintura-interiores-cap-1": "Aplicación con rodillo en una estancia interior.",
    "pintura-interiores-alt-1": "Aplicación de pintura con rodillo en un techo interior",
    "pintura-interiores-cap-2": "Vista de paredes y techo pintados.",
    "pintura-interiores-alt-2": "Habitación con techo y paredes blancas pintadas, y ventana interior",
    "reparacion-techosTag": "Reparación de techos",
    "reparacion-techosTitle": "Reparación y preparación de techos deteriorados",
    "reparacion-techosDesc": "Se documentan zonas con pintura desprendida y una intervención de masillado en un techo de cocina. Antes de reparar o pintar debe comprobarse el origen de cualquier humedad activa.",
    "reparacion-techosLink": "Ver reparación y preparación de superficies",
    "reparacion-techos-cap-1": "Estado visible del techo con desprendimientos. No implica un diagnóstico del origen.",
    "reparacion-techos-alt-1": "Techo de cocina con pintura desconchada y zonas deterioradas",
    "reparacion-techos-cap-2": "Aplicación de material de reparación con llana.",
    "reparacion-techos-alt-2": "Trabajador aplicando masilla con llana en el techo de una cocina",
    "preparacion-superficiesTag": "Preparación de superficies",
    "preparacion-superficiesTitle": "Preparación de materiales y alisado de paredes",
    "preparacion-superficiesDesc": "La mezcla del material y su aplicación sobre la pared son fases importantes para regularizar las superficies. Las imágenes son muestras de trabajo, no una secuencia cronológica de un mismo encargo.",
    "preparacion-superficiesLink": "Ver alisado de paredes",
    "preparacion-superficies-cap-1": "Preparación de la mezcla de trabajo.",
    "preparacion-superficies-alt-1": "Preparación de pasta de reparación con mezclador eléctrico dentro de un cubo",
    "preparacion-superficies-cap-2": "Detalle de aplicación y revisión de superficie.",
    "preparacion-superficies-alt-2": "Detalle de manos alisando la superficie de una pared con masilla",
    "pintura-escalerasTag": "Pintura de escaleras",
    "pintura-escalerasTitle": "Pintura y preparación en un hueco de escalera",
    "pintura-escalerasDesc": "Imágenes de la protección de una escalera, aplicación de masilla en el lateral, pintura con rodillo y vistas de paredes y molduras blancas. Las fechas de los archivos no permiten confirmar un antes y después del mismo trabajo.",
    "pintura-escalerasLink": "Ver trabajos de pintura en Málaga",
    "pintura-escaleras-cap-1": "Protección del pasamanos y aplicación de masilla.",
    "pintura-escaleras-alt-1": "Protección de una escalera y aplicación de masilla en el lateral",
    "pintura-escaleras-cap-2": "Aplicación de pintura en una pared alta.",
    "pintura-escaleras-alt-2": "Trabajador pintando pared alta de una escalera con rodillo extensible",
    "pintura-escaleras-cap-3": "Vista general de la escalera y sus paramentos.",
    "pintura-escaleras-alt-3": "Escalera de madera con barandilla blanca y paredes pintadas",
    "pintura-escaleras-cap-4": "Detalle de molduras y superficies pintadas.",
    "pintura-escaleras-alt-4": "Detalle de escalera de madera con molduras blancas y barandilla"
  },
  "en": {
    "pageTitle": "Real painting and renovation work in Málaga",
    "eyebrow": "Work gallery · Málaga",
    "intro": "A selection of photographs from work carried out by Aravena Reformas: protecting spaces, preparing surfaces, painting and repairs. Each image describes what it shows; unrelated stages are not presented as a verified before-and-after comparison.",
    "galleryNote": "Work documented with real photographs. Edited images have been optimised for display and are not used as technical proof of a finish or the cause of damage.",
    "breadcrumb": "Projects",
    "ctaTitle": "Need a quote for similar work?",
    "ctaText": "Tell us what you want painted, repaired or smoothed and, if possible, share photos of the current condition.",
    "ctaButton": "Ask on WhatsApp",
    "title": "Real painting and renovation work in Málaga | Aravena Reformas",
    "desc": "See real painting, wall smoothing and ceiling repair work in Málaga. Photos of preparation, work in progress and painted surfaces.",
    "pintura-interioresTag": "Interior painting",
    "pintura-interioresTitle": "Painting interior walls and ceilings",
    "pintura-interioresDesc": "The photos show roller application in an interior room and a view of painted walls and ceiling. Surface preparation and drying times influence the finish.",
    "pintura-interioresLink": "Explore our interior painting service",
    "pintura-interiores-cap-1": "Roller application in an interior room.",
    "pintura-interiores-alt-1": "Roller painting an interior ceiling",
    "pintura-interiores-cap-2": "View of painted walls and ceiling.",
    "pintura-interiores-alt-2": "Room with painted white walls and ceiling and an interior window",
    "reparacion-techosTag": "Ceiling repairs",
    "reparacion-techosTitle": "Repairing and preparing damaged ceilings",
    "reparacion-techosDesc": "These photographs document peeling ceiling paint and plaster repair work on a kitchen ceiling. Any active source of moisture must be investigated before repairing or repainting.",
    "reparacion-techosLink": "Explore surface repair and preparation",
    "reparacion-techos-cap-1": "Visible flaking and damage; this photo does not establish the cause.",
    "reparacion-techos-alt-1": "Kitchen ceiling with flaking paint and deteriorated areas",
    "reparacion-techos-cap-2": "Applying repair compound with a trowel.",
    "reparacion-techos-alt-2": "Worker applying plaster with a trowel to a kitchen ceiling",
    "preparacion-superficiesTag": "Surface preparation",
    "preparacion-superficiesTitle": "Preparing materials and smoothing walls",
    "preparacion-superficiesDesc": "Mixing the material and applying it to a wall are important preparation stages. These images document work techniques rather than a chronological sequence from one commission.",
    "preparacion-superficiesLink": "Explore wall smoothing",
    "preparacion-superficies-cap-1": "Preparing repair material.",
    "preparacion-superficies-alt-1": "Mixing repair compound in a bucket using a power mixer",
    "preparacion-superficies-cap-2": "Detail of surface application and checking.",
    "preparacion-superficies-alt-2": "Close-up of hands smoothing a wall with filler",
    "pintura-escalerasTag": "Stairwell painting",
    "pintura-escalerasTitle": "Painting and surface preparation in a stairwell",
    "pintura-escalerasDesc": "Images show stair protection, filling along the stair edge, roller painting and views of white walls and mouldings. File dates do not establish a verified before-and-after sequence.",
    "pintura-escalerasLink": "Explore painting services in Málaga",
    "pintura-escaleras-cap-1": "Protecting the handrail and applying filler.",
    "pintura-escaleras-alt-1": "Protected staircase with filler being applied to the side",
    "pintura-escaleras-cap-2": "Painting a high wall in a stairwell.",
    "pintura-escaleras-alt-2": "Worker painting a high stairwell wall with an extension roller",
    "pintura-escaleras-cap-3": "General view of the staircase and surrounding walls.",
    "pintura-escaleras-alt-3": "Wooden staircase with white balustrade and painted walls",
    "pintura-escaleras-cap-4": "Detail of mouldings and painted surfaces.",
    "pintura-escaleras-alt-4": "Detail of wooden stairs with white mouldings and balustrade"
  }
};

  function applyGalleryLanguage() {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    const t = content[lang];
    for (const element of document.querySelectorAll('[data-gallery-key]')) {
      const value = t[element.dataset.galleryKey];
      if (value && element.textContent !== value) element.textContent = value;
    }
    for (const image of document.querySelectorAll('img[data-gallery-alt]')) {
      const value = t[image.dataset.galleryAlt];
      if (value && image.alt !== value) image.alt = value;
    }
    document.title = t.title;
    const setMeta = (selector, value) => {
      const element = document.querySelector(selector);
      if (element && element.content !== value) element.content = value;
    };
    setMeta('meta[name="description"]', t.desc);
    setMeta('meta[property="og:title"]', t.title);
    setMeta('meta[property="og:description"]', t.desc);
    setMeta('meta[name="twitter:title"]', t.title);
    setMeta('meta[name="twitter:description"]', t.desc);
    setMeta('meta[property="og:locale"]', lang === 'en' ? 'en_GB' : 'es_ES');
  }

  function init() {
    applyGalleryLanguage();
    new MutationObserver(applyGalleryLanguage).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
    // Handle an explicit click on the already selected language as well.
    document.addEventListener('click', (event) => {
      if (event.target.closest('.language-switcher button')) {
        queueMicrotask(applyGalleryLanguage);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
