import { Link } from "react-router-dom";

import logoImage from "@/assets/logo-tryon.png";

const Footer = () => {
  return (
    <footer className="border-t border-brand-neutral bg-brand-bg px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold text-brand-text">TryOn</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-muted">
            <Link to="/mentions-legales" className="transition-colors hover:text-brand-text">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="transition-colors hover:text-brand-text">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-utilisation" className="transition-colors hover:text-brand-text">
              Conditions d'utilisation
            </Link>
            <Link to={{ pathname: "/", hash: "#contact" }} className="transition-colors hover:text-brand-text">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-neutral pt-8 text-center text-sm text-brand-muted">
          <p>© {new Date().getFullYear()} TryOn. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
