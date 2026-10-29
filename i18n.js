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
        reforms: 'Reformas',
        painting: 'Pintura',
        airless: 'Pintura Airless',
        pladur: 'Pladur',
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
        service1Title: 'Reformas parciales de interiores',
        service1Text: 'Renovación coordinada de pintura, superficies, pladur y acabados dentro de un alcance definido.',
        service2Title: 'Pintura de viviendas en Málaga',
        service2Text: 'Paredes, techos y superficies interiores con preparación y revisión del acabado.',
        service3Title: 'Alisado de paredes y eliminación de gotelé',
        service3Text: 'Preparación y alisado para conseguir superficies uniformes antes de pintar.',
        service4Title: 'Pladur en Málaga',
        service4Text: 'Soluciones para tabiques, trasdosados y falsos techos según cada proyecto.',
        service5Title: 'Reparación y preparación de paredes',
        service5Text: 'Pequeñas reparaciones, lijado y preparación antes del acabado.',
        service6Title: 'Pintura Airless en Málaga',
        service6Text: 'Aplicación por pulverización en superficies amplias cuando el espacio y la preparación lo permiten.',
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
      airless: {
        eyebrow: 'Pintura Airless · Málaga',
        title: 'Pintura Airless en Málaga para paredes y techos',
        lead: 'Valoramos si la pulverización Airless es adecuada para cada espacio. Revisamos el soporte, preparamos las superficies y protegemos el entorno antes de aplicar.',
        card1Title: 'Superficies amplias',
        card1Text: 'Puede agilizar la aplicación en paredes y techos de viviendas vacías o espacios en reforma.',
        card2Title: 'Acabado uniforme',
        card2Text: 'La boquilla, la pintura y la técnica deben ser adecuadas para conseguir una capa regular.',
        card3Title: 'Preparación del soporte',
        card3Text: 'Las grietas, golpes y otras irregularidades deben tratarse antes de pintar.',
        card4Title: 'Protección del entorno',
        card4Text: 'La pulverización puede generar sobrepulverización; proteger las zonas cercanas es esencial.',
        quoteTitle: '¿Quieres presupuesto para pintura Airless?',
        quoteText: 'Cuéntanos qué superficie necesitas pintar y, si puedes, envíanos fotografías para valorar el trabajo.',
        sectionTitles: ['Cuándo puede resultar útil', 'La preparación sigue siendo imprescindible', '¿Airless o rodillo?', 'Pintura de techos y superficies amplias', 'Qué influye en el presupuesto', 'Preguntas frecuentes']
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
        p18: 'Si la persona usuaria acepta el aviso de preferencias, la web activa Google Analytics 4, el píxel de medición publicitaria de OpenAI y Vercel Web Analytics para medir visitas e interacciones con los medios de contacto.',
        p19: 'Un clic en WhatsApp no confirma que se haya enviado un mensaje; un clic en teléfono no confirma que se haya realizado o contestado una llamada; y un clic en correo no confirma que se haya enviado un mensaje. La web no incorpora actualmente un formulario propio que permita confirmar automáticamente la recepción de una solicitud de presupuesto.',
        p20: 'La persona usuaria puede rechazar las herramientas de analítica y medición publicitaria desde el aviso de preferencias. Si las acepta, la preferencia se guarda en el navegador; para cambiarla, puede borrar los datos del sitio y cargarlo de nuevo.',
        p21: 'Google, OpenAI y Vercel pueden tratar datos técnicos y de interacción conforme a sus respectivas políticas y condiciones.',
        p22: 'Se aplicarán medidas técnicas y organizativas adecuadas a los datos tratados, atendiendo a la naturaleza del tratamiento y a los riesgos que puedan existir.',
        p23: 'Esta política podrá actualizarse cuando cambien la actividad del sitio, los tratamientos realizados o la normativa aplicable. La fecha de actualización aparecerá al inicio de la página.'
      }
    },
    en: {
      common: {
        skip: 'Skip to main content',
        home: 'Home',
        reforms: 'Renovations',
        painting: 'Painting',
        airless: 'Airless painting',
        pladur: 'Plasterboard',
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
        service6Title: 'Airless painting in Málaga',
        service6Text: 'High-pressure spray application for broad wall and ceiling surfaces when suitable for the space.',
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
      airless: {
        eyebrow: 'Airless painting · Málaga',
        title: 'Airless painting in Málaga for walls and ceilings',
        lead: 'We assess whether Airless spraying is suitable for each space. We inspect and prepare surfaces and protect the surrounding area before application.',
        card1Title: 'Broad surfaces',
        card1Text: 'It can speed up application on walls and ceilings in empty homes or renovation projects.',
        card2Title: 'Even finish',
        card2Text: 'The nozzle, paint and technique must suit the job to achieve a consistent coating.',
        card3Title: 'Surface preparation',
        card3Text: 'Cracks, dents and other irregularities need treatment before painting.',
        card4Title: 'Protecting the space',
        card4Text: 'Spraying can create overspray, so nearby surfaces must be protected carefully.',
        quoteTitle: 'Need an Airless painting quote?',
        quoteText: 'Tell us which surfaces you need painted and, if possible, send photos so we can assess the work.',
        sectionTitles: ['When Airless can be useful', 'Surface preparation is still essential', 'Airless or roller?', 'Painting ceilings and large surfaces', 'What affects the quote', 'Frequently asked questions']
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
        p18: 'If the user accepts the preferences notice, the website enables Google Analytics 4, the OpenAI advertising measurement pixel and Vercel Web Analytics to measure visits and interactions with contact methods.',
        p19: 'A click on WhatsApp does not confirm that a message was sent; a click on the phone link does not confirm that a call was made or answered; and a click on the email link does not confirm that an email was sent. The website does not currently include its own form to confirm receipt of a quote request automatically.',
        p20: 'The user can reject optional analytics and advertising measurement through the preferences notice. If accepted, the choice is stored in the browser; to change it, the user can clear the site data and reload the website.',
        p21: 'Google, OpenAI and Vercel may process technical and interaction data under their respective policies and terms.',
        p22: 'Appropriate technical and organisational measures will be applied to the data processed, taking into account the nature of the processing and the risks involved.',
        p23: 'This policy may be updated when the website activity, processing operations or applicable law change. The update date will appear at the top of the page.'
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
    airless: {
      es: ['Pintura Airless en Málaga | Aravena Reformas', 'Pintura Airless en Málaga para paredes y techos. Preparación de superficies, protección del entorno y valoración del método adecuado.'],
      en: ['Airless painting in Málaga | Aravena Reformas', 'Airless painting in Málaga for walls and ceilings. Surface preparation, protection and assessment of the right application method.']
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

  const NEW_PAGE_SHARED_TEXT_EN = {
  "Inicio": "Home",
  "Pintura en Málaga": "Painting in Málaga",
  "Pladur en Málaga": "Plasterboard in Málaga"
};
  const NEW_PAGE_TRANSLATIONS = {
  "/pintar-techos-malaga/": {
    "titleEs": "Pintar techos en Málaga | Aravena Reformas",
    "titleEn": "Ceiling painting in Málaga | Aravena Reformas",
    "descriptionEs": "Pintura de techos en Málaga: preparación, protección de la estancia y elección del acabado según el soporte.",
    "descriptionEn": "Ceiling painting in Málaga: surface preparation, room protection and finish selection for each type of ceiling.",
    "nodes": {
      "Pintar techos en Málaga: preparación y acabado": "Painting ceilings in Málaga: preparation and finish",
      "Pintura de techos · Málaga": "Ceiling painting · Málaga",
      "Pintar un techo requiere valorar el soporte, la altura, la iluminación y la protección del resto de la estancia. La luz puede hacer visibles pequeñas imperfecciones, por lo que la preparación debe planificarse antes de empezar.": "Painting a ceiling requires assessing the surface, height, lighting and protection needed for the rest of the room. Light can reveal small imperfections, so preparation should be planned before work begins.",
      "¿Necesitas pintar los techos de una vivienda?": "Need the ceilings in your home painted?",
      "Indica las estancias, la altura aproximada y el estado del techo.": "Tell us which rooms need painting, the approximate ceiling height and its current condition.",
      "Pedir presupuesto": "Request a quote",
      "Qué revisar antes de pintar": "What to check before painting",
      "Comprobamos si la pintura está firme, si hay desconchados, pequeñas grietas, manchas o reparaciones anteriores. También se valora el acceso y qué elementos deben protegerse: suelos, paredes, muebles y luminarias.": "We check whether the existing paint is sound and look for flaking, small cracks, stains or previous repairs. We also assess access and what needs protecting, including floors, walls, furniture and light fittings.",
      "Preparación y protección": "Preparation and protection",
      "Retirar o proteger objetos que puedan estorbar.": "Remove or protect items that may get in the way.",
      "Proteger superficies que no se pintarán.": "Protect surfaces that will not be painted.",
      "Retirar pintura suelta y reparar los defectos acordados.": "Remove loose paint and repair the agreed defects.",
      "Elegir imprimación y pintura compatibles con el soporte.": "Choose a primer and paint compatible with the surface.",
      "Aplicar y revisar el acabado con iluminación adecuada.": "Apply the paint and check the finish under suitable lighting.",
      "Qué acabado elegir": "Choosing a finish",
      "La elección depende del estado de la superficie, la luz y el uso. Un acabado mate suele producir menos reflejos; la resistencia a la limpieza depende del producto concreto. Consulta la guía de": "The choice depends on the surface condition, lighting and room use. A matt finish usually produces less glare; washability depends on the product. See our guide to",
      "tipos de pintura para paredes y techos": "paint types for walls and ceilings",
      "Si hay manchas de humedad": "If there are damp stains",
      "Antes de pintar hay que determinar si el origen sigue activo. Pintar encima no soluciona una fuga o entrada de agua. Los daños importantes deben revisarse antes de cerrar el presupuesto.": "Before painting, check whether the source of damp is still active. Painting over a leak or water ingress will not fix it. Significant damage should be assessed before finalising the quote.",
      "¿Rodillo o Airless?": "Roller or Airless?",
      "Ambos métodos pueden ser adecuados según la estancia, el soporte y la protección posible. Consulta": "Either method may be suitable depending on the room, surface and how well the area can be protected. See",
      "pintura Airless en Málaga": "Airless painting in Málaga",
      "para conocer sus ventajas y límites.": "to learn about its benefits and limitations.",
      "Qué influye en el coste": "What affects the cost",
      "Superficie, altura, acceso, mobiliario, estado del soporte, reparaciones y número de manos. Conviene concretar si se incluyen protección, imprimación, pintura y limpieza.": "The price depends on the area, height, access, furniture, surface condition, repairs and number of coats. Confirm whether protection, primer, paint and cleaning are included.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Hay que pintar también las paredes?": "Do the walls also need painting?",
      "No necesariamente, pero deben protegerse y revisarse los encuentros.": "Not necessarily, but they should be protected and the wall-to-ceiling junctions checked.",
      "¿Se puede pintar un techo con gotelé?": "Can a textured ceiling be painted?",
      "Si el acabado está firme puede valorarse. Para eliminar el relieve, consulta": "It may be possible if the existing finish is sound. To remove the texture, see",
      "alisado de paredes": "wall smoothing",
      "¿Cuánto se tarda?": "How long does it take?",
      "Depende de la superficie, altura, reparaciones, protección y secado de los productos.": "It depends on the area, height, repairs, protection and drying times of the products.",
      "Para renovar también las paredes, consulta": "To refresh the walls as well, see",
      "pintura de interiores": "interior painting"
    }
  },
  "/pintar-puertas-malaga/": {
    "titleEs": "Pintar puertas en Málaga | Aravena Reformas",
    "titleEn": "Painting interior doors in Málaga | Aravena Reformas",
    "descriptionEs": "Pintura de puertas interiores y marcos en Málaga. Valoración del material, preparación y acabado según el estado.",
    "descriptionEn": "Interior door and frame painting in Málaga. Material assessment, surface preparation and a suitable finish.",
    "nodes": {
      "Pintar puertas interiores en Málaga": "Painting interior doors in Málaga",
      "Pintura de puertas · Málaga": "Door painting · Málaga",
      "Pintar puertas interiores puede cambiar el aspecto de una vivienda sin sustituir todas las hojas. Antes de elegir el acabado hay que conocer el material, la adherencia de la pintura anterior, el estado de los cantos y el uso de cada puerta.": "Painting interior doors can refresh a home without replacing every door leaf. Before choosing a finish, identify the material, existing paint adhesion, edge condition and how each door is used.",
      "¿Quieres renovar las puertas de tu vivienda?": "Would you like to refresh your interior doors?",
      "Envíanos fotografías e indica cuántas hojas y marcos quieres pintar.": "Send us photos and tell us how many door leaves and frames you want painted.",
      "Consultar por WhatsApp": "Ask us on WhatsApp",
      "Qué puertas se pueden valorar": "Which doors can be assessed?",
      "La viabilidad depende de si la puerta es de madera pintada, MDF, laminada u otro acabado. Las superficies lisas o de baja adherencia pueden requerir preparación específica; no todos los soportes aceptan el mismo sistema.": "Feasibility depends on whether the door is painted wood, MDF, laminate or another finish. Smooth surfaces or those with poor adhesion may need specific preparation; the same paint system does not suit every substrate.",
      "Hojas de puerta": "Door leaves",
      "Revisión de superficie, golpes, cantos y acabado existente.": "We check the surface, dents, edges and existing finish.",
      "Marcos y jambas": "Frames and door jambs",
      "Se valora su estado y cómo proteger los elementos contiguos.": "We assess their condition and how to protect adjacent elements.",
      "Color y acabado": "Colour and finish",
      "Elección de producto y nivel de brillo según material y uso.": "The product and sheen level are chosen according to the material and its use.",
      "Proceso habitual": "Typical process",
      "Revisar material y adherencia del acabado anterior.": "Check the material and adhesion of the existing finish.",
      "Proteger el entorno y valorar si hay que retirar herrajes.": "Protect the surrounding area and decide whether hardware needs removing.",
      "Limpiar y lijar o matizar la superficie de forma adecuada.": "Clean and sand or key the surface as appropriate.",
      "Aplicar imprimación cuando sea necesaria.": "Apply primer where required.",
      "Aplicar el acabado y respetar los tiempos de secado y curado del fabricante.": "Apply the finish and follow the manufacturer’s drying and curing times.",
      "Qué cambia el presupuesto": "What affects the quote",
      "Número de puertas, estado, relieves, marcos, soporte, cambio de color y si se trabaja instalado o desmontado. Debe quedar claro si se pintan una o ambas caras, marcos y otros elementos.": "The number and condition of doors, profiles, frames, substrate, colour change and whether they are painted in place or removed all affect the quote. It should specify whether one or both sides, frames and other elements are included.",
      "Cuidados después de pintar": "Care after painting",
      "El secado al tacto no siempre implica que el acabado haya alcanzado su resistencia final. Conviene seguir las instrucciones del producto y evitar golpes o limpiezas agresivas durante el curado.": "A surface that feels dry to the touch may not have reached its final strength. Follow the product instructions and avoid knocks or harsh cleaning while it cures.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Se puede pintar una puerta laminada?": "Can a laminate door be painted?",
      "En algunos casos, pero hay que comprobar el material y la adherencia antes de elegir el sistema.": "In some cases, yes, but the material and adhesion must be checked before choosing a system.",
      "¿Pintar incluye los marcos?": "Does door painting include the frames?",
      "Solo si se incluyen de forma expresa en el alcance del presupuesto.": "Only if the frames are explicitly included in the quote.",
      "¿Pintar es mejor que cambiar?": "Is painting better than replacing a door?",
      "Depende del estado y funcionamiento. La pintura renueva la apariencia, pero no corrige daños importantes ni problemas de cierre.": "It depends on the door’s condition and operation. Painting refreshes its appearance but will not fix major damage or closing problems.",
      "También puedes consultar": "You can also explore",
      "pintura de muebles de cocina": "kitchen cabinet painting",
      "y": "and",
      "pintura interior": "interior painting"
    }
  },
  "/pintar-muebles-cocina-malaga/": {
    "titleEs": "Pintar muebles de cocina en Málaga | Aravena Reformas",
    "titleEn": "Painting kitchen cabinets in Málaga | Aravena Reformas",
    "descriptionEs": "Renovación de muebles de cocina con pintura en Málaga. Valoramos material, estado, preparación y acabado posible.",
    "descriptionEn": "Kitchen cabinet painting in Málaga. We assess materials, condition, preparation needs and possible finishes.",
    "nodes": {
      "Pintar muebles de cocina en Málaga": "Painting kitchen cabinets in Málaga",
      "Renovación de muebles · Málaga": "Cabinet refresh · Málaga",
      "Pintar los frentes de los muebles de cocina puede renovar su aspecto sin sustituir todos los módulos. El resultado depende del material, la grasa acumulada, la adherencia del acabado existente y la preparación previa.": "Painting kitchen cabinet fronts can refresh their appearance without replacing every unit. The result depends on the material, accumulated grease, adhesion of the existing finish and preparation.",
      "¿Quieres cambiar el aspecto de tus muebles de cocina?": "Would you like to refresh your kitchen cabinets?",
      "Envía fotos de puertas y cajones e indica, si lo sabes, el material y el acabado actual.": "Send photos of the doors and drawers and, if known, tell us the material and current finish.",
      "Consultar viabilidad": "Check feasibility",
      "Qué elementos pueden valorarse": "Which elements can be assessed?",
      "El alcance puede incluir puertas y frentes de cajón, laterales visibles y paneles compatibles, si se acuerda. Encimeras, interiores, electrodomésticos, herrajes y trabajos de carpintería no se consideran incluidos por defecto.": "The agreed scope may include doors, drawer fronts, visible sides and compatible panels. Worktops, cabinet interiors, appliances, hardware and carpentry are not included by default.",
      "Por qué importa el material": "Why the material matters",
      "Madera pintada": "Previously painted wood",
      "Puede necesitar reparar daños, lijar y preparar zonas deterioradas.": "Damaged areas may need repair, sanding and preparation.",
      "MDF o superficies selladas": "MDF or sealed surfaces",
      "Hay que comprobar la adherencia y valorar si requiere imprimación.": "Adhesion must be checked and primer may be required.",
      "Laminados": "Laminate finishes",
      "Requieren evaluación, porque no todos los recubrimientos aceptan el mismo acabado.": "They need assessment because not every coating will accept the same finish.",
      "Preparación antes de pintar": "Preparation before painting",
      "Definir qué frentes y paneles se renovarán.": "Define which fronts and panels will be refreshed.",
      "Limpiar y desengrasar a fondo según el material.": "Clean and degrease thoroughly according to the material.",
      "Preparar la superficie mediante lijado o matizado compatible.": "Prepare the surface by sanding or keying it with a compatible method.",
      "Aplicar imprimación si el sistema elegido lo necesita.": "Apply primer if required by the chosen system.",
      "Aplicar el acabado y respetar los tiempos de curado.": "Apply the finish and allow the specified curing time.",
      "Qué resultado puedes esperar": "What results can you expect?",
      "La pintura cambia el aspecto, pero no repara bisagras, cantos rotos, hinchazones ni daños por agua. Antes de presupuestar hay que confirmar qué elementos pueden pintarse y qué reparaciones quedan fuera del alcance.": "Paint changes the appearance but does not repair hinges, broken edges, swelling or water damage. Before quoting, confirm which elements can be painted and which repairs fall outside the scope.",
      "Qué influye en el precio": "What affects the price",
      "Número y tamaño de frentes, perfiles, material, estado, acabado, desmontaje y protección de la cocina. Algunas superficies pueden requerir revisión presencial.": "The number and size of fronts, profiles, material, condition, finish, removal and kitchen protection all affect the price. Some surfaces may need an in-person assessment.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Se puede renovar sin cambiar los muebles?": "Can cabinets be refreshed without replacing them?",
      "Si los frentes están en condiciones adecuadas, pintarlos puede ser una alternativa. Primero hay que valorar soporte y estado.": "If the fronts are in suitable condition, painting them may be an alternative. The surface and condition must be assessed first.",
      "¿La pintura resiste la limpieza?": "Will the paint withstand cleaning?",
      "Depende del sistema, producto, aplicación y curado. Deben seguirse las instrucciones del fabricante.": "It depends on the system, product, application and curing. Follow the manufacturer’s instructions.",
      "¿Incluye cambiar encimera o tiradores?": "Does it include replacing the worktop or handles?",
      "No se incluyen automáticamente; deben acordarse y presupuestarse por separado.": "They are not automatically included; they must be agreed and quoted separately.",
      "Si quieres pintar también paredes y techos, consulta": "If you also want the walls and ceilings painted, see",
      "pintura de interiores": "interior painting",
      "o": "or",
      "reformas parciales de interiores": "partial interior renovations"
    }
  },
  "/reparacion-paredes-malaga/": {
    "titleEs": "Reparación de paredes antes de pintar en Málaga",
    "titleEn": "Wall repairs before painting in Málaga | Aravena Reformas",
    "descriptionEs": "Preparación y reparación superficial de paredes en Málaga: agujeros, pequeñas grietas, desconchados y lijado antes de pintar.",
    "descriptionEn": "Wall preparation and minor repairs in Málaga, including holes, small cracks, flaking paint and sanding before painting.",
    "nodes": {
      "Reparación de paredes antes de pintar en Málaga": "Wall repairs before painting in Málaga",
      "Preparación de superficies · Málaga": "Surface preparation · Málaga",
      "Las pequeñas imperfecciones pueden seguir viéndose después de aplicar pintura. Antes de empezar, valoramos el estado del soporte y distinguimos las reparaciones superficiales de los daños que requieren estudiar su causa.": "Small imperfections may still show through after painting. We assess the surface first and distinguish minor surface repairs from damage whose underlying cause needs investigation.",
      "¿Tus paredes tienen agujeros, golpes o desconchados?": "Do your walls have holes, dents or flaking paint?",
      "Envíanos fotografías de las zonas dañadas y cuéntanos el tamaño del trabajo.": "Send us photos of the damaged areas and tell us about the size of the job.",
      "Consultar por WhatsApp": "Ask us on WhatsApp",
      "Reparaciones superficiales que se pueden valorar": "Surface repairs we can assess",
      "Agujeros y golpes": "Holes and dents",
      "Pequeños defectos localizados que pueden rellenarse y lijarse antes del acabado.": "Small localised defects that can be filled and sanded before finishing.",
      "Desconchados": "Flaking paint",
      "Se revisa la adherencia y se retiran las partes sueltas antes de preparar el soporte.": "We check adhesion and remove loose material before preparing the surface.",
      "Pequeñas fisuras": "Small cracks",
      "Se evalúan antes de decidir el tratamiento; no todas las grietas tienen el mismo origen.": "They are assessed before deciding on treatment; not all cracks have the same cause.",
      "Qué no debe ocultarse con pintura": "What should not be covered up with paint",
      "Humedad activa, filtraciones, grietas que aumentan, deformaciones y desprendimientos extensos requieren estudiar la causa. Una reparación superficial puede no ser suficiente y no debe presentarse como solución estructural o de impermeabilización.": "Active damp, leaks, widening cracks, deformation and extensive detachment require investigation of the cause. A surface repair may not be enough and must not be presented as a structural or waterproofing solution.",
      "Fases de preparación": "Preparation stages",
      "Revisar zona dañada y estado de la pintura.": "Inspect the damaged area and condition of the paint.",
      "Retirar material suelto y limpiar.": "Remove loose material and clean the area.",
      "Aplicar un material de reparación compatible.": "Apply a compatible repair material.",
      "Dejar secar, lijar y revisar la uniformidad.": "Allow it to dry, sand and check the surface is even.",
      "Aplicar imprimación o pintura según el soporte y el alcance.": "Apply primer or paint according to the surface and agreed scope.",
      "Reparación localizada o alisado completo": "Local repair or full wall smoothing",
      "Si el defecto es puntual, puede bastar una reparación localizada. Si el gotelé o la irregularidad están extendidos por toda la estancia, puede convenir valorar el": "A local repair may be enough for an isolated defect. If textured finish or unevenness extends across the room, it may be worth assessing",
      "alisado de paredes": "wall smoothing",
      "Cómo influye en el presupuesto": "What affects the quote",
      "Importan el número y tamaño de defectos, la altura, el estado de las capas, los materiales y si la pintura final está incluida. Conviene separar la reparación de la aplicación de pintura.": "The number and size of defects, height, condition of existing layers, materials and whether final painting is included all matter. It is useful to separate repairs from painting in the quote.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Se puede pintar directamente sobre una grieta?": "Can you paint directly over a crack?",
      "No sin valorar primero el tipo de grieta y su estabilidad.": "Not without first assessing the type of crack and whether it is stable.",
      "¿La reparación incluye pintar toda la pared?": "Does the repair include painting the whole wall?",
      "Solo si se especifica en el presupuesto.": "Only if specified in the quote.",
      "¿Cuándo se puede pintar después de masillar?": "When can you paint after filling?",
      "Depende del producto, del espesor y de las condiciones de secado. Sigue las instrucciones del fabricante.": "It depends on the product, thickness and drying conditions. Follow the manufacturer’s instructions.",
      "Consulta también": "You can also read",
      "la guía de preparación de paredes": "the wall preparation guide",
      "y": "and",
      "pintura interior": "interior painting"
    }
  },
  "/falsos-techos-pladur-malaga/": {
    "titleEs": "Falsos techos de pladur en Málaga | Aravena Reformas",
    "titleEn": "Plasterboard suspended ceilings in Málaga | Aravena Reformas",
    "descriptionEs": "Falsos techos de pladur en Málaga. Valoración del espacio, estructura, encuentros y preparación del acabado final.",
    "descriptionEn": "Plasterboard suspended ceilings in Málaga. Assessing available height, framework, junctions and final finish preparation.",
    "nodes": {
      "Falsos techos de pladur en Málaga": "Plasterboard suspended ceilings in Málaga",
      "Falsos techos · Málaga": "Suspended ceilings · Málaga",
      "Un falso techo de placa de yeso laminado crea un nuevo plano interior y puede resolver determinados acabados. Antes de elegir el sistema hay que revisar la altura disponible, la estructura, los encuentros con las paredes y las instalaciones existentes.": "A plasterboard suspended ceiling creates a new interior plane and can provide solutions for certain finishes. Before choosing a system, we check available height, framework, wall junctions and existing services.",
      "¿Quieres instalar o renovar un falso techo?": "Would you like to install or renew a suspended ceiling?",
      "Indica medidas aproximadas, altura y objetivo del trabajo.": "Tell us the approximate dimensions, available height and what you want to achieve.",
      "Consultar presupuesto": "Request a quote",
      "Qué revisar antes de instalar": "What to check before installation",
      "Altura libre": "Clear height",
      "El espacio disponible condiciona la solución y la pérdida de altura aceptable.": "Available space determines the solution and how much height can be lost.",
      "Estructura y soporte": "Framework and substrate",
      "El sistema de fijación debe ser adecuado a las condiciones del proyecto.": "The fixing system must be suitable for the project conditions.",
      "Instalaciones": "Services and installations",
      "Hay que identificar luminarias, registros y otras instalaciones para definir el trabajo.": "Lighting, access panels and other services must be identified to define the work.",
      "Acabado": "Finish",
      "Tratamiento de juntas, encuentros, preparación y pintura deben quedar especificados.": "Joint and junction treatment, preparation and painting should all be specified.",
      "Fases habituales": "Typical stages",
      "Medir la estancia y revisar el soporte.": "Measure the room and inspect the substrate.",
      "Definir placa, estructura, juntas y registros necesarios.": "Specify boards, framework, joints and required access panels.",
      "Montar el sistema de acuerdo con las especificaciones aplicables.": "Install the system in accordance with applicable specifications.",
      "Tratar juntas y encuentros y preparar la superficie.": "Treat joints and junctions and prepare the surface.",
      "Realizar la pintura final si está incluida.": "Carry out final painting if included.",
      "Elegir placas y materiales": "Choosing boards and materials",
      "Las placas se seleccionan según el entorno y las prestaciones que requiera el conjunto. Consulta": "Boards are selected according to the environment and performance required of the complete system. See",
      "tipos de placas de pladur": "types of plasterboard",
      "y": "and",
      "trabajos de pladur en Málaga": "plasterboard services in Málaga",
      "Precio de un falso techo": "Cost of a suspended ceiling",
      "Influyen metros cuadrados, forma de la estancia, altura, soporte, estructura, tipo de placa, encuentros y acabado. Luminarias, instalaciones y pintura deben identificarse por separado para comparar presupuestos.": "The price depends on area, room shape, height, substrate, framework, board type, junctions and finish. Lighting, services and painting should be itemised separately when comparing quotes.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Se puede instalar cualquier luminaria?": "Can any light fitting be installed?",
      "Hay que comprobar peso, tipo de luminaria, estructura y requisitos eléctricos. Las conexiones deben tratarse dentro del alcance profesional correspondiente.": "The weight, fitting type, framework and electrical requirements must be checked. Electrical connections must be handled within the appropriate professional scope.",
      "¿Una placa aísla por sí sola?": "Does a board provide insulation on its own?",
      "El resultado depende del sistema completo, los materiales, los encuentros y la ejecución.": "Performance depends on the complete system, materials, junctions and installation.",
      "¿Incluye pintura?": "Is painting included?",
      "Solo si el presupuesto contempla juntas, preparación e imprimación y pintura final.": "Only if the quote includes joint treatment, preparation, primer and final paint.",
      "Si quieres crear una división, consulta": "If you want to create a partition, see",
      "tabiques de pladur": "plasterboard partition walls"
    }
  },
  "/tabiques-pladur-malaga/": {
    "titleEs": "Tabiques de pladur en Málaga | Aravena Reformas",
    "titleEn": "Plasterboard partition walls in Málaga | Aravena Reformas",
    "descriptionEs": "Tabiques interiores de pladur en Málaga para reorganizar espacios. Valoración de medidas, estructura y acabado.",
    "descriptionEn": "Plasterboard partition walls in Málaga to reorganise interior spaces. Assessment of dimensions, framework and finish.",
    "nodes": {
      "Tabiques de pladur en Málaga para reorganizar interiores": "Plasterboard partition walls in Málaga for interior reorganisation",
      "Tabiques interiores · Málaga": "Interior partitions · Málaga",
      "Un tabique de placa de yeso laminado puede ayudar a reorganizar una vivienda sin construir una pared tradicional. La solución depende del uso de la estancia, las dimensiones, el soporte y las prestaciones que requiere el proyecto.": "A plasterboard partition can help reorganise a home without building a traditional masonry wall. The solution depends on room use, dimensions, substrate and the performance requirements of the project.",
      "¿Quieres dividir o reorganizar una estancia?": "Would you like to divide or reorganise a room?",
      "Cuéntanos qué espacios quieres separar, las medidas y si debe incorporarse una puerta.": "Tell us which spaces you want to separate, the dimensions and whether a door is needed.",
      "Consultar por WhatsApp": "Ask us on WhatsApp",
      "Qué hay que decidir": "What needs to be decided",
      "Distribución": "Layout",
      "Dimensiones, ubicación y relación con puertas, ventanas y recorridos.": "Dimensions, position and how the partition relates to doors, windows and circulation.",
      "Tipo de placa": "Board type",
      "La selección depende de las condiciones del espacio y prestaciones requeridas.": "The choice depends on room conditions and required performance.",
      "Aislamiento y cargas": "Insulation and loads",
      "Si se necesitan prestaciones específicas o colgar cargas, hay que definir el sistema y sus refuerzos.": "If specific performance or wall-mounted loads are required, the system and reinforcement must be planned.",
      "Acabado final": "Final finish",
      "Tratamiento de juntas, preparación y pintura si se ha incluido.": "Joint treatment, preparation and painting if included.",
      "Fases habituales": "Typical stages",
      "Medir y revisar suelo, paredes y techo.": "Measure and inspect the floor, walls and ceiling.",
      "Definir trazado, estructura y tipo de placa.": "Define the layout, framework and board type.",
      "Coordinar puertas e instalaciones antes de cerrar el tabique.": "Coordinate doors and services before closing the partition.",
      "Montar placas y tratar juntas y encuentros.": "Install boards and treat joints and junctions.",
      "Preparar la superficie para el acabado acordado.": "Prepare the surface for the agreed finish.",
      "Tipos de placa y materiales": "Board types and materials",
      "Hay placas diseñadas para condiciones diferentes. La selección debe seguir especificaciones técnicas, no solo el color o el nombre comercial. Consulta": "Boards are designed for different conditions. Selection should follow technical specifications, not just colour or brand name. See",
      "tipos de placas de pladur": "types of plasterboard",
      "Presupuesto de un tabique": "Partition wall quote",
      "Depende de longitud y altura, diseño, estructura, placas, huecos, encuentros y acabado. El presupuesto debe detallar qué incluye el montaje y si contempla preparación y pintura.": "It depends on length and height, design, framework, boards, openings, junctions and finish. The quote should specify what installation includes and whether preparation and painting are covered.",
      "Preguntas frecuentes": "Frequently asked questions",
      "¿Se pueden colgar muebles?": "Can furniture be mounted on it?",
      "Debe planificarse según peso, fijación y refuerzos necesarios. No todos los puntos son adecuados para cualquier carga.": "This must be planned according to weight, fixing method and required reinforcement. Not every point can support every load.",
      "¿Se puede pintar después?": "Can it be painted afterwards?",
      "Sí, cuando juntas y superficies estén preparadas adecuadamente. Consulta": "Yes, once joints and surfaces are properly prepared. See",
      "pintura interior": "interior painting",
      "¿Es igual que una pared de ladrillo?": "Is it the same as a brick wall?",
      "Son sistemas diferentes. La opción adecuada depende de uso, soporte y requisitos del proyecto.": "They are different systems. The right option depends on use, substrate and project requirements.",
      "Para trabajos de techo, consulta": "For ceiling work, see",
      "falsos techos de pladur": "plasterboard suspended ceilings",
      "o la página de": "or our page on",
      "pladur en Málaga": "plasterboard in Málaga"
    }
  },
  "/cuanto-cuesta-pintar-piso-malaga/": {
    "titleEs": "Cuánto cuesta pintar un piso en Málaga: factores",
    "titleEn": "How much does it cost to paint a flat in Málaga? | Aravena Reformas",
    "descriptionEs": "Qué influye en el precio de pintar un piso en Málaga: metros, preparación, materiales, mobiliario y qué debe incluir el presupuesto.",
    "descriptionEn": "How much does it cost to paint a flat in Málaga? Key factors include surface area, preparation, materials, furniture and what the quote should include.",
    "nodes": {
      "Cuánto cuesta pintar un piso en Málaga": "How much does it cost to paint a flat in Málaga?",
      "Guía de presupuestos · Pintura": "Quote guide · Painting",
      "No existe una cifra única válida para todos los pisos. Dos viviendas de la misma superficie pueden necesitar trabajos diferentes si una tiene paredes en buen estado y otra requiere reparación, alisado o protección adicional. Esta guía explica qué comparar antes de aceptar un presupuesto.": "There is no single price that applies to every flat. Two homes of the same size may need different work if one has walls in good condition while the other needs repairs, smoothing or extra protection. This guide explains what to compare before accepting a quote.",
      "Factores que más influyen en el coste": "The main factors affecting cost",
      "Superficie incluida": "Area included",
      "Hay que distinguir los metros cuadrados de vivienda de los metros reales de pared y techo que se pintarán.": "The floor area of the home is different from the actual wall and ceiling area that will be painted.",
      "Estado de las paredes": "Condition of the walls",
      "Grietas superficiales, agujeros, desconchados o gotelé pueden aumentar la preparación.": "Surface cracks, holes, flaking paint or textured finishes can increase preparation work.",
      "Muebles y protección": "Furniture and protection",
      "La distribución y el volumen de mobiliario pueden cambiar el tiempo necesario para proteger el espacio.": "The layout and amount of furniture can affect the time needed to protect the space.",
      "Pintura y acabado": "Paint and finish",
      "Producto, cambio de color, número de manos y acabado influyen en el alcance.": "Product, colour change, number of coats and finish all affect the scope.",
      "Qué debe aclarar el presupuesto": "What the quote should clarify",
      "Qué estancias, paredes, techos y elementos se pintan.": "Which rooms, walls, ceilings and elements will be painted.",
      "Si se incluye protección y movimiento de muebles.": "Whether protection and moving furniture are included.",
      "Qué reparaciones previas se contemplan.": "Which preparation and repair tasks are included.",
      "Qué productos o acabados se proponen y cuántas manos se prevén.": "Which products and finishes are proposed and how many coats are planned.",
      "Si materiales y trabajos complementarios están incluidos.": "Whether materials and additional work are included.",
      "Por qué el precio por metro cuadrado puede confundir": "Why a price per square metre can be misleading",
      "Un presupuesto puede incluir solo aplicación y otro puede añadir protección, reparación, imprimación y materiales. Para comparar, confirma que ambos describen el mismo alcance y condiciones.": "One quote may cover application only, while another includes protection, repairs, primer and materials. To compare them, make sure both describe the same scope and conditions.",
      "Qué información preparar antes de pedir precio": "What to prepare before requesting a quote",
      "Indica las estancias, si se pintan paredes y techos, altura aproximada, si hay muebles, color actual y acabado deseado. Las fotos ayudan a orientar la consulta, aunque pueden no sustituir una revisión.": "Tell us which rooms are included, whether walls and ceilings will be painted, approximate height, whether there is furniture, the current colour and desired finish. Photos help us understand the job, although they may not replace an inspection.",
      "¿Hay que alisar antes de pintar?": "Do walls need smoothing before painting?",
      "No siempre. Si la superficie está lisa y estable puede bastar una preparación localizada. Con gotelé o irregularidades extendidas puede valorarse el": "Not always. If the surface is smooth and sound, local preparation may be enough. If texture or unevenness extends across the room, we can assess",
      "alisado de paredes": "wall smoothing",
      "; para daños puntuales, consulta": "; for localised damage, see",
      "reparación superficial": "minor wall repairs",
      "Elegir la pintura adecuada": "Choosing the right paint",
      "El producto depende del soporte, el uso, la limpieza y el acabado buscado. Consulta": "The product depends on the surface, room use, cleaning needs and desired finish. See",
      "tipos de pintura para paredes y techos": "types of paint for walls and ceilings",
      "¿Quieres valorar la pintura de tu piso?": "Would you like a quote to paint your flat?",
      "Indica las estancias, superficies y estado actual.": "Tell us which rooms and surfaces are included and their current condition.",
      "Solicitar presupuesto": "Request a quote"
    }
  },
  "/tipos-pintura-paredes-techos/": {
    "titleEs": "Tipos de pintura para paredes y techos interiores",
    "titleEn": "Types of paint for interior walls and ceilings | Aravena Reformas",
    "descriptionEs": "Cómo elegir pintura para paredes y techos: acabado mate o satinado, facilidad de limpieza, soporte y uso de cada estancia.",
    "descriptionEn": "How to choose wall and ceiling paint: matt or satin finish, cleanability, surface type and room use.",
    "nodes": {
      "Tipos de pintura para paredes y techos: cómo elegir": "Types of paint for walls and ceilings: how to choose",
      "Guía de materiales · Pintura": "Materials guide · Painting",
      "La pintura adecuada no se elige solo por el color. Hay que considerar el soporte, el uso de la estancia, la frecuencia de limpieza, la luz y el acabado visual. Revisa siempre la ficha técnica del producto concreto.": "The right paint is not chosen by colour alone. Consider the substrate, room use, cleaning frequency, lighting and desired look. Always check the technical data sheet for the specific product.",
      "Pinturas al agua para interior": "Water-based interior paints",
      "Muchas paredes y techos interiores se pintan con pinturas plásticas o acrílicas al agua. Su cobertura, resistencia al frote, rendimiento y acabado varían según la formulación; no todas funcionan igual ni sirven para todos los soportes.": "Many interior walls and ceilings are painted with water-based emulsion or acrylic paints. Coverage, scrub resistance, spread rate and finish vary by formulation; not every product performs the same or suits every substrate.",
      "Mate, satinado o brillante": "Matt, satin or gloss",
      "Mate": "Matt",
      "Produce pocos reflejos y suele disimular mejor pequeñas irregularidades. La resistencia a la limpieza depende de la formulación.": "It produces little glare and usually hides small surface irregularities better. Cleanability depends on the formulation.",
      "Satinado": "Satin",
      "Refleja más luz y puede facilitar la limpieza en algunos productos, pero puede hacer más visibles los defectos.": "It reflects more light and may make cleaning easier with some products, but can make defects more visible.",
      "Brillante": "Gloss",
      "Refleja mucha luz y evidencia irregularidades. Es adecuado solo para superficies y sistemas concretos.": "It reflects a lot of light and highlights irregularities. It is suitable only for certain surfaces and systems.",
      "Elegir según la estancia": "Choosing paint for each room",
      "En dormitorios y salones se busca un acabado acorde a la luz. En zonas de más uso interesa revisar la resistencia al frote y las instrucciones de limpieza. En techos, un acabado con pocos reflejos suele limitar la visibilidad de pequeñas marcas.": "In bedrooms and living rooms, choose a finish that works with the lighting. In high-use areas, check scrub resistance and cleaning instructions. On ceilings, a low-sheen finish usually makes small marks less visible.",
      "Preparación del soporte": "Surface preparation",
      "Una buena pintura puede fallar si hay polvo, partes sueltas o reparaciones mal lijadas. La imprimación depende del material, la absorción y el estado. Consulta": "Even good paint can fail if there is dust, loose material or poorly sanded repairs. Primer depends on the material, absorbency and condition. See",
      "cómo preparar paredes antes de pintar": "how to prepare walls before painting",
      "¿Y si hay gotelé o daños?": "What if there is a textured finish or damage?",
      "La pintura no elimina el relieve ni corrige agujeros. Para un acabado liso puede requerirse": "Paint does not remove texture or repair holes. A smooth finish may require",
      "alisado de paredes": "wall smoothing",
      "; para defectos localizados, revisa": "; for localised defects, see",
      "reparación de paredes": "wall repairs",
      "Qué comprobar en la ficha técnica": "What to check in the technical data sheet",
      "Soportes y usos recomendados.": "Recommended substrates and uses.",
      "Rendimiento orientativo y condiciones en que se mide.": "Indicative coverage and the conditions under which it is measured.",
      "Tiempo entre manos y secado.": "Time between coats and drying time.",
      "Resistencia al frote y forma de limpieza.": "Scrub resistance and cleaning method.",
      "Compatibilidad con imprimaciones y pinturas anteriores.": "Compatibility with primers and existing paint.",
      "No hay una única pintura mejor para todas las viviendas. Si necesitas renovar tus paredes en Málaga, consulta": "There is no single best paint for every home. If you want to refresh your walls in Málaga, see",
      "nuestro servicio de pintura interior": "our interior painting service",
      "o": "or",
      "pintura de techos": "ceiling painting"
    }
  },
  "/preparar-paredes-antes-de-pintar/": {
    "titleEs": "Cómo preparar paredes antes de pintar | Guía práctica",
    "titleEn": "How to prepare walls before painting | Practical guide",
    "descriptionEs": "Guía para preparar paredes antes de pintar: limpieza, reparación de defectos, lijado, imprimación y comprobación del soporte.",
    "descriptionEn": "A practical guide to preparing walls before painting: cleaning, repairs, sanding, primer and surface checks.",
    "nodes": {
      "Cómo preparar paredes antes de pintar": "How to prepare walls before painting",
      "Guía práctica · Preparación": "Practical guide · Preparation",
      "La preparación influye en la adherencia y en el aspecto final. Antes de empezar hay que revisar la capa existente y elegir los tratamientos según el soporte; no todas las paredes necesitan el mismo proceso.": "Preparation affects paint adhesion and the final appearance. Before starting, inspect the existing coating and choose treatments for the substrate; not every wall needs the same process.",
      "1. Revisar la superficie": "1. Inspect the surface",
      "Busca pintura que se desprende, golpes, agujeros, grietas, polvo, grasa y manchas. Si hay signos de humedad activa o daños que vuelven a aparecer, primero debe estudiarse la causa.": "Look for peeling paint, dents, holes, cracks, dust, grease and stains. If there are signs of active damp or recurring damage, investigate the cause first.",
      "2. Limpiar y proteger": "2. Clean and protect",
      "Retira polvo y suciedad con un método compatible con el soporte. Protege suelos, muebles y elementos que no deben mancharse. Los residuos que comprometen la adherencia deben tratarse antes de pintar.": "Remove dust and dirt using a method suitable for the substrate. Protect floors, furniture and anything that must stay clean. Contaminants that affect adhesion must be dealt with before painting.",
      "3. Reparar defectos superficiales": "3. Repair surface defects",
      "Los pequeños agujeros pueden necesitar relleno, secado y lijado. Los desconchados requieren retirar las partes sin adherencia. Las grietas deben evaluarse antes de elegir tratamiento. Consulta": "Small holes may need filling, drying and sanding. Flaking paint must be removed where it has lost adhesion. Cracks should be assessed before choosing a treatment. See",
      "reparación de paredes en Málaga": "wall repairs in Málaga",
      "4. Valorar si hay que alisar": "4. Assess whether smoothing is needed",
      "Si existe gotelé o un relieve que se quiere eliminar, pintar directamente no producirá una pared lisa. Puede ser necesario estudiar el": "If there is a textured finish that you want to remove, painting directly over it will not create a smooth wall. It may be necessary to assess",
      "alisado de paredes": "wall smoothing",
      "5. Lijar y retirar el polvo": "5. Sand and remove dust",
      "El lijado regulariza algunas superficies y transiciones entre reparaciones. Debe hacerse con las precauciones adecuadas al material y después retirar el polvo para no afectar al acabado.": "Sanding evens out some surfaces and transitions between repairs. Use precautions suited to the material, then remove the dust so it does not affect the finish.",
      "6. Elegir imprimación y pintura": "6. Choose primer and paint",
      "La imprimación depende del soporte y de la absorción. Después se elige la pintura según el uso y el acabado. Consulta": "Primer depends on the substrate and absorbency. Then choose paint according to room use and desired finish. See",
      "la guía de tipos de pintura": "the paint types guide",
      "Errores frecuentes": "Common mistakes",
      "Pintar sobre polvo o grasa.": "Painting over dust or grease.",
      "No dejar secar los materiales de reparación.": "Not allowing repair materials to dry.",
      "Usar productos incompatibles con la superficie existente.": "Using products incompatible with the existing surface.",
      "Omitir la protección del entorno.": "Failing to protect the surrounding area.",
      "Intentar ocultar humedad activa o grietas sin valorar su origen.": "Trying to hide active damp or cracks without investigating their cause.",
      "¿Se puede usar Airless sin preparar?": "Can Airless be used without preparation?",
      "No. Airless cambia el método de aplicación, no las condiciones necesarias del soporte. Consulta": "No. Airless changes the application method, not the preparation requirements of the substrate. See",
      "pintura Airless en Málaga": "Airless painting in Málaga",
      "y nuestro servicio de": "and our",
      "pintura interior": "interior painting service",
      "¿Quieres preparar y pintar tus paredes?": "Would you like to prepare and paint your walls?",
      "Podemos valorar el estado y concretar qué preparación necesita la superficie.": "We can assess the condition and define the preparation the surface needs.",
      "Consultar el trabajo": "Discuss the job"
    }
  },
  "/tipos-placas-pladur-malaga/": {
    "titleEs": "Tipos de placas de pladur y sus usos | Málaga",
    "titleEn": "Types of plasterboard and their uses | Málaga",
    "descriptionEs": "Guía sobre tipos de placas de yeso laminado: estándar, resistentes a la humedad y sistemas con prestaciones específicas.",
    "descriptionEn": "Guide to plasterboard types: standard boards, moisture-resistant boards and systems with specific performance requirements.",
    "nodes": {
      "Tipos de placas de pladur y para qué se utilizan": "Types of plasterboard and what they are used for",
      "Guía de materiales · Pladur": "Materials guide · Plasterboard",
      "La elección de placa de yeso laminado depende de las condiciones del recinto y de las prestaciones exigidas al sistema completo. El color no debe ser la única referencia: hay que revisar la denominación y las especificaciones del fabricante.": "Choosing plasterboard depends on the room conditions and the performance required of the complete system. Colour should not be the only guide: check the product name and manufacturer specifications.",
      "Placa estándar": "Standard board",
      "Se utiliza en muchas divisiones y revestimientos interiores en condiciones normales. La idoneidad depende del uso, soporte, sistema de montaje y requisitos del proyecto.": "It is used for many interior partitions and linings under normal conditions. Suitability depends on room use, substrate, installation system and project requirements.",
      "Placas resistentes a la humedad": "Moisture-resistant boards",
      "Están diseñadas para determinados ambientes interiores con mayor exposición a humedad que una estancia seca. No equivalen a una impermeabilización ni son aptas para cualquier contacto directo con agua; hay que definir correctamente juntas y acabados.": "They are designed for certain interior environments with greater moisture exposure than a dry room. They are not a waterproofing system and are not suitable for every type of direct water contact; joints and finishes must be specified correctly.",
      "Placas con prestaciones frente al fuego": "Fire-performance boards",
      "Algunas placas forman parte de sistemas diseñados para requisitos específicos de comportamiento frente al fuego. La prestación depende del conjunto —estructura, número y tipo de placas, juntas y demás componentes— y de su instalación; no se debe atribuir una clasificación al sistema basándose solo en una placa.": "Some boards form part of systems designed to meet specific fire-performance requirements. Performance depends on the complete assembly—framework, number and type of boards, joints and other components—and its installation. A system rating should not be inferred from a single board alone.",
      "Soluciones acústicas": "Acoustic solutions",
      "El rendimiento acústico depende también de estructura, cámaras, aislamiento, encuentros y transmisión por flancos. Si se exige una prestación concreta, hay que definir el sistema completo.": "Acoustic performance also depends on the framework, cavities, insulation, junctions and flanking transmission. If a specific performance level is required, define the complete system.",
      "Qué sistema elegir": "Choosing a system",
      "La selección varía según uso, humedad, cargas, requisitos técnicos y acabado. Para una división, consulta": "The choice depends on use, moisture, loads, technical requirements and finish. For a partition, see",
      "tabiques de pladur": "plasterboard partition walls",
      "; para techos,": "; for ceilings, see",
      "falsos techos de pladur": "plasterboard suspended ceilings",
      "Qué confirmar antes de instalar": "What to confirm before installation",
      "Condiciones de humedad y uso del recinto.": "Moisture conditions and room use.",
      "Cargas, fijaciones y elementos suspendidos.": "Loads, fixings and suspended items.",
      "Prestaciones técnicas exigidas.": "Required technical performance.",
      "Tipo de estructura, juntas, sellados y acabado.": "Framework type, joints, seals and finish.",
      "Documentación del fabricante y normativa aplicable al caso.": "Manufacturer documentation and applicable regulations.",
      "Elegir la placa adecuada es solo una parte del trabajo. La estructura, los encuentros y el tratamiento de juntas también importan. Consulta": "Choosing the right board is only one part of the job. The framework, junctions and joint treatment also matter. See",
      "trabajos de pladur": "plasterboard services",
      "y": "and",
      "pintura interior": "interior painting"
    }
  },
  "/guias-pintura-reformas-malaga/": {
    "titleEs": "Guías de pintura y reformas en Málaga | Aravena Reformas",
    "titleEn": "Painting and renovation guides in Málaga | Aravena Reformas",
    "descriptionEs": "Guías prácticas sobre pintura, preparación de paredes, materiales, pladur y presupuestos para renovar interiores en Málaga.",
    "descriptionEn": "Practical guides to painting, wall preparation, materials, plasterboard and renovation quotes in Málaga.",
    "nodes": {
      "Guías de pintura, materiales y reformas interiores": "Painting, materials and interior renovation guides",
      "Recursos prácticos · Aravena Reformas": "Practical resources · Aravena Reformas",
      "Información práctica para entender trabajos de pintura y acabados interiores, elegir materiales y preparar una solicitud de presupuesto. Las guías complementan las páginas de servicio y no sustituyen la valoración de una vivienda.": "Practical information to understand painting and interior finishing work, choose materials and prepare a quote request. These guides complement our service pages and do not replace an assessment of a home.",
      "Presupuestos y planificación": "Quotes and planning",
      "Cuánto cuesta pintar un piso": "How much does it cost to paint a flat?",
      "Factores del precio, alcance y elementos que debe aclarar un presupuesto.": "Price factors, scope and details that a quote should clarify.",
      "Reformas de interiores": "Interior renovations",
      "Cómo definir una renovación parcial con pintura, alisado, pladur y acabados.": "How to define a partial renovation involving painting, wall smoothing, plasterboard and finishing.",
      "Pintura y preparación": "Painting and preparation",
      "Tipos de pintura para paredes y techos": "Types of paint for walls and ceilings",
      "Acabados y criterios de elección según soporte y estancia.": "Finishes and selection criteria according to the surface and room.",
      "Cómo preparar paredes antes de pintar": "How to prepare walls before painting",
      "Limpieza, reparación, lijado e imprimación.": "Cleaning, repairs, sanding and primer.",
      "Reparación de paredes": "Wall repairs",
      "Defectos superficiales y cuándo investigar el origen del daño.": "Surface defects and when to investigate their cause.",
      "Pladur y materiales": "Plasterboard and materials",
      "Tipos de placas de pladur": "Types of plasterboard",
      "Usos, límites y criterios para elegir materiales.": "Uses, limitations and criteria for choosing materials.",
      "Tabiques de pladur": "Plasterboard partition walls",
      "Qué definir antes de crear una división interior.": "What to define before creating an interior partition.",
      "Falsos techos de pladur": "Plasterboard suspended ceilings",
      "Altura, estructura, encuentros y acabado final.": "Height, framework, junctions and final finish.",
      "Trabajos específicos": "Specific jobs",
      "Pintar techos en Málaga": "Ceiling painting in Málaga",
      "Preparación y selección del acabado.": "Preparation and finish selection.",
      "Pintar puertas": "Door painting",
      "Materiales, preparación y acabados interiores.": "Materials, preparation and interior finishes.",
      "Pintar muebles de cocina": "Kitchen cabinet painting",
      "Materiales, superficies y viabilidad de la renovación.": "Materials, surfaces and the feasibility of refreshing them.",
      "Para solicitar una valoración, consulta": "To request an assessment, see",
      "pintura interior": "interior painting",
      ",": ",",
      "alisado de paredes": "wall smoothing",
      "pladur": "plasterboard",
      "o": "or",
      "pintura Airless en Málaga": "Airless painting in Málaga"
    }
  }
};

  const NEW_PAGE_ORIGINAL_TEXT = new WeakMap();
  const applyNewPage = (lang) => {
    const path = location.pathname.replace(/index\.html$/i, '').replace(/\/?$/, '/');
    const page = NEW_PAGE_TRANSLATIONS[path];
    if (!page) return;
    const title = lang === 'en' ? page.titleEn : page.titleEs;
    const description = lang === 'en' ? page.descriptionEn : page.descriptionEs;
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[property="og:locale"]', lang === 'en' ? 'en_GB' : 'es_ES');
    const root = document.querySelector('main');
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!NEW_PAGE_ORIGINAL_TEXT.has(node)) NEW_PAGE_ORIGINAL_TEXT.set(node, node.nodeValue);
      const original = NEW_PAGE_ORIGINAL_TEXT.get(node);
      const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
      if (!match) return;
      const key = match[2].trim();
      if (!key) return;
      const translated = page.nodes[key] || NEW_PAGE_SHARED_TEXT_EN[key];
      if (lang === 'en' && translated) node.nodeValue = match[1] + translated + match[3];
      else node.nodeValue = original;
    });
  };

  const pageId = () => {
    // Only return an ID when this route has dedicated translations and metadata.
    // Unknown service pages must keep their own HTML instead of falling back to the homepage.
    const path = location.pathname.replace(/\/index\.html$/i, '/').replace(/\/+$/, '') || '/';
    const routeIds = {
      '/': 'home',
      '/reformas-malaga': 'reformas',
      '/pintura-airless-malaga': 'airless',
      '/pintura-malaga': 'pintura',
      '/alisado-paredes-malaga': 'alisado',
      '/pladur-malaga': 'pladur',
      '/pintura-muebles-malaga': 'muebles',
      '/contacto': 'contacto',
      '/proyectos': 'proyectos',
      '/privacidad': 'privacidad',
      '/privacidad.html': 'privacidad'
    };
    return routeIds[path] || null;
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

  const setTextAllPreservingLinks = (selector, values) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (values[index] == null) return;
      const link = el.querySelector('a');
      if (link) link.textContent = values[index];
      else el.textContent = values[index];
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
      setText('#mainNav [data-nav="services"]', t.services);
      setText('#mainNav [data-nav="projects"]', t.projects);
      setText('#mainNav [data-nav="process"]', t.process);
      setText('#mainNav [data-nav="contact"]', t.contact);
      setText('.menu', t.menu);
      setAttr('.menu', 'aria-label', t.menuOpen);
      setText('.nav-cta', t.quote);
      setAttr('.brand-mark', 'alt', T[lang].home.logoAlt);
    } else if (body.classList.contains('page-service') || body.classList.contains('page-contact') || body.classList.contains('page-projects')) {
      const navLabels = [
        ['/', t.home],
        ['/reformas-malaga/', t.reforms],
        ['/pintura-malaga/', t.painting],
        ['/guias-pintura-reformas-malaga/', t.guides],
        ['/pintura-airless-malaga/', t.airless],
        ['/alisado-paredes-malaga/', t.smoothing],
        ['/pladur-malaga/', t.pladur],
        ['/proyectos/', t.projects],
        ['/contacto/', t.contact]
      ];
      navLabels.forEach(([href, label]) => {
        setText('header nav a[href="' + href + '"]', label);
      });
    }

    setText('footer a[href="/contacto/"]', t.contact);
    setText('footer a[href="/privacidad.html"]', t.privacy);
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
    // Map translations to the service URL so content remains correct if cards are reordered.
    const serviceTranslationsByPath = {
      '/reformas-malaga/': [t.service1Title, t.service1Text],
      '/pintura-malaga/': [t.service2Title, t.service2Text],
      '/alisado-paredes-malaga/': [t.service3Title, t.service3Text],
      '/pladur-malaga/': [t.service4Title, t.service4Text],
      '/reparacion-paredes-malaga/': [t.service5Title, t.service5Text],
      '/pintura-airless-malaga/': [t.service6Title, t.service6Text]
    };
    document.querySelectorAll('#servicios .service').forEach((card) => {
      const link = card.querySelector('h3 a[href]');
      if (!link) return;
      const translation = serviceTranslationsByPath[new URL(link.href, window.location.origin).pathname];
      if (!translation) return;
      link.textContent = translation[0];
      const description = card.querySelector('p');
      if (description) description.textContent = translation[1];
    });

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
    if (!t) return; // No dedicated translation: preserve this page's original content.
    setText('main .eyebrow', t.eyebrow);
    setText('main h1', t.title);
    setText('main .lead', t.lead);
    setTextAll('main .card h3', [t.card1Title, t.card2Title, t.card3Title, t.card4Title]);
    setTextAll('main .card p', [t.card1Text, t.card2Text, t.card3Text, t.card4Text]);
    if (Array.isArray(t.sectionTitles)) setTextAll('main h2', t.sectionTitles);
    setText('main .cta strong', t.quoteTitle);
    setText('main .cta .btn', T[lang].common.quoteButton);

    const ctaTextNode = Array.from(document.querySelectorAll('.cta')).flatMap((cta) =>
      Array.from(cta.childNodes)
    ).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (ctaTextNode) ctaTextNode.textContent = t.quoteText || t.directQuote || T[lang].common.directQuote;
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

    const paragraphs = [t.p1,t.p2,t.p3,t.p4,t.p5,t.p6,t.p7,t.p8,t.p9,t.p10,t.p11,t.p12,t.p13,t.p14,t.p15,t.p16,t.p17,t.p18,t.p19,t.p20,t.p21,t.p22,t.p23];
    document.querySelectorAll('main section p').forEach((el, index) => {
      if (paragraphs[index] != null) el.innerHTML = paragraphs[index];
    });
  };

  const applyMeta = (lang) => {
    const id = pageId();
    const pageMeta = id ? META[id] : null;
    const data = pageMeta ? pageMeta[lang] : null;
    if (!data) return; // Keep the static per-page metadata for untranslated routes.
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
    applyNewPage(lang);
    updateWhatsAppLinks(lang);
  };

  const init = () => {
    addLanguageSwitcher();
    applyLanguage(safeGetLanguage());
  };


  document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu')) return;
    const lang = safeGetLanguage();
    const t = T[lang].common;
    setText('.menu', t.menu);
    setAttr('.menu', 'aria-label', document.querySelector('.menu')?.getAttribute('aria-expanded') === 'true' ? t.menuClose : t.menuOpen);
  });

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