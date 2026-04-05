import { useState } from "react";
import { Accessibility, X } from "lucide-react";

const AccessibilityInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay for mobile when open */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      <div className="fixed left-4 bottom-6 z-50 flex flex-col-reverse sm:flex-row items-start sm:items-end gap-3">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Barrierefreiheit"
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all flex-shrink-0"
        >
          {open ? <X className="h-5 w-5" /> : <Accessibility className="h-6 w-6" />}
        </button>

        {open && (
          <div className="glass-card rounded-2xl p-4 sm:p-5 shadow-xl animate-fade-in w-[calc(100vw-2rem)] sm:w-auto sm:max-w-xs left-0">
            <h3 className="font-display font-bold text-foreground mb-2 text-sm">♿ Barrierefreier Zugang</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Unser Treppenhaus ist mit einem Fahrstuhl ausgestattet. Menschen mit Behinderung oder eingeschränkter Mobilität können unsere Praxis problemlos erreichen. Wir freuen uns auf Ihren Besuch!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AccessibilityInfo;
