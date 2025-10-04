import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Prêt à transformer votre boutique ?",
      description:
        "Rejoignez les marques innovantes qui révolutionnent l'expérience d'achat de leurs clients avec TryOn.",
      primary: "S'inscrire dès maintenant",
      secondary: "Demander une démo",
      footnote: "🚀 Installation en moins de 5 minutes • Sans engagement • Support dédié"
    },
    en: {
      title: "Ready to transform your store?",
      description:
        "Join the innovative brands reinventing their customers' shopping experience with TryOn.",
      primary: "Sign up now",
      secondary: "Request a demo",
      footnote: "🚀 Set up in under 5 minutes • No commitment • Dedicated support"
    }
  } as const;

  const t = content[language];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t.title}</h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="cta" size="xl" className="w-full sm:w-auto">
            {t.primary}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto">
            {t.secondary}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-4">{t.footnote}</p>
      </div>
    </section>
  );
};

export default CTA;
