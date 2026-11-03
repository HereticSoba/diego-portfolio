import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "./i18n/config";

interface PrerenderData {
    url: string;
}

export async function prerender({ url }: PrerenderData) {
    const { renderToString } = await import("react-dom/server.edge");

    const html = renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
        </StaticRouter>
    );

    return { html };
}
