import { Plane, Hotel, Palmtree, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withUtm } from "@/lib/affiliate";

type Deal = {
  type: "Flight" | "Hotel" | "Holiday";
  title: string;
  desc: string;
  discount: string;
  image: string;
  url: string;
};

const deals: Deal[] = [
  {
    type: "Flight",
    title: "Domestic Flights",
    desc: "Delhi · Mumbai · Bengaluru · Goa",
    discount: "Flat ₹3,000 OFF",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=70&auto=format&fit=crop",
    url: "https://www.makemytrip.com/flights/",
  },
  {
    type: "Flight",
    title: "International Flights",
    desc: "Dubai · Bangkok · Singapore",
    discount: "Up to ₹12,000 OFF",
    image: "https://images.unsplash.com/photo-1540339832862-474599807836?w=900&q=70&auto=format&fit=crop",
    url: "https://www.cleartrip.com/flights/international",
  },
  {
    type: "Hotel",
    title: "Luxury Hotels",
    desc: "5-star stays across India",
    discount: "Up to 55% OFF",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=70&auto=format&fit=crop",
    url: "https://www.booking.com",
  },
  {
    type: "Hotel",
    title: "Weekend Getaways",
    desc: "Lonavala · Coorg · Manali",
    discount: "Flat 40% OFF",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=70&auto=format&fit=crop",
    url: "https://www.goibibo.com/hotels/",
  },
  {
    type: "Holiday",
    title: "Goa Beach Holiday",
    desc: "4N/5D with flights & resort",
    discount: "From ₹14,999",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=70&auto=format&fit=crop",
    url: "https://www.thrillophilia.com/cities/goa",
  },
  {
    type: "Holiday",
    title: "Bali Honeymoon",
    desc: "6N/7D villa stay + tours",
    discount: "From ₹54,999",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=70&auto=format&fit=crop",
    url: "https://www.makemytrip.com/holidays-international/",
  },
];

const iconFor = (t: Deal["type"]) => (t === "Flight" ? Plane : t === "Hotel" ? Hotel : Palmtree);

const Travel = () => (
  <section id="travel" aria-labelledby="travel-heading" className="container py-20">
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Travel Deals</span>
        <h2 id="travel-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Save big on flights, hotels & holidays</h2>
      </div>
      <p className="text-muted-foreground md:text-right">Book travel through CouponMinty and earn extra cashback on every flight, hotel and holiday package across India and abroad.</p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {deals.map((d) => {
        const Icon = iconFor(d.type);
        return (
          <article key={d.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="relative h-44 overflow-hidden">
              <img src={d.image} alt={d.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-primary shadow-card">
                <Icon className="h-3.5 w-3.5 text-accent" /> {d.type}
              </span>
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent-gradient px-2.5 py-1 text-xs font-bold text-accent-foreground shadow-glow">
                <Tag className="h-3 w-3" /> {d.discount}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-primary">{d.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {d.desc}
              </p>
              <Button asChild size="sm" className="mt-4 w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                <a href={withUtm(d.url, "travel", d.title.toLowerCase().replace(/\s+/g, "-"))} target="_blank" rel="noopener noreferrer sponsored">
                  Book & Earn Cashback
                </a>
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Travel;
