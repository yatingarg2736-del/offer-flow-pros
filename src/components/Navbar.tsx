import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

const links = [
  { label: "Stores", href: "/#stores" },
  { label: "Coupons", href: "/#coupons" },
  { label: "Tech", href: "/#tech" },
  { label: "How it Works", href: "/#how" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
            <a href="#contact">Join Free</a>
          </Button>
          <button className="ml-2 md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-3 border-b border-border/30">
              {l.label}
            </a>
          ))}
          <Button variant="ghost" className="w-full mt-2 justify-start">Sign in</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;