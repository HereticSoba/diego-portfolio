import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronDown, FiChevronLeft, FiChevronRight, FiCode } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import { ProjectDetails, type ProjectCategory } from "../../data/projects";
import "./Projects.css";

type FilterCategory = "all" | ProjectCategory;

function Projects() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [canScroll, setCanScroll] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const filteredProjects = activeCategory === "all" ? ProjectDetails
        : ProjectDetails.filter((project) => project.categories.includes(activeCategory));
    const categoryLabels: Record<FilterCategory, string> = {
        all: t("projects.all"),
        mobile: t("projects.mobile"),
        web: t("projects.web"),
        backend: t("projects.backend"),
    }

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateControls = () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            const scrollPosition = track.scrollLeft;
            setCanScroll(maxScroll > 1);
            setIsAtStart(scrollPosition <= 4);
            setIsAtEnd(scrollPosition >= maxScroll - 4);
        };

        track.scrollTo({ left: 0, behavior: "instant" });
        updateControls();
        track.addEventListener("scroll", updateControls, { passive: true });
        window.addEventListener("resize", updateControls);

        return () => {
            track.removeEventListener("scroll", updateControls);
            window.removeEventListener("resize", updateControls);
        };
    }, [activeCategory, filteredProjects.length]);

    const scrollProjects = (direction: -1 | 1) => {
        const track = trackRef.current;
        const firstCard = track?.querySelector<HTMLElement>(".project-card");
        if (!track || !firstCard) return;

        const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
        track.scrollBy({
            left: direction * (firstCard.getBoundingClientRect().width + gap),
            behavior: "smooth",
        });
    };

    return (
        <section id="proyectos" className="projects-section">
            <SectionBackground withSpotlight />

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
                {filteredProjects.length === 0 ? (
                    <div className="projects-coming-soon">
                        <span className="projects-coming-soon-icon" aria-hidden="true">
                            <FiCode />
                        </span>
                        <h3>{t("projects.comingSoon")}</h3>
                        <p>{t("projects.comingSoonDescription")}</p>
                    </div>
                ) : (
                    <div className="projects-carousel">
                        <div
                            className="projects-track"
                            ref={trackRef}
                            role="region"
                            aria-label={`${t("projects.title")}${t("projects.titleHighlight")}`}
                            tabIndex={0}>
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
                                            {project.categories
                                                .map((category) => categoryLabels[category])
                                                .join(" · ")}
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
                                            {t("projects.viewDetails")}
                                            <FiArrowRight aria-hidden="true" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {canScroll && (
                            <div className="projects-carousel-controls">
                                <button
                                    type="button"
                                    aria-label={t("projects.prevProject")}
                                    disabled={isAtStart}
                                    onClick={() => scrollProjects(-1)}>
                                    <FiChevronLeft aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    aria-label={t("projects.nextProject")}
                                    disabled={isAtEnd}
                                    onClick={() => scrollProjects(1)}>
                                    <FiChevronRight aria-hidden="true" />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;