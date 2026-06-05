import { useEffect, useState } from "react";
import { X, Mail, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logoFor } from "@/lib/dealsData";

const STORAGE_KEY = "cm_email_popup_shown_v1";
const brands = [
  { name: "Amazon", url: "https://www.amazon.in" },
  { name: "Flipkart", url: "https://www.flipkart.com" },
  { name: "Myntra", url: "https://track.vcommission.com/click?campaign_id=10882&pub_id=129716" },
  { name: "Nykaa", url: "https://www.nykaa.com" },
  { name: "Swiggy", url: "https://www.swiggy.com" },
  { name: "Ajio", url: "https://www.ajio.com" },
];

const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/meevdjez", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "exclusive_deals_popup" }),
      });
      if (res.ok) {
        setStatus("success");
        localStorage.setItem(STORAGE_KEY, "1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="email-popup-title">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-elegant">
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-secondary text-primary hover:bg-muted">
          <X className="h-4 w-4" />
        </button>

        <div className="bg-hero px-7 py-7 text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Exclusive Member Offer
          </div>
          <h3 id="email-popup-title" className="mt-3 text-2xl font-extrabold leading-tight">
            Never Miss a Cashback Deal from These Exclusive Brands
          </h3>
        </div>

        <div className="px-7 py-6">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
            {brands.map((b) => (
              <span key={b.name} title={b.name} className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white p-1 shadow-card">
                <img src={logoFor(b.url, 64)} alt={`${b.name} logo`} width={28} height={28} className="h-7 w-7 rounded" />
              </span>
            ))}
          </div>

          {status === "success" ? (
            <div className="rounded-2xl bg-accent/10 p-5 text-center">
              <span className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-accent-foreground">
                <Check className="h-5 w-5" />
              </span>
              <p className="text-base font-bold text-primary">You&apos;re in! Check your inbox for exclusive deals</p>
              <Button onClick={close} className="mt-4 bg-accent-gradient text-accent-foreground hover:opacity-90">Continue Browsing</Button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="pl-9 text-foreground"
                />
              </div>
              {status === "error" && <p className="text-xs font-medium text-destructive">Please enter a valid email and try again.</p>}
              <Button type="submit" disabled={status === "loading"} size="lg" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                {status === "loading" ? "Sending…" : "Get Exclusive Deals"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
