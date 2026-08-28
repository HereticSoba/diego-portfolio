import "./ProjectDetail.css";
import { Link } from "react-router-dom";

interface GalleryImage {
    src: string;
    title: string;
}

const mesajilGallery: GalleryImage[] = [
    {
        src: "",
        title: "Pantalla de inicio",
    },
    {
        src: "",
        title: "Finalizar compra",
    },
    {
        src: "",
        title: "Pantalla de pago",
    },
    {
        src: "",
        title: "Pantalla adicional",
    },
    {
        src: "",
        title: "Pantalla adicional",
    },
];

function ProjectDetail() {
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
                        Mesajil E-Commerce
                    </h1>
                    <p className="project-detail-description">
                        Aplicación móvil de comercio electrónico desarrollada para realizar compras,
                        pedidos, gestionar usuarios, productos, etc. Integrada con servicio backend.
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
                        {mesajilGallery.map((image) => (
                            <figure className="project-mobile-image" key={image.src}>
                                <div className="project-mobile-image-frame">
                                    <img src={image.src} alt={image.title}/>
                                </div>
                                <figcaption>
                                    {image.title}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
                <section className="project-info-grid">
                    <div className="project-info-block">
                        <div className="project-detail-section-heading">
                            <p>/ SOBRE EL PROYECTO</p>
                        </div>
                        <p>
                            Mesajil E-Commerce es una aplicación móvil desarrolada para 
                            gestionar la experiencia de compra desde dispositivos móviles.
                        </p>
                        <p>
                            La aplicación permite a los usuarios explorar productos, gestionar 
                            su carrito y realizar sus compras mediante una interfaz orientada a 
                            una experiencia rápida y sencilla.
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
                <div className="projecy-detail-footer">
                    <Link to="/#proyectos">
                    ← Volver a proyectos
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ProjectDetail;