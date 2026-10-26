import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Scissors } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import type { Brand, Coupon } from "@/data/affiliateData";

const CouponReveal = ({ coupon, brand }: { coupon: Coupon; brand: Brand }) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const reveal = () => {
    setRevealed(true);
    // Same click also sends the shopper to the brand via the affiliate link.
    if (brand.affiliateUrl) {
      window.open(brand.affiliateUrl, "_blank", "noopener,noreferrer");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      toast({ title: `${brand.name} code copied!`, description: `Use code ${coupon.code} at checkout to save more.` });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy the code manually." });
    }
  };

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <h3 className="flex-1 text-base font-bold leading-snug text-foreground">{coupon.title}</h3>
      {revealed ? (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-accent bg-accent/5 px-3 py-2">
          <Scissors className="h-4 w-4 shrink-0 text-accent" />
          <code className="flex-1 truncate text-sm font-bold tracking-wider text-accent">{coupon.code}</code>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={copy}
            aria-label={`Copy ${brand.name} coupon code ${coupon.code}`}
            className="border-accent text-accent hover:bg-accent/10"
          >
            {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          onClick={reveal}
          aria-label={`Show ${brand.name} coupon code`}
          className="mt-4 w-fit bg-accent-gradient text-accent-foreground hover:opacity-90"
        >
          Show code
        </Button>
      )}
    </article>
  );
};

export default CouponReveal;
