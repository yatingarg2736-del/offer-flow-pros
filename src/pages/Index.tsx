import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Stores from "@/components/Stores";
import Coupons from "@/components/Coupons";
import Travel from "@/components/Travel";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import AboutTeam from "@/components/AboutTeam";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SITE_URL = "https://couponminty.com";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CouponMinty",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/couponminty",
      "https://www.instagram.com/couponminty",
      "https://twitter.com/couponminty",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@couponminty.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CouponMinty",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does CouponMinty cashback work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click any store on CouponMinty, shop normally on the brand site, and we credit cashback to your CouponMinty wallet within 48-72 hours. Withdraw to bank or UPI anytime.",
        },
      },
      {
        "@type": "Question",
        name: "Are CouponMinty coupons free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All coupons and cashback offers on CouponMinty are 100% free. No subscription, no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Which brands are partnered with CouponMinty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CouponMinty partners with 1,500+ brands including Amazon, Flipkart, Myntra, Ajio, Nykaa, Swiggy, Zomato, Croma, Reliance Digital, BigBasket and many more.",
        },
      },
    ],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="CouponMinty — Coupons, Cashback & Deals from 1,500+ Top Brands in India"
        description="Save more with CouponMinty. Get verified coupons, extra cashback and exclusive offers from Amazon, Flipkart, Myntra, Swiggy, Nykaa, Croma & 1,500+ top brands."
        canonical={SITE_URL}
        jsonLd={jsonLd}
      />
      <Navbar />
      <h1 className="sr-only">CouponMinty — Coupons, Cashback & Travel Deals from Top Brands in India</h1>
      <Hero />
      <Stats />
      <Stores />
      <Coupons />
      <Travel />
      <HowItWorks />
      <Partners />
      <AboutTeam />
      <ContactForms />
      <Footer />
    </main>
  );
};

export default Index;
