const demoImageBase = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab";
const demoImageParams = "auto=format&fit=crop";

const DemoSection = () => {
  return (
    <section
      id="demonstration"
      className="bg-brand-bg px-4 py-24"
    >
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        <div className="space-y-4">
          <h2>Voir TryOn dans une fiche produit.</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Une interface claire, sans rupture graphique. Vos visuels restent au premier plan, notre technologie travaille en arrière-plan.
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-brand-neutral bg-white shadow-[var(--shadow-soft)]">
          <img
            src={`${demoImageBase}?${demoImageParams}&w=1600&q=80`}
            srcSet={`${demoImageBase}?${demoImageParams}&w=800&q=80 800w, ${demoImageBase}?${demoImageParams}&w=1200&q=80 1200w, ${demoImageBase}?${demoImageParams}&w=1600&q=80 1600w`}
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt="Aperçu du module TryOn sur une fiche produit e-commerce"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
