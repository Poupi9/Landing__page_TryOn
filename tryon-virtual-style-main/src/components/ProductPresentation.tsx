import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductPresentation = () => {
  const { language } = useLanguage();

  type Feature = {
    icon: string;
    title: string;
    description: string;
    accent: string;
  };

  const content: Record<"fr" | "en", { badge: string; title: string; description: ReactNode; features: Feature[] }> = {
    fr: {
      badge: "Une intégration ultra-simple",
      title: "Un plugin léger, un impact puissant",
      description: (
        <>
          TryOn s'intègre en quelques minutes sur votre boutique en ligne. Un simple bouton{" "}
          <span className="font-semibold text-accent">"ESSAYER"</span>{" "}
          sur chaque fiche produit permet à vos clients de se visualiser directement avec vos vêtements, où qu'ils soient.
        </>
      ),
      features: [
        {
          icon: "⚡",
          title: "Installation rapide",
          description: "Intégration en moins de 5 minutes sur votre site e-commerce",
          accent: "bg-primary/10"
        },
        {
          icon: "🎯",
          title: "Précision IA",
          description: "Notre moteur IA offre un rendu réaliste et personnalisé",
          accent: "bg-accent/10"
        },
        {
          icon: "📱",
          title: "Multi-plateforme",
          description: "Compatible desktop, mobile et tablette pour tous vos clients",
          accent: "bg-primary/10"
        }
      ]
    },
    en: {
      badge: "Lightning-fast integration",
      title: "A lightweight plugin, powerful results",
      description: (
        <>
          TryOn connects to your online store in just a few minutes. A simple{" "}
          <span className="font-semibold text-accent">"TRY ON"</span>{" "}
          button on every product page lets shoppers instantly see themselves wearing your collections, wherever they are.
        </>
      ),
      features: [
        {
          icon: "⚡",
          title: "Quick setup",
          description: "Integrate it with your e-commerce site in under 5 minutes",
          accent: "bg-primary/10"
        },
        {
          icon: "🎯",
          title: "AI precision",
          description: "Our AI engine delivers a realistic and personalised rendering",
          accent: "bg-accent/10"
        },
        {
          icon: "📱",
          title: "Multi-platform",
          description: "Desktop, mobile and tablet compatible for every customer",
          accent: "bg-primary/10"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <Sparkles className="w-5 h-5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.description}</p>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${feature.accent} flex items-center justify-center mb-4 mx-auto`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
