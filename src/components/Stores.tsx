import { withUtm } from "@/lib/affiliate";

const stores = [
  { name: "Amazon", cb: "8%", url: "https://www.amazon.in", color: "from-amber-500 to-orange-500" },
  { name: "Flipkart", cb: "7.5%", url: "https://www.flipkart.com", color: "from-blue-500 to-indigo-600" },
  { name: "Myntra", cb: "10%", url: "https://www.myntra.com", color: "from-pink-500 to-rose-500" },
  { name: "Ajio", cb: "12%", url: "https://www.ajio.com", color: "from-fuchsia-500 to-purple-600" },
  { name: "Croma", cb: "6%", url: "https://www.croma.com", color: "from-emerald-500 to-teal-600" },
  { name: "Nykaa", cb: "9%", url: "https://www.nykaa.com", color: "from-rose-500 to-red-500" },
  { name: "Swiggy", cb: "15%", url: "https://www.swiggy.com", color: "from-orange-500 to-amber-500" },
  { name: "Pepperfry", cb: "8%", url: "https://www.pepperfry.com", color: "from-sky-500 to-blue-600" },
];

const logoFor = (url: string) => {
  const domain = new URL(url).hostname.replace(/^www\./, "");
  return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
};

const Stores = () => (
  <section id="stores" aria-labelledby="stores-heading" className="container py-20">
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">Top Brand Partners</span>
      <h2 id="stores-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Earn cashback at India&apos;s biggest stores</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">Direct partnerships with 1,500+ MNCs. Every purchase earns you guaranteed extra cashback.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {stores.map((s) => (
        <a
          key={s.name}
          href={withUtm(s.url, "stores", s.name.toLowerCase())}
          target="_blank"
          rel="noopener noreferrer sponsored"
          title={`Shop ${s.name} & earn cashback`}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} p-2 shadow-card`}>
            <img
              src={logoFor(s.url)}
              alt={`${s.name} logo`}
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 rounded bg-white/95 p-0.5"
            />
          </div>
          <div className="text-lg font-bold text-primary">{s.name}</div>
          <div className="mt-1 inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">
            Up to {s.cb} Cashback
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Stores;
