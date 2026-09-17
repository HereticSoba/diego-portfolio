import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEye } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./Projects.css";

type ProjectCategory = "all" | "mobile" | "web" | "backend";

export interface ProjectData {
    slug: string;
    category: Exclude<ProjectCategory, "all">;
    technologies: string[];
    image?: string;
    githubUrl?: string;
}

export const ProjectDetails: ProjectData[] = [
    {
        slug: "mesajil-ecommerce",
        category: "mobile",
        technologies: ["Kotlin", "Android", "MySQL", "REST API"],
        image: "/projects/mesajil-ecommerce.jpg",
        githubUrl: "https://github.com/HereticSoba/Mesajil-AppMovil",
    },
    {
        slug: "mesajil-api",
        category: "backend",
        technologies: [".NET 8", "C#", "MySQL", "JWT", "Swagger"],
        image: "/projects/mesajil-api.png",
        githubUrl: "https://github.com/HereticSoba/Mesajil-AppMovil",
    },
    {
        slug: "movies-api-microservices",
        category: "backend",
        technologies: ["Java", "Spring Boot", "OpenFeign", "Keycloak", "Docker"],
        image: "/projects/microservicios.png",
        githubUrl: "https://github.com/HereticSoba/MicroservicioPeliculas",
    },
];

function Projects() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filteredProjects = activeCategory === "all" ? ProjectDetails
        : ProjectDetails.filter((project) => project.category === activeCategory);
    const categoryLabels: Record<ProjectCategory, string> = {
        all: t("projects.all"),
        mobile: t("projects.mobile"),
        web: t("projects.web"),
        backend: t("projects.backend"),
    }
    return (
        <section id="proyectos" className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <div>
                        <p className="section-label">{t("projects.label")}</p>
                        <h2>
                            {t("projects.title")}
                            <span>{t("projects.titleHighlight")}</span>
                        </h2>
                    </div>
                    <p className="projects-introduction">
                        {t("projects.introduction")}</p>
                </div>
                <div className="projects-filters">
                    <div className="projects-mobile-filter">
                        <button type="button" className="projects-filter-toggle"
                            onClick={() => setIsFilterOpen((previous) => !previous)}
                            aria-expanded={isFilterOpen}>
                            {categoryLabels[activeCategory]}
                            <FiChevronDown className={isFilterOpen ? "open" : ""} />
                        </button>

                        <div className={`projects-filter-menu ${isFilterOpen ? "open" : ""}`}>
                            <button type="button"
                                className={activeCategory === "all" ? "active" : ""}
                                onClick={() => {
                                    setActiveCategory("all");
                                    setIsFilterOpen(false);
                                }}>
                                {categoryLabels.all}
                            </button>
                            <button type="button"
                                className={activeCategory === "mobile" ? "active" : ""}
                                onClick={() => {
                                    setActiveCategory("mobile");
                                    setIsFilterOpen(false);
                                }}>
                                {categoryLabels.mobile}
                            </button>
                            <button type="button"
                                className={activeCategory === "web" ? "active" : ""}
                                onClick={() => {
                                    setActiveCategory("web");
                                    setIsFilterOpen(false);
                                }}>
                                {categoryLabels.web}
                            </button>
                            <button type="button"
                                className={activeCategory === "backend" ? "active" : ""}
                                onClick={() => {
                                    setActiveCategory("backend");
                                    setIsFilterOpen(false);
                                }}>
                                {categoryLabels.backend}
                            </button>
                        </div>
                    </div>
                    <div className="projects-desktop-filter">
                        <button type="button" className={activeCategory === "all" ? "active" : ""}
                            onClick={() => setActiveCategory("all")}>
                            {categoryLabels.all}
                        </button>
                        <button type="button" className={activeCategory === "mobile" ? "active" : ""}
                            onClick={() => setActiveCategory("mobile")}>
                            {categoryLabels.mobile}
                        </button>
                        <button type="button" className={activeCategory === "web" ? "active" : ""}
                            onClick={() => setActiveCategory("web")}>
                            {categoryLabels.web}
                        </button>
                        <button type="button" className={activeCategory === "backend" ? "active" : ""}
                            onClick={() => setActiveCategory("backend")}>
                            {categoryLabels.backend}
                        </button>
                    </div>
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <article className="project-card" key={project.slug}>
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${t("projects.imageAlt")} ${t(`projectsData.${project.slug}.title`)}`} />
                                ) : (
                                    <span>{t("projects.preview")}</span>
                                )}
                            </div>
                            <div className="project-content">
                                <p className="project-category">
                                    {categoryLabels[project.category]}
                                </p>
                                <h3>{t(`projectsData.${project.slug}.title`)}</h3>
                                <p className="project-description">
                                    {t(`projectsData.${project.slug}.description`)}
                                </p>
                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                                <Link to={`/projects/${project.slug}`} className="project-link">
                                    <FaEye />
                                    {t("projects.viewProject")}
                                </Link>
                                {project.githubUrl && (
                                    <a href={project.githubUrl}
                                        className="project-link project-github"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaGithub />
                                        {t("projects.viewGithub")}
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;