import Hero from "@/components/Hero";
import ProductPresentation from "@/components/ProductPresentation";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductPresentation />
      <SocialProof />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
