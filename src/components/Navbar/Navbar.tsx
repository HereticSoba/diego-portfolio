import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#inicio" className="navbar-logo">
                    <span>&lt;</span>Diego<span>/&gt;</span>
                </a>

                <nav className="navbar-menu">
                    <a href="#inicio">Inicio</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#experiencia">Experiencia</a>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#contacto">Contacto</a>
                </nav>

                <a href="/cv.pdf" className="navbar-cv">
                    Descargar CV
                </a>

            </div>
        </header>
    );
}
export default Navbar;