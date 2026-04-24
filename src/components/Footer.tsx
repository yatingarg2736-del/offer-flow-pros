import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

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
        <p className="mt-4 max-w-xs text-sm text-white/70">India&apos;s most trusted coupons & cashback platform — saving members crores every month.</p>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Explore</h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {["Stores", "Coupons", "Travel Deals", "How It Works"].map((l) => <li key={l}><a href="#" className="hover:text-accent">{l}</a></li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Company</h4>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {["About Us", "Careers", "Press", "Privacy Policy", "Terms"].map((l) => <li key={l}><a href="#" className="hover:text-accent">{l}</a></li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h4>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> partners@couponminty.com</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 80 4567 8900</li>
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Prestige Tower, Bengaluru, India</li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
      © {new Date().getFullYear()} CouponMinty Technologies Pvt Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
