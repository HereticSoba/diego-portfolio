import type { VercelRequest, VercelResponse } from "@vercel/node";

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

interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
    months: ContributionMonth[];
}

interface GitHubResponse {
    data?: {
        user?: {
            contributionsCollection?: {
                contributionCalendar?: ContributionCalendar;
            };
        };
    };
    errors?: {
        message: string;
    }[];
}

export default async function handler(
    _request: VercelRequest,
    response: VercelResponse
) {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return response.status(500).json({
            error: "GitHub token not configured",
        });
    }

    const query = `
        query {
            user(login: "HereticSoba") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                                color
                                weekday
                            }
                        }
                        months {
                            name
                            firstDay
                            totalWeeks
                        }
                    }
                }
            }
        }
    `;

    try {
        const githubResponse = await fetch(
            "https://api.github.com/graphql",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                    "User-Agent": "Diego-Portfolio",
                },
                body: JSON.stringify({ query }),
            }
        );

        const data = (await githubResponse.json()) as GitHubResponse;

        if (!githubResponse.ok || data.errors) {
            console.error("GitHub API error:", data.errors);

            return response.status(502).json({
                error: "GitHub API request failed",
                details: data.errors ?? null,
            });
        }

        const contributionCalendar =
            data.data?.user?.contributionsCollection?.contributionCalendar;

        if (!contributionCalendar) {
            console.error("GitHub contribution data not found");

            return response.status(502).json({
                error: "GitHub contribution data not found",
            });
        }

        return response.status(200).json(contributionCalendar);
    } catch (error) {
        console.error("GitHub request error:", error);

        return response.status(500).json({
            error: "Unexpected server error",
            details:
                error instanceof Error
                    ? error.message
                    : "Unknown error",
        });
    }
}