import { MousePointerClick, ShoppingCart, Wallet } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Sign up & pick a store", desc: "Choose from 1,500+ brand partners across shopping, travel & food." },
  { icon: ShoppingCart, title: "Shop as usual", desc: "Click through to the brand site and complete your purchase normally." },
  { icon: Wallet, title: "Get cashback in your wallet", desc: "Cashback tracks within hours and is paid directly to your bank." },
];

const HowItWorks = () => (
  <section id="how" className="bg-secondary/40 py-20">
    <div className="container">
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">How CouponMinty Works</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Three steps to real savings</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
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
