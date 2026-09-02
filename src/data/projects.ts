export interface GalleryImage {
    src: string;
    title: string;
}

export interface ProjectData {
    slug: string;
    title: string;
    description: string;
    gallery: GalleryImage[];
    about: string[];
    technologies: string[];
    features: string[];
}

export const projectDetails: ProjectData[] = [
    {
        slug: "mesajil-ecommerce",
        title: "Mesajil E-commerce",
        description: "Aplicación móvil de comercio electrónico para realizar compras, pedidos, gestionar usuarios, productos y stock. Integrada con servicio backend.",

        gallery: [
            {
                src: "/projects/mesajil/login.jpeg",
                title: "INICIO DE SESIÓN",
            },
            {
                src: "/projects/mesajil/registro.jpeg",
                title: "REGISTRO DE USUARIO",
            },
            {
                src: "/projects/mesajil/home.jpeg",
                title: "PÁGINA PRINCIPAL",
            },
            {
                src: "/projects/mesajil/checkout.jpeg",
                title: "FINALIZAR COMPRA",
            },
            {
                src: "/projects/mesajil/pago.jpeg",
                title: "PANTALLA DE PAGO",
            },
            {
                src: "/projects/mesajil/profile.jpeg",
                title: "PERFIL DE USUARIO",
            },
        ],

        about: [
            "Mesajil E-Commerce es una aplicación móvil desarrollada para gestionar la experiencia de compra desde dispositivos móviles.",
            "La aplicación permite a los usuarios explorar nuestros productos, gestionar su carrito y realizar sus compras mediante una interfaz orientada a una experiencia rápida y sencilla.",
        ],

        technologies: [
            "Kotlin",
            "Android Studio",
            "MySQL",
            "REST API",
        ],

        features: [
            "Gestión de usuarios",
            "Catálogo de productos",
            "Gestión de favoritos",
            "Carrito de compras",
            "Proceso de compra",
            "Integración con servicios backend",
        ],
    },

    {
        slug: "mesajil-api",
        title: "Mesajil API",
        description: "API REST desarrollada para gestionar las operaciones principales de la plataforma Mesajil, con conexión a MySQL y autenticación mediante JWT.",

        gallery: [
            {
                src: "/projects/mesajilapi/documentacion.png",
                title: "DOCUMENTACIÓN SWAGGER",
            },
            {
                src: "/projects/mesajilapi/operacionescrud.png",
                title: "OPERACIONES CRUD",
            },
            {
                src: "/projects/mesajilapi/authjwt.png",
                title: "AUTENTICACIÓN JWT",
            },
        ],

        about: [
            "Mesajil API es un servicio backend desarrollado para centralizar las operaciones de la plataforma.",
            "La API permite gestionar información mediante endpoints REST y establecer comunicación con una base de datos MySQL.",
        ],

        technologies: [
            ".NET 8",
            "C#",
            "MySQL",
            "JWT",
            "Swagger",
        ],

        features: [
            "API REST",
            "CRUD de información",
            "Conexión con MySQL",
            "Autenticación JWT",
            "Documentación Swagger",
            "Arquitectura por capas",
        ],
    },
    {
        slug: "movies-api-microservices",
        title: "Movies API & Microservices",
        description: "Proyecto backend orientado al desarrollo de servicios y APIs, trabajado con arquitectura de microservicios y comunicación entre servicios.",

        gallery: [
            {
                src: "/projects/movies-api-microservices/movies1.jpeg",
                title: "CAPTURA 1",
            },
            {
                src: "/projects/movies-api-microservices/movies2.jpeg",
                title: "CAPTURA 2",
            },
            {
                src: "/projects/movies-api-microservices/movies3.jpeg",
                title: "CAPTURA 3",
            },
        ],

        about: [
            "Proyecto backend orientado al desarrollo de APIs y servicios independientes.",
            "Se trabajó con Spring Boot y una arquitectura de microservicios para separar las diferentes responsabilidades del sistema.",
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "REST",
            "SOAP",
            "Maven",
            "Docker",
        ],

        features: [
            "Desarrollo de APIs REST",
            "Arquitectura de microservicios",
            "Servicios SOAP",
            "Comunicación entre servicios",
            "Pruebas con Postman",
            "Gestión de dependencias con Maven",
        ],
    },
];
