import { Users, Zap, Cpu } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "+238",
      label: "testeurs engagés",
      color: "text-primary"
    },
    {
      icon: Zap,
      value: "+382",
      label: "essayages générés",
      color: "text-accent"
    },
    {
      icon: Cpu,
      value: "+1",
      label: "moteur IA sélectionné",
      color: "text-primary"
    }
  ];

  return (
    <section
      id="temoignages"
      className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une technologie testée et validée
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Déjà approuvée par nos utilisateurs, notre solution révolutionne 
            l'expérience d'achat en ligne.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-foreground">
            Une technologie testée, validée et déjà approuvée par nos utilisateurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
