import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
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
        if ("startViewTransition" in document){
            document.startViewTransition(changeTheme);
        }else{
            changeTheme();
        }
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
                    <span>&lt;</span>Diego<span>/&gt;</span>
                </a>

                <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                    <a href="#inicio" onClick={closeMenu}>Inicio</a>
                    <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
                    <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
                    <a href="#stack" onClick={closeMenu}>Stack</a>
                    <a href="#github-activity" onClick={closeMenu}>GitHub</a>
                    <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
                    <a href="#contacto" onClick={closeMenu}>Contacto</a>
                </nav>
                <div className="navbar-actions">
                    <button
                        type="button"
                        className="navbar-theme"
                        onClick={toggleTheme}
                        aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}>
                        {darkMode ? "☀" : "☾"}
                    </button>
                    <a href="/projects/CV-SOLORZANO-VILLEGAS-DIEGO.pdf" download="CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                        className="navbar-cv">Descargar CV</a>

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