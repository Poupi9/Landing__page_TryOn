import { TrendingDown, Heart, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Réduction des retours",
      description: "Diminuez significativement les retours clients liés aux problèmes de taille et d'ajustement.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Heart,
      title: "Satisfaction client optimale",
      description: "Améliorez l'expérience d'achat et le taux de conversion grâce à la visualisation en temps réel.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Sparkles,
      title: "Innovation différenciante",
      description: "Démarquez-vous de la concurrence avec une expérience shopping immersive et moderne.",
      gradient: "from-accent/20 to-primary/5"
    }
  ];

  return (
    <section
      id="avantages"
      className="py-20 px-4 bg-background scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi c'est bon pour vous ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des avantages business concrets qui transforment votre boutique en ligne
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
