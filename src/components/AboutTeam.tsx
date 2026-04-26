import team from "@/assets/team.jpg";
import { Users, Briefcase, Globe2, Award } from "lucide-react";

const points = [
  { icon: Users, label: "200+ team members" },
  { icon: Briefcase, label: "12 offices across India" },
  { icon: Globe2, label: "Partners in 14 countries" },
  { icon: Award, label: "Awarded 'Best Affiliate 2024'" },
];

const AboutTeam = () => (
  <section id="about" className="container py-20">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-accent/15 blur-2xl" />
        <img
          src={team}
          alt="CouponMinty partnerships team"
          width={1536}
          height={1024}
          loading="lazy"
          className="relative rounded-3xl shadow-elegant"
        />
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">About CouponMinty</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">A passionate team building India&apos;s largest savings network</h2>
        <p className="mt-4 text-muted-foreground">
          Founded in 2017 and headquartered in Gurugram, CouponMinty is a trusted partner to 1,500+ merchants and serves over 25 million members across India. Our mission is simple: make every online purchase more rewarding with verified coupons and guaranteed cashback, so families save real money on the things they already buy.
        </p>
        <p className="mt-3 text-muted-foreground">
          Our 200+ specialists across technology, brand partnerships and customer success work round-the-clock to track new deals, validate coupon codes and process cashback payouts within hours, not weeks.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-gradient text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-primary">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutTeam;
