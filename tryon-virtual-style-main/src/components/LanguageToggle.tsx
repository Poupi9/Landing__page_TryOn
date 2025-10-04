import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const label = language === "fr" ? "English" : "Français";
  const ariaLabel =
    language === "fr" ? "Afficher la version anglaise" : "Switch to the French version";

  return (
    <div className="w-full flex justify-end px-4 pt-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2"
        type="button"
        aria-label={ariaLabel}
      >
        <Languages className="w-4 h-4" />
        {label}
      </Button>
    </div>
  );
};

export default LanguageToggle;
