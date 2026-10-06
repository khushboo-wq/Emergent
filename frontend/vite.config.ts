import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualEdits } from "@emergentbase/visual-edits/vite";
import fs from "node:fs/promises";
import { readFileSync } from "node:fs";
import type { Plugin } from "vite";

const seoConfig = JSON.parse(readFileSync(path.resolve(__dirname, "seo.config.json"), "utf8"));
const prerenderRoutes = new Set<string>(seoConfig.pages.map((page: { path: string }) => page.path));
const redirectRules = new Map<string, string>(Object.entries(seoConfig.redirects));

function ssrHtmlPlugin(): Plugin {
  return {
    name: "arcturus-route-html",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
          const pathname = (request.url ?? "/").split("?")[0].replace(/\/$/, "") || "/";
          if (request.method !== "GET" || !request.headers.accept?.includes("text/html")) return next();
          const redirectTarget = redirectRules.get(pathname);
          if (redirectTarget) {
            response.statusCode = 301;
            response.setHeader("Location", redirectTarget);
            response.end();
            return;
          }
          if (pathname.split("/").pop()?.includes(".")) return next();
          try {
            const template = await fs.readFile(path.resolve(__dirname, "index.html"), "utf8");
            const transformed = await server.transformIndexHtml(pathname, template);
            const module = await server.ssrLoadModule("/src/entry-server.tsx");
            const { html, head } = module.render(pathname);
            response.statusCode = prerenderRoutes.has(pathname) ? 200 : 404;
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.end(transformed.replace("<!--app-head-->", head).replace("<!--app-html-->", html));
          } catch (error) {
            server.ssrFixStacktrace(error as Error);
            next(error);
          }
      });
    },
  };
}

// Supervisor exports DISABLE_HOT_RELOAD=true when the platform sets ENABLE_RELOAD=false.
const hotReloadDisabled = process.env.DISABLE_HOT_RELOAD === "true";

// Visual Edits (x-* JSX tagging, overlay, /edit-file endpoint) is dev-server-only by
// default (apply: serve); escape hatch mirrors DISABLE_HOT_RELOAD.
const visualEditsDisabled = process.env.DISABLE_VISUAL_EDITS === "true";

// Pod inotify quota is node-shared and routinely exhausted; native fs.watch EMFILEs at
// boot. Polling is the load-bearing default (set before Vite evaluates the config).
if (!hotReloadDisabled) {
  process.env.CHOKIDAR_USEPOLLING = "true";
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ssrHtmlPlugin(),
    ...(visualEditsDisabled ? [] : [visualEdits()]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Every shipped dep, pre-bundled up front. Vite discovers deps lazily, so the first
  // import outside the initial graph would trigger a re-optimize + reload mid-session.
  optimizeDeps: {
    include: [
      "@base-ui/react/button",
      "@base-ui/react/checkbox",
      "@base-ui/react/dialog",
      "@base-ui/react/input",
      "@base-ui/react/menu",
      "@base-ui/react/merge-props",
      "@base-ui/react/popover",
      "@base-ui/react/select",
      "@base-ui/react/tabs",
      "@base-ui/react/use-render",
      "@tanstack/react-query",
      "class-variance-authority",
      "clsx",
      "date-fns",
      "lucide-react",
      "motion/react",
      "next-themes",
      "react",
      "react-day-picker",
      "react-dom/client",
      "react-is",
      "react-icons/fa6",
      "react-icons/md",
      "react-router-dom",
      "recharts",
      "sonner",
      "tailwind-merge",
    ],
  },
  server: {
    host: true,
    port: 3000,
    allowedHosts: true,
    // No hmr.clientPort override: Vite infers the WS target from window.location, which
    // is correct on both localhost:3000 (smoke) and the https/:443 preview proxy.
    hmr: !hotReloadDisabled,
    watch: hotReloadDisabled ? null : { usePolling: true, interval: 300 },
    // The /api proxy convention: frontend code calls relative /api/*, never an
    // absolute backend URL. Target is the FastAPI dev server (supervisor: backend).
    proxy: {
      "/api": {
        target: "http://localhost:8001",
        changeOrigin: true,
      },
    },
  },
});
