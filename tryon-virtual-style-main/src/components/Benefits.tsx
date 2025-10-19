import { TrendingUp, Package, PlugZap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "+ Conversion",
      description: "L’essayage rassure vos clients et fluidifie la décision d’achat en quelques secondes."
    },
    {
      icon: Package,
      title: "– Retours",
      description: "Moins d’hésitation, moins de retours. Les clients voient la coupe et la taille qui leur correspond."
    },
    {
      icon: PlugZap,
      title: "Plug & Play",
      description: "Compatible Shopify, Magento, CommerceTools. Intégration API ou plugin, selon vos besoins."
    }
  ];

  return (
    <section
      id="benefices"
      className="bg-brand-bg px-4 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2>Moins d’hésitation, moins de retours.</h2>
          <p className="mt-4 text-brand-muted">
            Les bénéfices TryOn se mesurent rapidement : conversions en hausse, retours en baisse, satisfaction durable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex h-full flex-col gap-4 rounded-[1.25rem] border border-brand-neutral bg-white/70 p-8 shadow-[var(--shadow-soft)] transition duration-200 hover:translate-y-[-4px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-neutral bg-brand-bg text-brand-muted">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-text">{benefit.title}</h3>
                <p className="text-brand-muted">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
