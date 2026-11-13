import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projectDetails, type ProjectCategory } from "../../data/projects";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import "./ProjectDetail.css";

function ProjectDetail() {
    const { t } = useTranslation();
    const { slug } = useParams();
    const project = projectDetails.find(
        (item) => item.slug === slug
    );
    const title = t(`projectsData.${slug}.title`, { defaultValue: "" });
    const description = t(`projectsData.${slug}.description`, { defaultValue: "" });
    const about = t(`projectsData.${slug}.about`, { returnObjects: true }) as string[];
    const features = t(`projectsData.${slug}.features`, { returnObjects: true }) as string[];
    const galleryTitles = t(`projectsData.${slug}.galleryTitles`, { returnObjects: true }) as string[];
    const categoryLabels: Record<ProjectCategory, string> = {
        mobile: t("projects.mobile"),
        web: t("projects.web"),
        backend: t("projects.backend"),
    };
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">(
        "next"
    );
    const [canScrollGallery, setCanScrollGallery] = useState(false);
    const [isAtGalleryStart, setIsAtGalleryStart] = useState(true);
    const [isAtGalleryEnd, setIsAtGalleryEnd] = useState(false);
    const galleryTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = galleryTrackRef.current;
        if (!track) return;

        const updateControls = () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            setCanScrollGallery(maxScroll > 1);
            setIsAtGalleryStart(track.scrollLeft <= 4);
            setIsAtGalleryEnd(track.scrollLeft >= maxScroll - 4);
        };

        track.scrollTo({ left: 0, behavior: "instant" });
        updateControls();
        track.addEventListener("scroll", updateControls, { passive: true });
        window.addEventListener("resize", updateControls);

        return () => {
            track.removeEventListener("scroll", updateControls);
            window.removeEventListener("resize", updateControls);
        };
    }, [slug, project?.gallery.length]);

    const scrollGallery = (direction: -1 | 1) => {
        const track = galleryTrackRef.current;
        const firstSlide = track?.querySelector<HTMLElement>(".project-gallery-slide");
        if (!track || !firstSlide) return;

        const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
        track.scrollBy({
            left: direction * (firstSlide.getBoundingClientRect().width + gap),
            behavior: "smooth",
        });
    };

    const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setSlideDirection("next");
        setSelectedImage((current) => {
            if (current === null) return 0;
            return current === 0 ? project!.gallery.length - 1 : current - 1;
        });
    };
    const handlePrevImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setSlideDirection("prev");
        setSelectedImage((current) => {
            if (current === null) return 0;
            return current === 0 ? project!.gallery.length - 1 : current - 1;
        });
    };
    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };

    if (!project || !title) {
        return (
            <main className="project-detail">
                <div className="project-detail-container">
                    <Link to="/#proyectos" className="project-back">
                        ← {t("projectDetail.backToProjects")}
                    </Link>
                    <header className="project-detail-header">
                        <p className="project-detail-label">
                            {t("projectDetail.notFoundLabel")}
                        </p>
                        <h1>
                            {t("projectDetail.notFoundTitle")}
                        </h1>
                        <p className="project-detail-description">
                            {t("projectDetail.notFoundDescription")}
                        </p>
                    </header>
                </div>
            </main>
        );
    }

    return (
        <main
            className={`project-detail ${selectedImage !== null ? "lightbox-open" : ""}`}>
            <div className="project-detail-container">
                <Link to="/#proyectos" className="project-back">
                    ← {t("projectDetail.backToProjects")}
                </Link>
                <header className="project-detail-header">
                    <p className="project-detail-label">
                        {t("projectDetail.projectLabel")}
                    </p>
                    <h1>{title}</h1>
                    <p className="project-detail-categories">
                        {project.categories
                            .map((category) => categoryLabels[category])
                            .join(" · ")}
                    </p>
                    <p className="project-detail-description">{description}</p>
                    <div className="project-detail-actions">
                        {project.liveUrl && (
                            <a
                                className="project-detail-action project-detail-action-primary"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                <FiExternalLink aria-hidden="true" />
                                {t("projectDetail.liveDemo")}
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                className="project-detail-action project-detail-action-secondary"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub aria-hidden="true" />
                                {t("projectDetail.viewOnGithub")}
                            </a>
                        )}
                    </div>
                </header>
                <section className="project-gallery-section">
                    <div className="project-detail-section-heading">
                        <p>{t("projectDetail.galleryLabel")}</p>
                        <span>{t("projectDetail.screenshots")}</span>
                    </div>
                    <div
                        className="project-detail-carousel"
                        role="region"
                        aria-label={t("projectDetail.galleryLabel")}>
                        <div
                            className="project-mobile-gallery"
                            ref={galleryTrackRef}
                            tabIndex={0}>
                            {project.gallery.map((image, index) => {
                                const imageTitle = Array.isArray(galleryTitles) ? galleryTitles[index] || "" : "";
                                return (
                                    <figure className="project-gallery-slide" key={index}>
                                        <div
                                            className="project-mobile-image-frame"
                                            onClick={() => setSelectedImage(index)}>
                                            <img src={image.src} alt={imageTitle} />
                                        </div>
                                        <figcaption>{imageTitle}</figcaption>
                                    </figure>
                                );
                            })}
                        </div>
                        {canScrollGallery && (
                            <div className="project-gallery-controls">
                                <button
                                    type="button"
                                    aria-label={t("projects.prevProject")}
                                    disabled={isAtGalleryStart}
                                    onClick={() => scrollGallery(-1)}>
                                    <FiChevronLeft aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    aria-label={t("projects.nextProject")}
                                    disabled={isAtGalleryEnd}
                                    onClick={() => scrollGallery(1)}>
                                    <FiChevronRight aria-hidden="true" />
                                </button>
                            </div>
                        )}
                    </div>
                    {selectedImage !== null && (
                        <div className="project-lightbox" onClick={handleCloseLightbox}>
                            <button className="project-lightbox-close"
                                onClick={handleCloseLightbox}
                                aria-label={t("projectDetail.closeGallery")}>
                                ×
                            </button>
                            <button className="project-lightbox-prev"
                                onClick={handlePrevImage}
                                aria-label={t("projectDetail.prevImage")}>
                                ‹
                            </button>
                            <div key={selectedImage}
                                className={`project-lightbox-content slide-${slideDirection}`}
                                onClick={(event) => event.stopPropagation()}>
                                <img src={project.gallery[selectedImage].src}
                                    alt={Array.isArray(galleryTitles) ? galleryTitles[selectedImage] || "" : ""} />
                                <span className="project-lightbox-counter">
                                    {selectedImage + 1} / {project.gallery.length}
                                </span>
                            </div>
                            <button className="project-lightbox-next" onClick={handleNextImage}
                                aria-label={t("projectDetail.nextImage")}>›
                            </button>
                        </div>
                    )}
                </section>
                <section className="project-info-grid">
                    <div className="project-info-block">
                        <div className="project-detail-section-heading">
                            <p>{t("projectDetail.aboutLabel")}</p>
                        </div>
                        {Array.isArray(about) &&
                            about.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                    </div>
                    <div className="project-info-block">
                        <div className="project-detail-section-heading">
                            <p>{t("projectDetail.stackLabel")}</p>
                        </div>
                        <div className="project-stack">
                            {[...project.technologies, ...(project.extraTechnologies ?? [])].map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="project-features">
                    <div className="project-detail-section-heading">
                        <p>{t("projectDetail.featuresLabel")}</p>
                    </div>
                    <div className="project-features-grid">
                        {Array.isArray(features) &&
                            features.map((feature, index) => (
                                <div className="project-feature" key={index}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <p>{feature}</p>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProjectDetail;