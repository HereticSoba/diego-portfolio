import "./Contact.css";
import { useState, type FormEvent } from "react";

function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const validateField = (name: string, value: string) => {
        let error = "";
        switch (name) {
            case "name":
                if (!value.trim()) {
                    error = "El nombre es obligatorio.";
                } else if (value.trim().length < 2) {
                    error = "El nombre debe tener al menos 2 caracteres.";
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) {
                    error = "El nomnbre solo puede contener letras y espacios.";
                }
                break;

            case "email":
                if (!value.trim()) {
                    error = "El correo electrónico es obligatorio.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Ingrese un electrónico válido.";
                }
                break;

            case "subject":
                if (!value.trim()) {
                    error = "Selecciona un asunto.";
                }
                break;

            case "message":
                if (!value.trim()) {
                    error = "El mensaje es obligatorio.";
                } else if (value.trim().length < 10) {
                    error = "El mensaje debe tener al menos 10 caracteres.";
                }
                break;
        }
        return error;
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");
        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <div className="contact-left">
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
                        <a href="/projects/CV-SOLORZANO-VILLEGAS-DIEGO.pdf" download="CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                            className="contact-item contact-cv">
                            <div>
                                <span className="contact-label">Currículum</span>
                                <span className="contact-value">Descargar CV</span>
                            </div>
                            <span className="contact-arrow">↓</span>
                        </a>
                    </div>
                </div>


                <form className="contact-form" onSubmit={handleSubmit}
                    onChange={(event) => {
                        const target = event.target;
                        if (
                            !(target instanceof HTMLInputElement) &&
                            !(target instanceof HTMLTextAreaElement) &&
                            !(target instanceof HTMLSelectElement)
                        ) {
                            return;
                        }
                        const error = validateField(target.name, target.value);
                        setErrors((previous) => ({
                            ...previous,
                            [target.name]: error,
                        }));
                        const form = event.currentTarget;
                        const fields = ["name", "email", "subject", "message"];
                        const valid = fields.every((field) => {
                            const element = form.elements.namedItem(field);
                            if (
                                !(element instanceof HTMLInputElement) &&
                                !(element instanceof HTMLTextAreaElement) &&
                                !(element instanceof HTMLSelectElement)
                            ) {
                                return false;
                            }
                            return !validateField(field, element.value);
                        });
                        setIsFormValid(valid);
                    }}>
                    <div className="form-group">
                        <label htmlFor="name">NOMBRE *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            maxLength={50}
                            required
                        />
                        {errors.name && (
                            <span className="form-error">{errors.name}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            maxLength={100}
                            required
                        />
                        {errors.email && (
                            <span className="form-error">{errors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">ASUNTO *</label>
                        <select
                            id="subject"
                            name="subject"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                -- Selecciona una opción --
                            </option>
                            <option value="Oportunidad Laboral">
                                Oportunidad Laboral
                            </option>
                            <option value="Colaboración">
                                Colaboración
                            </option>
                            <option value="Proyecto">
                                Proyecto
                            </option>
                            <option value="Otro">
                                Otro
                            </option>
                        </select>
                        {errors.subject && (
                            <span className="form-error">{errors.subject}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MENSAJE *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Escribe tu mensaje..."
                            maxLength={1000}
                            required
                        />
                        <span className="form-hint">
                            Máximo 1000 caracteres.
                        </span>
                        <span className="form-hint">
                            * Campo requerido.
                        </span>
                        {errors.message && (
                            <span className="form-error">{errors.message}</span>
                        )}
                    </div>
                    <button type="submit" className="contact-submit" disabled={!isFormValid || status === "sending"}>
                        {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                    </button>
                    {status === "success" && (
                        <p className="form-status success">
                            Solicitud enviada correctamente.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="form-status error">
                            No se pudo enviar la solicitud. Inténtalo nuevamente.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;