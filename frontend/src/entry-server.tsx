import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { getSeoForPath, renderSeoHead } from "./lib/seoData";

export function render(path: string) {
  const queryClient = new QueryClient();
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </QueryClientProvider>,
  );
  const seo = getSeoForPath(path);
  return { html, head: renderSeoHead(seo), seo };
}
