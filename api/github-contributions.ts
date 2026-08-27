export default async function handler(
): Promise<Response> {

    return new Response(
        JSON.stringify({
            status: "ok",
            message: "GitHub Activity API funcionando"
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}