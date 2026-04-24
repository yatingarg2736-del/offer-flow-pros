import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Top 10 Cashback Hacks for Festive Season Shopping",
    excerpt: "Stack coupons, bank offers and CouponMinty cashback to save up to 40% on every order this Diwali.",
    author: "Priya Sharma",
    date: "Apr 18, 2026",
    read: "6 min",
    tag: "Cashback",
  },
  {
    title: "iPhone 17 Launch: Best Pre-order Deals Across India",
    excerpt: "Compare exchange offers, EMI plans and instant discounts on Amazon, Flipkart, Croma and Reliance Digital.",
    author: "Rahul Verma",
    date: "Apr 12, 2026",
    read: "8 min",
    tag: "Tech",
  },
  {
    title: "How Affiliate Marketing Actually Pays You Real Money",
    excerpt: "An honest breakdown of how CouponMinty earns commission and shares it back with you — no hidden catches.",
    author: "Ananya Iyer",
    date: "Apr 05, 2026",
    read: "5 min",
    tag: "Guide",
  },
  {
    title: "Best Laptops Under ₹60,000 with Cashback in 2026",
    excerpt: "Hand-picked laptops for students, creators and gamers with the highest stacked savings on CouponMinty.",
    author: "Karan Mehta",
    date: "Mar 29, 2026",
    read: "7 min",
    tag: "Tech",
  },
  {
    title: "Becoming a CouponMinty Publisher: A Beginner's Guide",
    excerpt: "Earn from your blog, Telegram channel or YouTube — here's exactly how to start and scale your earnings.",
    author: "Neha Kapoor",
    date: "Mar 22, 2026",
    read: "9 min",
    tag: "Publishers",
  },
  {
    title: "Smartwatch Wars 2026: Noise vs boAt vs Apple",
    excerpt: "We compare features, battery and after-sales — plus the cashback you get on each through CouponMinty.",
    author: "Aditya Rao",
    date: "Mar 15, 2026",
    read: "6 min",
    tag: "Tech",
  },
];

const Blog = () => (
  <main className="min-h-screen bg-background">
    <Navbar />

    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container relative py-20 lg:py-24">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
          CouponMinty Blog
        </span>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          Smart savings, real <span className="text-accent">money tips</span> & tech buying guides.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75">
          Expert articles on cashback, coupons, e-commerce trends and how to make every rupee count.
        </p>
      </div>
    </section>

    <section className="container py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="group overflow-hidden border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="relative h-44 overflow-hidden bg-hero">
              <div className="absolute inset-0 bg-radial-glow opacity-70" />
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                {p.tag}
              </span>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <User className="h-3.5 w-3.5" /> {p.author}
                </span>
                <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                  Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
          <Link to="/">Back to Home <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    <Footer />
  </main>
);

export default Blog;
