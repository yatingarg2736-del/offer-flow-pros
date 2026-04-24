import { ShoppingBag, Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2, Tv } from "lucide-react";

const tech = [
  { name: "Amazon Electronics", cb: "Up to 8% Cashback", icon: ShoppingBag },
  { name: "Flipkart Mobiles", cb: "₹2,000 OFF + 6% CB", icon: Smartphone },
  { name: "Croma", cb: "10% on Laptops", icon: Laptop },
  { name: "Reliance Digital", cb: "Flat ₹1,500 OFF", icon: Tv },
  { name: "boAt Lifestyle", cb: "12% on Audio", icon: Headphones },
  { name: "Noise Wearables", cb: "15% on Smartwatches", icon: Watch },
  { name: "Vijay Sales", cb: "8% on Cameras", icon: Camera },
  { name: "Games The Shop", cb: "20% on Gaming", icon: Gamepad2 },
];

const Travel = () => (
  <section id="tech" className="container py-20">
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">E-commerce & Tech</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Save big on gadgets, electronics & tech</h2>
      </div>
      <p className="text-muted-foreground md:text-right">Official partner with leading e-commerce and tech brands. Shop through CouponMinty and earn extra cashback on every gadget.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {tech.map((t) => (
        <div key={t.name} className="group relative overflow-hidden rounded-2xl bg-hero p-6 text-primary-foreground shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-all group-hover:bg-accent/40" />
          <t.icon className="h-7 w-7 text-accent" />
          <div className="relative mt-6 text-lg font-bold">{t.name}</div>
          <div className="relative mt-1 text-sm text-white/70">{t.cb}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Travel;
