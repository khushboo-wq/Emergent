import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "../dist-ssr/entry-server.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const config = JSON.parse(await readFile(join(root, "seo.config.json"), "utf8"));
const routes = config.pages.filter((page) => page.indexable).map((page) => page.path);

for (const route of routes) {
  const { html, head } = render(route);
  const output = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  const configured = config.pages.find((page) => page.path === route);
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const h2Count = (html.match(/<h2\b/g) || []).length;
  const imageTags = html.match(/<img\b[^>]*>/g) || [];
  if (h1Count !== 1) throw new Error(`${route}: expected exactly one H1, found ${h1Count}`);
  if (h2Count < 1) throw new Error(`${route}: expected at least one H2`);
  if (imageTags.some((tag) => !/\balt=/.test(tag))) throw new Error(`${route}: image without alt text`);
  if (!head.includes(`<link rel="canonical" href="${configured.canonical}">`)) throw new Error(`${route}: canonical mismatch`);
  if (!head.includes(`<meta name="description" content=`)) throw new Error(`${route}: meta description missing`);
  if (!head.includes(`name="robots" content="index, follow`)) throw new Error(`${route}: important page is not indexable`);
  if (!head.includes(`property="og:title"`) || !head.includes(`property="og:image"`) || !head.includes(`name="twitter:title"`) || !head.includes(`name="twitter:image"`)) throw new Error(`${route}: social metadata missing`);
  if (!head.includes(`application/ld+json`)) throw new Error(`${route}: JSON-LD missing`);
  if (configured.serviceSlug && (!head.includes(`BreadcrumbList`) || !head.includes(`FAQPage`) || !head.includes(`\"@type\":\"Service\"`))) throw new Error(`${route}: service schema incomplete`);
  const target = route === "/" ? join(dist, "index.html") : join(dist, route.slice(1), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, output);
}

await rm(join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered and audited ${routes.length} routes with unique HTML head tags and page content.`);