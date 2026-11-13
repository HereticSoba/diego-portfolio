export interface GalleryImage {
    src: string;
    type?: "mobile" | "desktop";
}

export type ProjectCategory = "mobile" | "web" | "backend";

export interface ProjectData {
    slug: string;
    categories: ProjectCategory[];
    technologies: string[];
    extraTechnologies?: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface ProjectDetailData extends ProjectData {
    gallery: GalleryImage[];
}

export const ProjectDetails: ProjectData[] = [
    {
        slug: "mesajil-ecommerce",
        categories: ["mobile"],
        technologies: ["Kotlin", "Android", "MySQL", "REST API"],
        image: "/projects/mesajil-ecommerce.jpg",
        githubUrl: "https://github.com/HereticSoba/Mesajil-AppMovil",
    },
    {
        slug: "mesajil-api",
        categories: ["backend"],
        technologies: [".NET 8", "C#", "MySQL", "JWT", "Swagger"],
        image: "/projects/mesajil-api.png",
        githubUrl: "https://github.com/HereticSoba/Mesajil-Backend",
    },
    {
        slug: "movies-api-microservices",
        categories: ["backend"],
        technologies: ["Java", "Spring Boot", "OpenFeign", "Keycloak", "Docker"],
        image: "/projects/microservicios.png",
        githubUrl: "https://github.com/HereticSoba/MicroservicioPeliculas",
    },
    {
        slug: "gitcord",
        categories: ["backend", "web"],
        technologies: ["Node.js", "Vercel Functions", "Supabase", "Axios", "GitHub Webhooks", "Discord Webhooks"],
        image: "/projects/gitcord-logo.png",
        githubUrl: "https://github.com/HereticSoba/github-discordbot",
    },
];

export const projectDetails: ProjectDetailData[] = [
    {
        slug: "mesajil-ecommerce",
        categories: ["mobile"],
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
        categories: ["backend"],
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
        categories: ["backend"],
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
    {
        slug: "gitcord",
        categories: ["backend", "web"],
        technologies: ["Node.js", "Vercel Functions", "Supabase", "Axios", "GitHub Webhooks", "Discord Webhooks"],
        image: "/projects/gitcord-logo.png",
        githubUrl: "https://github.com/HereticSoba/github-discordbot",
        liveUrl: "https://github-discordbot.vercel.app/",
        gallery: [
            { src: "/projects/gitcord/vista-principal.png" },
            { src: "/projects/gitcord/vista-integraciones.png" },
            { src: "/projects/gitcord/vista-guia.png" },
        ],
        extraTechnologies: ["Tailwind CSS", "JavaScript"],
    },
];
