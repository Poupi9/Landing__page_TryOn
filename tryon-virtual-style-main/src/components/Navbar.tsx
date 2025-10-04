import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTryon from "@/assets/titre-tryon.png";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#avantages", label: "Pourquoi c'est bon" },
  { href: "#donnees", label: "Données" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleTranslate = () => {
    const { href } = window.location;
    const translatedUrl = `https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(href)}`;
    window.open(translatedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#accueil" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logoTryon} alt="TryOn" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-foreground">TryOn</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" size="sm" onClick={handleTranslate}>
            English
          </Button>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent/20 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <nav className="space-y-2 border-t border-border bg-background px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent/20 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" className="w-full" onClick={handleTranslate}>
              English
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
