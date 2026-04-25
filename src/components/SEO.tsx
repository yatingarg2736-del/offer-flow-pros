import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://couponminty.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title = "CouponMinty: Coupons, Cashback & Deals from 1,500+ Top Brands in India",
  description = "Save more with CouponMinty. Get verified coupons, extra cashback and exclusive offers from Amazon, Flipkart, Myntra, Swiggy, Nykaa, Croma and 1,500+ top brands.",
  canonical = SITE_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="CouponMinty" />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {jsonLd && (
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    )}
  </Helmet>
);

export default SEO;
