import { useState } from "react";
import "./ProjectDetail.css";
import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../../data/projects";

function ProjectDetail() {
    const { slug } = useParams();
    const project = projectDetails.find(
        (item) => item.slug === slug
    );
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">(
        "next"
    );
    const handleNextImage = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setSlideDirection("next");
        setSelectedImage((current) => {
            if (current === null) {
                return 0;
            }
            return current === project!.gallery.length - 1
                ? 0
                : current + 1;
        });
    };
    const handlePrevImage = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setSlideDirection("prev");
        setSelectedImage((current) => {
            if (current === null) {
                return 0;
            }
            return current === 0
                ? project!.gallery.length - 1
                : current - 1;
        });
    };
    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };
    if (!project) {
        return (
            <main className="project-detail">
                <div className="project-detail-container">
                    <Link to="/#proyectos" className="project-back">
                        ← Volver a proyectos
                    </Link>
                    <header className="project-detail-header">
                        <p className="project-detail-label">
                            / PROYECTO
                        </p>
                        <h1>
                            Proyecto no encontrado
                        </h1>
                        <p className="project-detail-description">
                            El proyecto a consultar en desarrollo o no existente.
                        </p>
                    </header>
                </div>
            </main>
        );
    }

    return (
        <main
            className={`project-detail ${selectedImage !== null ? "lightbox-open" : ""
                }`}>
            <div className="project-detail-container">
                <Link to="/#proyectos" className="project-back">
                    ← Volver a proyectos
                </Link>
                <header className="project-detail-header">
                    <p className="project-detail-label">
                        / PROYECTO
                    </p>
                    <h1>
                        {project.title}
                    </h1>
                    <p className="project-detail-description">
                        {project.description}
                    </p>
                </header>
                <section className="project-gallery-section">
                    <div className="project-detail-section-heading">
                        <p>/ GALERÍA</p>
                        <span>
                            Capturas de pantalla
                        </span>
                    </div>
                    <div className="project-mobile-gallery">
                        {project.gallery.map((image, index) => (
                            <figure className="project-mobile-image"
                                key={index}>
                                <div
                                    className="project-mobile-image-frame"
                                    onClick={() =>
                                        setSelectedImage(index)}>
                                    <img src={image.src} alt={image.title} />
                                </div>
                                <figcaption>
                                    {image.title}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    {selectedImage !== null && (
                        <div className="project-lightbox"
                            onClick={handleCloseLightbox}>
                            <button className="project-lightbox-close"
                                onClick={handleCloseLightbox}
                                aria-label="Cerrar galería">
                                ×
                            </button>
                            <button className="project-lightbox-prev"
                                onClick={handlePrevImage}
                                aria-label="Imagen anterior">
                                ‹
                            </button>
                            <div
                                key={selectedImage}
                                className={`project-lightbox-content slide-${slideDirection}`}
                                onClick={(event) =>
                                    event.stopPropagation()
                                }>
                                <img src={project.gallery[selectedImage].src}
                                    alt={project.gallery[selectedImage].title} />
                                <span className="project-lightbox-counter">
                                    {selectedImage + 1} /{" "}
                                    {project.gallery.length}
                                </span>
                            </div>
                            <button className="project-lightbox-next" onClick={handleNextImage}
                                aria-label="Imagen siguiente">›
                            </button>
                        </div>
                    )}
                </section>
                <section className="project-info-grid">
                    <div className="project-info-block">
                        <div className="project-detail-section-heading">
                            <p>/ SOBRE EL PROYECTO</p>
                        </div>
                        {project.about.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="project-info-block">
                        <div className="project-detail-section-heading">
                            <p>/ STACK TECNOLÓGICO</p>
                        </div>
                        <div className="project-stack">
                            {project.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="project-features">
                    <div className="project-detail-section-heading">
                        <p>/ CARACTERÍSTICAS PRINCIPALES</p>
                    </div>
                    <div className="project-features-grid">
                        {project.features.map((feature, index) => (
                            <div
                                className="project-feature"
                                key={feature}>
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p>
                                    {feature}
                                </p>
                            </div>
                        ))}

                    </div>

                </section>

                <div className="project-detail-footer">
                    <Link to="/#proyectos">
                        ← Volver a proyectos
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ProjectDetail;