import { withUtm } from "@/lib/affiliate";
import { stores, logoFor } from "@/lib/dealsData";
import { Tag } from "lucide-react";

const Stores = () => (
  <section id="stores" aria-labelledby="stores-heading" className="container py-20">
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">Top Brand Partners</span>
      <h2 id="stores-heading" className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">Earn cashback at India&apos;s biggest stores</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">Direct partnerships with 1,500+ MNCs. Every purchase earns you guaranteed extra cashback.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {stores.map((s) => {
        const internal = s.name === "Myntra" ? "/myntra-deals" : s.name === "Amazon" ? "/amazon-deals" : null;
        return (
        <a
          key={s.name}
          href={internal ?? withUtm(s.url, "stores", s.name.toLowerCase())}
          {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer sponsored" })}
          title={`Shop ${s.name} & earn cashback`}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} p-2 shadow-card`}>
            <img
              src={logoFor(s.url, 128)}
              alt={`${s.name} logo`}
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 rounded bg-white/95 p-0.5"
            />
          </div>
          <div className="text-lg font-bold text-primary">{s.name}</div>
          <div className="mt-1 inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">
            Up to {s.cb} Cashback
          </div>
          <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Tag className="h-3 w-3" /> {s.deals} active deals
          </div>
        </a>
        );
      })}
    </div>
  </section>
);

export default Stores;
