import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const links = [
  { label: "Stores", href: "/#stores" },
  { label: "Coupons", href: "/#coupons" },
  { label: "Tech", href: "/#tech" },
  { label: "How it Works", href: "/#how" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => (
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
          <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
        <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
          <a href="#contact">Join Free</a>
        </Button>
      </div>
    </div>
  </header>
);

export default Navbar;
