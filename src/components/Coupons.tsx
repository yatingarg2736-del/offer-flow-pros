import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const coupons = [
  { brand: "Myntra", title: "Flat 70% OFF + Extra 10% Cashback", code: "MINT70", tag: "Fashion", url: "https://www.myntra.com" },
  { brand: "Amazon", title: "Up to ₹15,000 OFF on Smartphones", code: "DEALMINT", tag: "Electronics", url: "https://www.amazon.in" },
  { brand: "Swiggy", title: "60% OFF up to ₹120 + 15% Cashback", code: "EATMINT", tag: "Food", url: "https://www.swiggy.com" },
  { brand: "Nykaa", title: "Min 40% OFF on Beauty + 9% Cashback", code: "GLOWMINT", tag: "Beauty", url: "https://www.nykaa.com" },
  { brand: "Ajio", title: "Flat ₹500 OFF on ₹1,499 + 12% CB", code: "MINT500", tag: "Fashion", url: "https://www.ajio.com" },
  { brand: "Croma", title: "₹2,000 Instant Discount on Laptops", code: "TECHMINT", tag: "Tech", url: "https://www.croma.com" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
};

const Coupons = () => (
  <section id="coupons" aria-labelledby="coupons-heading" className="bg-secondary/40 py-20">
    <div className="container">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Hand-picked Today</span>
        <h2 id="coupons-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Trending coupons & offers</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {coupons.map((c) => (
          <article key={c.code} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 transition-transform group-hover:scale-150" />
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <img src={logoFor(c.url)} alt={`${c.brand} logo`} width={16} height={16} loading="lazy" className="h-4 w-4 rounded" />
                {c.brand}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{c.tag}</span>
            </div>
            <h3 className="relative mt-4 text-lg font-bold leading-snug text-foreground">{c.title}</h3>
            <div className="relative mt-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-dashed border-accent bg-accent/5 px-3 py-2">
                <Scissors className="h-4 w-4 text-accent" />
                <code className="text-sm font-bold tracking-wider text-accent">{c.code}</code>
              </div>
              <Button asChild size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                <a href={c.url} target="_blank" rel="noopener noreferrer sponsored" aria-label={`Get ${c.brand} deal`}>Get Deal</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Coupons;
