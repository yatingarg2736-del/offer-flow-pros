import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Copy, Check, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { withUtm } from "@/lib/affiliate";
import { coupons, logoFor } from "@/lib/dealsData";

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
          <p className="mt-3 max-w-2xl text-muted-foreground">Tap Copy Code to grab the discount, then click Get Deal to redeem on the brand site and earn extra CouponMinty cashback.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {coupons.map((c) => {
            const isCopied = copied === c.code;
            return (
              <article key={c.code} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 transition-transform group-hover:scale-150" />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <img src={logoFor(c.url)} alt={`${c.brand} logo`} width={16} height={16} loading="lazy" className="h-4 w-4 rounded" />
                    {c.brand}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{c.tag}</span>
                </div>
                <h3 className="relative mt-4 flex-1 text-base font-bold leading-snug text-foreground">{c.title}</h3>

                <div className="relative mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Expires {c.expiry}
                </div>

                <div className="relative mt-4 flex items-center gap-2 rounded-lg border border-dashed border-accent bg-accent/5 px-3 py-2">
                  <Scissors className="h-4 w-4 text-accent" />
                  <code className="flex-1 truncate text-sm font-bold tracking-wider text-accent">{c.code}</code>
                </div>

                <div className="relative mt-3 grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(c.code, c.brand)}
                    aria-label={`Copy ${c.brand} coupon code ${c.code}`}
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    {isCopied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-3.5 w-3.5" />}
                    {isCopied ? "Copied" : "Copy Code"}
                  </Button>
                  <Button asChild size="sm" className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                    <a
                      href={c.brand === "Myntra" ? "/myntra-deals" : withUtm(c.url, "coupons", c.code)}
                      {...(c.brand === "Myntra" ? {} : { target: "_blank", rel: "noopener noreferrer sponsored" })}
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
