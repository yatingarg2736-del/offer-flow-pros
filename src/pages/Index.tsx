import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Stores from "@/components/Stores";
import Coupons from "@/components/Coupons";
import Travel from "@/components/Travel";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import AboutTeam from "@/components/AboutTeam";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">CouponMinty — Coupons, Cashback & Travel Deals</h1>
      <Hero />
      <Stats />
      <Stores />
      <Coupons />
      <Travel />
      <HowItWorks />
      <Partners />
      <AboutTeam />
      <ContactForms />
      <Footer />
    </main>
  );
};

export default Index;
