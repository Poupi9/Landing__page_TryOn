import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Prêt à transformer votre boutique ?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Rejoignez les marques innovantes qui révolutionnent l'expérience d'achat 
          de leurs clients avec TryOn.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="cta" size="xl" className="w-full sm:w-auto">
            S'inscrire dès maintenant
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto">
            Demander une démo
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground pt-4">
          🚀 Installation en moins de 5 minutes • Sans engagement • Support dédié
        </p>
      </div>
    </section>
  );
};

export default CTA;
