const brands = [
  "Amazon", "Flipkart", "Myntra", "Ajio", "Nykaa", "Tata CLiQ", "Croma", "Reliance Digital",
  "boAt", "Noise", "Lenskart", "Vijay Sales", "Apple", "Samsung", "OnePlus", "Mi",
  "Swiggy", "Zomato", "BigBasket", "FirstCry", "Pharmeasy", "Mamaearth", "Meesho", "Snapdeal",
];

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex gap-4 whitespace-nowrap animate-marquee" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
    {[...brands, ...brands].map((b, i) => (
      <span
        key={i}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-primary shadow-card"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        {b}
      </span>
    ))}
  </div>
);

const Partners = () => (
  <section id="partners" className="overflow-hidden border-y border-border bg-background py-16">
    <div className="container mb-10 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">Official Partnerships</span>
      <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">In partnership with global MNCs</h2>
      <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">A 200+ strong team working with top brands across e-commerce, travel and lifestyle to bring you the best deals.</p>
    </div>
    <div className="space-y-4">
      <Row />
      <Row reverse />
    </div>
  </section>
);

export default Partners;
