import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Politique de confidentialité</h1>
            <p className="text-muted-foreground">
              Découvrez comment TryOn collecte, utilise et protège vos données personnelles.
            </p>
          </header>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Données collectées</h2>
            <p className="text-muted-foreground">
              Nous collectons uniquement les informations nécessaires à la mise en place de la solution TryOn : nom, prénom,
              adresse email professionnelle et données relatives à votre boutique en ligne.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Utilisation des données</h2>
            <p className="text-muted-foreground">
              Ces informations nous permettent de paramétrer votre compte, d'assurer le suivi de la solution et de vous
              accompagner dans votre réussite.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Durée de conservation</h2>
            <p className="text-muted-foreground">
              Les données sont conservées pendant toute la durée de votre contrat, puis archivées pendant 3 ans avant suppression
              définitive.
            </p>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-foreground">Vos droits</h2>
            <p className="text-muted-foreground">
              Conformément au RGPD, vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données
              en écrivant à privacy@tryon.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
