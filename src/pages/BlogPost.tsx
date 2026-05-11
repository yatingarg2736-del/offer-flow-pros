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
        canonical={`https://couponminty.com/blog/${post.slug}`}
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
          mainEntityOfPage: `https://couponminty.com/blog/${post.slug}`,
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
            className="h-full w-full object-cover"
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
                    alt={`${look.name} on the Met Gala 2026 red carpet, ${look.wearing}`}
                    width={768}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-4 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                    {look.name} · {look.number}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{look.number}</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-primary md:text-3xl">{look.name}</h3>
                  <p className="mt-2 text-base italic text-muted-foreground">{look.wearing}</p>
                  <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground/85">
                    {look.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-5 rounded-r-lg border-l-[3px] border-accent bg-accent/5 px-5 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Verdict</p>
                    <p className="mt-1 text-sm italic text-foreground/90">{look.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {post.pullQuote && (
          <blockquote className="mt-16 border-l-4 border-accent bg-secondary/40 px-6 py-6 text-xl font-semibold italic leading-snug text-primary md:text-2xl">
            "{post.pullQuote}"
          </blockquote>
        )}

        {post.outro && post.outro.length > 0 && (
          <div className="mt-12 space-y-5 text-base leading-relaxed text-foreground/85">
            {post.outro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {post.products && post.products.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">Featured products in this guide</p>
            <div className="mt-4 space-y-3">
              {post.products.map((p) => (
                <a
                  key={p.name}
                  href={withUtm(p.url, `blog-${post.slug}`, p.name.toLowerCase().replace(/\s+/g, "-"))}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <img src={logoFor(p.url)} alt="" width={20} height={20} className="h-5 w-5 rounded" />
                    <span className="text-sm font-semibold text-primary">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-bold text-foreground">{p.price}</span>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 font-bold text-accent">{p.cb}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {post.highlights && post.highlights.length > 0 && (
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">Key takeaways</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              {post.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* RELATED */}
      <section className="bg-secondary/40 py-16">
        <div className="container">
          <h2 className="text-2xl font-extrabold text-primary md:text-3xl">More articles you may like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recommended.map((p) => (
              <Card key={p.slug} className="group flex flex-col overflow-hidden border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <Link to={`/blog/${p.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={p.image} alt={p.title} width={1280} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
                <CardContent className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{p.tag}</span>
                  <h3 className="mt-2 text-base font-bold text-primary group-hover:text-accent">
                    <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <Button asChild variant="ghost" size="sm" className="mt-auto self-start text-accent hover:text-accent">
                    <Link to={`/blog/${p.slug}`}>Read <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
