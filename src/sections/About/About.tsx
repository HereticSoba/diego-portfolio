import "./About.css";

function About() {
    return (
        <section id="sobre-mi" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <p className="section-label">SOBRE MÍ</p>
                    <h2>Desarrollo soluciones
                        <span>de software</span>
                    </h2>
                    <p>
                        Soy estudiante de Desarrollo de Sistemas de Información, con experencia
                        en soporte técnico TI en entornos corporativos y desarrollo de aplicaciones móviles
                        y servicios backend.
                    </p>
                    <p>
                        Me interesa desarrollar soluciones de software que integren aplicaciones, servicios y
                        bases de datos, buscando crear sistemas funcionales, mantenibles y orientados a las necesidades
                        del cliente.
                    </p>
                    <p>
                        Mi experiencia en soporte TI me ha permitido desarrollar una visión práctica de la tecnología, 
                        desde la atención y resolución de incidencias hasta la implementación y mantenimiento de soluciones.
                    </p>
                </div>
                <div className="about-highlights">
                    <div className="highlight">
                        <span className="highlight-number">01</span>
                        <div className="highlight-info">
                            <h3>Desarrollo</h3>
                            <p>Mobile · Backend · APIs</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">02</span>
                        <div className="highlight-info">
                            <h3>Experiencia</h3>
                            <p>Soporte TI · Entornos corporativos</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">03</span>
                        <div className="highlight-info">
                            <h3>Metodología</h3>
                            <p>Scrum</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <span className="highlight-number">04</span>
                        <div className="highlight-info">
                            <h3>Idiomas</h3>
                            <p>Inglés · Avanzado</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;