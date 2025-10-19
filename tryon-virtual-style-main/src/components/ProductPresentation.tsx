const ProductPresentation = () => {
  return (
    <section
      id="experience"
      className="bg-brand-bg px-4 py-24"
    >
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2>Une expérience qui respecte votre identité.</h2>
          <p className="text-brand-muted text-xl">
            Le try-on s’intègre sans bruit. Vos clients se voient, vous convertissez — sans dénaturer votre marque.
            Notre équipe ajuste l’interface pour épouser vos guidelines et vos parcours.
          </p>
          <ul className="space-y-4 text-brand-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-brand-text">Widget épuré, fond clair</p>
                <p>Respecte vos palettes existantes et se fond dans vos templates.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-brand-text">Parcours pensé pour la conversion</p>
                <p>Bouton d’essayage contextuel, fiche produit préservée, analytics intégrés.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div>
                <p className="font-medium text-brand-text">Accompagnement clé en main</p>
                <p>Onboardings courts, SLA premium, support multilingue pour vos équipes.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] border border-brand-neutral bg-white shadow-[var(--shadow-soft)]">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
            alt="Visualisation d’une cliente utilisant le service d’essayage TryOn"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
