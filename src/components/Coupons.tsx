import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { withUtm } from "@/lib/affiliate";

const coupons = [
  { brand: "Myntra", title: "Flat 70% OFF plus Extra 10% Cashback", code: "MINT70", tag: "Fashion", url: "https://www.myntra.com" },
  { brand: "Amazon", title: "Up to ₹15,000 OFF on Smartphones", code: "DEALMINT", tag: "Electronics", url: "https://www.amazon.in" },
  { brand: "Swiggy", title: "60% OFF up to ₹120 plus 15% Cashback", code: "EATMINT", tag: "Food", url: "https://www.swiggy.com" },
  { brand: "Nykaa", title: "Min 40% OFF on Beauty plus 9% Cashback", code: "GLOWMINT", tag: "Beauty", url: "https://www.nykaa.com" },
  { brand: "Ajio", title: "Flat ₹500 OFF on ₹1,499 plus 12% CB", code: "MINT500", tag: "Fashion", url: "https://www.ajio.com" },
  { brand: "Croma", title: "₹2,000 Instant Discount on Laptops", code: "TECHMINT", tag: "Tech", url: "https://www.croma.com" },
  // small online stores
  { brand: "HyugaLife", title: "25% OFF on Wellness Essentials plus 10% CB", code: "HYUGA25", tag: "Wellness", url: "https://www.hyugalife.com" },
  { brand: "Bonkers Corner", title: "Flat 40% OFF Streetwear plus 8% Cashback", code: "BONK40", tag: "Streetwear", url: "https://www.bonkerscorner.com" },
  { brand: "The Souled Store", title: "Buy 2 Get 1 Free on T-shirts plus 6% CB", code: "SOULMINT", tag: "Fashion", url: "https://www.thesouledstore.com" },
  { brand: "Wakefit", title: "Up to 45% OFF on Mattresses plus ₹500 CB", code: "WAKE500", tag: "Home", url: "https://www.wakefit.co" },
  { brand: "Plum Goodness", title: "Flat 30% OFF Skincare plus 12% Cashback", code: "PLUM30", tag: "Beauty", url: "https://plumgoodness.com" },
  { brand: "Beardo", title: "Min 25% OFF Grooming plus 10% Cashback", code: "BEARDMINT", tag: "Men", url: "https://www.beardo.in" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
};

const Coupons = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (code: string, brand: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      toast({ title: `${brand} code copied!`, description: `Use code ${code} at checkout to save more.` });
      setTimeout(() => setCopied((c) => (c === code ? null : c)), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy the code manually." });
    }
  };

  return (
    <section id="coupons" aria-labelledby="coupons-heading" className="bg-secondary/40 py-20">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Hand-picked Today</span>
          <h2 id="coupons-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Trending coupons & offers</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Tap any code to copy it instantly, then click Get Deal to redeem on the brand site and earn extra CouponMinty cashback.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coupons.map((c) => {
            const isCopied = copied === c.code;
            return (
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
                  <button
                    type="button"
                    onClick={() => handleCopy(c.code, c.brand)}
                    aria-label={`Copy ${c.brand} coupon code ${c.code}`}
                    className="flex items-center gap-2 rounded-lg border border-dashed border-accent bg-accent/5 px-3 py-2 transition-colors hover:bg-accent/10"
                  >
                    <Scissors className="h-4 w-4 text-accent" />
                    <code className="text-sm font-bold tracking-wider text-accent">{c.code}</code>
                    {isCopied ? (
                      <Check className="h-4 w-4 text-accent" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-accent/70" />
                    )}
                  </button>
                  <Button asChild size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                    <a
                      href={withUtm(c.url, "coupons", c.code)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      aria-label={`Get ${c.brand} deal`}
                      onClick={() => handleCopy(c.code, c.brand)}
                    >
                      Get Deal
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
