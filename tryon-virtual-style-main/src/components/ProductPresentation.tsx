import { Sparkles } from "lucide-react";

const ProductPresentation = () => {
  return (
    <section id="fonctionnalites" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Une intégration ultra-simple</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Un plugin léger, un impact puissant
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TryOn s'intègre en quelques minutes sur votre boutique en ligne. 
            Un simple bouton <span className="font-semibold text-accent">"ESSAYER"</span> sur 
            chaque fiche produit permet à vos clients de se visualiser directement avec vos vêtements, 
            où qu'ils soient.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Installation rapide</h3>
              <p className="text-muted-foreground text-sm">
                Intégration en moins de 5 minutes sur votre site e-commerce
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Précision IA</h3>
              <p className="text-muted-foreground text-sm">
                Notre moteur IA offre un rendu réaliste et personnalisé
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Multi-plateforme</h3>
              <p className="text-muted-foreground text-sm">
                Compatible desktop, mobile et tablette pour tous vos clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
