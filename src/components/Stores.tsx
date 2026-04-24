import { ShoppingBag, Shirt, Smartphone, UtensilsCrossed, Home, Sparkles, Gift, Tag } from "lucide-react";

const stores = [
  { name: "Amazon", cb: "8%", icon: ShoppingBag, color: "from-amber-500 to-orange-500" },
  { name: "Flipkart", cb: "7.5%", icon: Tag, color: "from-blue-500 to-indigo-600" },
  { name: "Myntra", cb: "10%", icon: Shirt, color: "from-pink-500 to-rose-500" },
  { name: "Ajio", cb: "12%", icon: Sparkles, color: "from-fuchsia-500 to-purple-600" },
  { name: "Croma", cb: "6%", icon: Smartphone, color: "from-emerald-500 to-teal-600" },
  { name: "Nykaa", cb: "9%", icon: Gift, color: "from-rose-500 to-red-500" },
  { name: "Swiggy", cb: "15%", icon: UtensilsCrossed, color: "from-orange-500 to-amber-500" },
  { name: "Pepperfry", cb: "8%", icon: Home, color: "from-sky-500 to-blue-600" },
];

const Stores = () => (
  <section id="stores" className="container py-20">
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">Top Brand Partners</span>
      <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Earn cashback at India&apos;s biggest stores</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">Direct partnerships with 1,500+ MNCs — every purchase earns you guaranteed extra cashback.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {stores.map((s) => (
        <div key={s.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
          <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-card`}>
            <s.icon className="h-6 w-6" />
          </div>
          <div className="text-lg font-bold text-primary">{s.name}</div>
          <div className="mt-1 inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">
            Up to {s.cb} Cashback
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stores;
