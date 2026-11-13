import { useEffect, useRef } from "react";
import "./SectionBackground.css";

interface SectionBackgroundProps {
    withSpotlight?: boolean;
}

function SectionBackground({ withSpotlight = false }: SectionBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!withSpotlight) {
            return;
        }

        const container = containerRef.current;
        const section = container?.parentElement;
        if (!container || !section) {
            return;
        }

        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!canHover || prefersReducedMotion) {
            return;
        }

        let frame: number | null = null;
        let nextX = 0;
        let nextY = 0;

        const updateSpotlight = () => {
            frame = null;
            container.style.setProperty("--spotlight-x", `${nextX}px`);
            container.style.setProperty("--spotlight-y", `${nextY}px`);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = section.getBoundingClientRect();
            nextX = event.clientX - rect.left;
            nextY = event.clientY - rect.top;

            if (frame === null) {
                frame = window.requestAnimationFrame(updateSpotlight);
            }
        };

        const handleMouseEnter = () => container.classList.add("is-active");
        const handleMouseLeave = () => {
            container.classList.remove("is-active");
            if (frame !== null) {
                window.cancelAnimationFrame(frame);
                frame = null;
            }
        };

        section.addEventListener("mousemove", handleMouseMove, { passive: true });
        section.addEventListener("mouseenter", handleMouseEnter);
        section.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            section.removeEventListener("mousemove", handleMouseMove);
            section.removeEventListener("mouseenter", handleMouseEnter);
            section.removeEventListener("mouseleave", handleMouseLeave);
            if (frame !== null) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, [withSpotlight]);

    return (
        <div
            ref={containerRef}
            className="section-bg"
            aria-hidden="true">
            <div className="section-bg-grid"></div>
            <div className="section-bg-glow section-bg-glow-1"></div>
            <div className="section-bg-glow section-bg-glow-2"></div>
            {withSpotlight && <div className="section-bg-spotlight"></div>}
        </div>
    );
}

export default SectionBackground;
