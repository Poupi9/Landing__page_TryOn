import logoImage from "@/assets/logo-tryon.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const content = {
    fr: {
      links: [
        { href: "#", label: "Mentions légales" },
        { href: "#", label: "Politique de confidentialité" },
        { href: "#", label: "Conditions d'utilisation" },
        { href: "#", label: "Contact" }
      ],
      rights: `© ${currentYear} TryOn. Tous droits réservés.`
    },
    en: {
      links: [
        { href: "#", label: "Legal notice" },
        { href: "#", label: "Privacy policy" },
        { href: "#", label: "Terms of use" },
        { href: "#", label: "Contact" }
      ],
      rights: `© ${currentYear} TryOn. All rights reserved.`
    }
  } as const;

  const t = content[language];

  return (
    <footer className="py-12 px-4 bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="TryOn Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground">TryOn</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {t.links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
