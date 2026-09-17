import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#inicio" className="footer-logo">
                        <span>&lt;</span>Diego<span>/&gt;</span>
                    </a>
                    <p>{t("footer.role")}</p>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/HereticSoba"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaGithub/>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/its-diego-solorzano/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaLinkedin/>
                        LinkedIn
                    </a>
                    <a href="mailto:diegofaridbv@gmail.com">
                        <FaEnvelope/>
                        Email
                    </a>
                </div>
                <a href="#inicio" className="footer-top">
                    {t("footer.backToTop")}<span>↑</span>
                </a>
            </div>
            <div className="footer-bottom">
                <p>{t("footer.copyright",{year: currentYear})}</p>
                <p>{t("footer.builtWith")}</p>
            </div>
        </footer>
    );
}

export default Footer;