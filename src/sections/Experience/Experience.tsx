import "./Experience.css";

interface ExperienceItem {
    year: string;
    position: string;
    company: string;
    description: string;
    highlights: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: "2026",
        position: "Técnico de soporte",
        company: "Alternativa Tecnológica S.A.C. · Proyecto BCP",
        description: "Atención y resolución de incidencias de hardware y software de segundo nivel, gestión y seguimiento de tickets en Jira, instalación y configuración de equipos, mantenimiento preventivo y correctivo y gestión de equipos unidos a dominio.",
        highlights: ["Jira", "Active Directory", "Hardware", "Software"],
    },
    {
        year: "2025",
        position: "Asesor de ventas",
        company: "Amaru Store E.I.R.L.",
        description: "Gestión de apertura del local, control de inventario y solicitud de componentes, laptops y equipos para puntos de venta. Asesoramiento especializado en la selección de equipos tecnológicos.",
        highlights: ["Inventario", "Tecnología", "Atención al cliente", "Ventas"],
    },
];

function Experience() {
    return (
        <section id="experiencia" className="experience-section">
            <div className="experience-container">
                <div className="experience-header">
                    <p className="section-label">/ EXPERIENCIA</p>
                    <h2>
                        Experiencia
                        <span> profesional.</span>
                    </h2>
                    <p>
                        Experiencia adquirida en entornos corporativos y comerciales, 
                        desarrollando habilidades técnicas, operativas y de atención.
                    </p>
                </div>
                <div className="experience-timeline">
                    {experiences.map((experience) =>(
                        <article className="experience-item"
                        key={`${experience.year}-${experience.position}`}
                        >
                            <div className="experience-year">
                                {experience.year}
                            </div>
                            <div className="experience-marker">
                                <span></span>
                            </div>
                            <div className="experience-content">
                                <p className="experience-position">
                                    {experience.position}
                                </p>
                                <h3>{experience.company}</h3>
                                <p className="experience-description">
                                    {experience.description}
                                </p>
                                <div className="experience-highlights">
                                    {experience.highlights.map((highlight) =>(
                                        <span key={highlight}>{highlight}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;