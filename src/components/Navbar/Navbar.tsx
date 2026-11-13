import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function NavbarThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window === "undefined") {
            return true;
        }
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
            return false;
        }
        document.documentElement.removeAttribute("data-theme");
        return true;
    });
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            type="button"
            className="navbar-theme"
            onClick={toggleTheme}
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}>
            {darkMode ? "☀" : "☾"}
        </button>
    );
}

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavigation = (
        event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        if (!targetId) {
            return;
        }
        const target = document.querySelector(targetId);
        if (!target) {
            return;
        }
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setMenuOpen(false);
    };
    const changeLanguage = (language: "es" | "en") => {
        void i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };
    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="#inicio" className="navbar-logo" onClick={() => setMenuOpen(false)}>
                    <span>&lt;</span>Diego<span>/&gt;</span>
                </a>
                <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                    <a href="#inicio" onClick={handleNavigation}>{t("navbar.home")}</a>
                    <a href="#sobre-mi" onClick={handleNavigation}>{t("navbar.about")}</a>
                    <a href="#proyectos" onClick={handleNavigation}>{t("navbar.projects")}</a>
                    <a href="#stack" onClick={handleNavigation}>{t("navbar.stack")}</a>
                    <a href="#experiencia" onClick={handleNavigation}>{t("navbar.experience")}</a>
                    <a href="#github-activity" onClick={handleNavigation}>{t("navbar.github")}</a>
                    <a href="#contacto" onClick={handleNavigation}>{t("navbar.contact")}</a>
                </nav>
                <div className="navbar-actions">
                    <div
                        className={`navbar-language-switch ${i18n.language.startsWith("en") ? "is-en" : ""}`}
                        role="group"
                        aria-label={t("navbar.language")}>
                        <button
                            type="button"
                            className={`lang-option ${i18n.language.startsWith("es") ? "active" : ""}`}
                            onClick={() => changeLanguage("es")}
                            aria-pressed={i18n.language.startsWith("es")}>
                            ES
                        </button>
                        <button
                            type="button"
                            className={`lang-option ${i18n.language.startsWith("en") ? "active" : ""}`}
                            onClick={() => changeLanguage("en")}
                            aria-pressed={i18n.language.startsWith("en")}>
                            EN
                        </button>
                    </div>
                    <NavbarThemeToggle />
                    <a href="https://github.com/HereticSoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-cv">
                        <FaGithub aria-hidden="true" />
                        {t("navbar.github")}
                    </a>

                    <button
                        type="button"
                        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Navbar;