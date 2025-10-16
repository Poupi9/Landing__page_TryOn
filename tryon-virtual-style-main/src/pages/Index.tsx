import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductPresentation from "@/components/ProductPresentation";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductPresentation />
        <SocialProof />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
