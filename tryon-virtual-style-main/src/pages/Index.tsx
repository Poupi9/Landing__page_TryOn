import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductPresentation from "@/components/ProductPresentation";
import SocialProof from "@/components/SocialProof";
import DemoSection from "@/components/DemoSection";
import Benefits from "@/components/Benefits";
import TechSection from "@/components/TechSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (location.hash) {
      const target = document.querySelector(location.hash);

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductPresentation />
        <SocialProof />
        <DemoSection />
        <Benefits />
        <TechSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
