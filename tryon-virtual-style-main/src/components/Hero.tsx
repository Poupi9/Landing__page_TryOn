import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logoTryon from "@/assets/titre-tryon.png";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Réinventez l'expérience d'achat",
      highlight: "avec l'essayage virtuel",
      description:
        "Intégrez en un clic notre solution d'essayage virtuel et offrez à vos clients une expérience shopping immersive et innovante.",
      cta: "Participer à l'aventure",
      videoLabel: "Vidéo de présentation du produit"
    },
    en: {
      title: "Reinvent the shopping experience",
      highlight: "with virtual try-on",
      description:
        "Add our virtual fitting solution in just one click and offer your customers an immersive, innovative shopping journey.",
      cta: "Join the journey",
      videoLabel: "Product presentation video"
    }
  } as const;

  const t = content[language];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={logoTryon} 
            alt="TryOn" 
            className="h-24 md:h-32 object-contain"
          />
        </div>
        
        {/* Titre principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            {t.title}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.highlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t.description}</p>
        </div>

        {/* CTA */}
        <div className="pt-8 w-full">
          <Button variant="hero" size="xl" className="w-full">
            {t.cta}
          </Button>
        </div>

        {/* Video placeholder */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-primary" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground font-medium">{t.videoLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
