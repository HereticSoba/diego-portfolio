import { useState } from "react";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

interface GalleryImage {
    src: string;
    title: string;
}

const mesajilGallery: GalleryImage[] = [
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
        title: "PANTALLA DE INICIO",
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
        title: "PERFIL",
    },
];

function ProjectDetail() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">(
        "next"
    );

    const handleNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        setSlideDirection("next");

        setSelectedImage((current) => {
            if (current === null) {
                return 0;
            }

            return current === mesajilGallery.length - 1
                ? 0
                : current + 1;
        });
    };

    const handlePrevImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        setSlideDirection("prev");

        setSelectedImage((current) => {
            if (current === null) {
                return 0;
            }

            return current === 0
                ? mesajilGallery.length - 1
                : current - 1;
        });
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <main className={`project-detail ${selectedImage !== null ? "lightbox-open" : ""}`}>
            <div className="project-detail-container">

                {/* Botón volver */}
                <Link to="/#proyectos" className="project-back">
                    ← Volver a proyectos
                </Link>

                {/* Header */}
                <header className="project-detail-header">
                    <p className="project-detail-label">
                        / PROYECTO
                    </p>

                    <h1>
                        Mesajil E-Commerce
                    </h1>

                    <p className="project-detail-description">
                        Aplicación móvil de comercio electrónico desarrollada
                        para realizar compras, pedidos, gestionar usuarios,
                        productos, stock. Integrada con servicio backend.
                    </p>
                </header>

                {/* Galería */}
                <section className="project-gallery-section">

                    <div className="project-detail-section-heading">
                        <p>/ GALERÍA</p>

                        <span>
                            Capturas de pantalla
                        </span>
                    </div>

                    <div className="project-mobile-gallery">

                        {mesajilGallery.map((image, index) => (
                            <figure
                                className="project-mobile-image"
                                key={index}
                            >
                                <div
                                    className="project-mobile-image-frame"
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                    />
                                </div>

                                <figcaption>
                                    {image.title}
                                </figcaption>
                            </figure>
                        ))}

                    </div>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                        <div
                            className="project-lightbox"
                            onClick={handleCloseLightbox}
                        >

                            {/* Cerrar */}
                            <button
                                className="project-lightbox-close"
                                onClick={handleCloseLightbox}
                                aria-label="Cerrar galería"
                            >
                                ×
                            </button>

                            {/* Imagen anterior */}
                            <button
                                className="project-lightbox-prev"
                                onClick={handlePrevImage}
                                aria-label="Imagen anterior"
                            >
                                ‹
                            </button>

                            {/* Imagen seleccionada */}
                            <div
                                key={selectedImage}
                                className={`project-lightbox-content slide-${slideDirection}`}
                                onClick={(event) =>
                                    event.stopPropagation()
                                }
                            >
                                <img
                                    src={mesajilGallery[selectedImage].src}
                                    alt={mesajilGallery[selectedImage].title}
                                />

                                <span className="project-lightbox-counter">
                                    {selectedImage + 1} /{" "}
                                    {mesajilGallery.length}
                                </span>
                            </div>

                            {/* Imagen siguiente */}
                            <button
                                className="project-lightbox-next"
                                onClick={handleNextImage}
                                aria-label="Imagen siguiente"
                            >
                                ›
                            </button>

                        </div>
                    )}

                </section>

                {/* Información */}
                <section className="project-info-grid">

                    <div className="project-info-block">

                        <div className="project-detail-section-heading">
                            <p>/ SOBRE EL PROYECTO</p>
                        </div>

                        <p>
                            Mesajil E-Commerce es una aplicación móvil
                            desarrollada para gestionar la experiencia de
                            compra desde dispositivos móviles.
                        </p>

                        <p>
                            La aplicación permite a los usuarios explorar
                            productos, gestionar su carrito y realizar sus
                            compras mediante una interfaz orientada a una
                            experiencia rápida y sencilla.
                        </p>

                    </div>

                    <div className="project-info-block">

                        <div className="project-detail-section-heading">
                            <p>/ STACK TECNOLÓGICO</p>
                        </div>

                        <div className="project-stack">
                            <span>Kotlin</span>
                            <span>Android Studio</span>
                            <span>MySQL</span>
                            <span>REST API</span>
                        </div>

                    </div>

                </section>

                {/* Características */}
                <section className="project-features">

                    <div className="project-detail-section-heading">
                        <p>/ CARACTERÍSTICAS PRINCIPALES</p>
                    </div>

                    <div className="project-features-grid">

                        <div className="project-feature">
                            <span>01</span>
                            <p>Gestión de usuarios</p>
                        </div>

                        <div className="project-feature">
                            <span>02</span>
                            <p>Catálogo de productos</p>
                        </div>

                        <div className="project-feature">
                            <span>03</span>
                            <p>Gestión de favoritos</p>
                        </div>

                        <div className="project-feature">
                            <span>04</span>
                            <p>Carrito de compras</p>
                        </div>

                        <div className="project-feature">
                            <span>05</span>
                            <p>Proceso de compra</p>
                        </div>

                        <div className="project-feature">
                            <span>06</span>
                            <p>Integración con servicios backend</p>
                        </div>

                    </div>

                </section>

                {/* Footer */}
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