import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
                    <a href="#stack" onClick={closeMenu}>Stack</a>
                    <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
                    <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
                    <a href="#contacto" onClick={closeMenu}>Contacto</a>
                </nav>
                <a href="/cv.pdf" className="navbar-cv">Descargar CV</a>

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
        </header>
    );
}
export default Navbar;