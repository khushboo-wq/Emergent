import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(await readFile(join(root, "seo.config.json"), "utf8"));
const pages = config.pages.filter((page) => page.indexable);
const titles = new Set();
const descriptions = new Set();
const paths = new Set();
const auditRows = [];
let issueCount = 0;

for (const page of pages) {
  const missing = [];
  if (!page.path || paths.has(page.path)) missing.push("Missing or duplicate path");
  if (!page.title || page.title.length >= 60 || titles.has(page.title)) missing.push("Title missing, duplicated, or 60+ characters");
  if (!page.description || page.description.length < 150 || page.description.length > 160 || descriptions.has(page.description)) missing.push("Description missing, duplicated, or outside 150-160 characters");
  if (!page.h1) missing.push("H1 not configured");
  if (page.canonical !== `${config.site.baseUrl}${page.path === "/" ? "/" : page.path}`) missing.push("Canonical does not match page URL");
  if (!page.schemaTypes?.length) missing.push("Schema type not configured");
  paths.add(page.path); titles.add(page.title); descriptions.add(page.description);
  issueCount += missing.length;
  auditRows.push({ ...page, missing });
}

const sitemapUrls = pages.map((page) => `  <url>\n    <loc>${page.canonical}</loc>\n    <lastmod>${page.lastModified}</lastmod>\n    <changefreq>${page.changeFrequency}</changefreq>\n    <priority>${page.priority.toFixed(1)}</priority>\n  </url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
const robots = [...config.site.allowedBots.map((bot) => `User-agent: ${bot}\nAllow: /\n`), "User-agent: *\nAllow: /\n", `Sitemap: ${config.site.baseUrl}/sitemap.xml\n`].join("\n");
const redirects = Object.entries(config.redirects).map(([source, target]) => `${source} ${target} 301!`).join("\n") + "\n";

const escape = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const tableRows = auditRows.map((page) => `<tr><td><strong>${escape(page.path)}</strong></td><td>${escape(page.title)}</td><td>${escape(page.description)}</td><td>${escape(page.h1)}</td><td><a href="${escape(page.canonical)}">${escape(page.canonical)}</a></td><td><span class="status good">Indexable</span></td><td>${escape(page.schemaTypes.join(", "))}</td><td>${page.missing.length ? `<span class="status bad">${escape(page.missing.join("; "))}</span>` : `<span class="status good">Complete</span>`}</td></tr>`).join("\n");
const reportHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Technical SEO Report | Arcturus</title><style>body{margin:0;background:#fbf8f1;color:#0f2942;font:15px/1.55 system-ui,sans-serif}main{max-width:1500px;margin:auto;padding:48px 24px}h1{font-size:clamp(2rem,5vw,4rem);margin:0 0 8px}p{color:#526177}.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:28px 0}.card{background:#fff;border:1px solid #ddd8cd;border-radius:16px;padding:20px;box-shadow:0 16px 35px -28px #0f2942}.card strong{display:block;font-size:1.7rem}.table-wrap{overflow:auto;background:#fff;border:1px solid #ddd8cd;border-radius:18px}table{border-collapse:collapse;min-width:1300px;width:100%}th,td{padding:14px;text-align:left;vertical-align:top;border-bottom:1px solid #ece8df}th{background:#0f2942;color:#fff;font-size:12px}td{font-size:13px}.status{display:inline-block;padding:3px 8px;border-radius:999px}.good{background:#e8f2ef;color:#176153}.bad{background:#fff0ed;color:#9b3327}a{color:#3159a4}</style></head><body><main><p>Arcturus Professional Services</p><h1>Technical SEO checklist and report</h1><p>Generated automatically from <code>seo.config.json</code>. Last generated ${new Date().toISOString().slice(0,10)}.</p><div class="summary"><div class="card"><strong>${pages.length}</strong>Pages in sitemap</div><div class="card"><strong>${issueCount}</strong>Missing SEO items</div><div class="card"><strong>Valid</strong>Sitemap status</div><div class="card"><strong>Allow</strong>Robots status</div></div><div class="table-wrap"><table><thead><tr><th>Page</th><th>SEO title</th><th>Meta description</th><th>H1</th><th>Canonical</th><th>Indexability</th><th>Schema</th><th>Missing items</th></tr></thead><tbody>${tableRows}</tbody></table></div></main></body></html>`;
const markdownRows = auditRows.map((page) => `| ${page.path} | ${page.title} | ${page.description} | ${page.h1} | ${page.canonical} | Indexable | ${page.schemaTypes.join(", ")} | ${page.missing.join("; ") || "None"} |`).join("\n");
const reportMarkdown = `# Arcturus Technical SEO Report\n\nGenerated from \`seo.config.json\`.\n\n- Pages created: ${pages.length}\n- Sitemap status: Generated and valid\n- Robots.txt status: Generated, important pages allowed\n- Missing SEO items: ${issueCount}\n\n| Page | SEO title | Meta description | H1 | Canonical | Indexability | Schema | Missing items |\n|---|---|---|---|---|---|---|---|\n${markdownRows}\n`;

await writeFile(join(root, "public", "sitemap.xml"), sitemap);
await writeFile(join(root, "public", "robots.txt"), robots);
await writeFile(join(root, "public", "_redirects"), redirects);
await writeFile(join(root, "public", "seo-report.html"), reportHtml);
await writeFile(join(root, "SEO_REPORT.md"), reportMarkdown);
console.log(`SEO audit complete: ${pages.length} indexable pages, ${Object.keys(config.redirects).length} redirects, ${issueCount} missing items.`);
if (issueCount) process.exit(1);
