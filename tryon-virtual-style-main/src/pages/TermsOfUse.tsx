import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Conditions d'utilisation</h1>
            <p className="text-muted-foreground">
              Les règles encadrant l'accès et l'utilisation de la plateforme TryOn par les marques partenaires.
            </p>
          </header>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Objet du service</h2>
            <p className="text-muted-foreground">
              TryOn fournit une solution d'essayage virtuel permettant d'améliorer l'expérience d'achat en ligne et le taux de
              conversion des boutiques partenaires.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Engagements des utilisateurs</h2>
            <p className="text-muted-foreground">
              Les partenaires s'engagent à fournir des informations exactes, à respecter les droits des utilisateurs finaux et à
              utiliser la solution conformément aux lois en vigueur.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Responsabilités</h2>
            <p className="text-muted-foreground">
              TryOn assure la disponibilité de la plateforme et met en œuvre les mesures nécessaires pour garantir la sécurité
              des données et la maintenance du service.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Résiliation</h2>
            <p className="text-muted-foreground">
              Chaque partie peut mettre fin au contrat moyennant un préavis de 30 jours. Les obligations liées à la
              confidentialité et à la protection des données survivent à la résiliation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
