import { Button } from "@/components/ui/button";
import logoTryon from "@/assets/titre-tryon.png";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-secondary/30 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src={logoTryon}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="h-24 md:h-32 object-contain"
          />
        </div>
        
        {/* Titre principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Réinventez l'expérience d'achat
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              avec l'essayage virtuel
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intégrez en un clic notre solution d'essayage virtuel et offrez à vos clients 
            une expérience shopping immersive et innovante.
          </p>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a href="#contact">
              S'inscrire dès maintenant
            </a>
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
            <a href="#fonctionnalites">
              Voir la démo
            </a>
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
              <p className="text-muted-foreground font-medium">Vidéo de présentation du produit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
