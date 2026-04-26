import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Navbar />
    <div className="bg-background min-h-screen">
      <div className="bg-hero py-16 text-primary-foreground">
        <div className="container max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Legal</span>
          <h1 className="mt-3 text-4xl font-extrabold">Terms & Conditions</h1>
          <p className="mt-3 text-white/70">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container max-w-4xl py-16 px-4">

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">01.</span> Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using CouponMinty you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms please do not use our website.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">02.</span> About CouponMinty
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CouponMinty is India's leading coupons and cashback platform. We partner with 1,500+ brands across shopping, travel, food and fashion to bring you the best deals and extra cashback on every purchase. CouponMinty is operated by CouponMinty Technologies Pvt Ltd, registered in India.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">03.</span> Use of Website
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CouponMinty provides coupons, deals and cashback offers for informational purposes. You agree to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Use the website only for lawful purposes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Not misuse or abuse coupon codes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Not attempt to hack or disrupt our services
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Not reproduce our content without permission
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">04.</span> Affiliate Disclosure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CouponMinty participates in affiliate marketing programs. We earn commissions when you click our links and make purchases. This does not affect the price you pay — in fact our exclusive deals often give you extra savings on top of regular prices.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">05.</span> Coupon & Cashback Terms
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Coupons and deals are subject to availability and may expire
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Cashback amounts may vary based on merchant terms
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              CouponMinty is not responsible for rejected coupons
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">→</span>
              Always check expiry dates before using a coupon
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">06.</span> Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on CouponMinty including text, images, logos and graphics is the property of CouponMinty Technologies Pvt Ltd and is protected by copyright laws. You may not reproduce, distribute or use our content without written permission.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">07.</span> Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CouponMinty shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of our website or any deals listed on it. We do not guarantee the accuracy or availability of any deals.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">08.</span> Governing Law
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Gurugram, Haryana.
          </p>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-accent">09.</span> Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For any questions regarding these terms please contact us at:
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

export default Terms;