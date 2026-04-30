import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookie-consent-v1";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-sm z-[60] animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-4 md:p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-display font-semibold text-foreground mb-1">
              Cookies & Datenschutz
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Wir verwenden Cookies, um Ihren Besuch auf unserer Website angenehmer zu gestalten. Mehr in unserer{" "}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <button
            onClick={() => handleChoice("declined")}
            aria-label="Schließen"
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 rounded-full text-xs"
            onClick={() => handleChoice("declined")}
          >
            Ablehnen
          </Button>
          <Button
            size="sm"
            className="flex-1 rounded-full btn-brand text-xs"
            onClick={() => handleChoice("accepted")}
          >
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
