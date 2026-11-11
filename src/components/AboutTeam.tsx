import team from "@/assets/team.webp";

const AboutTeam = () => (
  <section id="about" className="container py-20">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-accent/15 blur-2xl" />
        <img
          src={team}
          alt="CouponMinty partnerships team"
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="relative rounded-3xl shadow-elegant"
        />
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">About CouponMinty</span>
        <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">A passionate team making online savings easier</h2>
        <p className="mt-4 text-muted-foreground">
          CouponMinty brings shoppers and brands together with a simple goal: make online purchases more rewarding with helpful offers and verified coupons.
        </p>
      </div>
    </div>
  </section>
);

export default AboutTeam;
