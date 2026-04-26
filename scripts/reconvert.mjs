import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = "src/assets";
// Use 16:9 aspect (1200x675) for blog images - works for both wide hero and card thumbnails
const tasks = [
  { in: "blog-skincare-src.jpg", out: "blog-skincare.webp", w: 1200, h: 675, q: 78 },
  { in: "blog-health-src.jpg", out: "blog-health.webp", w: 1200, h: 675, q: 78 },
  { in: "blog-holi-src.jpg", out: "blog-holi.webp", w: 1200, h: 675, q: 78 },
  { in: "blog-streetwear-src.jpg", out: "blog-streetwear.webp", w: 1200, h: 675, q: 78 },
  { in: "blog-valentine-src.jpg", out: "blog-valentine.webp", w: 1200, h: 675, q: 78 },
  { in: "blog-wellness-src.jpg", out: "blog-wellness.webp", w: 1200, h: 675, q: 78 },
  { in: "seidenperle-src.png", out: "seidenperle-woman-8606998.webp", w: 1200, h: 675, q: 78 },
];

for (const t of tasks) {
  const inp = path.join(dir, t.in);
  const out = path.join(dir, t.out);
  if (!fs.existsSync(inp)) { console.log("skip", inp); continue; }
  await sharp(inp)
    .resize({ width: t.w, height: t.h, fit: "cover", position: "attention" })
    .webp({ quality: t.q })
    .toFile(out);
  const sz = (fs.statSync(out).size / 1024).toFixed(1);
  console.log(`${t.out}: ${sz} KB`);
}
