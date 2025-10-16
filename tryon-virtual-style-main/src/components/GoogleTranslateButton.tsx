import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const TRANSLATE_SCRIPT_ID = "google-translate-script";
const TRANSLATE_ELEMENT_ID = "google_translate_element";
const LANGUAGE_CHANGE_EVENT = "google-translate-language-change";

let translateLoaderPromise: Promise<void> | null = null;

type TranslateLanguage = "fr" | "en";

type TranslateElementConstructor = new (
  options: {
    pageLanguage: string;
    includedLanguages?: string;
    autoDisplay?: boolean;
    layout?: unknown;
  },
  element: string,
) => unknown;

type TranslateNamespace = {
  TranslateElement?: TranslateElementConstructor & {
    InlineLayout?: Record<string, unknown>;
  };
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: TranslateNamespace;
    };
  }
}

interface GoogleTranslateButtonProps {
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  showLabel?: boolean;
}

const ensureTranslateContainer = () => {
  if (typeof document === "undefined") {
    return;
  }

  let container = document.getElementById(TRANSLATE_ELEMENT_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = TRANSLATE_ELEMENT_ID;
    container.style.display = "none";
    container.setAttribute("aria-hidden", "true");
    document.body.appendChild(container);
  }
};

const loadGoogleTranslate = () => {
  if (window.google?.translate?.TranslateElement) {
    return Promise.resolve();
  }

  if (!translateLoaderPromise) {
    translateLoaderPromise = new Promise<void>((resolve, reject) => {
      window.googleTranslateElementInit = () => {
        resolve();
      };

      const existingScript = document.getElementById(
        TRANSLATE_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      const handleError = () => {
        translateLoaderPromise = null;
        reject(new Error("Le script Google Translate n'a pas pu être chargé."));
      };

      if (existingScript) {
        existingScript.addEventListener("error", handleError, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.addEventListener("error", handleError, { once: true });
      document.body.appendChild(script);
    }).catch((error) => {
      throw error;
    });
  }

  return translateLoaderPromise!;
};

const getActiveLanguage = (): TranslateLanguage => {
  const languageSelector = document.querySelector<HTMLSelectElement>(
    ".goog-te-combo",
  );

  if (languageSelector?.value === "en") {
    return "en";
  }

  return "fr";
};

const GoogleTranslateButton = ({
  className,
  size = "icon",
  variant = "ghost",
  showLabel = false,
}: GoogleTranslateButtonProps) => {
  const [isReady, setIsReady] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    ensureTranslateContainer();

    let isCancelled = false;

    loadGoogleTranslate()
      .then(() => {
        if (isCancelled) {
          return;
        }

        const translateNamespace = window.google?.translate;
        const TranslateElement = translateNamespace?.TranslateElement;

        if (!TranslateElement) {
          return;
        }

        if (!document.querySelector(".goog-te-combo")) {
          try {
            new TranslateElement(
              {
                pageLanguage: "fr",
                includedLanguages: "en,fr",
                autoDisplay: false,
                layout: TranslateElement?.InlineLayout?.SIMPLE,
              },
              TRANSLATE_ELEMENT_ID,
            );
          } catch (error) {
            console.error("Impossible d'initialiser Google Translate", error);
            return;
          }
        }

        setIsReady(true);
        setIsEnglish(getActiveLanguage() === "en");
      })
      .catch((error) => {
        if (!isCancelled) {
          console.error(error);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const detail = (event as CustomEvent<TranslateLanguage>).detail;
      setIsEnglish(detail === "en");
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    };
  }, []);

  const applyLanguage = (targetLanguage: TranslateLanguage) => {
    if (!isReady) {
      return;
    }

    const languageSelector = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo",
    );

    if (!languageSelector) {
      console.error("La liste déroulante Google Translate est introuvable.");
      return;
    }

    if (languageSelector.value !== targetLanguage) {
      languageSelector.value = targetLanguage;
    }

    languageSelector.dispatchEvent(new Event("change"));
    setIsEnglish(targetLanguage === "en");
    window.dispatchEvent(
      new CustomEvent<TranslateLanguage>(LANGUAGE_CHANGE_EVENT, {
        detail: targetLanguage,
      }),
    );
  };

  const handleLanguageSelect = (value: string) => {
    if (value === "fr" || value === "en") {
      applyLanguage(value);
    }
  };

  const ariaLabel = isEnglish
    ? "Afficher la version française"
    : "Traduire en anglais";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          size={size}
          variant={variant}
          className={cn(
            "relative",
            showLabel ? "gap-2 justify-center rounded-lg" : "rounded-full",
            className,
          )}
          disabled={!isReady}
          aria-label={ariaLabel}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          {showLabel ? (
            <span className="text-sm font-medium">
              Langue
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                {isEnglish ? "Anglais" : "Français"}
              </span>
            </span>
          ) : (
            <span className="sr-only">{ariaLabel}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Langue</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={isEnglish ? "en" : "fr"}
          onValueChange={handleLanguageSelect}
        >
          <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">Anglais</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GoogleTranslateButton;
