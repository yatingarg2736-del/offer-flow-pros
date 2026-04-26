import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <div className="bg-background min-h-screen">
      <div className="bg-hero py-16 text-primary-foreground">
        <div className="container max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Legal</span>
          <h1 className="mt-3 text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-3 text-white/70">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container max-w-4xl py-16 px-4">

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">01.</span> Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CouponMinty collects information you provide directly to us, including your email address when you sign up for deal alerts, subscribe to our newsletter, or contact us through our website. We also collect usage data such as pages visited, deals clicked, and coupons copied to improve your experience.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">02.</span> How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Send you exclusive deals, coupons and cashback offers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Personalise your deal recommendations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Improve our website and services
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Send promotional emails (you can unsubscribe anytime)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Respond to your queries and support requests
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">03.</span> Affiliate Disclosure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CouponMinty participates in affiliate marketing programs with 1,500+ brands including Amazon, Flipkart, Myntra, Nykaa, MakeMyTrip and more. When you click our links and make a purchase we may earn a commission at no extra cost to you. This helps us keep CouponMinty free for all users.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">04.</span> Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies to remember your preferences, track affiliate referrals and improve your browsing experience. You can disable cookies in your browser settings at any time, however this may affect some features of our website.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">05.</span> Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We take reasonable measures to protect your personal information from unauthorized access, use or disclosure. Your data is stored securely and we never sell your personal information to third parties.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">06.</span> Your Rights
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Request access to your personal data
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Request deletion of your personal data
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Unsubscribe from marketing emails anytime
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Opt out of cookies
            </li>
          </ul>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">07.</span> Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For any questions about this Privacy Policy please contact us at:
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-primary">CouponMinty Technologies Pvt Ltd</p>
            <p className="text-muted-foreground">A2 405, Aangan Gurgaon by Adani, Pataudi Rd</p>
            <p className="text-muted-foreground">Sector 89A, Gurugram, Haryana 122505</p>
            <a href="mailto:contact@couponminty.com" className="text-accent font-medium hover:underline">
              contact@couponminty.com
            </a>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;