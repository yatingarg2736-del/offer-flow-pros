import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blogPosts";
import { withUtm } from "@/lib/affiliate";

const logoFor = (url: string) => {
  try {
    const domain = new URL(url).hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  } catch {
    return "";
  }
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="container py-24 text-center">
          <h1 className="text-3xl font-extrabold text-primary">Article not found</h1>
          <p className="mt-3 text-muted-foreground">The post you are looking for does not exist or has been moved.</p>
          <Button asChild className="mt-6 bg-accent-gradient text-accent-foreground hover:opacity-90">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </section>
        <Footer />
      </main>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const recommended = related.length > 0 ? related : fallback;

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | CouponMinty Blog`}
        description={post.excerpt}
        canonical={`https://www.couponminty.com/blog/${post.slug}`}
        image={post.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          author: { "@type": "Person", name: post.author },
          datePublished: post.date,
          articleSection: post.tag,
          mainEntityOfPage: `https://www.couponminty.com/blog/${post.slug}`,
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="bg-secondary/40">
        <div className="container py-12 lg:py-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <span className="mt-6 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            {post.tag}
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.read}</span>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="container -mt-2 py-8">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-secondary shadow-elegant">
          <img
            src={post.image}
            alt={post.title}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      {/* CONTENT */}
      <article className="container max-w-3xl pb-12">
        <p className="text-lg font-medium leading-relaxed text-foreground/90">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {post.looks && post.looks.length > 0 && (
          <div className="mt-14 space-y-16">
            {post.looks.map((look, idx) => (
              <div
                key={look.number}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary shadow-elegant">
                  <img
                    src={look.image}
                    alt={`${look.name} on the Met Gala 2026 re
