import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User, Tag, Star, Copy, Check, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { withUtm } from "@/lib/affiliate";
import { featuredPost as featured, otherPosts as posts } from "@/lib/blogPosts";

const categories = ["All", "Cashback", "Tech", "Fashion", "Beauty", "Wellness", "Festive", "Guides"];

const smallStoreCoupons = [
  { brand: "HyugaLife", title: "25% OFF Wellness plus 10% Cashback", code: "HYUGA25", url: "https://www.hyugalife.com", tag: "Wellness" },
  { brand: "Bonkers Corner", title: "Flat 40% OFF Streetwear plus 8% CB", code: "BONK40", url: "https://www.bonkerscorner.com", tag: "Streetwear" },
  { brand: "The Souled Store", title: "Buy 2 Get 1 Free plus 6% CB", code: "SOULMINT", url: "https://www.thesouledstore.com", tag: "Fashion" },
  { brand: "Wakefit", title: "45% OFF Mattresses plus ₹500 CB", code: "WAKE500", url: "https://www.wakefit.co", tag: "Home" },
  { brand: "Plum Goodness", title: "30% OFF Skincare plus 12% CB", code: "PLUM30", url: "https://plumgoodness.com", tag: "Beauty" },
  { brand: "Beardo", title: "25% OFF Grooming plus 10% CB", code: "BEARDMINT", url: "https://www.beardo.in", tag: "Men" },
  { brand: "boAt Lifestyle", title: "Flat ₹400 OFF Audio plus 12% CB", code: "BOATMINT", url: "https://www.boat-lifestyle.com", tag: "Tech" },
  { brand: "Mamaearth", title: "Buy 3 at ₹999 plus 10% CB", code: "MAMA999", url: "https://mamaearth.in", tag: "Beauty" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
};

const Blog = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = async (code: string, brand: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      toast({ title: `${brand} code copied!`, description: `Paste ${code} at checkout to save more.` });
      setTimeout(() => setCopied((c) => (c === code ? null : c)), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy manually." });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="CouponMinty Blog: Cashback Tips, Brand Guides & Money-Saving Hacks for India"
        description="Expert articles on cashback, coupons, e-commerce trends, tech buying guides, brand case studies and exclusive deals from small Indian online stores."
        canonical="https://couponminty.com/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CouponMinty Blog",
          url: "https://couponminty.com/blog",
          blogPost: [featured, ...posts].map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            author: { "@type": "Person", name: p.author },
            datePublished: p.date,
            articleSection: p.tag,
          })),
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container relative py-20 lg:py-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            CouponMinty Blog
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Smart savings, real <span className="text-accent">money tips</span> & Indian brand guides.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            In-depth articles on cashback, coupons, e-commerce trends and how to make every rupee count, written by shoppers and creators who actually use the deals.
          </p>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Featured Story</span>
            <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">This week's top read</h2>
          </div>
        </div>

        <Card className="overflow-hidden border-border shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden lg:h-auto">
              <img src={featured.image} alt={featured.title} loading="lazy" width={1024} height={576} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                {featured.tag}
              </span>
            </div>
            <CardContent className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.read}</span>
                <span className="inline-flex items-center gap-1"><User className="h-3.5 w-3.5" /> {featured.author}</span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold leading-snug text-primary md:text-3xl">{featured.title}</h3>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>

              {/* Product details */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Featured products</p>
                {featured.products.map((p) => (
                  <a
                    key={p.name}
                    href={withUtm(p.url, "blog-featured", p.name.toLowerCase().replace(/\s+/g, "-"))}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 transition-colors hover:bg-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <img src={logoFor(p.url)} alt="" width={20} height={20} className="h-5 w-5 rounded" />
                      <span className="text-sm font-semibold text-primary">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-bold text-foreground">{p.price}</span>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-bold text-accent">{p.cb}</span>
                    </div>
                  </a>
                ))}
              </div>

              <Button className="mt-6 w-fit bg-accent-gradient text-accent-foreground hover:opacity-90">
                Read full article <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* ARTICLE GRID */}
      <section className="container pb-16">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Latest Articles</span>
          <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">More guides, deals & brand stories</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} className="group flex flex-col overflow-hidden border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={1024} height={576} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {p.tag}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>

                <ul className="mt-4 space-y-1.5 text-xs text-foreground/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Star className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <User className="h-3.5 w-3.5" /> {p.author}
                  </span>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                    Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SMALL STORE COUPONS */}
      <section className="bg-secondary/40 py-20">
        <div className="container">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <Tag className="h-3.5 w-3.5" /> Small Stores, Big Savings
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Coupons from India's best D2C brands</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We work directly with growing Indian online stores so you find offers you won't see anywhere else. Tap any code to copy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {smallStoreCoupons.map((c) => {
              const isCopied = copied === c.code;
              return (
                <article key={c.code} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      <img src={logoFor(c.url)} alt={`${c.brand} logo`} width={14} height={14} loading="lazy" className="h-3.5 w-3.5 rounded" />
                      {c.brand}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{c.tag}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">{c.title}</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => copyCode(c.code, c.brand)}
                      aria-label={`Copy ${c.brand} code ${c.code}`}
                      className="flex items-center justify-between gap-2 rounded-lg border border-dashed border-accent bg-accent/5 px-3 py-2 transition-colors hover:bg-accent/10"
                    >
                      <span className="flex items-center gap-2">
                        <Scissors className="h-3.5 w-3.5 text-accent" />
                        <code className="text-xs font-bold tracking-wider text-accent">{c.code}</code>
                      </span>
                      {isCopied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-3.5 w-3.5 text-accent/70" />}
                    </button>
                    <Button asChild size="sm" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                      <a
                        href={withUtm(c.url, "blog-small-stores", c.code)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        onClick={() => copyCode(c.code, c.brand)}
                      >
                        Get Deal
                      </a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
              <Link to="/">Back to Home <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
