import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative bg-brand-bg px-4 pb-36 pt-24 lg:pt-28"
    >
      <div className="max-w-6xl mx-auto grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="inline-flex items-center rounded-full border border-brand-neutral/70 px-4 py-1 text-sm tracking-wide text-brand-muted">
            Pensé pour les équipes e-commerce exigeantes
          </p>
          <h1>
            L’essayage virtuel, pensé pour les marques exigeantes.
          </h1>
          <p className="text-xl text-brand-muted max-w-xl">
            Une technologie discrète qui révèle l’essentiel : la justesse, la conversion, l’expérience. Vos clients se voient, vous gardez la main sur votre image.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="xl" asChild>
              <a href="#contact">Demander une démo</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#experience">Voir l’intégration</a>
            </Button>
          </div>
          <p className="text-sm text-brand-muted/80">
            Sans code lourd, compatible Shopify, Magento et plateformes headless.
          </p>
        </div>

        <div className="relative">
          {/* Image réaliste pour ancrer le produit dans un univers premium */}
          <div className="relative overflow-hidden rounded-[1.25rem] border border-brand-neutral bg-white shadow-[var(--shadow-soft)]">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
              alt="Interface TryOn intégrée sur une fiche produit sobre"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-6 rounded-[1rem] border border-brand-neutral bg-brand-bg px-6 py-4 text-sm text-brand-muted shadow-[var(--shadow-soft)]">
            <p className="font-medium text-brand-text">Un plugin invisible, mais inoubliable.</p>
            <p>Essayage morphologique, rendu fidèle, intégration en 10 jours ouvrés.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
