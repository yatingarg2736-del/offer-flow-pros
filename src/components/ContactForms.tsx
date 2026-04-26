import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Megaphone, TrendingUp, Mail, MapPin } from "lucide-react";

const advertiserSchema = z.object({
  company: z.string().trim().min(2, "Company name required").max(100),
  name: z.string().trim().min(2, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  website: z.string().trim().min(3, "Website required").max(255),
  message: z.string().trim().max(1000).optional(),
});

const publisherSchema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  channel: z.string().trim().min(2, "Channel/platform required").max(120),
  audience: z.string().trim().min(1, "Audience size required").max(40),
  message: z.string().trim().max(1000).optional(),
});

type Tab = "advertiser" | "publisher";

const Field = ({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-sm font-semibold text-primary">{label}</Label>
    {children}
    {error && <p className="text-xs font-medium text-destructive">{error}</p>}
  </div>
);

const ContactForms = () => {
  const [tab, setTab] = useState<Tab>("advertiser");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const schema = tab === "advertiser" ? advertiserSchema : publisherSchema;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/meevdjez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form_type: tab }),
      });
      if (response.ok) {
        setErrors({});
        toast({
          title: tab === "advertiser" ? "Partnership request received!" : "Publisher application received!",
          description: "Our team will reach out within 1 business day.",
        });
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      toast({ title: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="contact" className="bg-hero py-20 text-primary-foreground">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Work With Us</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Grow with CouponMinty</h2>
          <p className="mt-3 text-white/75">Whether you&apos;re a brand looking for performance marketing or a creator monetising your audience, let&apos;s talk.</p>
          <div className="mt-6 grid gap-3 text-left text-sm text-white/80 sm:grid-cols-2">
            <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:contact@couponminty.com" className="hover:text-accent">contact@couponminty.com</a>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>A2 405, Aangan Gurgaon by Adani, Pataudi Rd, Sector 89A, Gurugram, Haryana 122505</span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-2 shadow-elegant">
          <div className="grid grid-cols-2 gap-1 rounded-2xl bg-secondary p-1">
            {([
              { k: "advertiser", label: "Advertiser", icon: Megaphone },
              { k: "publisher", label: "Publisher", icon: TrendingUp },
            ] as const).map((t) => (
              <button
                key={t.k}
                type="button"
                onClick={() => { setTab(t.k); setErrors({}); }}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                  tab === t.k ? "bg-accent-gradient text-accent-foreground shadow-glow" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 p-6 sm:p-8 md:grid-cols-2">
            {tab === "advertiser" ? (
              <>
                <Field id="company" label="Company name" error={errors.company}><Input className="text-gray-900" id="company" name="company" maxLength={100} placeholder="Acme Pvt Ltd" /></Field>
                <Field id="name" label="Your name" error={errors.name}><Input className="text-gray-900" id="name" name="name" maxLength={80} placeholder="Priya Sharma" /></Field>
                <Field id="email" label="Work email" error={errors.email}><Input className="text-gray-900" id="email" name="email" type="email" maxLength={255} placeholder="priya@acme.com" /></Field>
                <Field id="website" label="Website" error={errors.website}><Input className="text-gray-900" id="website" name="website" maxLength={255} placeholder="thrillophilia.com" /></Field>
                <div className="md:col-span-2">
                  <Field id="message" label="Tell us about your goals" error={errors.message}>
                    <Textarea className="text-gray-900" id="message" name="message" maxLength={1000} placeholder="Categories, regions, monthly budget…" rows={4} />
                  </Field>
                </div>
              </>
            ) : (
              <>
                <Field id="name" label="Your name" error={errors.name}><Input className="text-gray-900" id="name" name="name" maxLength={80} placeholder="Rahul Mehta" /></Field>
                <Field id="email" label="Email" error={errors.email}><Input className="text-gray-900" id="email" name="email" type="email" maxLength={255} placeholder="you@channel.com" /></Field>
                <Field id="channel" label="Channel / platform" error={errors.channel}><Input className="text-gray-900" id="channel" name="channel" maxLength={120} placeholder="YouTube, Instagram, Blog…" /></Field>
                <Field id="audience" label="Audience size" error={errors.audience}><Input className="text-gray-900" id="audience" name="audience" maxLength={40} placeholder="e.g. 250K followers" /></Field>
                <div className="md:col-span-2">
                  <Field id="message" label="About your audience" error={errors.message}>
                    <Textarea className="text-gray-900" id="message" name="message" maxLength={1000} placeholder="Niche, geography, content type…" rows={4} />
                  </Field>
                </div>
              </>
            )}
            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                {tab === "advertiser" ? "Request Partnership" : "Apply as Publisher"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;