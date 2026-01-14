import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import WhyNofoSection from "@/components/WhyNofoSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <WhyNofoSection />
      <SustainabilitySection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
