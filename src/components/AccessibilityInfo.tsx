import { useState } from "react";
import { Accessibility, X } from "lucide-react";

const AccessibilityInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-4 bottom-24 z-50 flex items-end gap-3">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Barrierefreiheit"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all"
      >
        {open ? <X className="h-5 w-5" /> : <Accessibility className="h-6 w-6" />}
      </button>

      {open && (
        <div className="glass-card rounded-2xl p-5 max-w-xs shadow-xl animate-fade-in">
          <h3 className="font-display font-bold text-foreground mb-2 text-sm">♿ Barrierefreier Zugang</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Unser Treppenhaus ist mit einem Fahrstuhl ausgestattet. Menschen mit Behinderung oder eingeschränkter Mobilität können unsere Praxis problemlos erreichen. Wir freuen uns auf Ihren Besuch!
          </p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityInfo;
