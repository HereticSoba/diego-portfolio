import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./GithubActivity.css";

interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
    weekday: number;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface ContributionMonth {
    name: string;
    firstDay: string;
    totalWeeks: number;
}

interface GithubCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
    months: ContributionMonth[];
}

function GithubActivity() {
    const { t, i18n } = useTranslation();
    const [calendar, setCalendar] = useState<GithubCalendar | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch("/api/github-contributions");

                if (!response.ok) {
                    throw new Error("Error fetching GitHub contributions");
                }
                const data: GithubCalendar = await response.json();
                setCalendar(data);
            } catch (error) {
                console.error("GitHub contributions error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchContributions();
    }, []);

    const formatDate = (date: string) => {
        const currentLag = i18n.language.startsWith("es") ? "es-ES" : "en-US";
        return new Date(`${date}T00:00:00`).toLocaleDateString(currentLag, {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const getContributionColor = (count: number) => {
        if (count === 0) { return "#0d1f1c"; }
        if (count <= 2) { return "#164238"; }
        if (count <= 5) { return "#226b5a"; }
        if (count <= 9) { return "#2da986"; }
        return "#38e8c0";
    };

    const currentLocale = i18n.language.startsWith("es") ? "es-ES" : "en-US";

    return (
        <section id="github-activity" className="github-section">
            <div className="github-container">
                <div className="github-header">
                    <div>
                        <p className="section-label">{t("github.label")}</p>
                        <h2>
                            {t("github.title")}{" "}
                            <span>{t("github.titleHighlights")}</span>
                        </h2>
                    </div>
                    <p className="github-introduction">{t("github.introduction")}</p>
                </div>
                <div className="github-card">
                    <div className="github-card-header">
                        <div>
                            <strong>
                                {loading
                                    ? t("github.loading")
                                    : error
                                    ? t("github.error")
                                    : t("github.contributions", { count: calendar?.totalContributions ?? 0, })}
                            </strong>
                            <span>{t("github.lastYear")}</span>
                        </div>
                        <a href="https://github.com/HereticSoba" target="_blank"
                            rel="noopener noreferrer">
                            {t("github.viewGitHub")}
                        </a>
                    </div>
                    <div className="github-calendar">
                        <div className="github-months"
                            style={{ gridTemplateColumns: `repeat(${calendar?.weeks.length ?? 52}, 1fr)` }}>
                            {calendar?.months.map((month) => {
                                const firstDay = new Date(
                                    `${month.firstDay}T00:00:00`
                                );

                                const monthName = firstDay.toLocaleDateString(
                                    currentLocale,
                                    {
                                        month: "short"
                                    }
                                );

                                return (
                                    <span
                                        key={month.firstDay}
                                        style={{
                                            gridColumn: `span ${month.totalWeeks}`
                                        }}>
                                        {monthName}
                                    </span>
                                );
                            })}
                        </div>
                        <div
                            className="github-grid"
                            style={{
                                gridTemplateColumns: `repeat(${calendar?.weeks.length ?? 52}, 1fr)`
                            }}>
                            {calendar?.weeks.map((week) => (
                                    <div className="github-week"
                                        key={week.contributionDays[0]?.date}>
                                        {week.contributionDays.map((day) => (
                                                <span
                                                    key={day.date}
                                                    title={`${t("github.contributions",{count: day.contributionCount,})} · ${formatDate(day.date)}`}
                                                    style={{
                                                        backgroundColor:
                                                            getContributionColor(
                                                                day.contributionCount
                                                            ),
                                                    }}
                                                />
                                            ))}
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="github-legend">
                        <span>{t("github.less")}</span>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <span>{t("github.more")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GithubActivity;