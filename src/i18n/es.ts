const es = {
    navbar: {
        home: "Inicio",
        about: "Sobre mi",
        projects: "Proyectos",
        stack: "Stack",
        github: "GitHub",
        experience: "Experiencia",
        contact: "Contacto",
        cv: "Descargar CV",
    },

    hero: {
        greeting: "Hola, soy Diego Solórzano",
        title: "Desarrollador",
        titleHighlight: "Full stack",
        description: "Me enfoco en desarrollar aplicaciones móviles, APIs y soluciones de software que logren ser escalables, mantenibles y con buenas prácticas de desarrollo.",
        projectsButton: "Ver proyectos",
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
        viewProject: "Ver proyecto",
        viewGithub: "Ver en GitHub ↗",
        preview: "Vista previa",
        imageAlt: "Vista previa de",
        descriptions: {
            "mesajil-ecommerce":
                "Aplicación móvil de comercio electrónico desarrollada para gestionar usuarios, productos, favoritos y compras, integrada con servicios backend.",
            "mesajil-api":
                "API REST desarrollada para gestionar las operaciones principales de la plataforma, con conexión a MySQL y autenticación mediante JWT.",
            "movies-api-microservices":
                "Proyecto backend orientado al desarrollo de servicios y APIs, trabajado con arquitectura de microservicios y comunicación entre servicios.",
        },
    },

    skills: {
        label: "/ STACK",
        title: "Tecnologías y",
        titleHighlight: "herramientas",
        subtitle: "Tecnologías y herramientas que utilizo para desarrollar, probar y mantener mis proyectos.",
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
        roles: {
            soporte: {
                year: "2026",
                position: "Técnico de soporte",
                company: "Alternativa Tecnológica S.A.C. - Proyecto BCP",
                description: "Atención y resolución de incidencias de hardware y software de segundo nivel, gestión y seguimiento de tickets en Jira, instalación y configuración de equipos, mantenimiento preventivo y correctivo y gestión de equipos unidos a dominio.",
                highlights: ["Jira", "Active Directory", "Hardware", "Software"],
            },
            ventas: {
                year: "2025",
                position: "Asesor de ventas",
                company: "Amaru Store E.I.R.L.",
                description: "Gestión de apertura del local, control de inventario y solicitud de componentes, laptops y equipos para puntos de venta. Asesoramiento especializado en la selección de equipos tecnológicos.",
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
        role: "Desarrollador de sistemas",
        backToTop: "Volver arriba",
        copyright: "© {{year}} Desarrollado por Diego Solórzano.",
        builtWith: "Hecho con React + TypeScript",
    },

    projectDetail: {
        backToProjects: "Volver a proyectos",
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
    },
};

export default es;