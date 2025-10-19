import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md space-y-6 text-center">
          <p className="inline-flex rounded-full border border-brand-neutral px-4 py-1 text-sm uppercase tracking-[0.2em] text-brand-muted/70">
            Erreur 404
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Cette page a changé d’adresse.</h1>
          <p className="text-lg text-brand-muted">
            Le contenu que vous cherchez n’existe plus ou a été déplacé. Revenez à l’accueil pour explorer TryOn.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to={{ pathname: "/", hash: "#accueil" }}
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-base font-medium text-brand-bg shadow-[var(--shadow-soft)] transition hover:bg-brand-accent/90"
            >
              Retour à l’accueil
            </Link>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className="inline-flex items-center justify-center rounded-full border border-brand-neutral px-6 py-3 text-base font-medium text-brand-text transition hover:border-brand-accent hover:text-brand-accent"
            >
              Contacter l’équipe
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
