import { Sparkles, Mail, MapPin } from "lucide-react";

const explore = [
  { label: "Stores", href: "#stores" },
  { label: "Coupons", href: "#coupons" },
  { label: "Travel Deals", href: "#travel" },
  { label: "How It Works", href: "#how" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

const Footer = () => (
  <footer className="bg-primary py-14 text-primary-foreground">
    <div className="container grid gap-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient">
            <Sparkles className="h-5 w-5 text-accent-foreground" />
          </span>
          <span className="text-xl font-extrabold">Coupon<span className="text-accent">Minty</span></span>
        </div>
        <p className="mt-4 max-w-xs text-sm text-white/70">India&apos;s most trusted coupons & cashback platform, saving members crores every month.</p>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Explore</h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {explore.map((l) => (
            <li key={l.label}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Company</h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {company.map((l) => (
            <li key={l.label}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h4>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href="mailto:contact@couponminty.com" className="hover:text-accent">contact@couponminty.com</a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>A2 405, Aangan Gurgaon by Adani, Pataudi Rd, Sector 89A, Gurugram, Haryana 122505</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
      © {new Date().getFullYear()} CouponMinty Technologies Pvt Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
