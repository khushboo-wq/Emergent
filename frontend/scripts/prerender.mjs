import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "../dist-ssr/entry-server.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const routes = [
  "/", "/services", "/services/linkedin-management", "/services/email-outreach",
  "/services/business-support", "/services/lead-generation", "/services/ai-video-creation",
  "/services/email-setup", "/about", "/how-i-work", "/contact", "/privacy-policy", "/terms",
];

for (const route of routes) {
  const { html, head } = render(route);
  const output = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  const target = route === "/" ? join(dist, "index.html") : join(dist, route.slice(1), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, output);
}

const urls = routes.map((route) => `  <url><loc>https://arcturusprofessional.com${route}</loc></url>`).join("\n");
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await rm(join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes with unique HTML head tags and page content.`);