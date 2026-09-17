import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
    const { t } = useTranslation();
    return (
        <section id="sobre-mi" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <p className="section-label">{t("about.label")}</p>
                    <h2>{t("about.title")}<span>{t("about.titleHighlight")}</span>
                    </h2>
                    <p>{t("about.paragraph1")}</p>
                    <p>{t("about.paragraph2")}</p>
                    <p>{t("about.paragraph3")}</p>
                </div>
                <div className="about-highlights">
                    <div className="highlight">
                        <span className="highlight-number">01</span>
                        <div className="highlight-info">
                            <h3>{t("about.development")}</h3>
                            <p>{t("about.developmentDescription")}</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">02</span>
                        <div className="highlight-info">
                            <h3>{t("about.experience")}</h3>
                            <p>{t("about.experienceDescription")}</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">03</span>
                        <div className="highlight-info">
                            <h3>{t("about.methodology")}</h3>
                            <p>Scrum</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">04</span>
                        <div className="highlight-info">
                            <h3>{t("about.languages")}</h3>
                            <p>{t("about.spanish")}</p>
                            <p>{t("about.english")}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;