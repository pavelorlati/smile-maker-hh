import { useState } from "react";
import { Phone, Calendar, Instagram, X } from "lucide-react";

const FloatingPhone = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Options */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-500 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:+49407245241"
          className="flex items-center gap-3 group"
          aria-label="Anrufen"
        >
          <span className="bg-background text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Anrufen
          </span>
          <span
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform duration-200"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Phone className="h-5 w-5" />
          </span>
        </a>

        <a
          href="/kontakt"
          className="flex items-center gap-3 group"
          aria-label="Online Termin"
        >
          <span className="bg-background text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Online Termin
          </span>
          <span
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform duration-200"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Calendar className="h-5 w-5" />
          </span>
        </a>

        <a
          href="https://www.instagram.com/kieferorthopaedie.bergedorf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="Instagram"
        >
          <span className="bg-background text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Instagram
          </span>
          <span
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform duration-200"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Instagram className="h-5 w-5" />
          </span>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center animate-phone-glow transition-transform duration-300 hover:scale-110"
        aria-label="Kontakt öffnen"
        style={{ background: "var(--gradient-primary)" }}
      >
        {open ? (
          <X className="h-7 w-7 md:h-8 md:w-8 text-white transition-transform duration-300" />
        ) : (
          <Phone className="h-7 w-7 md:h-8 md:w-8 text-white transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default FloatingPhone;
