export interface GalleryImage {
    src: string;
    type?: "mobile" | "desktop";
}

export interface ProjectData {
    slug: string;
    category: "mobile" | "web" | "backend";
    technologies: string[];
    gallery: GalleryImage[];
    githubUrl?: string;
}

export const projectDetails: ProjectData[] = [
    {
        slug: "mesajil-ecommerce",
        category: "mobile",
        technologies: ["Kotlin", "Android Studio", "MySQL", "REST API"],
        githubUrl: "https://github.com/HereticSoba/Mesajil-AppMovil",
        gallery: [
            { src: "/projects/mesajil/login.jpeg", type: "mobile" },
            { src: "/projects/mesajil/registro.jpeg", type: "mobile" },
            { src: "/projects/mesajil/home.jpeg", type: "mobile" },
            { src: "/projects/mesajil/checkout.jpeg", type: "mobile" },
            { src: "/projects/mesajil/pago.jpeg", type: "mobile" },
            { src: "/projects/mesajil/profile.jpeg", type: "mobile" },
        ],
    },
    {
        slug: "mesajil-api",
        category: "backend",
        technologies: [".NET 8", "C#", "MySQL", "JWT", "Swagger"],
        githubUrl: "https://github.com/HereticSoba/Mesajil-AppMovil",
        gallery: [
            { src: "/projects/mesajilapi/documentacion.png", type: "desktop" },
            { src: "/projects/mesajilapi/operacionescrud.png", type: "desktop" },
            { src: "/projects/mesajilapi/authjwt.png", type: "desktop" },
        ],
    },
    {
        slug: "movies-api-microservices",
        category: "backend",
        technologies: [
            "Java", "Spring Boot", "Spring Cloud", "OpenFeign",
            "MapStruct", "Swagger", "Eureka Server", "Config Server",
            "Keycloak", "OAuth2", "Maven", "Docker", "MySQL"
        ],
        githubUrl: "https://github.com/HereticSoba/MicroservicioPeliculas",
        gallery: [
            { src: "/projects/movies-api-microservices/eureka.png", type: "desktop" },
            { src: "/projects/movies-api-microservices/keycloak.png", type: "desktop" },
            { src: "/projects/movies-api-microservices/api-peliculas.png", type: "desktop" },
            { src: "/projects/movies-api-microservices/api-resenas.png", type: "desktop" },
            { src: "/projects/movies-api-microservices/docker.png", type: "desktop" },
        ],
    },
];