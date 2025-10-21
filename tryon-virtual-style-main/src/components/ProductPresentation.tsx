const productImageBase = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab";
const productImageParams = "auto=format&fit=crop";

const ProductPresentation = () => {
  return (
    <section
      id="experience"
      className="bg-[#1a1a1a] px-4 py-24"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        <div className="w-full max-w-2xl">
          <div className="rounded-[1rem] border border-white/10 bg-white/5 px-6 py-6 text-center text-sm text-white/80 shadow-[var(--shadow-soft)]">
            <p className="text-base font-medium text-white">Un plugin invisible, mais inoubliable.</p>
            <p className="mt-2">Essayage morphologique, rendu fidèle, intégration en 10 jours ouvrés.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-white">Une expérience qui respecte votre identité.</h2>
          <p className="text-xl text-white/80">
            Le try-on s’intègre sans bruit. Vos clients se voient, vous convertissez — sans dénaturer votre marque.
            Notre équipe ajuste l’interface pour épouser vos guidelines et vos parcours.
          </p>
          <ul className="space-y-4 text-white/70">
            <li className="flex flex-col items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-medium text-white">Widget épuré, fond clair</p>
                <p>Respecte vos palettes existantes et se fond dans vos templates.</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-medium text-white">Parcours pensé pour la conversion</p>
                <p>Bouton d’essayage contextuel, fiche produit préservée, analytics intégrés.</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-medium text-white">Accompagnement clé en main</p>
                <p>Onboardings courts, SLA premium, support multilingue pour vos équipes.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] border border-brand-neutral bg-white shadow-[var(--shadow-soft)]">
          <div className="flex flex-col gap-6 p-6">
            <div className="overflow-hidden rounded-2xl bg-brand-neutral/20">
              <img
                src={`${productImageBase}?${productImageParams}&w=900&q=80`}
                srcSet={`${productImageBase}?${productImageParams}&w=600&q=80 600w, ${productImageBase}?${productImageParams}&w=900&q=80 900w, ${productImageBase}?${productImageParams}&w=1200&q=80 1200w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Présentation produit TryOn - Wine With Me Jacket"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-6 text-left">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-muted">Wine with me ?</p>
                <h3 className="text-3xl font-semibold text-brand-text">Jacket</h3>
                <p className="text-lg font-medium text-brand-text">€129,90 <span className="text-sm text-brand-muted">taxes incluses.</span></p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-wide text-brand-text">Taille</p>
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                  {"XS S M L XL".split(" ").map((size) => (
                    <span
                      key={size}
                      className={`rounded-full border border-brand-neutral px-4 py-2 font-medium ${size === "XS" ? "bg-brand-text text-brand-bg" : "text-brand-text"}`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full rounded-full bg-brand-text px-6 py-3 text-base font-semibold text-brand-bg">
                  Ajouter au panier
                </button>
                <button className="w-full rounded-full border border-brand-neutral px-6 py-3 text-base font-semibold text-brand-text">
                  Acheter maintenant
                </button>
                <button className="w-full rounded-full border border-dashed border-brand-neutral px-6 py-3 text-base font-semibold text-brand-text">
                  Essayer - TryOn
                </button>
              </div>
              <div className="space-y-2 text-sm text-brand-muted">
                <p>Expédition</p>
                <p>Guide des tailles</p>
                <p>Conseils d’entretien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
