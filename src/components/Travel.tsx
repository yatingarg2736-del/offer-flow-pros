import { Plane, Hotel, Train, Car, Globe2, Ship } from "lucide-react";

const travel = [
  { name: "MakeMyTrip", cb: "₹1,200 Cashback", icon: Plane },
  { name: "Booking.com", cb: "8% on Hotels", icon: Hotel },
  { name: "Yatra", cb: "₹900 on Flights", icon: Plane },
  { name: "Goibibo", cb: "12% on Stays", icon: Hotel },
  { name: "IRCTC", cb: "Flat ₹50/Booking", icon: Train },
  { name: "Zoomcar", cb: "15% Cashback", icon: Car },
  { name: "Agoda", cb: "10% on Hotels", icon: Globe2 },
  { name: "Cordelia Cruises", cb: "₹3,000 OFF", icon: Ship },
];

const Travel = () => (
  <section id="travel" className="container py-20">
    <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Travel Cashback</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Save big on flights, hotels & holidays</h2>
      </div>
      <p className="text-muted-foreground md:text-right">Official partner with leading global travel brands. Book through DealMint and earn cashback on every trip.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {travel.map((t) => (
        <div key={t.name} className="group relative overflow-hidden rounded-2xl bg-hero p-6 text-primary-foreground shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-all group-hover:bg-accent/40" />
          <t.icon className="h-7 w-7 text-accent" />
          <div className="relative mt-6 text-lg font-bold">{t.name}</div>
          <div className="relative mt-1 text-sm text-white/70">{t.cb}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Travel;
