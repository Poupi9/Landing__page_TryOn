import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Mentions légales</h1>
            <p className="text-muted-foreground">
              Informations relatives à l'éditeur, à l'hébergement et à la propriété intellectuelle du site TryOn.
            </p>
          </header>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Éditeur du site</h2>
            <p className="text-muted-foreground">
              TryOn, société spécialisée dans les expériences d'essayage virtuel, 12 rue de l'Innovation, 75000 Paris, France.
            </p>
            <p className="text-muted-foreground">SIRET : 123 456 789 00010 • Email : contact@tryon.com</p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par CloudScale, 20 avenue du Cloud, 69000 Lyon, France.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus, illustrations et marques présents sur le site TryOn sont protégés. Toute reproduction est
              soumise à autorisation écrite préalable.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
