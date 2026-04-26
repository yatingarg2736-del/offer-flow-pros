import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Search, Tag, Store as StoreIcon, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { stores, coupons, logoFor } from "@/lib/dealsData";
import { withUtm } from "@/lib/affiliate";

type Suggestion = { kind: "store" | "coupon"; label: string; sub: string; url: string; code?: string };

const Hero = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const suggestions = useMemo<Suggestion[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const s: Suggestion[] = stores
      .filter((x) => x.name.toLowerCase().includes(q) || x.category.toLowerCase().includes(q))
      .slice(0, 4)
      .map((x) => ({ kind: "store", label: x.name, sub: `${x.category} · Up to ${x.cb} cashback`, url: x.url }));
    const c: Suggestion[] = coupons
      .filter((x) => x.brand.toLowerCase().includes(q) || x.title.toLowerCase().includes(q) || x.tag.toLowerCase().includes(q))
      .slice(0, 4)
      .map((x) => ({ kind: "coupon", label: `${x.brand} · ${x.code}`, sub: x.title, url: x.url, code: x.code }));
    return [...s, ...c].slice(0, 6);
  }, [query]);

  const results = useMemo(() => {
    const q = submitted.trim().toLowerCase();
    if (!q) return null;
    const matchedStores = stores.filter((x) => x.name.toLowerCase().includes(q) || x.category.toLowerCase().includes(q));
    const matchedCoupons = coupons.filter((x) => x.brand.toLowerCase().includes(q) || x.title.toLowerCase().includes(q) || x.tag.toLowerCase().includes(q));
    return { matchedStores, matchedCoupons };
  }, [submitted]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitted(query);
    setOpen(false);
    setTimeout(() => {
      document.getElementById("search-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container relative grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-accent" /> Trusted by 25M+ shoppers
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Extra Cashback on top of <span className="text-accent">every coupon</span> you use.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            CouponMinty partners with 1,500+ leading brands across shopping, travel, fashion and food, so you save more on every single order.
          </p>

          <form onSubmit={submit} ref={wrapRef} className="relative mt-8 max-w-xl">
            <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-elegant">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                  onFocus={() => query && setOpen(true)}
                  className="w-full bg-transparent py-2 text-foreground outline-none placeholder:text-muted-foreground"
                  placeholder="Search Amazon, Flipkart, MakeMyTrip…"
                  aria-label="Search stores and coupons"
                />
                {query && (
                  <button type="button" onClick={() => { setQuery(""); setSubmitted(""); }} aria-label="Clear search" className="text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button type="submit" className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                Find Deals <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {open && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-elegant">
                {suggestions.map((s, idx) => (
                  <li key={`${s.kind}-${idx}`}>
                    <button
                      type="button"
                      onClick={() => { setQuery(s.label.split(" · ")[0]); submit(); }}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-secondary"
                    >
                      <span className={`grid h-7 w-7 place-items-center rounded-md ${s.kind === "store" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent"}`}>
                        {s.kind === "store" ? <StoreIcon className="h-3.5 w-3.5" /> : <Tag className="h-3.5 w-3.5" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold">{s.label}</div>
                        <div className="truncate text-xs text-muted-foreground">{s.sub}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </form>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            {["✓ Verified Coupons", "✓ Highest Cashback", "✓ Fast Payouts"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl" />
          <img
            src={hero}
            alt="CouponMinty cashback and coupons"
            width={1536}
            height={1024}
            className="relative animate-float rounded-3xl shadow-elegant"
          />
        </div>
      </div>

      {results && (
        <div id="search-results" className="relative bg-background py-14 text-foreground">
          <div className="container">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-extrabold text-primary">
                Results for &ldquo;{submitted}&rdquo;
              </h2>
              <button onClick={() => setSubmitted("")} className="text-sm font-medium text-muted-foreground hover:text-primary">Clear</button>
            </div>

            {results.matchedStores.length === 0 && results.matchedCoupons.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <p className="text-lg font-bold text-primary">No deals found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try a different brand or category like Amazon, Fashion or Travel.</p>
              </div>
            ) : (
              <div className="space-y-10">
                {results.matchedStores.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Stores</h3>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {results.matchedStores.map((s) => (
                        <a key={s.name} href={withUtm(s.url, "search", s.name.toLowerCase())} target="_blank" rel="noopener noreferrer sponsored"
                          className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-card hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                          <img src={logoFor(s.url, 64)} alt={`${s.name} logo`} width={32} height={32} className="h-8 w-8 rounded" />
                          <div>
                            <div className="text-sm font-bold text-primary">{s.name}</div>
                            <div className="text-xs text-accent">Up to {s.cb} cashback</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {results.matchedCoupons.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Coupons</h3>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {results.matchedCoupons.map((c) => (
                        <a key={c.code} href={withUtm(c.url, "search", c.code)} target="_blank" rel="noopener noreferrer sponsored"
                          className="rounded-xl border border-border bg-card p-4 shadow-card hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-primary">{c.brand}</span>
                            <code className="rounded border border-dashed border-accent bg-accent/5 px-2 py-0.5 text-xs font-bold text-accent">{c.code}</code>
                          </div>
                          <p className="mt-2 text-sm text-foreground">{c.title}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
