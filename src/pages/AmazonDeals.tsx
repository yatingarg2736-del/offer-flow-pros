import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { withUtm } from "@/lib/affiliate";

const AMAZON = "https://www.amazon.in";
const AMAZON_ELECTRONICS_URL =
  "https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=topnav_storetab_top_elec_mega";
const ELECTRONICS_AD_IMG =
  "https://m.media-amazon.com/images/G/31/img22/audio/BAU/Header._CB763081279_.jpg";

const amz = (campaign: string, content: string) => withUtm(AMAZON, campaign, content);

const topDeals = [
  { emoji: "🎧", tag: "Electronics", name: "boAt Rockerz 450 Bluetooth Headphones", price: "₹1,299", mrp: "₹3,990", off: "67% OFF" },
  { emoji: "🍹", tag: "Home & Kitchen", name: "Philips HL7756 Mixer Grinder 750W", price: "₹2,499", mrp: "₹4,995", off: "50% OFF" },
  { emoji: "⌚", tag: "Electronics", name: "Fire-Boltt Ninja Call Pro Smart Watch", price: "₹999", mrp: "₹4,999", off: "80% OFF" },
  { emoji: "💆", tag: "Beauty", name: "Mamaearth Vitamin C Face Serum 30ml", price: "₹449", mrp: "₹799", off: "44% OFF" },
];

const allProducts = [
  { emoji: "🎧", brand: "boAt", name: "Rockerz 450 Bluetooth Headphones", price: "₹1,299", mrp: "₹3,990", off: "67% off", save: "₹2,691", rating: "★★★★ 4.2 (18k)", excl: true, disc: "−67%", cat: "electronics" },
  { emoji: "⌚", brand: "Fire-Boltt", name: "Ninja Call Pro Smart Watch", price: "₹999", mrp: "₹4,999", off: "80% off", save: "₹4,000", rating: "★★★★ 4.1 (24k)", excl: false, disc: "−80%", cat: "electronics" },
  { emoji: "💻", brand: "Lenovo", name: "IdeaPad Slim 3 Intel Core i3 Laptop", price: "₹29,990", mrp: "₹45,990", off: "35% off", save: "₹16,000", rating: "★★★★ 4.3 (5.2k)", excl: true, disc: "−35%", cat: "electronics" },
  { emoji: "💆", brand: "Mamaearth", name: "Vitamin C Face Serum 30ml", price: "₹449", mrp: "₹799", off: "44% off", save: "₹350", rating: "★★★★★ 4.3 (31k)", excl: false, disc: "−44%", cat: "beauty" },
  { emoji: "🍹", brand: "Philips", name: "HL7756 Mixer Grinder 750W 3 Jars", price: "₹2,499", mrp: "₹4,995", off: "50% off", save: "₹2,496", rating: "★★★★★ 4.4 (9.1k)", excl: true, disc: "−50%", cat: "home" },
  { emoji: "👟", brand: "Nike", name: "Men's Revolution 6 Running Shoes", price: "₹3,495", mrp: "₹5,995", off: "42% off", save: "₹2,500", rating: "★★★★★ 4.5 (7.8k)", excl: false, disc: "−42%", cat: "sports" },
  { emoji: "💄", brand: "Lakme", name: "Absolute Matte Lipstick (Pack of 3)", price: "₹399", mrp: "₹750", off: "47% off", save: "₹351", rating: "★★★★ 4.2 (14k)", excl: true, disc: "−47%", cat: "beauty" },
  { emoji: "📦", brand: "Amazon Basics", name: "Microwave Oven 23L Solo", price: "₹5,999", mrp: "₹9,999", off: "40% off", save: "₹4,000", rating: "★★★★ 4.3 (12k)", excl: false, disc: "−40%", cat: "home" },
];

const catIcons = [
  { id: "electronics", e: "💻", l: "Electronics" },
  { id: "home", e: "🏠", l: "Home & Kitchen" },
  { id: "fashion", e: "👔", l: "Fashion" },
  { id: "beauty", e: "✨", l: "Beauty" },
  { id: "sports", e: "🏋️", l: "Sports" },
  { id: "books", e: "📚", l: "Books" },
  { id: "baby", e: "👶", l: "Baby & Kids" },
];

const filterChips = [
  { id: "all", l: "⚡ All Deals" },
  { id: "electronics", l: "💻 Electronics" },
  { id: "home", l: "🏠 Home & Kitchen" },
  { id: "fashion", l: "👔 Fashion" },
  { id: "beauty", l: "✨ Beauty" },
  { id: "sports", l: "🏋️ Sports" },
  { id: "books", l: "📚 Books" },
  { id: "baby", l: "👶 Baby & Kids" },
  { id: "grocery", l: "🛒 Grocery" },
  { id: "toys", l: "🧸 Toys" },
];

const faqs = [
  { q: "Are CouponMinty's Amazon prices lower than Amazon's listed prices?", a: "Yes. Through Amazon's affiliate programme, we surface exclusive discount links where the price shown on our page is lower than the standard MRP at the time of the deal. Prices are updated daily — always verify at Amazon's checkout." },
  { q: "Is it safe to click Amazon links on CouponMinty?", a: "Absolutely. All links redirect directly to Amazon's official website. Your purchase, payment, and delivery are handled entirely by Amazon's secure platform." },
  { q: "Does Amazon's return policy apply to purchases made through CouponMinty?", a: "Yes. Amazon's standard return and exchange policies apply in full. CouponMinty is only the discovery platform — all fulfilment, returns, and customer support are managed entirely by Amazon." },
  { q: "How often are Amazon deals updated on CouponMinty?", a: "Our team updates Amazon deals daily. During sale events (Great Indian Festival, Prime Day, etc.), prices are updated hourly to reflect live deals." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Amazon Deals & Offers Today | CouponMinty",
  description: "Browse the best Amazon affiliate deals on CouponMinty — exclusive discounts on Electronics, Home, Fashion and Beauty at prices lower than Amazon's listed MRP.",
  url: "https://www.couponminty.com/amazon-deals",
  publisher: { "@type": "Organization", name: "CouponMinty", url: "https://www.couponminty.com" },
};

const AmazonDeals = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSelect = (id: string) => {
    setActiveFilter(id);
    if (id === "electronics") {
      window.open(AMAZON_ELECTRONICS_URL, "_blank", "noopener,noreferrer");
    }
  };

  const filteredProducts =
    activeFilter === "all" ? allProducts : allProducts.filter((p) => p.cat === activeFilter);

  const showNativeAd = activeFilter === "all" || activeFilter === "electronics";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Amazon Deals & Offers Today | Up to 80% Off | CouponMinty"
        description="Shop the best Amazon affiliate deals on CouponMinty. Verified discounts on Electronics, Home, Fashion & Beauty — prices lower than Amazon's listed MRP. Updated daily."
        canonical="https://www.couponminty.com/amazon-deals"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary">
        <div className="container py-2.5 text-xs font-medium text-muted-foreground">
          <a href="/" className="font-semibold text-accent hover:underline">CouponMinty</a>
          <span className="mx-1.5 text-border">›</span>Deals
          <span className="mx-1.5 text-border">›</span>Amazon Affiliate Deals
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="absolute right-4 top-4 hidden flex-col items-end gap-1 sm:flex">
          <span className="rounded-md bg-[#FF9900] px-2.5 py-1 text-xs font-extrabold text-[#131A22]">amazon</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Affiliate Deals</span>
        </div>
        <div className="container relative px-4 py-14 text-center md:py-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-glow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-glow" />
            Live Amazon Deals
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-[52px]">
            Shop <span className="bg-accent-gradient bg-clip-text text-transparent">Amazon</span> at Prices That Beat the Tag
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white/70">
            Hand-picked affiliate deals across Electronics, Home, Fashion, Beauty & more — verified daily, prices lower than Amazon's listed MRP.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#all-deals" className="inline-flex items-center rounded-full bg-accent-gradient px-7 py-3 text-sm font-bold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">
              Browse All Deals
            </a>
            <a href={amz("amazon-lightning", "hero")} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10">
              Today's Lightning Deals ⚡
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
            {[
              { n: "2,000+", l: "Live Products" },
              { n: "Up to 70%", l: "Off MRP" },
              { n: "Daily", l: "Price Updates" },
              { n: "100%", l: "Verified Links" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="bg-accent-gradient bg-clip-text font-display text-2xl font-extrabold text-transparent">{s.n}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container px-4 py-10">
        {/* Trust strip */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-7 gap-y-3 border-b border-border pb-6">
          {["✅ Verified Affiliate Links", "💰 Lower than Amazon MRP", "🔄 Updated Daily", "🔒 Secure Redirect to Amazon", "↩️ Amazon Return Policy Applies"].map((t) => (
            <span key={t} className="text-sm font-semibold text-muted-foreground">{t}</span>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {catIcons.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleSelect(c.id)}
              className={`flex w-[84px] flex-shrink-0 flex-col items-center gap-2 rounded-2xl border px-2 py-3.5 transition-all ${
                activeFilter === c.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary"
              }`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-2xl">{c.e}</span>
              <span className="text-[11px] font-semibold leading-tight">{c.l}</span>
            </button>
          ))}
        </div>

        {/* Filter chips */}
        <div className="mb-8 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filterChips.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => handleSelect(f.id)}
              className={`flex-shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === f.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f.l}
            </button>
          ))}
        </div>

        {/* Today's Top Picks */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between border-b-2 border-secondary pb-4">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-extrabold text-primary">Today's Top Picks</h2>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent">{topDeals.length} deals</span>
            </div>
            <a href="#all-deals" className="text-sm font-bold text-accent hover:underline">View all →</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {topDeals.map((d) => (
              <a key={d.name} href={amz("amazon-top", d.name.toLowerCase().replace(/\s+/g, "-"))} target="_blank" rel="noopener noreferrer sponsored" className="flex overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-elegant">
                <div className="grid w-28 flex-shrink-0 place-items-center bg-secondary text-4xl">{d.emoji}</div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{d.tag}</span>
                  <span className="text-sm font-semibold leading-snug text-foreground">{d.name}</span>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className="font-display text-lg font-extrabold text-primary">{d.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{d.mrp}</span>
                    <span className="rounded-full bg-accent-gradient px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">{d.off}</span>
                  </div>
                  <span className="mt-auto pt-2 text-xs font-bold text-accent">Shop on Amazon →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Prime strip */}
        <section className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-secondary p-5">
          <span className="rounded-md bg-[#00A8E1] px-2.5 py-1 text-xs font-extrabold text-white">Prime</span>
          <p className="flex-1 text-sm font-medium text-muted-foreground">
            Exclusive Prime deals with <strong className="text-foreground">free same-day delivery</strong> — filtered and verified for CouponMinty visitors.
          </p>
          <a href={amz("amazon-prime", "strip")} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-bold text-accent hover:underline">
            View Prime Deals →
          </a>
        </section>

        {/* Promo banner */}
        <section className="relative mb-10 overflow-hidden rounded-2xl bg-hero p-8 shadow-elegant md:p-10">
          <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
          <div className="relative flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-extrabold text-primary-foreground">
                Great Indian Festival — <span className="bg-accent-gradient bg-clip-text text-transparent">Up to 80% Off</span>
              </h3>
              <p className="mt-1 text-sm font-medium text-white/70">Limited-time Amazon affiliate deals. Prices lower than what you see on Amazon directly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#all-deals" className="inline-flex items-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-bold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">Browse All Deals</a>
              <a href={amz("amazon-lightning", "banner")} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:border-accent hover:bg-accent/10">Lightning Deals ⚡</a>
            </div>
          </div>
        </section>

        {/* All deals + native ad */}
        <section id="all-deals" className="mb-12">
          <div className="mb-5 flex items-center justify-between border-b-2 border-secondary pb-4">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-extrabold text-primary">All Amazon Affiliate Products</h2>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent">{filteredProducts.length} products</span>
            </div>
            <a href={amz("amazon-allopen", "open")} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-bold text-accent hover:underline">Open Amazon →</a>
          </div>

          <div className={`grid gap-5 ${showNativeAd ? "lg:grid-cols-[1fr_280px]" : ""}`}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:gap-5">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <a key={p.name} href={amz("amazon-grid", p.brand.toLowerCase().replace(/\s+/g, "-"))} target="_blank" rel="noopener noreferrer sponsored" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
                    <div className="relative grid aspect-[3/4] place-items-center overflow-hidden bg-secondary text-5xl">
                      <span>{p.emoji}</span>
                      <span className="absolute left-2.5 top-2.5 rounded-full bg-accent-gradient px-2.5 py-0.5 text-[10px] font-extrabold text-accent-foreground shadow-glow">{p.disc}</span>
                      {p.excl && <span className="absolute right-2.5 top-2.5 rounded-md bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">Exclusive</span>}
                    </div>
                    <div className="flex flex-1 flex-col gap-1 p-3.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">{p.brand}</span>
                      <span className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">{p.name}</span>
                      <span className="text-[11px] font-medium text-muted-foreground"><span className="text-accent">{p.rating.split(" ")[0]}</span> {p.rating.split(" ").slice(1).join(" ")}</span>
                      <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                        <span className="font-display text-lg font-extrabold text-primary">{p.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{p.mrp}</span>
                        <span className="rounded-full bg-accent-gradient px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">{p.off}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-accent">You save {p.save}</span>
                    </div>
                    <div className="px-3.5 pb-3.5">
                      <span className="block w-full rounded-full bg-primary py-2 text-center text-xs font-bold text-primary-foreground transition-colors group-hover:bg-primary-glow">Shop on Amazon</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                  <div className="text-3xl">🔍</div>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">No products in this category yet — check back soon!</p>
                </div>
              )}
            </div>

            {showNativeAd && (
              <aside className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="border-b border-border bg-secondary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Sponsored
                </div>
                <a href={AMAZON_ELECTRONICS_URL} target="_blank" rel="noopener noreferrer sponsored" className="flex flex-col">
                  <img
                    src={ELECTRONICS_AD_IMG}
                    alt="Top Amazon Audio Deals"
                    loading="lazy"
                    className="h-32 w-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="flex flex-col gap-1.5 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Electronics · Audio</span>
                    <span className="text-sm font-semibold leading-snug text-foreground">Top Audio Deals on Amazon — Headphones, Speakers & More</span>
                    <span className="mt-1 text-xs font-bold text-accent">Shop Now →</span>
                  </div>
                </a>
              </aside>
            )}
          </div>
        </section>

        {/* SEO block */}
        <section className="mb-10 rounded-2xl border border-border bg-secondary p-8 md:p-10">
          <h2 className="mb-3 text-xl font-extrabold text-primary">Why Shop Amazon Deals on CouponMinty?</h2>
          <p className="mb-3 text-sm font-medium leading-relaxed text-muted-foreground">
            CouponMinty is India's trusted coupon and cashback platform partnered with 1,500+ brands. Our Amazon affiliate page brings you hand-picked products at prices lower than what's listed directly on Amazon — verified daily by our deals team.
          </p>
          <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">
            All links go directly to Amazon's secure platform. Amazon's full return policy, original product guarantee, and delivery network apply to every purchase you make through our links.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {["Electronics & gadgets", "Home & kitchen appliances", "Fashion & footwear", "Beauty & skincare", "Sports & fitness gear", "Books & stationery", "Baby & kids products", "Grocery & daily needs"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <span className="font-extrabold text-accent">✓</span> {t}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="mb-5 text-xl font-extrabold text-primary">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-bold text-primary">
                  {f.q}
                  <span className="text-xl font-light text-accent">+</span>
                </summary>
                <p className="px-4 pb-4 text-sm font-medium leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="border-t border-border pt-6 text-center text-xs font-medium leading-relaxed text-muted-foreground">
          <strong>Affiliate Disclosure:</strong> CouponMinty participates in Amazon's official affiliate programme (Amazon Associates). When you click our links and make a purchase, we may earn a commission at no extra cost to you. Prices shown are verified at time of publishing and may change — always confirm the final price at Amazon's checkout.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AmazonDeals;
