import "./GithubActivity.css";

interface ContributionDay{
    date: string;
    contributionCount: number;
    color: string;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

function GithubActivity() {
    return (
        <section id="github-activity" className="github-section">
            <div className="github-container">
                <div className="github-header">
                    <div>
                        <p className="section-label">/ GITHUB</p>
                        <h2>
                            Actividad de
                            <span> desarrollo.</span>
                        </h2>
                    </div>
                    <p className="github-introduction">
                        Contribuciones y actividad de desarrollo durante el último año.
                    </p>
                </div>
                <div className="github-card">
                    <div className="github-card-header">
                        <div>
                            <strong>Contribuciones</strong>
                            <span>Último año</span>
                        </div>
                        <a href="https://github.com/HereticSoba"
                        target="_blank"
                        rel="noopener noreferrer">
                            Ver GitHub ↗
                        </a>
                    </div>
                    <div className="github-calendar">
                        <div className="github-months">
                        </div>
                        <div className="github-grid">

                        </div>
                    </div>
                    <div className="github-legend">
                        <span>Menos</span>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <span>Más</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GithubActivity;