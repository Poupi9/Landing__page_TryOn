import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoTryon from "@/assets/titre-tryon.png";

const navLinks = [
  { hash: "#accueil", label: "Accueil" },
  { hash: "#experience", label: "Intégration" },
  { hash: "#benefices", label: "Bénéfices" },
  { hash: "#preuves", label: "Références" },
  { hash: "#technologie", label: "Technologie" },
  { hash: "#contact", label: "Contact", isPrimary: true }
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur border-b border-brand-neutral/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-semibold text-brand-text"
        >
          <img
            src={logoTryon}
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="h-9 w-auto object-contain md:h-10"
          />
          <span className="sr-only">Aller à l'accueil TryOn</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: "/", hash: link.hash }}
              onClick={handleLinkClick}
              className={`text-sm font-medium transition-colors ${
                link.isPrimary
                  ? "px-4 py-2 rounded-full bg-brand-accent text-brand-bg shadow-sm hover:bg-[#233455]"
                  : "text-brand-muted hover:text-brand-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-brand-text hover:bg-brand-neutral/40 transition-colors"
          aria-label="Ouvrir le menu de navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="md:hidden border-t border-brand-neutral bg-brand-bg/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                to={{ pathname: "/", hash: link.hash }}
                onClick={handleLinkClick}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  link.isPrimary
                    ? "bg-brand-accent text-brand-bg hover:bg-[#233455]"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-neutral/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
