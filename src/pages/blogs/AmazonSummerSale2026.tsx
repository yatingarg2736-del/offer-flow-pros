import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ExternalLink, Shield } from "lucide-react";

interface ProductCardProps {
  savePercent: string;
  brand: string;
  name: string;
  salePrice: string;
  mrp: string;
  description: string;
  productImage: string;
  affiliateLink: string;
}

const trackClick = (name: string) => {
  const dl = (window as any).dataLayer || [];
  (window as any).dataLayer = dl;
  dl.push({ event: "affiliate_click", brand_name: name, source: "blog_amazon_summer_sale" });
};

const ProductCard = ({ savePercent, brand, name, salePrice, mrp, description, productImage, affiliateLink }: ProductCardProps) => (
  <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
    <img
      src={productImage}
      alt={name}
      loading="lazy"
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      className="w-full object-cover"
      style={{ height: "220px" }}
    />
    <div className="flex flex-1 flex-col p-6">
      <span className="w-fit rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
        Save up to {savePercent}
      </span>
      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-accent">{brand}</p>
      <h3 className="mt-1 text-lg font-bold leading-snug text-primary">{name}</h3>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="text-2xl font-extrabold text-primary">{salePrice}</span>
        <span className="text-sm text-muted-foreground line-through">{mrp}</span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{description}</p>
      <Button
        asChild
        className="mt-5 w-full bg-accent-gradient text-accent-foreground hover:opacity-90"
        onClick={() => trackClick(name)}
      >
        
          href={affiliateLink}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
        >
          Shop on Amazon <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does Amazon Great Summer Sale 2026 end?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon Great Summer Sale 2026 ran until 13 May 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How to get extra discount on Amazon Summer Sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use an HDFC Bank card for 10% instant discount and activate Prime membership for extra 5% off.",
      },
    },
    {
      "@type": "Question",
      name: "Which are the best deals in Amazon Summer Sale 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top deals include Samsung Galaxy M56 5G at 35% off, Coway Air Purifier at 57% off, boAt Speaker at 70% off and Amazon Power Bank at 78% off.",
      },
    },
  ],
};

const AmazonSummerSale2026 = () => {
  const tocItems = [
    { label: "Marquee Upgrades", href: "#marquee-upgrades" },
    { label: "Sweet-Spot Picks", href: "#sweet-spot-picks" },
    { label: "Under ₹2k Wins", href: "#under-2k-wins" },
    { label: "Why Trust Us", href: "#why-trust-us" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Amazon Great Summer Sale 2026: 10 Best Deals Up to 75% Off | CouponMinty"
        description="Best deals from Amazon India Great Summer Sale 2026 — Samsung, Apple, Sony, boAt, Carrier and more. Up to 75% off with extra 10% HDFC Bank discount."
        canonical="https://www.couponminty.com/blog/amazon-great-summer-sale-2026"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* HERO */}
      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <span className="mt-6 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            Amazon Sale
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
            10 Best Deals at Amazon India&apos;s Great Summer Sale 2026 — Up to 75% Off
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            From Ray-Ban Meta smart glasses to a Carrier 5-star AC — these are the deepest discounts on Amazon India right now, across tech, home and lifestyle.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" /> CouponMinty Editors
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Published 13 May 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 8 min read
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-xs italic text-muted-foreground">
            When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="container max-w-[900px] pb-16">

        {/* SALE HIGHLIGHTS BAR */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "Up to 75% Off Electronics",
            "10% Off with HDFC Bank Card",
            "Extra 5% Off for Prime Members",
            "Exchange Offers up to ₹56,000",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-accent/40 bg-accent/10 px-3 py-3 text-center text-xs font-bold text-accent"
            >
              {item}
            </div>
          ))}
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">In this guide</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-primary underline-offset-4 hover:text-accent hover:underline"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* INTRO */}
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Summer in India is rarely subtle — the heat barges in, the wardrobe needs a rethink, and suddenly that creaking AC sounds far less charming than it did in March. Conveniently, this is also the moment Amazon India unleashes its Great Summer Sale, which kicked off on 8 May 2026 under the cheerful &quot;Summer ka Santa&quot; banner and runs through 13 May.
          </p>
          <p>
            This year&apos;s edition is genuinely good. We&apos;re talking up to 75% off electronics, up to 65% off large appliances, a stackable 10% instant discount with HDFC Bank cards, an extra 5% off for Prime members, and exchange offers that go up to ₹56,000 on eligible upgrades. Below: the ten deals our editors keep returning to.
          </p>
        </div>

        {/* SECTION 1 — MARQUEE UPGRADES */}
        <section id="marquee-upgrades" className="mt-14 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">01 — 04</p>
          <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">The Marquee Upgrades</h2>
          <p className="mt-2 text-muted-foreground">
            A sale is permission to finally pull the trigger on the wishlist item you&apos;ve been quietly stalking.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProductCard
              savePercent="35%"
              brand="Samsung"
              name="Galaxy M56 5G"
              salePrice="₹21,998"
              mrp="M.R.P. ₹33,999"
              description="Flagship-grade Super AMOLED screen and cameras without flagship pricing. Long software support window."
              productImage="https://m.media-amazon.com/images/I/71cezbo2HNL._SL1500_.jpg"
              affiliateLink="https://amzn.to/4d8bjlI"
            />
            <ProductCard
              savePercent="11%"
              brand="Apple"
              name="MacBook Neo 13 inch (2026)"
              salePrice="₹61,990"
              mrp="M.R.P. ₹69,900"
              description="Current-generation MacBook under ₹62k. Fanless, featherlight, full working day on a single charge."
              productImage="https://m.media-amazon.com/images/I/81TS5FnCq7L._SL1500_.jpg"
              affiliateLink="https://amzn.to/4nqNSHK"
            />
            <ProductCard
              savePercent="57%"
              brand="Coway"
              name="Airmega Air Purifier"
              salePrice="₹14,999"
              mrp="M.R.P. ₹34,900"
              description="HEPA-grade filtration for Indian summer dust and pollen. Quietly competent without dominating a room."
              productImage="https://m.media-amazon.com/images/I/91mE+0CCnGL._SL1500_.jpg"
              affiliateLink="https://amzn.to/4tyQ4OR"
            />
            <ProductCard
              savePercent="39%"
              brand="Sony"
              name="BRAVIA Smart LED TV 55 inches"
              salePrice="₹60,990"
              mrp="M.R.P. ₹99,900"
              description="4K picture, Google TV built in. Motion handling perfect for IPL matches and Saturday-night movies."
              productImage="https://m.media-amazon.com/images/I/81Vs1ZXn43L._SL1500_.jpg"
              affiliateLink="https://amzn.to/4tugYHu"
            />
          </div>
        </section>

        {/* PULL QUOTE */}
        <blockquote className="mt-14 border-l-4 border-accent bg-secondary/40 px-6 py-6 text-xl font-semibold italic leading-snug text-primary md:text-2xl">
          The deepest discounts are not always on the noisiest products — they are on the ones you will actually use every day.
        </blockquote>

        {/* SECTION 2 — SWEET-SPOT PICKS */}
        <section id="sweet-spot-picks" className="mt-14 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">05 — 07</p>
          <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">The Sweet-Spot Picks</h2>
          <p className="mt-2 text-muted-foreground">
            Where this sale gets genuinely fun.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              savePercent="70%"
              brand="boAt"
              name="Stone 352 Pro Bluetooth Speaker"
              salePrice="₹1,499"
              mrp="M.R.P. ₹4,990"
              description="IPX7 waterproof, punchy bass, battery life that outlasts a pool afternoon. Steepest percentage discount on the list."
              productImage="https://m.media-amazon.com/images/I/81bNiiPk68L._SL1500_.jpg"
              affiliateLink="https://amzn.to/4uP0viq"
            />
            <ProductCard
              savePercent="25%"
              brand="Ray-Ban"
              name="Meta Gen 1 Smart AI Glasses"
              salePrice="₹22,425"
              mrp="M.R.P. ₹29,900"
              description="Built-in camera, open-ear speakers, Meta AI assistant. Iconic Wayfarer shape — looks like glasses you would already own."
              productImage="https://m.media-amazon.com/images/I/615dfenwW7L._SL1500_.jpg"
              affiliateLink="https://amzn.to/433DuMu"
            />
            <ProductCard
              savePercent="38%"
              brand="Carrier"
              name="2 Ton 5 Star Split AC"
              salePrice="₹56,990"
              mrp="M.R.P. ₹91,690"
              description="Five-star rated, 2-ton for larger rooms. Installation bundled. Stack bank offers for lowest final price."
              productImage="https://m.media-amazon.com/images/I/812QVASFvEL._SL1500_.jpg"
              affiliateLink="https://amzn.to/3RkJhuy"
            />
          </div>
        </section>

        {/* SECTION 3 — UNDER 2K WINS */}
        <section id="under-2k-wins" className="mt-14 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">08 — 10</p>
          <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-3xl">The Under 2k Wins</h2>
          <p className="mt-2 text-muted-foreground">
            Three small buys with three of the steepest percentage discounts. No EMI math required.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              savePercent="39%"
              brand="Khadi Natural"
              name="Neem and Tea Tree Herbal Face Wash"
              salePrice="₹182"
              mrp="M.R.P. ₹299"
              description="Gentle formula for oily summer skin. Neem and tea tree do the heavy lifting. Stock up while under ₹200."
              productImage="https://m.media-amazon.com/images/I/71NgF3NMj2L._SL1500_.jpg"
              affiliateLink="https://amzn.to/4wvFQ4A"
            />
            <ProductCard
              savePercent="82%"
              brand="SALTY"
              name="Anti-Tarnish Jewellery Gift Box for Women"
              salePrice="₹361"
              mrp="M.R.P. ₹1,999"
              description="Biggest percentage discount in the round-up. Survives sweat, humidity and sunscreen without tarnishing."
              productImage="https://m.media-amazon.com/images/I/71lb9a2xC1L._SY625_.jpg"
              affiliateLink="https://amzn.to/4u6soCh"
            />
            <ProductCard
              savePercent="78%"
              brand="Amazon Basics"
              name="10000mAh 20W Fast Charging Power Bank"
              salePrice="₹1,299"
              mrp="M.R.P. ₹5,999"
              description="20W fast charging, two full phone top-ups. Keep one in every bag at this price."
              productImage="https://m.media-amazon.com/images/I/6161YZ3YNdL._SL1500_.jpg"
              affiliateLink="https://amzn.to/4uQ7FTz"
            />
          </div>
        </section>

        {/* WHY TRUST US */}
        <section id="why-trust-us" className="mt-14 scroll-mt-24">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Why Trust Us</p>
            </div>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Every product in this round-up is a live deal from Amazon India Great Summer Sale 2026, verified at time of publishing. Prices move during the sale window — what you see at checkout is the final word. Stack an HDFC Bank card, a Prime membership and an eligible exchange for the lowest possible final price.
            </p>
          </div>
        </section>

        {/* BACK TO BLOG */}
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>

      </article>
      <Footer />
    </main>
  );
};

export default AmazonSummerSale2026;
