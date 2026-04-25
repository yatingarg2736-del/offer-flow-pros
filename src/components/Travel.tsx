import { withUtm } from "@/lib/affiliate";

const tech = [
  { name: "Amazon Electronics", cb: "Up to 8% Cashback", url: "https://www.amazon.in/electronics" },
  { name: "Flipkart Mobiles", cb: "₹2,000 OFF plus 6% CB", url: "https://www.flipkart.com/mobiles" },
  { name: "Croma", cb: "10% on Laptops", url: "https://www.croma.com" },
  { name: "Reliance Digital", cb: "Flat ₹1,500 OFF", url: "https://www.reliancedigital.in" },
  { name: "boAt Lifestyle", cb: "12% on Audio", url: "https://www.boat-lifestyle.com" },
  { name: "Noise Wearables", cb: "15% on Smartwatches", url: "https://www.gonoise.com" },
  { name: "Vijay Sales", cb: "8% on Cameras", url: "https://www.vijaysales.com" },
  { name: "Games The Shop", cb: "20% on Gaming", url: "https://www.gamestheshop.com" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
};

const Travel = () => (
  <section id="tech" aria-labelledby="tech-heading" className="container py-20">
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">E-commerce & Tech</span>
        <h2 id="tech-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Save big on gadgets, electronics & tech</h2>
      </div>
      <p className="text-muted-foreground md:text-right">Official partner with leading e-commerce and tech brands. Shop through CouponMinty and earn extra cashback on every gadget.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {tech.map((t) => (
        <a
          key={t.name}
          href={withUtm(t.url, "tech", t.name.toLowerCase().replace(/\s+/g, "-"))}
          target="_blank"
          rel="noopener noreferrer sponsored"
          title={`Shop ${t.name}`}
          className="group relative overflow-hidden rounded-2xl bg-hero p-6 text-primary-foreground shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-all group-hover:bg-accent/40" />
          <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-white/95">
            <img
              src={logoFor(t.url)}
              alt={`${t.name} logo`}
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded"
            />
          </div>
          <div className="relative mt-6 text-lg font-bold">{t.name}</div>
          <div className="relative mt-1 text-sm text-white/70">{t.cb}</div>
        </a>
      ))}
    </div>
  </section>
);

export default Travel;
