import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BrandLogo from "@/components/BrandLogo";
import { brands } from "@/data/affiliateData";

const BrandsIndex = () => {
  const groups = new Map<string, typeof brands>();
  for (const brand of brands) {
    const letter = /^[A-Z]/i.test(brand.name) ? brand.name.charAt(0).toUpperCase() : "#";
    const list = groups.get(letter) ?? [];
    list.push(brand);
    groups.set(letter, list);
  }
  const letters = [...groups.keys()].sort((a, b) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)));

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="All Brands A–Z | CouponMinty"
        description="Browse every brand on CouponMinty from A to Z. Find coupon codes, offers and deals for hundreds of stores across travel, fashion, electronics, home and more."
        canonical="https://www.couponminty.com/brands"
      />
      <Navbar />

      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl">All brands A–Z</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {brands.length} brands with coupon codes, offers and deals. Pick a brand to see its active codes.
          </p>
          <nav aria-label="Jump to letter" className="mt-6 flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-card text-sm font-bold text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="container py-12">
        <div className="space-y-10">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-primary">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-base text-accent-foreground">
                  {letter}
                </span>
                {letter === "#" ? "Others" : letter}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groups.get(letter)!.map((brand) => (
                  <Link
                    key={brand.slug}
                    to={`/brands/${brand.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                  >
                    <BrandLogo name={brand.name} logo={brand.logo} />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-foreground">{brand.name}</span>
                      <span className="text-xs text-muted-foreground">View coupons</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BrandsIndex;
