import { useTranslation } from "react-i18next";
import "./Experience.css";

interface ExperienceItem {
    id: string;
    year: string;
    position: string;
    company: string;
    description: string;
    highlights: string;
}

const experiences: ExperienceItem[] = [
    {
        id: "soporte",
        year: "experience.roles.soporte.year",
        position: "experience.roles.soporte.position",
        company: "experience.roles.soporte.company",
        description: "experience.roles.soporte.description",
        highlights: "experience.roles.soporte.highlights",
    },
    {
        id: "ventas",
        year: "experience.roles.ventas.year",
        position: "experience.roles.ventas.position",
        company: "experience.roles.ventas.company",
        description: "experience.roles.ventas.description",
        highlights: "experience.roles.ventas.highlights",
    },
];

function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experiencia" className="experience-section">
            <div className="experience-container">
                <div className="experience-header">
                    <p className="section-label">{t("experience.label")}</p>
                    <h2>
                        {t("experience.title")}{" "}
                        <span>{t("experience.titleHighlight")}</span>
                    </h2>
                    <p>{t("experience.subtitle")}</p>
                </div>
                <div className="experience-timeline">
                    {experiences.map((experience) => {
                        const highlights = t(experience.highlights, {
                            returnObjects: true,
                        }) as string[];
                        return (
                            <article className="experience-item" key={experience.id}>
                                <div className="experience-year" key={t(experience.year)}></div>
                                <div className="experience-marker">
                                    <span></span>
                                </div>
                                <div className="experience-content">
                                    <p className="experience-position">
                                        {t(experience.position)}
                                    </p>
                                    <h3>{t(experience.company)}</h3>
                                    <p className="experience-description">
                                        {t(experience.description)}
                                    </p>
                                    <div className="experience-highlights">
                                        {Array.isArray(highlights) &&
                                            highlights.map((highlight) => (
                                                <span key={highlight}>{highlight}</span>
                                            ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;