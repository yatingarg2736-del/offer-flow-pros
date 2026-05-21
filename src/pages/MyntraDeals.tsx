import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { withUtm } from "@/lib/affiliate";

const MYNTRA = "https://www.myntra.com";

const topDeals = [
  { emoji: "👗", tag: "Women's Fashion", name: "H&M Floral Wrap Midi Dress", price: "₹999", mrp: "₹2,299", off: "57% OFF" },
  { emoji: "👟", tag: "Footwear", name: "Nike Air Max Sneakers (Unisex)", price: "₹4,499", mrp: "₹7,995", off: "44% OFF" },
  { emoji: "💄", tag: "Beauty", name: "Lakme Enrich Matte Lipstick (Pack of 2)", price: "₹249", mrp: "₹570", off: "56% OFF" },
  { emoji: "👔", tag: "Men's Fashion", name: "Roadster Graphic Round Neck T-Shirt", price: "₹349", mrp: "₹799", off: "56% OFF" },
];

const products = [
  { emoji: "👗", brand: "Zara", name: "Women Structured Double-Breasted Blazer", price: "₹1,999", mrp: "₹4,999", off: "60% off", save: "₹3,000", rating: "★★★★ 4.2 (1.2k)", excl: true, disc: "−60%" },
  { emoji: "🏃", brand: "Adidas", name: "Essentials 3-Stripes Track Pants", price: "₹1,299", mrp: "₹2,349", off: "45% off", save: "₹1,050", rating: "★★★★★ 4.6 (3.4k)", excl: false, disc: "−45%" },
  { emoji: "👟", brand: "Puma", name: "Softride Premier Running Shoes", price: "₹2,799", mrp: "₹4,699", off: "40% off", save: "₹1,900", rating: "★★★★ 4.4 (2.1k)", excl: true, disc: "−40%" },
  { emoji: "👜", brand: "Mango", name: "Women Saffiano Tote Handbag", price: "₹1,499", mrp: "₹3,099", off: "52% off", save: "₹1,600", rating: "★★★★ 4.3 (890)", excl: false, disc: "−52%" },
  { emoji: "💄", brand: "Maybelline", name: "Fit Me Matte + Poreless Foundation", price: "₹349", mrp: "₹565", off: "38% off", save: "₹216", rating: "★★★★★ 4.5 (8.7k)", excl: true, disc: "−38%" },
  { emoji: "👖", brand: "Levi's", name: "511 Slim Fit Mid-Rise Jeans", price: "₹1,799", mrp: "₹3,599", off: "50% off", save: "₹1,800", rating: "★★★★★ 4.7 (5.2k)", excl: false, disc: "−50%" },
  { emoji: "⌚", brand: "Fossil", name: "Men's Townsman Chronograph Leather Watch", price: "₹5,499", mrp: "₹8,495", off: "35% off", save: "₹2,996", rating: "★★★★ 4.4 (1.8k)", excl: true, disc: "−35%" },
  { emoji: "🥻", brand: "Biba", name: "Women Floral Print A-Line Kurta", price: "₹799", mrp: "₹2,290", off: "65% off", save: "₹1,491", rating: "★★★★★ 4.5 (4.1k)", excl: false, disc: "−65%" },
];

const categories = [
  { e: "👗", l: "Dresses" }, { e: "👔", l: "Shirts" }, { e: "👟", l: "Sneakers" }, { e: "👜", l: "Handbags" },
  { e: "💄", l: "Lipsticks" }, { e: "🧴", l: "Skincare" }, { e: "🕶️", l: "Sunglasses" }, { e: "⌚", l: "Watches" },
  { e: "🧢", l: "Caps" }, { e: "🥻", l: "Kurtas" },
];

const filters = ["⚡ All Deals", "👗 Women's Fashion", "👔 Men's Fashion", "👟 Footwear", "💄 Beauty", "👜 Bags & Accessories", "👶 Kids", "🏠 Home & Living", "🏋️ Sports"];

const faqs = [
  { q: "Are CouponMinty's Myntra prices lower than Myntra's listed prices?", a: "Yes. Through Myntra's affiliate programme, we surface exclusive discount links where the price shown on our page is lower than the standard MRP or listed price on Myntra's website at the time of the deal. Prices are updated daily." },
  { q: "Is it safe to click Myntra links on CouponMinty?", a: "Absolutely. All links redirect directly to Myntra's official website or app. Your purchase, payment, and delivery are all handled entirely within Myntra's secure platform." },
  { q: "Does Myntra's return policy apply to purchases made through CouponMinty?", a: "Yes. Myntra's standard return and exchange policies apply in full. CouponMinty is only the discovery platform — all fulfilment, returns, and customer support are managed by Myntra." },
  { q: "How often are Myntra deals updated on CouponMinty?", a: "Our team updates Myntra deals daily. During sale events (End of Reason Sale, Big Fashion Festival, etc.), prices are updated hourly to reflect live deals." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Myntra Deals & Offers Today | CouponMinty",
  description: "Browse the best Myntra affiliate deals on CouponMinty — exclusive discounts on fashion, footwear, beauty and accessories at prices lower than Myntra's listed MRP.",
  url: "https://www.couponminty.com/myntra-deals",
  publisher: { "@type": "Organization", name: "CouponMinty", url: "https://www.couponminty.com" },
};

const myntra = (campaign: string, content: string) => withUtm(MYNTRA, campaign, content);

const MyntraDeals = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Myntra Deals & Offers Today | Flat 30–80% Off | CouponMinty"
      description="Shop the best Myntra deals and affiliate offers on CouponMinty. Get exclusive discounts on fashion, footwear, beauty & accessories — prices lower than Myntra's listed MRP. Updated daily."
      canonical="https://www.couponminty.com/myntra-deals"
      jsonLd={jsonLd}
    />
    <Navbar />

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary">
      <div className="container py-2.5 text-xs font-medium text-muted-foreground">
        <a href="/" className="font-semibold text-accent hover:underline">CouponMinty</a>
        <span className="mx-1.5 text-border">›</span>Fashion Deals
        <span className="mx-1.5 text-border">›</span>Myntra Offers
      </div>
    </nav>

    {/* Hero */}
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative px-4 py-14 text-center md:py-16">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-glow">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-glow" />
          Live Myntra Affiliate Deals
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-[52px]">
          Shop Myntra at{" "}
          <span className="bg-accent-gradient bg-clip-text text-transparent">Prices Lower than MRP</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white/70">
          Hand-picked affiliate deals from Myntra — verified discounts on fashion, footwear, beauty & accessories. Every price shown is lower than what's listed on Myntra's product page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#all-deals" className="inline-flex items-center rounded-full bg-accent-gradient px-7 py-3 text-sm font-bold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Browse All Deals
          </a>
          <a href="/#coupons" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10">
            Get Myntra Coupons
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
          {[
            { n: "1,200+", l: "Live Products" },
            { n: "Up to 80%", l: "Off MRP" },
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
        {["✅ Verified Affiliate Links", "💰 Lower than Myntra MRP", "🔄 Updated Daily", "🔒 Secure Redirect to Myntra", "↩️ Myntra Return Policy Applies"].map((t) => (
          <span key={t} className="text-sm font-semibold text-muted-foreground">{t}</span>
        ))}
      </div>

      {/* Categories */}
      <div className="mb-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <a key={c.l} href={myntra("myntra-cat", c.l.toLowerCase())} target="_blank" rel="noopener noreferrer sponsored" className="flex w-20 flex-shrink-0 flex-col items-center gap-2 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-border bg-secondary text-2xl transition-colors hover:border-primary">{c.e}</span>
            <span className="text-[11px] font-semibold text-muted-foreground">{c.l}</span>
          </a>
        ))}
      </div>

      {/* Filter chips */}
      <div className="mb-8 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f, i) => (
          <button key={f} className={`flex-shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition-colors ${i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Today's Top Picks */}
      <section className="mb-10">
        <div className="mb-5 flex items-center justify-between border-b-2 border-secondary pb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl font-extrabold text-primary">Today's Top Picks</h2>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent">8 deals</span>
          </div>
          <a href="#all-deals" className="text-sm font-bold text-accent hover:underline">View all →</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topDeals.map((d) => (
            <a key={d.name} href={myntra("myntra-top", d.name.toLowerCase().replace(/\s+/g, "-"))} target="_blank" rel="noopener noreferrer sponsored" className="flex overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-elegant">
              <div className="grid w-28 flex-shrink-0 place-items-center bg-secondary text-4xl">{d.emoji}</div>
              <div className="flex flex-1 flex-col gap-1 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{d.tag}</span>
                <span className="text-sm font-semibold leading-snug text-foreground">{d.name}</span>
                <div className="mt-1 flex flex-wrap items-center gap-1.5">
                  <span className="font-display text-lg font-extrabold text-primary">{d.price}</span>
                  <span className="text-xs text-muted-foreground line-through">{d.mrp}</span>
                  <span className="rounded-full bg-accent-gradient px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">{d.off}</span>
                </div>
                <span className="mt-auto pt-2 text-xs font-bold text-accent">Shop on Myntra →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <section className="relative mb-10 overflow-hidden rounded-2xl bg-hero p-8 shadow-elegant md:p-10">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="relative flex flex-wrap items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-extrabold text-primary-foreground">
              End of Season Sale — <span className="bg-accent-gradient bg-clip-text text-transparent">Flat 50–80% Off</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-white/70">Limited-time Myntra affiliate deals. Prices lower than what you see on Myntra directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#all-deals" className="inline-flex items-center rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-bold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">Browse All Deals</a>
            <a href="/#coupons" className="inline-flex items-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:border-accent hover:bg-accent/10">Get Coupon Codes</a>
          </div>
        </div>
      </section>

      {/* All deals grid */}
      <section id="all-deals" className="mb-12">
        <div className="mb-5 flex items-center justify-between border-b-2 border-secondary pb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl font-extrabold text-primary">All Myntra Affiliate Products</h2>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-accent">1,200+ products</span>
          </div>
          <a href={myntra("myntra-allopen", "open")} target="_blank" rel="noopener noreferrer sponsored" className="text-sm font-bold text-accent hover:underline">Open Myntra →</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
          {products.map((p) => (
            <a key={p.name} href={myntra("myntra-grid", p.brand.toLowerCase())} target="_blank" rel="noopener noreferrer sponsored" className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
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
                <span className="block w-full rounded-full bg-primary py-2 text-center text-xs font-bold text-primary-foreground transition-colors group-hover:bg-primary-glow">Shop on Myntra</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SEO block */}
      <section className="mb-10 rounded-2xl border border-border bg-secondary p-8 md:p-10">
        <h2 className="mb-3 text-xl font-extrabold text-primary">Why Shop Myntra Deals on CouponMinty?</h2>
        <p className="mb-3 text-sm font-medium leading-relaxed text-muted-foreground">
          CouponMinty is India's trusted coupon and cashback platform partnered with 1,500+ brands. Our Myntra affiliate page brings you hand-picked fashion, footwear, and beauty products at prices lower than what's listed directly on Myntra — verified daily by our deals team.
        </p>
        <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">
          All links go directly to Myntra's secure platform. Myntra's full return policy, original product guarantee, and delivery network apply to every purchase you make through our links.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {["Women's fashion: dresses, kurtas, tops", "Men's fashion: shirts, trousers, jeans", "Footwear: sneakers, heels, sandals", "Handbags & accessories", "Beauty & skincare deals", "Kids clothing & footwear", "Sports & activewear", "Home & living décor"].map((t) => (
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
        <strong>Affiliate Disclosure:</strong> CouponMinty participates in Myntra's official affiliate programme. When you click our links and make a purchase, we may earn a commission at no extra cost to you. Prices shown are verified at time of publishing and may change — always confirm the final price at Myntra's checkout.
      </p>
    </main>

    <Footer />
  </div>
);

export default MyntraDeals;
