import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../../data/projects";
import { useTranslation } from "react-i18next";
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
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">(
        "next"
    );
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
                    <p className="project-detail-description">{description}</p>
                </header>
                <section className="project-gallery-section">
                    <div className="project-detail-section-heading">
                        <p>{t("projectDetail.galleryLabel")}</p>
                        <span>{t("projectDetail.screenshots")}</span>
                    </div>
                    <div className="project-mobile-gallery">
                        {project.gallery.map((image, index) => {
                            const imageTitle = Array.isArray(galleryTitles) ? galleryTitles[index] || "" : "";
                            return (
                                <figure className="project-mobile-image" key={index}>
                                    <div
                                        className={`project-mobile-image-frame ${image.type === "desktop" ? "desktop-image-frame" : ""}`}
                                        onClick={() => setSelectedImage(index)}>
                                        <img src={image.src} alt={imageTitle} />
                                    </div>
                                    <figcaption>{imageTitle}</figcaption>
                                </figure>
                            );
                        })}
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
                            {project.technologies.map((technology) => (
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

                <div className="project-detail-footer">
                    <Link to="/#proyectos">
                        ← {t("projectDetail.backToProjects")}
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ProjectDetail;