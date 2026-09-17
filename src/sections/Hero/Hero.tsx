import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {
    const { t } = useTranslation();
    return (
        <section id="inicio" className="hero-section">
            <div className="hero-container">

                <div className="hero-content">
                    <p className="hero-greeting">{t("hero.greeting")}<span className="hero-cursor"></span></p>
                    <h1 className="hero-title">{t("hero.title")}<span>{t("hero.titleHighlight")}</span></h1>
                    <p className="hero-description">{t("hero.description")}</p>
                    <div className="hero-buttons">
                        <a href="#proyectos" className="hero-button primary">{t("hero.projectsButton")}</a>

                        <a href="https://github.com/HereticSoba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-button secondary">
                            <FaGithub className="github-icon" />
                            GitHub
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
                        <div className="hero-avatar-code-ring">

                            <svg className="star-geometry" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="95" className="ring-outer"/>
                                <circle cx="100" cy="100" r="90" className="ring-inner"/>
                                <circle cx="100" cy="100" r="62" className="ring-center"/>

                                <polygon
                                points="100, 6 160, 172 23, 62 192, 122, 8, 122 177, 62 40, 172 100, 6"
                                className="ring-star"/>
                            </svg>

                            <span>{"{ }"}</span>
                            <span>{"</>"}</span>
                            <span>{"=>"}</span>
                            <span>{">_"}</span>
                        </div>
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