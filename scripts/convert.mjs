import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = "src/assets";
const tasks = [
  { in: "hero.jpg", out: "hero.webp", w: 1200, h: 600, q: 78 },
  { in: "team.jpg", out: "team.webp", w: 400, h: 400, q: 80 },
  { in: "blog-skincare.jpg", out: "blog-skincare.webp", w: 900, h: 256, q: 78 },
  { in: "blog-health.jpg", out: "blog-health.webp", w: 900, h: 256, q: 78 },
  { in: "blog-holi.jpg", out: "blog-holi.webp", w: 900, h: 256, q: 78 },
  { in: "blog-streetwear.jpg", out: "blog-streetwear.webp", w: 900, h: 256, q: 78 },
  { in: "blog-valentine.jpg", out: "blog-valentine.webp", w: 900, h: 256, q: 78 },
  { in: "blog-wellness.jpg", out: "blog-wellness.webp", w: 900, h: 256, q: 78 },
  { in: "seidenperle-woman-8606998.png", out: "seidenperle-woman-8606998.webp", w: 900, h: 256, q: 78 },
];

for (const t of tasks) {
  const inp = path.join(dir, t.in);
  const out = path.join(dir, t.out);
  await sharp(inp)
    .resize({ width: t.w, height: t.h, fit: "cover", position: "attention" })
    .webp({ quality: t.q })
    .toFile(out);
  const sz = (fs.statSync(out).size / 1024).toFixed(1);
  console.log(`${t.out}: ${sz} KB`);
}
