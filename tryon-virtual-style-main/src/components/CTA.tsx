import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section
      id="contact"
      className="border-t border-brand-neutral bg-[#FAF9F7] px-4 py-24"
    >
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h2>Essayez TryOn. Pour une expérience qui se voit — et qui se ressent.</h2>
        <p className="text-brand-muted">
          Contactez-nous pour planifier une démonstration personnalisée et bâtir un pilote sur vos collections phares.
        </p>
        <div className="flex justify-center">
          <Button size="xl" asChild>
            <a href="mailto:contact@tryon.com?subject=Demande%20de%20d%C3%A9mo%20TryOn">Demander une démo</a>
          </Button>
        </div>
        <p className="text-sm text-brand-muted">
          Réponse sous 24 h ouvrées • Hébergement UE • Accompagnement dédié onboarding
        </p>
      </div>
    </section>
  );
};

export default CTA;
