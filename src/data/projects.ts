export interface GalleryImage {
    src: string;
    title: string;
    type?: "mobile" | "desktop";
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
                type: "mobile",
            },
            {
                src: "/projects/mesajil/registro.jpeg",
                title: "REGISTRO DE USUARIO",
                type: "mobile",
            },
            {
                src: "/projects/mesajil/home.jpeg",
                title: "PÁGINA PRINCIPAL",
                type: "mobile",
            },
            {
                src: "/projects/mesajil/checkout.jpeg",
                title: "FINALIZAR COMPRA",
                type: "mobile",
            },
            {
                src: "/projects/mesajil/pago.jpeg",
                title: "PANTALLA DE PAGO",
                type: "mobile",
            },
            {
                src: "/projects/mesajil/profile.jpeg",
                title: "PERFIL DE USUARIO",
                type: "mobile",
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
                type: "desktop",
            },
            {
                src: "/projects/mesajilapi/operacionescrud.png",
                title: "OPERACIONES CRUD",
                type: "desktop",
            },
            {
                src: "/projects/mesajilapi/authjwt.png",
                title: "AUTENTICACIÓN JWT",
                type: "desktop",
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
        description: "Solución en base a una arquitectura de microservicios desarrollada con Spring Boot, integrando descubrimiento y configuración de servicios, autenticación mediante OAuth2 y comunicación entre microservicios.",

        gallery: [
            {
                src: "/projects/movies-api-microservices/eureka.png",
                title: "EUREKA SERVER",
                type: "desktop",
            },
            {
                src: "/projects/movies-api-microservices/keycloak.png",
                title: "KEYCLOAK",
                type: "desktop",
            },
            {
                src: "/projects/movies-api-microservices/api-peliculas.png",
                title: "SWAGGER - API PELICULAS",
                type: "desktop",
            },
            {
                src: "/projects/movies-api-microservices/api-resenas.png",
                title: "SWAGGER - API RESEÑAS",
                type: "desktop",
            },
            {
                src: "/projects/movies-api-microservices/docker.png",
                title: "DOCKER",
                type: "desktop",
            },
        ],

        about: [
            "Movies API & Microservices es una solución backend desarrollada bajo una arquitectura de microservicios, con servicios independientes para gestionar las diferentes responsabilidades del sistema.",
            "El proyecto tiene integrado Eureka Server para el descubrimiento de servicios y Config Server para centralizar la configuración de los microservicios. Además, se utilizó Keycloak con OAuth2 para la autenticación y autorización.",
            "Los componentes fueron dockerizados para facilitar la ejecución y el despliegue, incorporando una database, MapStruct y Swagger dentro de la solución.",
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Spring Cloud",
            "OpenFeign",
            "MapStruct",
            "Swagger",
            "Eureka Server",
            "Config Server",
            "Keycloak",
            "OAuth2",
            "Maven",
            "Docker",
            "MySQL",
        ],

        features: [
            "Arquitectura de microservicios",
            "Descubrimiento de servicios con Eureka",
            "Configuración centralizada con Config Server",
            "Autenticación y autorización con Keycloak",
            "Integración con OAuth2",
            "Comunicación entre servicios con OpenFeign",
            "Mapeo de entidades con MapStruct",
            "Documentación de APIs con Swagger",
            "Contenerización con Docker",
            "Pruebas de APIs con Postman",
        ],
    },
];
