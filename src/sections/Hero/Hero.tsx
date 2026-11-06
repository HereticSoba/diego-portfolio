import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SectionBackground from "../../components/SectionBackground/SectionBackground";
import "./Hero.css";


function Hero() {
    const { t } = useTranslation();
    return (
        <section id="inicio" className="hero-section">
            <SectionBackground withSpotlight />

            <div className="hero-container">

                <div className="hero-content">
                    <p className="hero-greeting">{t("hero.greeting")}<span className="hero-cursor"></span></p>
                    <h1 className="hero-title">{t("hero.title")}<span>{t("hero.titleHighlight")}</span></h1>
                    <p className="hero-description">{t("hero.description")}</p>
                    <div className="hero-buttons">
                        <a href="/projects/CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                            download="CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                            className="hero-button primary">
                            <FaFilePdf className="hero-button-icon" aria-hidden="true" />
                            {t("hero.cvButton")}
                        </a>

                        <a href="#proyectos"
                            rel="noopener noreferrer"
                            className="hero-button secondary">
                            Proyectos
                        </a>
                    </div>
                    <div className="hero-technologies">
                        <div className="technology">
                            <strong>Kotlin</strong>
                            <span>{t("hero.mobile")}</span>
                        </div>
                        <div className="technology">
                            <strong>.NET</strong>
                            <span>{t("hero.backend")}</span>
                        </div>
                        <div className="technology">
                            <strong>C#</strong>
                            <span>{t("hero.backend")}</span>
                        </div>
                        <div className="technology">
                            <strong>Java</strong>
                            <span>{t("hero.backend")}</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-glow"></div>
                        <div className="hero-image">
                            <img
                                src="/projects/diego-profile.jpeg"
                                alt="Diego Solórzano"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;