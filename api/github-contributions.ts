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
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 10000);

    const response = await fetch(
        "https://api.github.com/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
                "User-Agent": "Diego-Portfolio",
            },
            body: JSON.stringify({ query }),
            signal: controller.signal,
        }
    );

    clearTimeout(timeout);

    const data = await response.json();

    if (!response.ok || data.errors) {
        console.error("GitHub API error:", data.errors);

        return new Response(
            JSON.stringify({
                error: "GitHub API request failed",
                details: data.errors ?? null,
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

} catch (error) {

    console.error("GitHub request error:", error);

    return new Response(
        JSON.stringify({
            error: "Unexpected server error",
            details:
                error instanceof Error
                    ? error.message
                    : "Unknown error",
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