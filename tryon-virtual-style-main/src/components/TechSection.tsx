import { Brain, Gauge, Plug } from "lucide-react";

const TechSection = () => {
  const items = [
    {
      icon: Brain,
      title: "Try-on IA réaliste",
      description: "Moteur ComfyUI optimisé maison pour restituer textures et tombés sans artefacts."
    },
    {
      icon: Gauge,
      title: "Reco taille morphologique",
      description: "Analyse morpho, historique d’achats et tableaux de tailles pour une recommandation fiable."
    },
    {
      icon: Plug,
      title: "Intégration rapide",
      description: "Connecteurs Shopify, Magento, Prestashop et API REST pour architectures headless."
    }
  ];

  return (
    <section
      id="technologie"
      className="bg-[#FAF9F7] px-4 py-24"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2>Une technologie invisible, au service de la justesse.</h2>
          <p className="text-brand-muted">
            Infrastructure sécurisée, données hébergées en Europe, conformité RGPD by design.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-[1.25rem] border border-brand-neutral bg-brand-bg p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-neutral bg-white text-brand-muted">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text">{item.title}</h3>
                <p className="text-brand-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
