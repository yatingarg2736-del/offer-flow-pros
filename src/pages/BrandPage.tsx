import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BrandLogo from "@/components/BrandLogo";
import CouponReveal from "@/components/CouponReveal";
import { Button } from "@/components/ui/button";
import { brands, categories, coupons } from "@/data/affiliateData";

const SITE_URL = "https://www.couponminty.com";

const BrandPage = () => {
  const { slug = "" } = useParams();
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="container py-24 text-center">
          <h1 className="text-3xl font-extrabold text-primary">Brand not found</h1>
          <p className="mt-3 text-muted-foreground">The brand you are looking for does not exist or has been moved.</p>
          <Button asChild className="mt-6 bg-accent-gradient text-accent-foreground hover:opacity-90">
            <Link to="/brands">Browse all brands</Link>
          </Button>
        </section>
        <Footer />
      </main>
    );
  }

  const category = categories.find((c) => c.slug === brand.category);
  const brandCoupons = coupons.filter((c) => c.brandSlug === brand.slug);
  const moreBrands = brands
    .filter((b) => b.category === brand.category && b.slug !== brand.slug)
    .sort(
      (a, b) =>
        Number(coupons.some((c) => c.brandSlug === b.slug)) - Number(coupons.some((c) => c.brandSlug === a.slug)) ||
        Number(b.featured) - Number(a.featured) ||
        a.name.localeCompare(b.name)
    )
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${brand.name} Coupons & Offers | CouponMinty`}
        description={
          brandCoupons.length > 0
            ? `${brandCoupons.length} verified ${brand.name} coupon codes and offers. Copy a code, shop at ${brand.name} and save on your next order.`
            : `Browse the latest ${brand.name} offers and deals on CouponMinty.`
        }
        canonical={`${SITE_URL}/brands/${brand.slug}`}
        robots={brandCoupons.length === 0 ? "noindex, follow" : undefined}
      />
      <Navbar />

      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <Link to="/brands" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All brands
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <BrandLogo name={brand.name} logo={brand.logo} size="lg" />
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-primary md:text-4xl">
                {brand.name} Coupons &amp; Offers
              </h1>
              {category && (
                <Link
                  to={`/coupons/${category.slug}`}
                  className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
                >
                  {category.name}
                </Link>
              )}
            </div>
          </div>
          {brand.affiliateUrl && (
            <Button asChild className="mt-6 bg-accent-gradient text-accent-foreground hover:opacity-90">
              <a
                href={brand.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                aria-label={`Visit ${brand.name}`}
              >
                Visit {brand.name}
              </a>
            </Button>
          )}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-xl font-extrabold text-primary">
          {brandCoupons.length > 0 ? `${brandCoupons.length} active ${brand.name} codes` : "Coupons"}
        </h2>
        {brandCoupons.length > 0 ? (
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {brandCoupons.map((coupon) => (
              <CouponReveal key={coupon.id} coupon={coupon} brand={brand} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No active codes right now.</p>
        )}
      </section>

      {moreBrands.length > 0 && category && (
        <section className="bg-secondary/40 py-12">
          <div className="container">
            <h2 className="text-xl font-extrabold text-primary">More {category.name} brands</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {moreBrands.map((b) => (
                <Link
                  key={b.slug}
                  to={`/brands/${b.slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <BrandLogo name={b.name} logo={b.logo} />
                  <span className="truncate text-sm font-bold text-foreground">{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default BrandPage;
