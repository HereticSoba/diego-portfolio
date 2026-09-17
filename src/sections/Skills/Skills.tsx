import { useTranslation } from "react-i18next";
import "./Skills.css";

interface SkillGroup {
    title: string;
    skills: string[];
}

const skillGroups: SkillGroup[] = [
    {
        title: "skills.groups.languages",
        skills: ["Kotlin", "C#", "Java"],
    },
    {
        title: "skills.groups.frameworks",
        skills: [".NET", "Spring Boot", "Spring Cloud"],
    },
    {
        title: "skills.groups.databases",
        skills: ["MySQL", "SQL Server"],
    },
    {
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
];

function Skills() {
    const { t } = useTranslation();
    return (
        <section id="stack" className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <p className="section-label">{t("skills.label")}</p>
                    <h2>
                        {t("skills.title")}{" "}
                        <span>{t("skills.titleHighlight")}</span>
                    </h2>
                    <p>{t("skills.subtitle")}</p>
                </div>
                <div className="skills-groups">
                    {skillGroups.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <h3>{t(group.title)}</h3>
                            <div className="skill-tags">
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;