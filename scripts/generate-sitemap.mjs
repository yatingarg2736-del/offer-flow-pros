import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.couponminty.com";
const distDir = resolve(__dirname, "../dist");

// ---- Blog posts (regex over blogPosts.ts, as before) ----
const bpContent = readFileSync(resolve(__dirname, "../src/lib/blogPosts.ts"), "utf-8");
const slugs = [...bpContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const dates = [...bpContent.matchAll(/date:\s*["']([^"']+)["']/g)].map((m) => m[1]);

// ---- Affiliate brands/categories/coupons (parsed from affiliateData.ts) ----
// The data file is TypeScript, so extract slugs from the two array literals.
// B: ["slug","name","category",merchantId,"site"|null,"logo"|null,featured]
// C: ["brandSlug","code","title"]
const adContent = readFileSync(resolve(__dirname, "../src/data/affiliateData.ts"), "utf-8");
const section = (startMarker, endMarker) => {
  const start = adContent.indexOf(startMarker);
  const end = adContent.indexOf(endMarker, start);
  if (start === -1 || end === -1) throw new Error(`affiliateData section not found: ${startMarker}`);
  return adContent.slice(start, end);
};
const bSection = section("const B:[", "export const brands");
const cSection = section("const C:[", "const catOf");
const brandSlugs = [...bSection.matchAll(/\["([^"]+)","/g)].map((m) => m[1]);
const couponBrandSlugs = new Set([...cSection.matchAll(/\["([^"]+)","/g)].map((m) => m[1]));
const categorySlugs = [...new Set(couponBrandSlugs)].map((bs) => {
  const line = bSection.match(new RegExp(`\\["${bs}","[^"]*","([^"]+)"`));
  return line ? line[1] : null;
}).filter(Boolean);
const couponCategories = [...new Set(categorySlugs)];
const couponBrands = [...couponBrandSlugs];

// ---- URL list ----
// lastmod is only set from page-specific publish dates; never from build time.
const urls = [
  { loc: "/", pri: "1.0", freq: "daily" },
  { loc: "/blog", pri: "0.8", freq: "daily" },
  { loc: "/brands", pri: "0.8", freq: "weekly" },
  { loc: "/coupons", pri: "0.8", freq: "daily" },
  { loc: "/blog/amazon-great-summer-sale-2026", pri: "0.7", freq: "monthly" },
  { loc: "/privacy-policy", pri: "0.3", freq: "yearly" },
  { loc: "/terms", pri: "0.3", freq: "yearly" },
  ...slugs.map((s, i) => ({
    loc: `/blog/${s}`,
    pri: "0.7",
    freq: "monthly",
    mod: dates[i], // omitted when the post has no publish date
  })),
  ...couponCategories.map((c) => ({ loc: `/coupons/${c}`, pri: "0.7", freq: "monthly" })),
  ...couponBrands.map((s) => ({ loc: `/brands/${s}`, pri: "0.6", freq: "monthly" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>
    <loc>${SITE}${u.loc}</loc>${u.mod ? `
    <lastmod>${u.mod}</lastmod>` : ""}
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`)
  .join("\n")}
</urlset>`;

writeFileSync(resolve(distDir, "sitemap.xml"), xml);
writeFileSync(
  resolve(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`
);
console.log(
  `✅ sitemap.xml (${urls.length} URLs: ${slugs.length} blogs, ${couponCategories.length} categories, ${couponBrands.length} brands) + robots.txt generated`
);
