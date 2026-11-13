import { useRef, useState, type KeyboardEvent } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
    SiAndroidstudio,
    SiDocker,
    SiDotnet,
    SiGithub,
    SiJira,
    SiJavascript,
    SiKeycloak,
    SiKotlin,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostman,
    SiReact,
    SiSpringboot,
    SiSpringsecurity,
    SiSpring,
    SiSwagger,
    SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVisualStudio } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import "./Skills.css";

type SkillGroupId = "languages" | "frameworks" | "databases" | "tools";

interface SkillGroup {
    title: string;
    skills: string[];
}

const skillGroups: Record<SkillGroupId, SkillGroup> = {
    languages: {
        title: "skills.groups.languages",
        skills: ["Kotlin", "C#", "Java", "TypeScript", "JavaScript"],
    },
    frameworks: {
        title: "skills.groups.frameworks",
        skills: [
            ".NET 8",
            "Spring Boot",
            "Spring Cloud",
            "Spring Security",
            "React",
            "Node.js",
            "Azure",
            "Entra ID",
        ],
    },
    databases: {
        title: "skills.groups.databases",
        skills: ["MySQL", "SQL Server", "MongoDB"],
    },
    tools: {
        title: "skills.groups.tools",
        skills: [
            "Git/GitHub",
            "Docker",
            "Postman",
            "Swagger",
            "Keycloak",
            "Jira",
            "Visual Studio",
            "Android Studio",
        ],
    },
};

const categoryOrder: SkillGroupId[] = [
    "languages",
    "frameworks",
    "databases",
    "tools",
];

const skillIcons: Record<string, IconType> = {
    Kotlin: SiKotlin,
    "C#": TbBrandCSharp,
    Java: FaJava,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    ".NET 8": SiDotnet,
    "Spring Boot": SiSpringboot,
    "Spring Cloud": SiSpring,
    "Spring Security": SiSpringsecurity,
    React: SiReact,
    "Node.js": SiNodedotjs,
    MySQL: SiMysql,
    "SQL Server": DiMsqlServer,
    MongoDB: SiMongodb,
    "Git/GitHub": SiGithub,
    Docker: SiDocker,
    Postman: SiPostman,
    Swagger: SiSwagger,
    Keycloak: SiKeycloak,
    Jira: SiJira,
    "Visual Studio": TbBrandVisualStudio,
    "Android Studio": SiAndroidstudio,
};

const skillColors: Record<string, string> = {
    Kotlin: "#7F52FF",
    "C#": "#512BD4",
    Java: "#ED8B00",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    ".NET 8": "#512BD4",
    "Spring Boot": "#6DB33F",
    "Spring Cloud": "#6DB33F",
    "Spring Security": "#6DB33F",
    React: "#61DAFB",
    "Node.js": "#5FA04E",
    MySQL: "#4479A1",
    "SQL Server": "#CC2927",
    MongoDB: "#47A248",
    "Git/GitHub": "#181717",
    Docker: "#2496ED",
    Postman: "#FF6C37",
    Swagger: "#85EA2D",
    Keycloak: "#4D4D4D",
    Jira: "#0052CC",
    "Visual Studio": "#5C2D91",
    "Android Studio": "#3DDC84",
    Azure: "#0078D4",
    "Entra ID": "#0078D4",
};

const skillMonogramColors: Record<string, string> = {
    JavaScript: "#111111",
    React: "#09252B",
    "Node.js": "#102012",
    Swagger: "#15210A",
    "Android Studio": "#102218",
    Azure: "#FFFFFF",
    "Entra ID": "#FFFFFF",
};

const skillMonograms: Record<string, string> = {
    Azure: "Az",
    "Entra ID": "ID",
};

const totalTechnologies = categoryOrder.reduce(
    (total, groupId) => total + skillGroups[groupId].skills.length,
    0
);

function getSkillInitials(technology: string): string {
    if (technology === "C#") {
        return "C#";
    }

    if (skillMonograms[technology]) {
        return skillMonograms[technology];
    }

    const words = technology
        .replace(/[^A-Za-z0-9]/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length > 1) {
        return words.slice(0, 3).map((word) => word[0]).join("").toUpperCase();
    }

    return technology.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
}

function getTechnologyFamily(technology: string): string {
    if (
        technology === "Spring Boot" ||
        technology === "Spring Cloud" ||
        technology === "Spring Security"
    ) {
        return "Java";
    }

    if (technology === "React" || technology === "Node.js") {
        return "JavaScript";
    }

    return technology;
}

function Skills() {
    const { t } = useTranslation();
    const [selectedGroupId, setSelectedGroupId] =
        useState<SkillGroupId>("languages");
    const [selectedTechnology, setSelectedTechnology] = useState("Kotlin");
    const tabButtonRefs = useRef<Partial<Record<SkillGroupId, HTMLButtonElement>>>({});
    const skillButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const activeGroup = skillGroups[selectedGroupId];

    const selectGroup = (groupId: SkillGroupId) => {
        const firstTechnology = skillGroups[groupId].skills[0];
        if (!firstTechnology) {
            return;
        }

        setSelectedGroupId(groupId);
        setSelectedTechnology(firstTechnology);
    };

    const handleTabKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        index: number
    ) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
            return;
        }

        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex =
            (index + direction + categoryOrder.length) % categoryOrder.length;
        const nextGroupId = categoryOrder[nextIndex];

        if (nextGroupId) {
            selectGroup(nextGroupId);
            tabButtonRefs.current[nextGroupId]?.focus();
        }
    };

    const handleTechnologyKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        technologyIndex: number
    ) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            const nextIndex =
                (technologyIndex + direction + activeGroup.skills.length) %
                activeGroup.skills.length;
            const nextTechnology = activeGroup.skills[nextIndex];

            if (nextTechnology) {
                setSelectedTechnology(nextTechnology);
                skillButtonRefs.current[nextTechnology]?.focus();
            }
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            const firstTechnology = activeGroup.skills[0];

            if (firstTechnology) {
                setSelectedTechnology(firstTechnology);
                skillButtonRefs.current[firstTechnology]?.focus();
            }
        }
    };

    return (
        <section id="stack" className="skills-section">
            <div className="skills-container">
                <header className="skills-header">
                    <p className="section-label">{t("skills.label")}</p>
                    <h2>
                        {t("skills.title")}{" "}
                        <span>{t("skills.titleHighlight")}</span>
                    </h2>
                    <p>{t("skills.subtitle")}</p>
                </header>

                <div
                    className="skills-tabs"
                    role="tablist"
                    aria-label={t("skills.categoryTabs")}>
                    {categoryOrder.map((groupId, index) => {
                        const group = skillGroups[groupId];
                        const isSelected = selectedGroupId === groupId;

                        return (
                            <button
                                aria-controls="skills-technology-panel"
                                aria-selected={isSelected}
                                className={`skills-tab${isSelected ? " selected" : ""}`}
                                id={`skills-tab-${groupId}`}
                                key={groupId}
                                onClick={() => selectGroup(groupId)}
                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                                ref={(element) => {
                                    if (element) {
                                        tabButtonRefs.current[groupId] = element;
                                    }
                                }}
                                role="tab"
                                tabIndex={isSelected ? 0 : -1}
                                type="button">
                                <span>{t(group.title)}</span>
                                <strong>{String(group.skills.length).padStart(2, "0")}</strong>
                            </button>
                        );
                    })}
                </div>

                <div className="skills-workspace">
                    <div
                        aria-labelledby={`skills-tab-${selectedGroupId}`}
                        className="skills-technology-panel"
                        id="skills-technology-panel"
                        role="tabpanel">
                        <div className="skills-tech-grid">
                            {activeGroup.skills.map((technology, index) => {
                                const SkillIcon = skillIcons[technology];
                                const isSelected = selectedTechnology === technology;

                                return (
                                    <button
                                        aria-pressed={isSelected}
                                        aria-label={technology}
                                        className={`skills-tech-button${isSelected ? " selected" : ""}`}
                                        key={technology}
                                        onClick={() => setSelectedTechnology(technology)}
                                        onKeyDown={(event) =>
                                            handleTechnologyKeyDown(event, index)
                                        }
                                        title={technology}
                                        ref={(element) => {
                                            skillButtonRefs.current[technology] = element;
                                        }}
                                        tabIndex={isSelected ? 0 : -1}
                                        type="button">
                                        {SkillIcon ? (
                                            <SkillIcon
                                                aria-hidden="true"
                                                className={`skills-tech-icon${technology === "Git/GitHub" ? " github-tech-icon" : ""}`}
                                                style={{
                                                    color:
                                                        skillColors[technology] ??
                                                        "var(--accent)",
                                                }}
                                            />
                                        ) : (
                                            <span
                                                aria-hidden="true"
                                                className="skills-tech-monogram"
                                                style={{
                                                    backgroundColor:
                                                        skillColors[technology] ??
                                                        "var(--accent)",
                                                    color:
                                                        skillMonogramColors[technology] ??
                                                        "var(--bg-primary)",
                                                }}>
                                                {getSkillInitials(technology)}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="skills-detail-panel" aria-live="polite">
                        <p className="skills-detail-category">
                            {t(activeGroup.title)} · {getTechnologyFamily(selectedTechnology)}
                        </p>
                        <h3>{selectedTechnology}</h3>
                    </aside>
                </div>

                <footer className="skills-footer">
                    <p>{t("skills.totalTechnologies", { count: totalTechnologies })}</p>
                </footer>
            </div>
        </section>
    );
}

export default Skills;
