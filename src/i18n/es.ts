const es = {
    navbar: {
        home: "Inicio",
        about: "Sobre mi",
        projects: "Proyectos",
        stack: "Stack",
        github: "GitHub",
        experience: "Experiencia",
        contact: "Contacto",
        language: "Idioma",
    },

    hero: {
        greeting: "Hola, soy Diego Solórzano",
        title: "Desarrollador",
        titleHighlight: "Full stack",
        description: "Me enfoco en desarrollar aplicaciones móviles, APIs y soluciones de software que logren ser escalables, mantenibles y con buenas prácticas de desarrollo.",
        cvButton: "Descargar CV",
        mobile: "Móvil",
        backend: "Backend",
    },

    about: {
        label: "/ SOBRE MÍ",
        title: "Desarrollo soluciones",
        titleHighlight: "de software",
        paragraph1:
            "Desarrollador full stack jr., con experiencia en soporte técnico TI en entornos corporativos y desarrollo de aplicaciones móviles y servicios backend.",
        paragraph2:
            "Me interesa desarrollar soluciones de software que integren aplicaciones, servicios y bases de datos, buscando crear sistemas funcionales, mantenibles y orientados a las necesidades del cliente.",
        paragraph3:
            "Mi experiencia en soporte TI me ha permitido desarrollar una visión práctica de la tecnología, desde la atención y resolución de incidencias hasta la implementación y mantenimiento de soluciones.",
        readMore: "Leer más",
        readLess: "Leer menos",
        development: "Desarrollo",
        developmentDescription: "Frontend · Backend · Mobile · APIs",
        experience: "Experiencia",
        experienceDescription: "Soporte TI · Entornos corporativos",
        methodology: "Metodología",
        languages: "Idiomas",
        spanish: "Español · Nativo",
        english: "Inglés · Avanzado",
    },

    projects: {
        label: "/ PROYECTOS",
        title: "Cosas que he ",
        titleHighlight: "construido",
        introduction:
            "Una selección de aplicaciones, APIs y soluciones de software desarrollados durante mi formación y experiencia.",
        all: "Todos",
        mobile: "Móvil",
        web: "Web",
        backend: "Backend",
        comingSoon: "Próximamente",
        comingSoonDescription: "Estoy preparando nuevos proyectos web.",
        prevProject: "Proyecto anterior",
        nextProject: "Proyecto siguiente",
        viewDetails: "Ver detalles",
        preview: "Vista previa",
        imageAlt: "Vista previa de",
    },

    skills: {
        label: "/ STACK",
        title: "Tecnologías y",
        titleHighlight: "herramientas",
        subtitle: "Tecnologías y herramientas que utilizo para desarrollar, probar y mantener mis proyectos.",
        categoryTabs: "Categorías de tecnología",
        totalTechnologies: "{{count}} tecnologías",
        groups: {
            languages: "Lenguajes",
            frameworks: "Frameworks & Plataformas",
            databases: "Bases de datos",
            tools: "Herramientas",
        },
    },

    github: {
        label: "/ GITHUB",
        title: "Contribuciones en",
        titleHighlights: "Github",
        introduction: "Contribuciones realizadas en distintos proyectos de desarrollo.",
        contributions_one: "{{count}} contribución",
        contributions_other: "{{count}} contribuciones",
        lastYear: "Último año",
        viewGitHub: "Ver Github ↗",
        loading: "Cargando contribuciones...",
        error: "No se pudo cargar la actividad",
        less: "Menos",
        more: "Más",
    },

    experience: {
        label: "/ EXPERIENCIA",
        title: "Experiencia",
        titleHighlight: "profesional",
        subtitle: "Experiencia adquirida en entornos corporativos y comerciales, desarrollando habilidades técnicas, operativas y de atención.",
        viewDetails: "Ver detalles",
        hideDetails: "Ocultar detalles",
        roles: {
            soporte: {
                year: "2026",
                position: "Técnico de soporte",
                company: "Alternativa Tecnológica S.A.C. - Proyecto BCP",
                details: [
                    "Atención y resolución de incidencias de hardware y software de segundo nivel.",
                    "Gestión y seguimiento de tickets mediante Jira.",
                    "Seguimiento proactivo a usuarios para verificar el estado de sus equipos e identificar posibles inconvenientes.",
                    "Instalación, configuración, mantenimiento preventivo y correctivo de equipos.",
                    "Gestión de equipos unidos en dominio (Active Directory).",
                    "Documentación y seguimiento de incidencias hasta su resolución.",
                ],
                highlights: ["Jira", "Active Directory", "Hardware", "Software"],
            },
            ventas: {
                year: "2025",
                position: "Asesor de ventas",
                company: "Amaru Store E.I.R.L.",
                details: [
                    "Gestión de apertura del establecimiento y preparación del punto de venta.",
                    "Control de inventario y solicitud de componentes, laptops y equipos para negocios.",
                    "Asesoramiento especializado a clientes en la selección de computadores, laptops y dispositivos para entornos comerciales.",
                    "Orientación sobre equipos complementarios, como impresoras térmicas y lectores de códigos de barras.",
                ],
                highlights: ["Inventario", "Tecnología", "Atención al cliente", "Ventas"],
            },
        },
    },

    contact: {
        label: "/ CONTACTO",
        title: "¡HABLEMOS",
        titleHighlight: "!",
        subtitle: "Estoy abierto a oportunidades laborales, proyectos y colaboraciones relacionadas con desarrollo.",
        links: {
            cv: "Currículum",
            downloadCv: "Descargar CV",
        },
        form: {
            title: "CONTÁCTAME",
            nameLabel: "NOMBRE *",
            namePlaceholder: "Tu nombre",
            emailLabel: "EMAIL *",
            emailPlaceholder: "ejemplo@email.com",
            subjectLabel: "ASUNTO *",
            selectOption: "-- Selecciona una opción --",
            options: {
                job: "Oportunidad Laboral",
                collaboration: "Colaboración",
                project: "Proyecto",
                other: "Otro",
            },
            messageLabel: "MENSAJE *",
            messagePlaceholder: "Escribe tu mensaje...",
            maxChars: "Máximo 1000 caracteres.",
            requiredField: "* Campo requerido.",
            sendButton: "ENVIAR MENSAJE",
            sendingButton: "ENVIANDO...",
            statusSuccess: "Correo enviado correctamente.",
            statusError: "No se pudo enviar el correo. Inténtelo nuevamente.",
        },
        errors: {
            nameRequired: "El nombre es obligatorio.",
            nameMinLength: "El nombre debe tener al menos 2 caracteres.",
            namePattern: "El nombre solo puede contener letras y espacios.",
            emailRequired: "El correo electrónico es obligatorio.",
            emailInvalid: "Ingrese un correo electrónico válido.",
            subjectRequired: "Selecciona un asunto.",
            messageRequired: "El mensaje es obligatorio.",
            messageMinLength: "El mensaje debe tener al menos 10 caracteres.",
        },
    },

    footer: {
        role: "Desarrollador Full Stack",
        backToTop: "Volver arriba",
        copyright: "© {{year}} Desarrollado por Diego Solórzano.",
        builtWith: "Hecho con React + TypeScript",
    },

    projectDetail: {
        backToProjects: "Volver a proyectos",
        liveDemo: "Ver en vivo",
        viewOnGithub: "Ver en GitHub",
        projectLabel: "/ PROYECTO",
        notFoundLabel: "/ PROYECTO",
        notFoundTitle: "Proyecto no encontrado",
        notFoundDescription: "El proyecto a consultar está en desarrollo o no existe.",
        galleryLabel: "/ GALERÍA",
        screenshots: "Capturas de pantalla",
        aboutLabel: "/ SOBRE EL PROYECTO",
        stackLabel: "/ STACK TECNOLÓGICO",
        featuresLabel: "/ CARACTERÍSTICAS PRINCIPALES",
        closeGallery: "Cerrar galería",
        prevImage: "Imagen anterior",
        nextImage: "Imagen siguiente",
    },

    projectsData: {
        "mesajil-ecommerce": {
            title: "Mesajil E-Commerce",
            description: "Aplicación móvil de comercio electrónico desarrollada para gestionar usuarios, productos, favoritos y compras, integrada con servicios backend.",
            about: [
                "Aplicación desarrollada como solución de comercio electrónico móvil, orientada a ofrecer una experiencia intuitiva para los usuarios.",
                "Permite explorar productos, gestionar el carrito de compras y sincronizar la información mediante una API REST en tiempo real."
            ],
            features: [
                "Catálogo dinámico de productos con filtros de búsqueda.",
                "Gestión de carrito de compras y favoritos local/remoto.",
                "Autenticación segura de usuarios e historial de pedidos."
            ],
            galleryTitles: [
                "INICIO DE SESIÓN",
                "REGISTRO DE USUARIO",
                "PÁGINA PRINCIPAL",
                "FINALIZAR COMPRA",
                "PANTALLA DE PAGO",
                "PERFIL DE USUARIO"
            ]
        },
        "mesajil-api": {
            title: "Mesajil API",
            description: "API REST desarrollada para gestionar las operaciones principales de la plataforma, con conexión a MySQL y autenticación mediante JWT.",
            about: [
                "Servicio backend encargado de procesar la lógica de negocio central de la plataforma Mesajil.",
                "Diseñado bajo arquitecturas escalables y patrones de diseño limpios."
            ],
            features: [
                "Autenticación y autorización basada en JSON Web Tokens (JWT).",
                "Documentación interactiva de endpoints utilizando Swagger.",
                "Integración eficiente con base de datos relacional MySQL."
            ],
            galleryTitles: [
                "DOCUMENTACIÓN SWAGGER",
                "OPERACIONES CRUD",
                "AUTENTICACIÓN JWT"
            ]
        },
        "movies-api-microservices": {
            title: "Movies API & Microservices",
            description: "Solución en base a una arquitectura de microservicios desarrollada con Spring Boot, integrando descubrimiento y configuración de servicios, autenticación mediante OAuth2 y comunicación entre microservicios.",
            about: [
                "Movies API & Microservices es una solución backend desarrollada bajo una arquitectura de microservicios, con servicios independientes para gestionar las diferentes responsabilidades del sistema.",
                "El proyecto tiene integrado Eureka Server para el descubrimiento de servicios y Config Server para centralizar la configuración de los microservicios. Además, se utilizó Keycloak con OAuth2 para la autenticación y autorización."
            ],
            features: [
                "Arquitectura de microservicios",
                "Descubrimiento de servicios con Eureka",
                "Configuración centralizada con Config Server",
                "Autenticación y autorización con Keycloak",
                "Comunicación entre servicios con OpenFeign",
                "Contenerización con Docker"
            ],
            galleryTitles: [
                "EUREKA SERVER",
                "KEYCLOAK",
                "SWAGGER - API PELICULAS",
                "SWAGGER - API RESEÑAS",
                "DOCKER"
            ]
        },
        "gitcord": {
            title: "GitCord",
            description: "Bot serverless que envía notificaciones de GitHub a canales de Discord en tiempo real, con un panel web para gestionar las conexiones.",
            about: [
                "Bot que escucha eventos de GitHub mediante webhooks y publica notificaciones formateadas en un canal de Discord, sin necesidad de mantener un servidor propio.",
                "Incluye un panel web con inicio de sesión mediante Supabase, desde donde se registran, prueban y eliminan las conexiones entre repositorios y canales de Discord."
            ],
            features: [
                "Notificaciones de push con autor, cantidad de commits y enlace a los cambios.",
                "Notificaciones de issues al abrirse, editarse o cerrarse, con título, autor y enlace.",
                "Panel para registrar y eliminar conexiones, con webhooks enmascarados.",
                "Prueba de conexión que envía un mensaje de verificación al canal de Discord."
            ],
            galleryTitles: []
        },
    },
};

export default es;