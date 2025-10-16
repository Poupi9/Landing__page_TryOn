import { Link } from "react-router-dom";

import logoImage from "@/assets/logo-tryon.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground">TryOn</span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-utilisation" className="hover:text-primary transition-colors">
              Conditions d'utilisation
            </Link>
            <Link to={{ pathname: "/", hash: "#contact" }} className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TryOn. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
