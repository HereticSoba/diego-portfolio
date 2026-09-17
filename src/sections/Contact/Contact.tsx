import "./Contact.css";
import { useState, type FormEvent } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
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
                    error = t("contact.errores.nameRequired");
                } else if (value.trim().length < 2) {
                    error = t("contact.errors.nameMinLength");
                } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) {
                    error = t("contact.errors.namePattern");
                }
                break;

            case "email":
                if (!value.trim()) {
                    error = t("contact.errors.emailRequired");
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = t("contact.errores.emailInvalid");
                }
                break;

            case "subject":
                if (!value.trim()) {
                    error = t("contact.errors.subjectRequired");
                }
                break;

            case "message":
                if (!value.trim()) {
                    error = t("contact.errors.messageRequired");
                } else if (value.trim().length < 10) {
                    error = t("contact.errors.messageMinLength");
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
                        <p className="section-label">{t("contact.label")}</p>
                        <h2>
                            {t("contact.title")}
                            <span>{t("contact.titleHighlight")}</span>
                        </h2>
                        <p>{t("contact.subtitle")}</p>
                    </div>
                    <div className="contact-links">
                        <a href="mailto:diegofaridbv@gmail.com"
                            className="contact-item">
                            <FaEnvelope className="contact-icon" />
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
                            <FaLinkedin className="contact-icon" />
                            <div>
                                <span className="contact-label">LinkedIn</span>
                                <span className="contact-value">
                                    Diego Solorzano
                                </span>
                            </div>
                            <span className="contact-arrow">↗</span>
                        </a>
                        <a href="https://github.com/HereticSoba"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item">
                            <FaGithub className="contact-icon" />
                            <div>
                                <span className="contact-label">GitHub</span>
                                <span className="contact-value">HereticSoba</span>
                            </div>
                            <span className="contact-arrow">↗</span>
                        </a>
                        <a href="/projects/CV-SOLORZANO-VILLEGAS-DIEGO.pdf" download="CV-SOLORZANO-VILLEGAS-DIEGO.pdf"
                            className="contact-item contact-cv">
                            <FaFilePdf className="contact-icon" />
                            <div>
                                <span className="contact-label">{t("contact.links.cv")}</span>
                                <span className="contact-value">{t("contact.links.downloadCv")}</span>
                            </div>
                            <span className="contact-arrow">↓</span>
                        </a>
                    </div>
                </div>

                <div className="contact-form-box">
                    <h3 className="contact-form-title">{t("contact.form.title")}</h3>
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
                            <label htmlFor="name">{t("contact.form.nameLabel")}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t("contact.form.namePlaceholder")}
                                maxLength={50}
                                required
                            />
                            {errors.name && (
                                <span className="form-error">{errors.name}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t("contact.form.emailLabel")}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t("contact.form.emailPlaceholder")}
                                maxLength={100}
                                required
                            />
                            {errors.email && (
                                <span className="form-error">{errors.email}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">{t("contact.form.subjectLabel")}</label>
                            <select id="subject" name="subject" defaultValue="" required>
                                <option value="" disabled>
                                    {t("contact.form.selectOption")}
                                </option>
                                <option value={t("contact.form.options.job")}>
                                    {t("contact.form.options.job")}
                                </option>
                                <option value={t("contact.form.options.collaboration")}>
                                    {t("contact.form.options.collaboration")}
                                </option>
                                <option value={t("contact.form.options.project")}>
                                    {t("contact.form.options.project")}
                                </option>
                                <option value={t("contact.form.other")}>
                                    {t("contact.form.other")}
                                </option>
                            </select>
                            {errors.subject && (
                                <span className="form-error">{errors.subject}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t("contact.form.messageLabel")}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder={t("contact.form.messagePlaceholder")}
                                maxLength={1000}
                                required
                            />
                            <span className="form-hint">{t("contact.form.maxChars")}</span>
                            <span className="form-hint">{t("contact.form.requiredField")}</span>
                            {errors.message && (
                                <span className="form-error">{errors.message}</span>
                            )}
                        </div>
                        <button type="submit" className="contact-submit" disabled={!isFormValid || status === "sending"}>
                            {status === "sending" ? t("contact.form.sendingButton") : t("contact.form.sendButton")}
                        </button>
                        {status === "success" && (
                            <p className="form-status success">
                                {t("contact.form.statusSuccess")}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="form-status error">
                                {t("contact.form.statusError")}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;