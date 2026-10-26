import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BrandLogo from "@/components/BrandLogo";
import CouponReveal from "@/components/CouponReveal";
import { Button } from "@/components/ui/button";
import { brands, categories, coupons } from "@/data/affiliateData";

const SITE_URL = "https://www.couponminty.com";

const CategoryPage = () => {
  const { category: slug = "" } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="container py-24 text-center">
          <h1 className="text-3xl font-extrabold text-primary">Category not found</h1>
          <p className="mt-3 text-muted-foreground">The category you are looking for does not exist or has been moved.</p>
          <Button asChild className="mt-6 bg-accent-gradient text-accent-foreground hover:opacity-90">
            <Link to="/coupons">Browse all coupons</Link>
          </Button>
        </section>
        <Footer />
      </main>
    );
  }

  const categoryBrands = brands.filter((b) => b.category === category.slug);
  const brandBySlug = new Map(categoryBrands.map((b) => [b.slug, b]));
  const brandsWithCoupons = [...brandBySlug.values()]
    .map((brand) => ({ brand, items: coupons.filter((c) => c.brandSlug === brand.slug) }))
    .filter((g) => g.items.length > 0)
    .sort((a, b) => b.items.length - a.items.length || a.brand.name.localeCompare(b.brand.name));
  const totalCoupons = brandsWithCoupons.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${category.name} Coupon Codes | CouponMinty`}
        description={
          totalCoupons > 0
            ? `${totalCoupons} verified ${category.name.toLowerCase()} coupon codes and offers. Copy a code, shop and save on CouponMinty.`
            : `Browse ${category.name.toLowerCase()} brands and offers on CouponMinty.`
        }
        canonical={`${SITE_URL}/coupons/${category.slug}`}
        robots={totalCoupons === 0 ? "noindex, follow" : undefined}
      />
      <Navbar />

      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl">{category.name} Coupon Codes</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {totalCoupons > 0
              ? `${totalCoupons} codes across ${brandsWithCoupons.length} ${category.name.toLowerCase()} brands.`
              : `${categoryBrands.length} ${category.name.toLowerCase()} brands on CouponMinty.`}
          </p>
        </div>
      </section>

      {brandsWithCoupons.length > 0 && (
        <section className="container space-y-10 py-12">
          {brandsWithCoupons.map(({ brand, items }) => (
            <div key={brand.slug}>
              <Link
                to={`/brands/${brand.slug}`}
                className="inline-flex items-center gap-3 font-extrabold text-primary hover:text-accent"
              >
                <BrandLogo name={brand.name} logo={brand.logo} />
                <span className="text-xl">{brand.name}</span>
              </Link>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((coupon) => (
                  <CouponReveal key={coupon.id} coupon={coupon} brand={brand} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {categoryBrands.length > 0 && (
        <section className={brandsWithCoupons.length > 0 ? "bg-secondary/40 py-12" : "container py-12"}>
          <div className={brandsWithCoupons.length > 0 ? "container" : ""}>
            <h2 className="text-xl font-extrabold text-primary">All {category.name} brands</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categoryBrands.map((brand) => {
                const count = coupons.filter((c) => c.brandSlug === brand.slug).length;
                return (
                  <Link
                    key={brand.slug}
                    to={`/brands/${brand.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                  >
                    <BrandLogo name={brand.name} logo={brand.logo} />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-foreground">{brand.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {count > 0 ? `${count} active code${count > 1 ? "s" : ""}` : "View offers"}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default CategoryPage;
