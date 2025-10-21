import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative bg-brand-bg px-4 pb-36 pt-24 lg:pt-28"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        <div className="space-y-8 w-full">
          <p className="inline-flex items-center justify-center rounded-full border border-brand-neutral/70 px-4 py-1 text-sm tracking-wide text-brand-muted">
            Pensé pour les équipes e-commerce exigeantes
          </p>
          <h1 className="mx-auto max-w-3xl">
            L’essayage virtuel, pensé pour les marques exigeantes.
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-brand-muted">
            Une technologie discrète qui révèle l’essentiel : la justesse, la conversion, l’expérience. Vos clients se voient, vous gardez la main sur votre image.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

        <div className="w-full">
          <div className="aspect-video w-full overflow-hidden rounded-[1.25rem] border border-dashed border-brand-neutral/60 bg-brand-bg/60 backdrop-blur">
            <div className="flex h-full w-full items-center justify-center px-8 text-center text-base font-medium text-brand-muted">
              Zone dédiée à votre vidéo de présentation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
