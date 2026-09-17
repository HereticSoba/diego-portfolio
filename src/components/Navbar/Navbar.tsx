import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
            return false;
        }
        document.documentElement.removeAttribute("data-theme");
        return true;
    });
    const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const maxDistance = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );
        document.documentElement.style.setProperty("--theme-x", `${x}px`);
        document.documentElement.style.setProperty("--theme-y", `${y}px`);
        document.documentElement.style.setProperty("--theme-radius", `${maxDistance}px`);
        const changeTheme = () => {
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
        if ("startViewTransition" in document) {
            document.startViewTransition(changeTheme);
        } else {
            changeTheme();
        }
    };
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
    const toggleLanguage = () => {
        const newLanguage = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
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
                    <a href="#github-activity" onClick={handleNavigation}>{t("navbar.github")}</a>
                    <a href="#experiencia" onClick={handleNavigation}>{t("navbar.experience")}</a>
                    <a href="#contacto" onClick={handleNavigation}>{t("navbar.contact")}</a>
                </nav>
                <div className="navbar-actions">
                    <button type="button" className={`navbar-language-switch ${i18n.language === "en" ? "is-en" : ""}`}
                        onClick={toggleLanguage}
                        aria-label="Cambiar idioma">
                        <span className={`lang-option ${i18n.language === "es" ? "active" : ""}`}>ES</span>
                        <span className={`lang-option ${i18n.language === "en" ? "active" : ""}`}>EN</span>
                    </button>
                    <button
                        type="button"
                        className="navbar-theme"
                        onClick={toggleTheme}
                        aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}>
                        {darkMode ? "☀" : "☾"}
                    </button>
                    <a href="/projects/CV-SOLORZANO-VILLEGAS-DIEGO.pdf" download="CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                        className="navbar-cv">{t("navbar.cv")}</a>

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