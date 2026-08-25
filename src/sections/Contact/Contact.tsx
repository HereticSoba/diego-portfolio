import "./Contact.css";

function Contact() {
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <div className="contact-intro">
                    <p className="section-label">/ CONTACTO</p>
                    <h2>
                        ¿Hablamos
                        <span>?</span>
                    </h2>
                    <p>
                        Estoy abierto a oportunidades laborales,
                        proyectos y colaboraciones relacionadas con desarrollo.
                    </p>
                </div>
                <div className="contact-links">
                    <a href="mailto:diegofaridbv@gmail.com"
                        className="contact-item">
                        <div>
                            <span className="contact-label">Email</span>
                            <span className="contact-value">
                                diegofaridbv@gmail.com
                            </span>
                        </div>
                        <span className="contact-arrow">↗</span>
                    </a>
                    <a href="https://www.linkedin.com/in/its-diego-solorzano/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item">
                        <div>
                            <span className="contact-label">LinkedIn</span>
                            <span className="contact-value">
                                /its-diego-solorzano
                            </span>
                        </div>
                        <span className="contact-arrow">↗</span>
                    </a>
                    <a href="https://github.com/HereticSoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item">
                        <div>
                            <span className="contact-label">GitHub</span>
                            <span className="contact-value">/HereticSoba</span>
                        </div>
                        <span className="contact-arrow">↗</span>
                    </a>
                    <a href="/cv.pdf"
                        className="contact-item contact-cv">
                        <div>
                            <span className="contact-label">Currículum</span>
                            <span className="contact-value">Descargar CV</span>
                        </div>
                        <span className="contact-arrow">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;