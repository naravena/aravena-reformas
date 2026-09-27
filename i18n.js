(() => {
  /*
   * Aravena Reformas — ES / EN
   * Edita SOLO este archivo para cambiar los textos de la web.
   * Las claves se reutilizan entre páginas para evitar duplicar traducciones.
   */
  const STORAGE_KEY = 'aravena-language';

  const T = {
    es: {
      common: {
        skip: 'Saltar al contenido principal',
        home: 'Inicio',
        painting: 'Pintura',
        smoothing: 'Alisado',
        furniture: 'Muebles',
        projects: 'Proyectos',
        contact: 'Contacto',
        services: 'Servicios',
        process: 'Proceso',
        quote: 'Presupuesto',
        menu: 'Menú',
        menuOpen: 'Abrir menú de navegación',
        menuClose: 'Cerrar menú de navegación',
        themeDark: 'Oscuro',
        themeLight: 'Claro',
        switchToDark: 'Cambiar a modo oscuro',
        switchToLight: 'Cambiar a modo claro',
        language: 'Idioma',
        lightLanguage: 'Español',
        darkLanguage: 'English',
        brandDescriptor: 'Reformas y Pintura',
        quoteButton: 'Solicitar presupuesto por WhatsApp',
        quoteWhatsApp: 'Hola Aravena Reformas, quiero pedir presupuesto.',
        directQuote: 'Presupuesto y atención directa.',
        phone: 'Teléfono / WhatsApp',
        email: 'Correo',
        location: 'Ubicación',
        malagaSpain: 'Málaga, España',
        requestQuote: 'Solicitar presupuesto por WhatsApp',
        privacy: 'Política de privacidad',
        call: 'Llamar',
        openWhatsApp: 'Abrir WhatsApp',
        noCommitment: 'Presupuesto sin compromiso'
      },
      home: {
        eyebrowHero: 'Málaga · Reformas y pintura',
        title: 'Reformas y pintura en Málaga',
        lead: 'Mejoramos viviendas y espacios interiores con trabajos de reforma, pintura, alisado, pladur y acabados, adaptados a cada proyecto.',
        ctaQuote: 'Solicita tu presupuesto',
        ctaServices: 'Ver servicios',
        whoEyebrow: 'Quiénes somos',
        whoTitle: 'Un proyecto bien ejecutado empieza por entender bien el espacio.',
        whoP1: 'Aravena Reformas y Pintura trabaja en Málaga ofreciendo una atención directa y un enfoque práctico: valorar el espacio, concretar los trabajos y cuidar la ejecución hasta el acabado final.',
        whoP2: 'Buscamos que tengas un interlocutor claro durante el proyecto y que conozcas desde el principio qué se va a hacer.',
        point1Title: 'Presupuesto claro',
        point1Text: 'Definimos el alcance del trabajo antes de empezar y evitamos ambigüedades innecesarias.',
        point2Title: 'Trato directo',
        point2Text: 'Contacto sencillo para resolver dudas, tomar decisiones y hacer seguimiento del proyecto.',
        point3Title: 'Preparación',
        point3Text: 'La preparación de superficies y el trabajo previo forman parte del resultado final.',
        point4Title: 'Acabado cuidado',
        point4Text: 'Prestamos especial atención a remates, encuentros, uniformidad y limpieza final.',
        servicesEyebrow: 'Servicios',
        servicesTitle: 'Soluciones para renovar, reparar y terminar cada espacio.',
        servicesLead: 'Una selección clara de los trabajos que realizamos para viviendas y espacios interiores en Málaga.',
        service1Title: 'Reformas de interiores',
        service1Text: 'Mejoras y renovación de espacios para adaptar la vivienda a tus necesidades.',
        service2Title: 'Pintura en Málaga',
        service2Text: 'Paredes, techos, puertas, mobiliario y otras superficies con preparación previa.',
        service3Title: 'Alisado y eliminación de gotelé',
        service3Text: 'Preparación y alisado de paredes y techos para conseguir superficies uniformes.',
        service4Title: 'Pladur en Málaga',
        service4Text: 'Soluciones de pladur para divisiones, trasdosados, techos y mejoras interiores.',
        service5Title: 'Reparación y preparación',
        service5Text: 'Masillado, reparación de superficies y trabajos previos antes del acabado.',
        service6Title: 'Pintura de muebles y cocinas',
        service6Text: 'Renovación y acabado de mobiliario y cocinas según el estado y el material.',
        whyEyebrow: 'Nuestra forma de trabajar',
        whyTitle: 'La tranquilidad de una obra bien organizada.',
        whyLead: 'No se trata solo de hacer el trabajo, sino de saber qué se hace en cada fase y cuidar el resultado final.',
        why1Title: 'Comunicación directa',
        why1Text: 'Una persona de contacto y una comunicación sencilla durante el proyecto.',
        why2Title: 'Trabajo ordenado',
        why2Text: 'Cada fase se prepara y se ejecuta siguiendo una secuencia clara.',
        why3Title: 'Cuidado del espacio',
        why3Text: 'Protección, preparación y limpieza forman parte del trabajo.',
        why4Title: 'Atención al detalle',
        why4Text: 'Los pequeños remates también cuentan para conseguir un buen acabado.',
        processEyebrow: 'Cómo trabajamos',
        processTitle: 'Un proceso sencillo, desde la visita hasta el resultado.',
        processLead: 'Cuatro pasos para que el proyecto avance con claridad.',
        step1Title: 'VISITA',
        step1Heading: 'Valoramos el espacio',
        step1Text: 'Conocemos el estado actual y hablamos de lo que quieres conseguir.',
        step2Title: 'PRESUPUESTO',
        step2Heading: 'Definimos el trabajo',
        step2Text: 'Concretamos tareas, materiales y alcance antes de empezar.',
        step3Title: 'EJECUCIÓN',
        step3Heading: 'Realizamos el proyecto',
        step3Text: 'Organizamos el trabajo y avanzamos por fases según lo acordado.',
        step4Title: 'REVISIÓN',
        step4Heading: 'Comprobamos el resultado',
        step4Text: 'Revisamos los detalles finales y dejamos el espacio preparado.',
        areaEyebrow: 'Zona de servicio',
        areaTitle: 'Reformas y pintura en Málaga',
        areaLead: 'Trabajamos en Málaga y en localidades cercanas según el tipo y alcance de cada proyecto.',
        areaText: 'Si estás buscando una empresa de reformas, pintura, alisado o pladur en Málaga, podemos valorar tu proyecto y orientarte sobre los siguientes pasos.',
        projectsEyebrow: 'Proyectos',
        projectsTitle: 'Trabajos realizados',
        projectsText: 'Aquí se incorporarán fotografías y fichas de proyectos reales cuando estén disponibles.',
        contactEyebrow: 'Presupuesto sin compromiso',
        contactTitle: 'Cuéntanos qué quieres reformar.',
        contactLead: 'Puedes escribirnos por WhatsApp, llamarnos o enviarnos un correo con una breve descripción y, si las tienes, algunas fotos del espacio.',
        footerPrivacy: 'Política de privacidad',
        brandingAlt: 'Aravena Reformas y Pintura en Málaga',
        logoAlt: 'Logotipo de Aravena Reformas y Pintura'
      },
      reformas: {
        eyebrow: 'Málaga · Servicio',
        title: 'Reformas de interiores en Málaga',
        lead: 'Realizamos trabajos de renovación y mejora de interiores, combinando preparación, pintura, acabados y otros trabajos según las necesidades de cada proyecto.',
        card1Title: 'Valoración',
        card1Text: 'Analizamos el espacio y concretamos qué trabajos necesita.',
        card2Title: 'Planificación',
        card2Text: 'Definimos alcance, materiales y fases antes de comenzar.',
        card3Title: 'Ejecución',
        card3Text: 'Realizamos los trabajos acordados siguiendo una secuencia organizada.',
        card4Title: 'Revisión',
        card4Text: 'Comprobamos los remates y el resultado final.',
        quoteTitle: '¿Necesitas presupuesto?',
        quoteText: 'Cuéntanos qué trabajo necesitas realizar y, si puedes, envíanos fotografías del espacio. Valoraremos el proyecto y te indicaremos los siguientes pasos.'
      },
      pintura: {
        eyebrow: 'Málaga · Servicio',
        title: 'Pintores en Málaga para viviendas y espacios interiores',
        lead: 'Realizamos trabajos de pintura en Málaga cuidando la preparación de las superficies, la aplicación y los remates finales. Valoramos cada espacio antes de definir el trabajo.',
        card1Title: 'Preparación de superficies',
        card1Text: 'Protección, reparación, masillado y preparación antes de pintar.',
        card2Title: 'Paredes y techos',
        card2Text: 'Pintura interior adaptada al estado y uso de cada estancia.',
        card3Title: 'Puertas y mobiliario',
        card3Text: 'Trabajos de pintura en diferentes superficies según el material y acabado.',
        card4Title: 'Acabado final',
        card4Text: 'Revisión de remates, uniformidad y limpieza del espacio.',
        quoteTitle: '¿Necesitas presupuesto?',
        quoteText: 'Cuéntanos qué trabajo necesitas realizar y, si puedes, envíanos fotografías del espacio. Valoraremos el proyecto y te indicaremos los siguientes pasos.'
      },
      alisado: {
        eyebrow: 'Málaga · Servicio',
        title: 'Alisado de paredes y eliminación de gotelé en Málaga',
        lead: 'Preparamos paredes y techos para conseguir una superficie uniforme antes del acabado. El proceso depende del tipo de gotelé, del estado del soporte y de las capas existentes.',
        card1Title: 'Valoración',
        card1Text: 'Comprobamos el estado de las paredes y el tipo de acabado existente.',
        card2Title: 'Preparación',
        card2Text: 'Protegemos el espacio y preparamos las superficies antes del alisado.',
        card3Title: 'Alisado',
        card3Text: 'Trabajamos la superficie por fases hasta conseguir la uniformidad necesaria.',
        card4Title: 'Pintura',
        card4Text: 'Cuando el proyecto lo requiere, terminamos con el acabado de pintura.',
        quoteTitle: '¿Necesitas presupuesto?',
        quoteText: 'Cuéntanos qué trabajo necesitas realizar y, si puedes, envíanos fotografías del espacio. Valoraremos el proyecto y te indicaremos los siguientes pasos.'
      },
      pladur: {
        eyebrow: 'Málaga · Servicio',
        title: 'Trabajos de pladur en Málaga',
        lead: 'Realizamos soluciones de pladur para mejorar y reorganizar espacios interiores, según las características y necesidades de cada proyecto.',
        card1Title: 'Divisiones',
        card1Text: 'Soluciones para crear o reorganizar espacios interiores.',
        card2Title: 'Trasdosados',
        card2Text: 'Trabajos sobre paramentos existentes según las necesidades del proyecto.',
        card3Title: 'Techos',
        card3Text: 'Soluciones de pladur para techos interiores cuando el proyecto lo requiere.',
        card4Title: 'Acabado',
        card4Text: 'Preparación y terminación de las superficies para dejarlas listas para pintar.',
        quoteTitle: '¿Necesitas presupuesto?',
        quoteText: 'Cuéntanos qué trabajo necesitas realizar y, si puedes, envíanos fotografías del espacio. Valoraremos el proyecto y te indicaremos los siguientes pasos.'
      },
      muebles: {
        eyebrow: 'Málaga · Servicio',
        title: 'Pintura de muebles y cocinas en Málaga',
        lead: 'Renovamos visualmente muebles y cocinas mediante trabajos de preparación y pintura adaptados al estado, material y acabado que se busca conseguir.',
        card1Title: 'Valoración del mueble',
        card1Text: 'Revisamos el estado, material, revestimiento y zonas que necesitan reparación.',
        card2Title: 'Preparación',
        card2Text: 'Limpieza, lijado, reparación e imprimación cuando el soporte lo requiere.',
        card3Title: 'Aplicación',
        card3Text: 'Aplicamos el sistema de pintura adecuado al proyecto y al acabado elegido.',
        card4Title: 'Revisión',
        card4Text: 'Comprobamos uniformidad, remates y funcionamiento antes de finalizar.',
        quoteTitle: '¿Necesitas presupuesto?',
        quoteText: 'Cuéntanos qué trabajo necesitas realizar y, si puedes, envíanos fotografías del espacio. Valoraremos el proyecto y te indicaremos los siguientes pasos.'
      },
      contacto: {
        eyebrow: 'Málaga · Presupuesto',
        title: 'Contacto y presupuesto',
        lead: 'Cuéntanos qué trabajo necesitas realizar. Si puedes, envíanos fotografías del espacio para valorar mejor el proyecto.',
        quoteBoxPhone: 'WhatsApp / teléfono',
        quoteBoxEmail: 'Correo',
        quoteBoxLocation: 'Zona'
      },
      proyectos: {
        eyebrow: 'Trabajos reales · Málaga',
        title: 'Proyectos de pintura y reformas en Málaga',
        lead: 'Esta sección reunirá fotografías y fichas de trabajos reales realizados por Aravena Reformas y Pintura.',
        note: 'Los proyectos se publicarán cuando estén preparados con fotografías y datos reales del trabajo. No mostramos proyectos ficticios ni contenido de relleno.'
      },
      privacidad: {
        title: 'Política de privacidad',
        updated: 'Última actualización: 24 de septiembre de 2026',
        notice: 'Texto preparado para la web actual de Aravena Reformas y Pintura. Antes de publicarlo, completa los datos legales indicados entre corchetes y revisa el contenido con un profesional si tienes dudas sobre tu actividad concreta.',
        h1: '1. Responsable del tratamiento',
        h2: '2. Qué datos personales tratamos',
        h3: '3. Finalidades',
        h4: '4. Base jurídica',
        h5: '5. Conservación',
        h6: '6. Destinatarios',
        h7: '7. Derechos',
        h8: '8. Cookies y analítica',
        h9: '9. Seguridad',
        h10: '10. Cambios en esta política',
        p1: '<strong>Nombre comercial:</strong> Aravena Reformas y Pintura',
        p2: '<strong>Titular / razón social:</strong> [NOMBRE COMPLETO O RAZÓN SOCIAL]',
        p3: '<strong>NIF:</strong> [NIF]',
        p4: '<strong>Domicilio:</strong> [DOMICILIO COMPLETO]',
        p5: '<strong>Ubicación de actividad:</strong> Málaga, España',
        p6: '<strong>Correo electrónico:</strong> <a href="mailto:info@aravenareformas.es">info@aravenareformas.es</a>',
        p7: '<strong>Teléfono:</strong> <a href="tel:+34613112148">+34 613 112 148</a>',
        p8: 'La web no incorpora actualmente un formulario de contacto propio. Las personas interesadas pueden contactar mediante teléfono, correo electrónico o enlaces a WhatsApp.',
        p9: 'Cuando una persona nos contacta voluntariamente, podemos tratar los datos que facilite, como nombre, teléfono, correo electrónico y la información necesaria para atender su consulta o preparar un presupuesto.',
        p10: 'Los datos se utilizan para atender consultas, valorar solicitudes de presupuesto, comunicarnos con potenciales clientes y, cuando corresponda, gestionar la relación comercial y la prestación de los servicios contratados.',
        p11: 'La base jurídica dependerá del contexto del contacto: el consentimiento cuando la persona solicita voluntariamente información o contacto, la aplicación de medidas precontractuales cuando sea necesario preparar un presupuesto o responder a una solicitud, y el cumplimiento de obligaciones legales cuando corresponda.',
        p12: 'Los datos se conservarán durante el tiempo necesario para atender la finalidad para la que fueron facilitados y, posteriormente, durante los plazos exigidos por las obligaciones legales aplicables o durante el tiempo necesario para atender posibles responsabilidades.',
        p13: 'No se venden datos personales. Podrán intervenir proveedores tecnológicos necesarios para prestar servicios de alojamiento, correo electrónico, comunicaciones o mantenimiento, siempre dentro de las condiciones que correspondan al tratamiento de datos.',
        p14: 'Cuando la persona usuaria utiliza un servicio externo, como WhatsApp, dicho servicio puede tratar información conforme a sus propias condiciones y políticas de privacidad.',
        p15: 'La persona interesada puede solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, cuando proceda, y puede retirar un consentimiento previamente prestado.',
        p16: 'Para ejercer estos derechos puede escribir a <a href="mailto:info@aravenareformas.es">info@aravenareformas.es</a>, indicando el derecho que desea ejercer y aportando la información necesaria para identificar la solicitud.',
        p17: 'También puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que el tratamiento no se ajusta a la normativa aplicable.',
        p18: 'La web puede utilizar Google Analytics 4 para obtener estadísticas sobre el uso del sitio, como visitas y determinadas interacciones con los medios de contacto. Esta analítica no se carga hasta que la persona usuaria acepta su uso mediante el aviso de preferencias.',
        p19: 'La herramienta utilizada es Google Analytics 4, prestada por Google. La configuración y la información disponible en Analytics pueden cambiar conforme evolucionen el servicio y sus condiciones.',
        p20: 'La persona usuaria puede rechazar la analítica desde el aviso de preferencias. Si la acepta, la preferencia se guarda en el navegador para evitar mostrar repetidamente el aviso.',
        p21: 'Se aplicarán medidas técnicas y organizativas adecuadas a los datos tratados, atendiendo a la naturaleza del tratamiento y a los riesgos que puedan existir.',
        p22: 'Esta política podrá actualizarse cuando cambien la actividad del sitio, los tratamientos realizados o la normativa aplicable. La fecha de actualización aparecerá al inicio de la página.'
      }
    },
    en: {
      common: {
        skip: 'Skip to main content',
        home: 'Home',
        painting: 'Painting',
        smoothing: 'Wall smoothing',
        furniture: 'Furniture',
        projects: 'Projects',
        contact: 'Contact',
        services: 'Services',
        process: 'Process',
        quote: 'Get a quote',
        menu: 'Menu',
        menuOpen: 'Open navigation menu',
        menuClose: 'Close navigation menu',
        themeDark: 'Dark',
        themeLight: 'Light',
        switchToDark: 'Switch to dark mode',
        switchToLight: 'Switch to light mode',
        language: 'Language',
        lightLanguage: 'Español',
        darkLanguage: 'English',
        brandDescriptor: 'Renovations & Painting',
        quoteButton: 'Request a quote on WhatsApp',
        quoteWhatsApp: 'Hello Aravena Reformas, I would like to request a quote.',
        directQuote: 'Direct quote and communication.',
        phone: 'Phone / WhatsApp',
        email: 'Email',
        location: 'Location',
        malagaSpain: 'Málaga, Spain',
        requestQuote: 'Request a quote on WhatsApp',
        privacy: 'Privacy policy',
        call: 'Call',
        openWhatsApp: 'Open WhatsApp',
        noCommitment: 'No-obligation quote'
      },
      home: {
        eyebrowHero: 'Málaga · Renovations & painting',
        title: 'Renovations and painting in Málaga',
        lead: 'We improve homes and interiors through renovation, painting, wall smoothing, plasterboard and finishing work, tailored to each project.',
        ctaQuote: 'Request a quote',
        ctaServices: 'View services',
        whoEyebrow: 'About us',
        whoTitle: 'A well-executed project starts by understanding the space.',
        whoP1: 'Aravena Reformas y Pintura works in Málaga with a direct, practical approach: assessing the space, defining the work and taking care of execution through to the final finish.',
        whoP2: 'We aim to give you a clear point of contact throughout the project and make sure you know what will be done from the start.',
        point1Title: 'Clear quote',
        point1Text: 'We define the scope of the work before starting and avoid unnecessary ambiguity.',
        point2Title: 'Direct communication',
        point2Text: 'Simple contact to answer questions, make decisions and follow the project.',
        point3Title: 'Preparation',
        point3Text: 'Surface preparation and preliminary work are part of the final result.',
        point4Title: 'Careful finish',
        point4Text: 'We pay close attention to details, joints, uniformity and final cleaning.',
        servicesEyebrow: 'Services',
        servicesTitle: 'Solutions to renovate, repair and finish every space.',
        servicesLead: 'A clear selection of the work we carry out for homes and interiors in Málaga.',
        service1Title: 'Interior renovations',
        service1Text: 'Improvements and space renovation to adapt the home to your needs.',
        service2Title: 'Painting in Málaga',
        service2Text: 'Walls, ceilings, doors, furniture and other surfaces with proper preparation.',
        service3Title: 'Wall smoothing and gotelé removal',
        service3Text: 'Wall and ceiling preparation and smoothing to achieve uniform surfaces.',
        service4Title: 'Plasterboard in Málaga',
        service4Text: 'Plasterboard solutions for partitions, linings, ceilings and interior improvements.',
        service5Title: 'Repair and preparation',
        service5Text: 'Filling, surface repairs and preliminary work before finishing.',
        service6Title: 'Furniture and kitchen painting',
        service6Text: 'Furniture and kitchen renovation and finishing according to condition and material.',
        whyEyebrow: 'How we work',
        whyTitle: 'The peace of mind of a well-organised project.',
        whyLead: 'It is not only about doing the work, but knowing what happens at each stage and taking care of the final result.',
        why1Title: 'Direct communication',
        why1Text: 'One point of contact and simple communication throughout the project.',
        why2Title: 'Organised work',
        why2Text: 'Each stage is prepared and carried out following a clear sequence.',
        why3Title: 'Care for the space',
        why3Text: 'Protection, preparation and cleaning are part of the work.',
        why4Title: 'Attention to detail',
        why4Text: 'Small finishing details also matter when aiming for a good result.',
        processEyebrow: 'Our process',
        processTitle: 'A simple process, from the first visit to the final result.',
        processLead: 'Four steps to keep the project clear and organised.',
        step1Title: 'VISIT',
        step1Heading: 'We assess the space',
        step1Text: 'We understand the current condition and discuss what you want to achieve.',
        step2Title: 'QUOTE',
        step2Heading: 'We define the work',
        step2Text: 'We agree on tasks, materials and scope before starting.',
        step3Title: 'EXECUTION',
        step3Heading: 'We carry out the project',
        step3Text: 'We organise the work and move through the agreed stages.',
        step4Title: 'REVIEW',
        step4Heading: 'We check the result',
        step4Text: 'We review the final details and leave the space ready.',
        areaEyebrow: 'Service area',
        areaTitle: 'Renovations and painting in Málaga',
        areaLead: 'We work in Málaga and nearby areas depending on the type and scope of each project.',
        areaText: 'If you are looking for a renovation, painting, wall smoothing or plasterboard company in Málaga, we can assess your project and guide you through the next steps.',
        projectsEyebrow: 'Projects',
        projectsTitle: 'Completed work',
        projectsText: 'Photos and project details will be added here when real projects are ready to publish.',
        contactEyebrow: 'No-obligation quote',
        contactTitle: 'Tell us what you want to renovate.',
        contactLead: 'You can write to us on WhatsApp, call us or email a short description and, if available, some photos of the space.',
        footerPrivacy: 'Privacy policy',
        brandingAlt: 'Aravena Reformas y Pintura in Málaga',
        logoAlt: 'Aravena Reformas y Pintura logo'
      },
      reformas: {
        eyebrow: 'Málaga · Service',
        title: 'Interior renovations in Málaga',
        lead: 'We carry out interior renovation and improvement work, combining preparation, painting, finishes and other work according to each project.',
        card1Title: 'Assessment',
        card1Text: 'We assess the space and define the work it needs.',
        card2Title: 'Planning',
        card2Text: 'We define scope, materials and stages before starting.',
        card3Title: 'Execution',
        card3Text: 'We carry out the agreed work following an organised sequence.',
        card4Title: 'Review',
        card4Text: 'We check the finishing details and final result.',
        quoteTitle: 'Need a quote?',
        quoteText: 'Tell us what work you need and, if possible, send us photos of the space. We will assess the project and explain the next steps.'
      },
      pintura: {
        eyebrow: 'Málaga · Service',
        title: 'Painters in Málaga for homes and interiors',
        lead: 'We carry out painting work in Málaga with careful surface preparation, application and final detailing. We assess each space before defining the work.',
        card1Title: 'Surface preparation',
        card1Text: 'Protection, repairs, filling and preparation before painting.',
        card2Title: 'Walls and ceilings',
        card2Text: 'Interior painting adapted to the condition and use of each room.',
        card3Title: 'Doors and furniture',
        card3Text: 'Painting work on different surfaces according to material and desired finish.',
        card4Title: 'Final finish',
        card4Text: 'Review of finishing details, uniformity and cleaning.',
        quoteTitle: 'Need a quote?',
        quoteText: 'Tell us what work you need and, if possible, send us photos of the space. We will assess the project and explain the next steps.'
      },
      alisado: {
        eyebrow: 'Málaga · Service',
        title: 'Wall smoothing and gotelé removal in Málaga',
        lead: 'We prepare walls and ceilings to achieve a uniform surface before finishing. The process depends on the type of gotelé, the condition of the substrate and existing layers.',
        card1Title: 'Assessment',
        card1Text: 'We check the condition of the walls and the existing finish.',
        card2Title: 'Preparation',
        card2Text: 'We protect the space and prepare the surfaces before smoothing.',
        card3Title: 'Smoothing',
        card3Text: 'We work the surface in stages until the required uniformity is achieved.',
        card4Title: 'Painting',
        card4Text: 'When the project requires it, we finish with a paint coating.',
        quoteTitle: 'Need a quote?',
        quoteText: 'Tell us what work you need and, if possible, send us photos of the space. We will assess the project and explain the next steps.'
      },
      pladur: {
        eyebrow: 'Málaga · Service',
        title: 'Plasterboard work in Málaga',
        lead: 'We provide plasterboard solutions to improve and reorganise interiors, according to the characteristics and needs of each project.',
        card1Title: 'Partitions',
        card1Text: 'Solutions to create or reorganise interior spaces.',
        card2Title: 'Wall linings',
        card2Text: 'Work over existing walls according to project requirements.',
        card3Title: 'Ceilings',
        card3Text: 'Plasterboard ceiling solutions when required by the project.',
        card4Title: 'Finishing',
        card4Text: 'Surface preparation and finishing to leave it ready for painting.',
        quoteTitle: 'Need a quote?',
        quoteText: 'Tell us what work you need and, if possible, send us photos of the space. We will assess the project and explain the next steps.'
      },
      muebles: {
        eyebrow: 'Málaga · Service',
        title: 'Furniture and kitchen painting in Málaga',
        lead: 'We refresh the look of furniture and kitchens through preparation and painting adapted to their condition, material and desired finish.',
        card1Title: 'Furniture assessment',
        card1Text: 'We check the condition, material, coating and areas that need repair.',
        card2Title: 'Preparation',
        card2Text: 'Cleaning, sanding, repairs and priming when required by the surface.',
        card3Title: 'Application',
        card3Text: 'We apply the appropriate paint system for the project and chosen finish.',
        card4Title: 'Review',
        card4Text: 'We check uniformity, finishing details and operation before completion.',
        quoteTitle: 'Need a quote?',
        quoteText: 'Tell us what work you need and, if possible, send us photos of the space. We will assess the project and explain the next steps.'
      },
      contacto: {
        eyebrow: 'Málaga · Quote',
        title: 'Contact and quote',
        lead: 'Tell us what work you need. If possible, send us photos of the space so we can assess the project more accurately.',
        quoteBoxPhone: 'WhatsApp / phone',
        quoteBoxEmail: 'Email',
        quoteBoxLocation: 'Service area'
      },
      proyectos: {
        eyebrow: 'Real work · Málaga',
        title: 'Painting and renovation projects in Málaga',
        lead: 'This section will bring together photos and details of real work carried out by Aravena Reformas y Pintura.',
        note: 'Projects will be published when they are prepared with real photos and project information. We do not show fictional projects or filler content.'
      },
      privacidad: {
        title: 'Privacy policy',
        updated: 'Last updated: 24 September 2026',
        notice: 'Text prepared for the current Aravena Reformas y Pintura website. Before publishing it, complete the legal information shown in brackets and have it reviewed by a professional if you have questions about your specific activity.',
        h1: '1. Data controller',
        h2: '2. Personal data we process',
        h3: '3. Purposes',
        h4: '4. Legal basis',
        h5: '5. Retention',
        h6: '6. Recipients',
        h7: '7. Rights',
        h8: '8. Cookies and analytics',
        h9: '9. Security',
        h10: '10. Changes to this policy',
        p1: '<strong>Trading name:</strong> Aravena Reformas y Pintura',
        p2: '<strong>Owner / legal name:</strong> [FULL NAME OR LEGAL ENTITY]',
        p3: '<strong>Tax ID:</strong> [TAX ID]',
        p4: '<strong>Address:</strong> [FULL ADDRESS]',
        p5: '<strong>Business location:</strong> Málaga, Spain',
        p6: '<strong>Email:</strong> <a href="mailto:info@aravenareformas.es">info@aravenareformas.es</a>',
        p7: '<strong>Phone:</strong> <a href="tel:+34613112148">+34 613 112 148</a>',
        p8: 'The website does not currently include its own contact form. Interested people can contact us by phone, email or WhatsApp links.',
        p9: 'When someone contacts us voluntarily, we may process the information they provide, such as their name, phone number, email address and information needed to answer their enquiry or prepare a quote.',
        p10: 'Data is used to answer enquiries, assess quote requests, communicate with potential customers and, where applicable, manage the commercial relationship and provide contracted services.',
        p11: 'The legal basis depends on the context of the contact: consent when someone voluntarily requests information or contact, pre-contractual measures when needed to prepare a quote or respond to a request, and compliance with legal obligations when applicable.',
        p12: 'Data will be retained for as long as necessary to fulfil the purpose for which it was provided and subsequently for the periods required by applicable legal obligations or for as long as needed to address potential liabilities.',
        p13: 'Personal data is not sold. Technology providers may be involved when necessary for hosting, email, communications or maintenance services, under the conditions applicable to the processing of personal data.',
        p14: 'When the user uses an external service, such as WhatsApp, that service may process information under its own terms and privacy policies.',
        p15: 'The data subject may request access, rectification, erasure, objection, restriction of processing and portability where applicable, and may withdraw consent previously given.',
        p16: 'To exercise these rights, write to <a href="mailto:info@aravenareformas.es">info@aravenareformas.es</a>, stating which right you wish to exercise and providing the information needed to identify the request.',
        p17: 'You may also lodge a complaint with the Spanish Data Protection Agency if you consider that the processing does not comply with applicable law.',
        p18: 'The website may use Google Analytics 4 to obtain statistics about site use, such as visits and certain interactions with contact methods. Analytics is not loaded until the user accepts it through the preferences notice.',
        p19: 'The tool used is Google Analytics 4, provided by Google. The configuration and information available in Analytics may change as the service and its terms evolve.',
        p20: 'The user can reject analytics through the preferences notice. If accepted, the preference is stored in the browser so the notice is not shown repeatedly.',
        p21: 'Appropriate technical and organisational measures will be applied to the data processed, taking into account the nature of the processing and the risks involved.',
        p22: 'This policy may be updated when the website activity, processing operations or applicable law change. The update date will appear at the top of the page.'
      }
    }
  };

  const META = {
    home: {
      es: ['Reformas y pintura en Málaga | Aravena Reformas', 'Aravena Reformas y Pintura en Málaga. Pintura de interiores, alisado, reformas, pladur y acabados para viviendas. Solicita presupuesto.'],
      en: ['Renovations and painting in Málaga | Aravena Reformas', 'Aravena Reformas y Pintura in Málaga. Interior painting, wall smoothing, renovations, plasterboard and finishing work for homes. Request a quote.']
    },
    reformas: {
      es: ['Reformas de interiores en Málaga | Aravena Reformas', 'Reformas de interiores en Málaga para renovar y mejorar viviendas y espacios. Presupuesto y atención directa.'],
      en: ['Interior renovations in Málaga | Aravena Reformas', 'Interior renovation work in Málaga to renew and improve homes and spaces. Direct communication and quotes.']
    },
    pintura: {
      es: ['Pintores en Málaga | Aravena Reformas', 'Pintura de interiores en Málaga para viviendas y espacios. Preparación de superficies, paredes, techos y acabados. Solicita presupuesto.'],
      en: ['Painters in Málaga | Aravena Reformas', 'Interior painting in Málaga for homes and spaces. Surface preparation, walls, ceilings and finishes. Request a quote.']
    },
    alisado: {
      es: ['Alisado de paredes y quitar gotelé en Málaga | Aravena Reformas', 'Alisado de paredes y techos y eliminación de gotelé en Málaga. Valoramos el estado de la superficie y definimos el proceso antes de empezar.'],
      en: ['Wall smoothing and gotelé removal in Málaga | Aravena Reformas', 'Wall and ceiling smoothing and gotelé removal in Málaga. We assess the surface condition and define the process before starting.']
    },
    pladur: {
      es: ['Pladur en Málaga | Aravena Reformas', 'Trabajos de pladur en Málaga para divisiones, trasdosados y techos interiores. Valoración y presupuesto según cada proyecto.'],
      en: ['Plasterboard in Málaga | Aravena Reformas', 'Plasterboard work in Málaga for partitions, wall linings and interior ceilings. Assessment and quote for each project.']
    },
    muebles: {
      es: ['Pintar muebles y cocinas en Málaga | Aravena Reformas', 'Pintura de muebles y cocinas en Málaga. Preparación, tratamiento y acabado del mobiliario según su estado y material.'],
      en: ['Furniture and kitchen painting in Málaga | Aravena Reformas', 'Furniture and kitchen painting in Málaga. Preparation, treatment and finishing according to condition and material.']
    },
    contacto: {
      es: ['Contacto y presupuesto | Aravena Reformas en Málaga', 'Contacta con Aravena Reformas y Pintura en Málaga para solicitar presupuesto. WhatsApp, teléfono y correo.'],
      en: ['Contact and quotes | Aravena Reformas in Málaga', 'Contact Aravena Reformas y Pintura in Málaga for a quote. WhatsApp, phone and email.']
    },
    proyectos: {
      es: ['Proyectos de pintura y reformas en Málaga | Aravena Reformas', 'Proyectos y trabajos reales de Aravena Reformas y Pintura en Málaga. Fotografías y detalles de cada trabajo cuando estén publicados.'],
      en: ['Painting and renovation projects in Málaga | Aravena Reformas', 'Real projects and work by Aravena Reformas y Pintura in Málaga. Photos and project details when published.']
    },
    privacidad: {
      es: ['Política de privacidad | Aravena Reformas y Pintura', 'Política de privacidad de Aravena Reformas y Pintura, Málaga. Información sobre el tratamiento de datos personales y el ejercicio de derechos.'],
      en: ['Privacy policy | Aravena Reformas y Pintura', 'Privacy policy of Aravena Reformas y Pintura, Málaga. Information about personal data processing and the exercise of rights.']
    }
  };

  const pageId = () => {
    const path = location.pathname;
    if (path === '/' || path === '/index.html') return 'home';
    if (path.includes('/reformas-malaga')) return 'reformas';
    if (path.includes('/pintura-malaga')) return 'pintura';
    if (path.includes('/alisado-paredes-malaga')) return 'alisado';
    if (path.includes('/pladur-malaga')) return 'pladur';
    if (path.includes('/pintura-muebles-malaga')) return 'muebles';
    if (path.includes('/contacto')) return 'contacto';
    if (path.includes('/proyectos')) return 'proyectos';
    if (path.includes('/privacidad')) return 'privacidad';
    return 'home';
  };

  const safeGetLanguage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
    } catch (_) {
      return 'es';
    }
  };

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  const setTextAll = (selector, values) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (values[index] != null) el.textContent = values[index];
    });
  };

  const setAttr = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };

  const addLanguageSwitcher = () => {
    const themeButton = document.querySelector('.theme-toggle');
    if (!themeButton || document.querySelector('.language-switcher')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Idioma');

    wrapper.innerHTML =
      '<button type="button" data-language="es" aria-label="Español">ES</button>' +
      '<button type="button" data-language="en" aria-label="English">EN</button>';

    themeButton.parentElement.insertBefore(wrapper, themeButton);

    wrapper.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
  };

  const updateWhatsAppLinks = (lang) => {
    const text = T[lang].common.quoteWhatsApp;
    document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set('text', text);
      link.href = url.toString();
    });
  };

  const applyCommon = (lang) => {
    const t = T[lang].common;

    setText('.skip-link', t.skip);

    const body = document.body;
    if (body.classList.contains('page-home')) {
      setText('.brand-name span', t.brandDescriptor);
      setText('#mainNav a:nth-child(1)', t.services);
      setText('#mainNav a:nth-child(2)', t.projects);
      setText('#mainNav a:nth-child(3)', t.process);
      setText('#mainNav a:nth-child(4)', t.contact);
      setText('.menu', t.menu);
      setAttr('.menu', 'aria-label', t.menuOpen);
      setText('.nav-cta', t.quote);
      setAttr('.brand-mark', 'alt', T[lang].home.logoAlt);
    } else if (body.classList.contains('page-service') || body.classList.contains('page-contact') || body.classList.contains('page-projects')) {
      setText('header nav a:nth-child(1)', t.home);
      setText('header nav a:nth-child(2)', t.painting);
      setText('header nav a:nth-child(3)', t.smoothing);
      setText('header nav a:nth-child(4)', t.furniture);
      setText('header nav a:nth-child(5)', t.projects);
      setText('header nav a:last-child', t.contact);
    }

    setText('.theme-label', themeIsDark() ? t.themeLight : t.themeDark);
    setAttr('.theme-toggle', 'aria-label', themeIsDark() ? t.switchToLight : t.switchToDark);
    setAttr('.theme-toggle', 'title', themeIsDark() ? t.switchToLight : t.switchToDark);

    document.querySelectorAll('.language-switcher button').forEach((button) => {
      const selected = button.dataset.language === lang;
      button.setAttribute('aria-current', selected ? 'true' : 'false');
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    document.querySelector('.language-switcher')?.setAttribute('aria-label', t.language);
  };

  const themeIsDark = () => document.documentElement.dataset.theme === 'dark';

  const applyHome = (lang) => {
    const t = T[lang].home;
    setText('.hero .eyebrow', t.eyebrowHero);
    setText('.hero h1', t.title);
    setText('.hero .lead', t.lead);
    setText('.hero .btn-gold', t.ctaQuote);
    setText('.hero .btn-outline', t.ctaServices);
    setAttr('.hero-brand', 'alt', t.brandingAlt);

    setText('#quienes-somos .eyebrow', t.whoEyebrow);
    setText('#quienes-somos h2', t.whoTitle);
    setTextAll('#quienes-somos .intro-copy p', [t.whoP1, t.whoP2]);
    setTextAll('#quienes-somos .point h3', [t.point1Title, t.point2Title, t.point3Title, t.point4Title]);
    setTextAll('#quienes-somos .point p', [t.point1Text, t.point2Text, t.point3Text, t.point4Text]);

    setText('#servicios .eyebrow', t.servicesEyebrow);
    setText('#servicios h2', t.servicesTitle);
    setText('#servicios .section-head p', t.servicesLead);
    setTextAll('#servicios .service h3', [t.service1Title, t.service2Title, t.service3Title, t.service4Title, t.service5Title, t.service6Title]);
    setTextAll('#servicios .service p', [t.service1Text, t.service2Text, t.service3Text, t.service4Text, t.service5Text, t.service6Text]);

    setText('.why .eyebrow', t.whyEyebrow);
    setText('.why h2', t.whyTitle);
    setText('.why .section-head p', t.whyLead);
    setTextAll('.why-item h3', [t.why1Title, t.why2Title, t.why3Title, t.why4Title]);
    setTextAll('.why-item p', [t.why1Text, t.why2Text, t.why3Text, t.why4Text]);

    setText('.process .eyebrow', t.processEyebrow);
    setText('.process h2', t.processTitle);
    setText('.process .section-head p', t.processLead);
    setTextAll('.step b', ['01 · ' + t.step1Title, '02 · ' + t.step2Title, '03 · ' + t.step3Title, '04 · ' + t.step4Title]);
    setTextAll('.step h3', [t.step1Heading, t.step2Heading, t.step3Heading, t.step4Heading]);
    setTextAll('.step p', [t.step1Text, t.step2Text, t.step3Text, t.step4Text]);

    setText('.areas .eyebrow', t.areaEyebrow);
    setText('.areas h2', t.areaTitle);
    setText('.areas .section-head p', t.areaLead);
    setText('.area-box p', t.areaText);

    setText('#proyectos .eyebrow', t.projectsEyebrow);
    setText('#proyectos h2', t.projectsTitle);
    setText('#proyectos p', t.projectsText);

    setText('.contact .eyebrow', t.contactEyebrow);
    setText('.contact h2', t.contactTitle);
    setText('.contact-copy', t.contactLead);
    setTextAll('.contact-info strong', [T[lang].common.phone, T[lang].common.email, T[lang].common.location]);
    setText('.contact-info div:nth-child(3) span', T[lang].common.malagaSpain);
    setText('.contact .btn-gold', T[lang].common.openWhatsApp);
    setText('.contact .btn-outline', T[lang].common.call);

    setText('footer a', t.footerPrivacy);
  };

  const getServiceData = (lang) => T[lang][pageId()];

  const applyService = (lang) => {
    const t = getServiceData(lang);
    setText('main .eyebrow', t.eyebrow);
    setText('main h1', t.title);
    setText('main .lead', t.lead);
    setTextAll('main .card h3', [t.card1Title, t.card2Title, t.card3Title, t.card4Title]);
    setTextAll('main .card p', [t.card1Text, t.card2Text, t.card3Text, t.card4Text]);
    setText('main h2', t.quoteTitle);
    setText('main .wrap > p:not(.lead)', t.quoteText);
    setText('main .cta .btn', T[lang].common.quoteButton);

    const ctaTextNode = Array.from(document.querySelectorAll('.cta')).flatMap((cta) =>
      Array.from(cta.childNodes)
    ).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (ctaTextNode) ctaTextNode.textContent = t.directQuote || T[lang].common.directQuote;
  };

  const applyContact = (lang) => {
    const t = T[lang].contacto;
    setText('main .eyebrow', t.eyebrow);
    setText('main h1', t.title);
    setText('main > .wrap > p', t.lead);

    const box = document.querySelector('.box');
    if (!box) return;
    const phoneHref = box.querySelector('a[href^="tel:"]')?.getAttribute('href') || 'tel:+34613112148';
    const whatsappHref = box.querySelector('a[href*="wa.me/"]')?.getAttribute('href') || '';
    const emailHref = box.querySelector('a[href^="mailto:"]')?.getAttribute('href') || 'mailto:info@aravenareformas.es';

    box.innerHTML =
      '<strong>' + t.quoteBoxPhone + '</strong><br>' +
      '<a href="' + phoneHref + '" data-analytics-event="phone_click">613 112 148</a><br>' +
      '<a class="btn" href="' + whatsappHref + '" target="_blank" rel="noopener" data-analytics-event="whatsapp_click">' + T[lang].common.quoteButton + '</a><br><br>' +
      '<strong>' + t.quoteBoxEmail + '</strong><br>' +
      '<a href="' + emailHref + '" data-analytics-event="email_click">info@aravenareformas.es</a><br><br>' +
      '<strong>' + t.quoteBoxLocation + '</strong><br>' +
      T[lang].common.malagaSpain;

    updateWhatsAppLinks(lang);
  };

  const applyProjects = (lang) => {
    const t = T[lang].proyectos;
    setText('main .eyebrow', t.eyebrow);
    setText('main h1', t.title);
    setText('main > .wrap > p', t.lead);
    setText('.note', t.note);
  };

  const applyPrivacy = (lang) => {
    const t = T[lang].privacidad;
    setText('main h1', t.title);
    setText('.updated', t.updated);
    setText('.notice', t.notice);
    setText('.page-privacy .back', lang === 'en' ? 'Back to home' : 'Volver al inicio');

    const headings = [t.h1,t.h2,t.h3,t.h4,t.h5,t.h6,t.h7,t.h8,t.h9,t.h10];
    setTextAll('main section h2', headings);

    const paragraphs = [t.p1,t.p2,t.p3,t.p4,t.p5,t.p6,t.p7,t.p8,t.p9,t.p10,t.p11,t.p12,t.p13,t.p14,t.p15,t.p16,t.p17,t.p18,t.p19,t.p20,t.p21,t.p22];
    document.querySelectorAll('main section p').forEach((el, index) => {
      if (paragraphs[index] != null) el.innerHTML = paragraphs[index];
    });
  };

  const applyMeta = (lang) => {
    const data = META[pageId()][lang];
    document.title = data[0];
    setMeta('meta[name="description"]', data[1]);
    setMeta('meta[property="og:title"]', data[0]);
    setMeta('meta[property="og:description"]', data[1]);
    setMeta('meta[name="twitter:title"]', data[0]);
    setMeta('meta[name="twitter:description"]', data[1]);
    setMeta('meta[property="og:locale"]', lang === 'en' ? 'en_GB' : 'es_ES');
  };

  const applyLanguage = (lang) => {
    lang = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

    addLanguageSwitcher();
    applyCommon(lang);

    const body = document.body;
    if (body.classList.contains('page-home')) applyHome(lang);
    else if (body.classList.contains('page-service')) applyService(lang);
    else if (body.classList.contains('page-contact')) applyContact(lang);
    else if (body.classList.contains('page-projects')) applyProjects(lang);
    else if (body.classList.contains('page-privacy')) applyPrivacy(lang);

    applyMeta(lang);
    updateWhatsAppLinks(lang);
  };

  const init = () => {
    addLanguageSwitcher();
    applyLanguage(safeGetLanguage());
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  window.__aravenaI18n = {
    applyLanguage,
    translations: T
  };
})();