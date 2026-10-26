import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BrandLogo from "@/components/BrandLogo";
import CouponReveal from "@/components/CouponReveal";
import { brands, categories, coupons } from "@/data/affiliateData";

const SITE_URL = "https://www.couponminty.com";

const CouponsIndex = () => {
  const brandBySlug = new Map(brands.map((b) => [b.slug, b]));
  const groups = categories
    .map((cat) => ({ cat, items: coupons.filter((c) => c.category === cat.slug) }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Coupon Codes by Category | CouponMinty"
        description="All CouponMinty coupon codes grouped by category — travel, fashion, beauty, electronics, home, food and more. Copy a code and save instantly."
        canonical={`${SITE_URL}/coupons`}
      />
      <Navbar />

      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl">Coupon codes by category</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {coupons.length} verified codes across {groups.length} categories. Jump to a category to grab a code.
          </p>
          <nav aria-label="Jump to category" className="mt-6 flex flex-wrap gap-2">
            {groups.map(({ cat, items }) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-card transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {cat.name} <span className="text-xs font-bold text-muted-foreground">({items.length})</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="container space-y-12 py-12">
        {groups.map(({ cat, items }) => (
          <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-extrabold text-primary">{cat.name}</h2>
              <Link
                to={`/coupons/${cat.slug}`}
                className="text-sm font-semibold text-accent hover:underline"
              >
                See all {cat.name} deals →
              </Link>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {items.map((coupon) => {
                const brand = brandBySlug.get(coupon.brandSlug);
                if (!brand) return null;
                return (
                  <div key={coupon.id} className="space-y-2">
                    <Link
                      to={`/brands/${brand.slug}`}
                      className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent"
                    >
                      <BrandLogo name={brand.name} logo={brand.logo} size="sm" />
                      {brand.name}
                    </Link>
                    <CouponReveal coupon={coupon} brand={brand} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default CouponsIndex;
