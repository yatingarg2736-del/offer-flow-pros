const stats = [
  { value: "₹820 Cr+", label: "Cashback paid to users" },
  { value: "25M+", label: "Happy members" },
  { value: "1,500+", label: "Brand partners" },
  { value: "98.6%", label: "On-time payouts" },
];

const Stats = () => (
  <section className="border-y border-border bg-secondary/50">
    <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl font-extrabold text-primary md:text-4xl">{s.value}</div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
