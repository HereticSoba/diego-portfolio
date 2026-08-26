import { useState } from "react";
import "./Projects.css";

type ProjectCategory = "all" | "mobile" | "web" | "backend";

interface Project {
    title: string;
    category: Exclude<ProjectCategory, "all">;
    categoryLabel: string;
    description: string;
    technologies: string[];
}

interface Project {
    title: string;
    category: Exclude<ProjectCategory, "all">;
    categoryLabel: string;
    description: string;
    technologies: string[];
    image?: string;
}

const projects: Project[] = [
    {
        title: "Mesajil E-Commerce",
        category: "mobile",
        categoryLabel: "Mobile",
        description: "Aplicación móvil de comercio electrónico desarrollada para gestionar usuarios, productos, favoritos y compras, integrada con servicios backend.",
        technologies: ["Kotlin", "Android", "MySQL", "REST API"],
    },
    {
        title: "Mesajil API",
        category: "backend",
        categoryLabel: "Backend",
        description: "API REST desarrollada para gestionar las operaciones principales de la plataforma, con conexión a MySQL y autenticación mediante JWT.",
        technologies: [".NET 8", "C#", "MySQL", "JWT", "Swagger"],
        image: "/projects/mesajil-api.png",
    },
    {
        title: "Movies API & Microservices",
        category: "backend",
        categoryLabel: "Backend",
        description: "Proyecto backend orientado al desarrollo de servicios y APIs, trabajado con arquitectura de microservicios y comunicación entre servicios.",
        technologies: ["Java", "Spring Boot", "REST", "SOAP", "Maven"],
    },
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const filteredProjects = activeCategory === "all" ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="proyectos" className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <div>
                        <p className="section-label">/ PROYECTOS</p>
                        <h2>
                            Cosas que he
                            <span> construido.</span>
                        </h2>
                    </div>
                    <p className="projects-introduction">
                        Una selección de aplicaciones, APIs y soluciones de software
                        desarrollados durante mi formación y experiencia.
                    </p>
                </div>
                <div className="projects-filters">
                    <button type="button" className={activeCategory === "all" ? "active" : ""}
                        onClick={() => setActiveCategory("all")}>
                        Todos
                    </button>
                    <button type="button" className={activeCategory === "mobile" ? "active" : ""}
                        onClick={() => setActiveCategory("mobile")}>
                        Mobile
                    </button>
                    <button type="button" className={activeCategory === "web" ? "active" : ""}
                        onClick={() => setActiveCategory("web")}>
                        Web
                    </button>
                    <button type="button" className={activeCategory === "backend" ? "active" : ""}
                        onClick={() => setActiveCategory("backend")}>
                        Backend
                    </button>
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`Preview de ${project.title}`}
                                    />
                                ) : (
                                    <span>Preview</span>
                                )}
                            </div>
                            <div className="project-content">
                                <p className="project-category">
                                    {project.categoryLabel}
                                </p>
                                <h3>{project.title}</h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                                <button type="button" className="project-link">
                                    Ver proyecto ↗
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;