import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoTryon from "@/assets/titre-tryon.png";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#avantages", label: "Avantages" },
  { href: "#contact", label: "Contact", isPrimary: true }
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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a
          href="#accueil"
          className="flex items-center gap-3 text-lg font-semibold text-foreground"
        >
          <img
            src={logoTryon}
            alt="TryOn"
            className="h-9 w-auto object-contain md:h-10"
          />
          <span className="sr-only">Aller à l'accueil TryOn</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-sm font-medium transition-colors ${
                link.isPrimary
                  ? "px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-primary/10 transition-colors"
          aria-label="Ouvrir le menu de navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                  link.isPrimary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
