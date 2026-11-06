import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./BackToTop.css";

const MIN_SCROLL_Y = 400;

function BackToTop() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollY = useRef(0);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const updateVisibility = () => {
            const currentScrollY = window.scrollY;
            const previousScrollY = lastScrollY.current;

            if (currentScrollY < MIN_SCROLL_Y) {
                setIsVisible(false);
            } else if (currentScrollY > previousScrollY) {
                setIsVisible(true);
            } else if (currentScrollY < previousScrollY) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
            frame.current = null;
        };

        const handleScroll = () => {
            if (frame.current !== null) {
                return;
            }

            frame.current = window.requestAnimationFrame(updateVisibility);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frame.current !== null) {
                window.cancelAnimationFrame(frame.current);
                frame.current = null;
            }
        };
    }, []);

    const handleClick = () => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    return (
        <button
            type="button"
            className={`back-to-top ${isVisible ? "visible" : ""}`}
            onClick={handleClick}
            aria-label={t("footer.backToTop")}
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}>
            <FiArrowUp aria-hidden="true" />
        </button>
    );
}

export default BackToTop;
