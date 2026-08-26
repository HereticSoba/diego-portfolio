import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#inicio" className="footer-logo">
                        <span>&lt;</span>Diego<span>/&gt;</span>
                    </a>
                    <p>Desarrollador de Sistemas</p>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/HereticSoba"
                    target="_blank"
                    rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/its-diego-solorzano/"
                    target="_blank"
                    rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:diegofaridbv@gmail.com">
                        Email
                    </a>
                </div>
                <a href="#inicio" className="footer-top">
                    Volver arriba <span>↑</span>
                </a>
            </div>
            <div className="footer-bottom">
                <p>© {currentYear} Desarrollado por Diego Solórzano.</p>
                <p>Hecho con React + TypeScript</p>
            </div>
        </footer>
    );
}

export default Footer;