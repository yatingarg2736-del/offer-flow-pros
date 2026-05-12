const partnerDeals = [
  {
    brand: "Kaspersky",
    category: "Cybersecurity & Antivirus",
    headline: "Up to 30% Cashback",
    description: "Protect your devices with industry-leading antivirus. Earn cashback on premium security plans.",
    link: "https://dhwnh.com/g/f6b07970c6e9705a8350e5a65aad3a/?erid=5jtCeReLm1S3Xx3LfA8QF84",
    badge: "Sponsored",
  },
  {
    brand: "Fiverr",
    category: "Freelance Services",
    headline: "$7 Cashback on Services",
    description: "Hire freelancers for design, writing, marketing, and more. Earn cashback on every order.",
    link: "https://twnfz.com/c/oqcmadzidpe9705a8350acbbb3152e/",
    badge: "Sponsored",
  },
  {
    brand: "Puzzle Movies",
    category: "Entertainment & Streaming",
    headline: "Up to 22% Cashback",
    description: "Stream curated films and earn cashback on your subscription plan.",
    link: "https://dhwnh.com/g/ae4zpznc0ie9705a835042f9f2178b/?erid=2bL9aMPo2e49hMef4peznT3Qvi",
    badge: "Sponsored",
  },
];

const handleAffiliateClick = (brand: string, category: string) => {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "affiliate_click",
      brand_name: brand,
      category: category,
      source: "homepage_partner_section",
    });
  }
};

const PartnerDeals = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Partner Deals
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Exclusive cashback offers from our trusted global partners. Verified and ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerDeals.map((deal) => (
            <div
              key={deal.brand}
              className="relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <span className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {deal.badge}
              </span>

              <div className="mb-4">
                <span className="inline-block text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary mb-3">
                  {deal.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {deal.brand}
                </h3>
                <p className="text-lg font-semibold text-primary mb-3">
                  {deal.headline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {deal.description}
                </p>
              </div>

              
                href={deal.link}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() => handleAffiliateClick(deal.brand, deal.category)}
                className="mt-auto inline-flex items-center justify-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get Deal
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          Disclosure: CouponMinty earns a commission when you click these links and make a purchase. This does not affect the price you pay.
        </p>
      </div>
    </section>
  );
};

export default PartnerDeals;
