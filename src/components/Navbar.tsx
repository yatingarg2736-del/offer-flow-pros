import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { label: "Stores", href: "/#stores" },
  { label: "Coupons", href: "/#coupons" },
  { label: "Travel", href: "/#travel" },
  { label: "About", href: "/#about" },
  { label: "How it Works", href: "/#how" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient shadow-glow">
            <Sparkles className="h-5 w-5 text-accent-foreground" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-primary">
            Coupon<span className="text-accent">Minty</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#contact" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-primary hover:bg-secondary">
            Sign in
          </a>
          <a href="/#contact" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-accent-gradient text-accent-foreground hover:opacity-90">
            Join Free
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-secondary" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background px-6 py-4 flex flex-col">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-3 border-b border-border/30 last:border-0">
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a href="/#contact" onClick={() => setOpen(false)} className="w-full text-center py-2 px-4 rounded-md border border-border text-primary font-medium hover:bg-secondary">
              Sign in
            </a>
            <a href="/#contact" onClick={() => setOpen(false)} className="w-full text-center py-2 px-4 rounded-md bg-accent-gradient text-accent-foreground font-medium hover:opacity-90">
              Join Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;