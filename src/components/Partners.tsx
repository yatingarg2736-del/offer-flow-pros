const brands = [
  { name: "Amazon", url: "https://www.amazon.in" },
  { name: "Flipkart", url: "https://www.flipkart.com" },
  { name: "Myntra", url: "https://track.vcommission.com/click?campaign_id=10882&pub_id=129716" },
  { name: "Ajio", url: "https://www.ajio.com" },
  { name: "Nykaa", url: "https://www.nykaa.com" },
  { name: "Tata CLiQ", url: "https://www.tatacliq.com" },
  { name: "Croma", url: "https://www.croma.com" },
  { name: "Reliance Digital", url: "https://www.reliancedigital.in" },
  { name: "boAt", url: "https://www.boat-lifestyle.com" },
  { name: "Noise", url: "https://www.gonoise.com" },
  { name: "Lenskart", url: "https://www.lenskart.com" },
  { name: "Vijay Sales", url: "https://www.vijaysales.com" },
  { name: "Apple", url: "https://www.apple.com/in" },
  { name: "Samsung", url: "https://www.samsung.com/in" },
  { name: "OnePlus", url: "https://www.oneplus.in" },
  { name: "Mi", url: "https://www.mi.com/in" },
  { name: "Swiggy", url: "https://www.swiggy.com" },
  { name: "Zomato", url: "https://www.zomato.com" },
  { name: "BigBasket", url: "https://www.bigbasket.com" },
  { name: "FirstCry", url: "https://www.firstcry.com" },
  { name: "Pharmeasy", url: "https://pharmeasy.in" },
  { name: "Mamaearth", url: "https://mamaearth.in" },
  { name: "Meesho", url: "https://www.meesho.com" },
  { name: "Snapdeal", url: "https://www.snapdeal.com" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
};

import { withUtm } from "@/lib/affiliate";

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex gap-4 whitespace-nowrap animate-marquee" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
    {[...brands, ...brands].map((b, i) => (
      <a
        key={i}
        href={withUtm(b.url, "partners", b.name.toLowerCase().replace(/\s+/g, "-"))}
        target="_blank"
        rel="noopener noreferrer sponsored"
        title={`Visit ${b.name}`}
        className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-primary shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-elegant"
      >
        <img
          src={logoFor(b.url)}
          alt={`${b.name} logo`}
          width={20}
          height={20}
          loading="lazy"
          className="h-5 w-5 rounded"
        />
        {b.name}
      </a>
    ))}
  </div>
);

const Partners = () => (
  <section id="partners" aria-labelledby="partners-heading" className="overflow-hidden border-y border-border bg-background py-16">
    <div className="container mb-10 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">Official Partnerships</span>
      <h2 id="partners-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">In partnership with global MNCs</h2>
      <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">A 200+ strong team working with top brands across e-commerce, travel and lifestyle to bring you the best deals.</p>
    </div>
    <div className="space-y-4">
      <Row />
      <Row reverse />
    </div>
  </section>
);

export default Partners;
