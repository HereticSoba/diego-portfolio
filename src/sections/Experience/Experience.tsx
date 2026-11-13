import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import "./Experience.css";

interface ExperienceItem {
    id: string;
    year: string;
    position: string;
    company: string;
    details: string;
    highlights: string;
}

const experiences: ExperienceItem[] = [
    {
        id: "soporte",
        year: "experience.roles.soporte.year",
        position: "experience.roles.soporte.position",
        company: "experience.roles.soporte.company",
        details: "experience.roles.soporte.details",
        highlights: "experience.roles.soporte.highlights",
    },
    {
        id: "ventas",
        year: "experience.roles.ventas.year",
        position: "experience.roles.ventas.position",
        company: "experience.roles.ventas.company",
        details: "experience.roles.ventas.details",
        highlights: "experience.roles.ventas.highlights",
    },
];

function Experience() {
    const { t } = useTranslation();
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const toggleDetails = (id: string) => {
        setExpandedItems((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    return (
        <section id="experiencia" className="experience-section">
            <SectionBackground withSpotlight />
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
                        const details = t(experience.details, {
                            returnObjects: true,
                        }) as string[];
                        const isExpanded = Boolean(expandedItems[experience.id]);
                        const detailsId = `experience-details-${experience.id}`;
                        return (
                            <article className="experience-item" key={experience.id}>
                                <div className="experience-marker">
                                    <span></span>
                                </div>
                                <div className="experience-content">
                                    <p className="experience-position">
                                        {t(experience.position)} · {t(experience.year)}
                                    </p>
                                    <h3>{t(experience.company)}</h3>
                                    <br></br>
                                    <div className="experience-highlights">
                                        {Array.isArray(highlights) &&
                                            highlights.map((highlight) => (
                                                <span key={highlight}>{highlight}</span>
                                            ))}
                                    </div>
                                    {!isExpanded && Array.isArray(details) && details[0] && (
                                        <ul className="experience-preview" aria-hidden="true">
                                            <li>{details[0]}</li>
                                        </ul>
                                    )}
                                    <div
                                        id={detailsId}
                                        className={`experience-collapsible ${isExpanded ? "is-open" : ""}`}>
                                        <div className="experience-collapsible-inner">
                                            <ul className="experience-details-list">
                                                {Array.isArray(details) &&
                                                    details.map((detail) => (
                                                        <li key={detail}>{detail}</li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="experience-toggle"
                                        onClick={() => toggleDetails(experience.id)}
                                        aria-expanded={isExpanded}
                                        aria-controls={detailsId}>
                                        {isExpanded
                                            ? t("experience.hideDetails")
                                            : t("experience.viewDetails")}
                                        <FiChevronDown
                                            className={isExpanded ? "open" : ""}
                                            aria-hidden="true" />
                                    </button>
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
