export default async function handler(
    req: Request
): Promise<Response> {

    if (req.method !== "GET") {
        return new Response(
            JSON.stringify({ error: "Method not allowed" }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return new Response(
            JSON.stringify({
                error: "GitHub token not configured",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
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

        const response = await fetch(
            "https://api.github.com/graphql",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ query }),
            }
        );

        const data = await response.json();

        if (!response.ok || data.errors) {
            return new Response(
                JSON.stringify({
                    error: "GitHub API request failed",
                }),
                {
                    status: 502,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        return new Response(
            JSON.stringify(
                data.data.user.contributionsCollection
                    .contributionCalendar
            ),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control":
                        "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            }
        );

    } catch {
        return new Response(
            JSON.stringify({
                error: "Unexpected server error",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}