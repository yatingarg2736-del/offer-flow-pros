import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { brands, categories } from "@/data/affiliateData";

export const featuredBrandSlugs = [
  "global-delight",
  "economy-bookings",
  "the-unity-soft",
  "gift-republic",
  "vista-social",
  "sky-view-observatory",
  "view-boston",
  "cloudwalker-slippers",
  "retechtronics",
  "the-view-from-the-shard",
];

const featuredBrands = featuredBrandSlugs
  .map((slug) => brands.find((brand) => brand.slug === slug))
  .filter((brand) => brand !== undefined);

const Stores = () => (
  <section id="stores" aria-labelledby="stores-heading" className="container py-20">
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 id="stores-heading" className="text-3xl font-extrabold text-primary md:text-4xl">
        Top brands &amp; exclusive offers
      </h2>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {featuredBrands.map((brand) => {
        const category = categories.find((item) => item.slug === brand.category);

        return (
          <Link
            key={brand.slug}
            to={`/brands/${brand.slug}`}
            title={brand.name}
            className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <BrandLogo name={brand.name} logo={brand.logo} />
            <span className="text-base font-bold text-primary">{brand.name}</span>
            <span className="text-sm text-muted-foreground">{category?.name ?? brand.category}</span>
          </Link>
        );
      })}
    </div>
  </section>
);

export default Stores;