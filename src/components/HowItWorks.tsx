import { Search, MousePointerClick, ShoppingCart, Wallet } from "lucide-react";

const steps = [
  { icon: Search, title: "Search a Deal", desc: "Find your favourite brand or coupon from 1,500+ partner stores in seconds." },
  { icon: MousePointerClick, title: "Click the Link", desc: "Copy the coupon and click through to the brand site via CouponMinty." },
  { icon: ShoppingCart, title: "Shop Online", desc: "Complete your purchase normally on the brand website at the best price." },
  { icon: Wallet, title: "Get Cashback", desc: "Cashback tracks within hours and is paid directly to your bank or UPI." },
];

const HowItWorks = () => (
  <section id="how" className="bg-secondary/40 py-20">
    <div className="container">
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">How CouponMinty Works</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Four steps to real savings</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-sm font-bold text-accent-foreground shadow-glow">
              {i + 1}
            </div>
            <s.icon className="mt-2 h-10 w-10 text-primary" />
            <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
