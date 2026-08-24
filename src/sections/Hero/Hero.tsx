import "./Hero.css";

function Hero() {
    return (
        <section id="inicio" className="hero-section">
            <div className="hero-container">

                <div className="hero-content">
                    <p className="hero-greeting">Hola, soy Diego Solórzano</p>
                    <h1 className="hero-title">Desarrollador <span>de Sistemas</span></h1>
                    <p className="hero-description">
                        Me enfoco en desarrollar aplicaciones móviles, APIs y soluciones de software que
                        logren ser escalables, mantenibles y con buenas prácticas de desarrollo.</p>
                    <div className="hero-buttons">
                        <a href="#proyectos" className="hero-button primary">
                            Ver proyectos
                        </a>

                        <a
                            href="https://github.com/HereticSoba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-button secondary">
                            GitHub
                        </a>
                    </div>
                    <div className="hero-technologies">
                        <div className="technology">
                            <strong>Kotlin</strong>
                            <span>Mobile</span>
                        </div>
                        <div className="technology">
                            <strong>.NET</strong>
                            <span>Backend</span>
                        </div>
                        <div className="technology">
                            <strong>C#</strong>
                            <span>Backend</span>
                        </div>
                        <div className="technology">
                            <strong>Java</strong>
                            <span>Backend</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="hero-image-placeholder">
                        <span>Foto</span>
                        <small>Próximanente</small>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;