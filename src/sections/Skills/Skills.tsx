import "./Skills.css";

interface SkillGroup {
    title: string;
    skills: string[];
}

const skillGroups: SkillGroup[] = [
    {
        title: "Languages",
        skills: ["Kotlin", "C#", "Java"],
    },
    {
        title: "Frameworks & Platforms",
        skills: [".NET", "Spring Boot"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "SQL Server"],
    },
    {
        title: "Tools",
        skills: [
            "Git/GitHub",
            "Docker",
            "Postman",
            "Swagger",
            "Jira",
            "Visual Studio",
            "Android Studio",
        ],
    },
];

function Skills() {
    return (
        <section id="stack" className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <p className="section-label">/ STACK</p>
                    <h2>
                        Tecnologías y
                        <span> herramientas.</span>
                    </h2>
                    <p>
                        Tecnologías y herramientas que utilizo para desarrollar, probar y mantener mis proyectos.
                    </p>
                </div>
                <div className="skills-groups">
                    {skillGroups.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <h3>{group.title}</h3>
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