import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Search } from "lucide-react";
import hero from "@/assets/hero.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-hero text-primary-foreground">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="container relative grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col justify-center">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
          <BadgeCheck className="h-4 w-4 text-accent" /> Trusted by 25M+ shoppers
        </span>
        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          Extra Cashback on top of <span className="text-accent">every coupon</span> you use.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/75">
          CouponMinty partners with 1,500+ leading brands across shopping, travel, fashion and food — so you save more, every single order.
        </p>

        <div className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl bg-white p-2 shadow-elegant">
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              className="w-full bg-transparent py-2 text-foreground outline-none placeholder:text-muted-foreground"
              placeholder="Search Amazon, Flipkart, MakeMyTrip…"
            />
          </div>
          <Button className="bg-accent-gradient text-accent-foreground hover:opacity-90">
            Find Deals <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
          {["✓ Verified Coupons", "✓ Highest Cashback", "✓ Fast Payouts"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl" />
        <img
          src={hero}
          alt="CouponMinty cashback and coupons"
          width={1536}
          height={1024}
          className="relative animate-float rounded-3xl shadow-elegant"
        />
      </div>
    </div>
  </section>
);

export default Hero;
