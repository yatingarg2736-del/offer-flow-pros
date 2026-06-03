import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.couponminty.com";
const distDir = resolve(__dirname, "../dist");

const bpPath = resolve(__dirname, "../src/lib/blogPosts.ts");
const bpContent = readFileSync(bpPath, "utf-8");
const slugs = [...bpContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const dates = [...bpContent.matchAll(/date:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const today = new Date().toISOString().split("T")[0];

const urls = [
  { loc: "/", pri: "1.0", freq: "daily", mod: today },
  { loc: "/blog", pri: "0.8", freq: "daily", mod: today },
  { loc: "/blog/amazon-great-summer-sale-2026", pri: "0.7", freq: "monthly", mod: today },
  { loc: "/myntra-deals", pri: "0.8", freq: "daily", mod: today },
  { loc: "/amazon-deals", pri: "0.8", freq: "daily", mod: today },
  { loc: "/privacy-policy", pri: "0.3", freq: "yearly", mod: today },
  { loc: "/terms", pri: "0.3", freq: "yearly", mod: today },
  ...slugs.map((s, i) => ({
    loc: `/blog/${s}`,
    pri: "0.7",
    freq: "monthly",
    mod: dates[i] || today,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.mod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync(resolve(distDir, "sitemap.xml"), xml);
writeFileSync(
  resolve(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`
);
console.log("✅ sitemap.xml (" + urls.length + " URLs) + robots.txt generated");
