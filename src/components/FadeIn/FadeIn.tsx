import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
}

export function FadeIn({ children }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (domRef.current) {
                            observer.unobserve(domRef.current);
                        }
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
            {children}
        </div>
    );
}