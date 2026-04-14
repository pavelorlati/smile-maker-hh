import { useState } from "react";
import { Phone, Calendar, Instagram, X } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const FloatingPhone = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setOpen(false)} />
      )}

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
        {/* Expanded menu */}
        <div
          className={`flex flex-col gap-2 bg-card border border-border rounded-l-lg shadow-md p-3 transition-all duration-300 ${
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <a
            href="tel:+49407245241"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-secondary transition-colors text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            Anrufen
          </a>
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-secondary transition-colors text-sm font-medium text-foreground"
          >
            <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
            Termin buchen
          </a>
          <a
            href="https://www.instagram.com/kieferorthopaedie.bergedorf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md hover:bg-secondary transition-colors text-sm font-medium text-foreground"
          >
            <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
            Instagram
          </a>
        </div>

        {/* Tab button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary text-primary-foreground px-2 py-6 rounded-l-md shadow-md hover:bg-primary/90 transition-colors writing-vertical"
          aria-label="Kontakt öffnen"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase">
            {open ? "✕" : "Kontakt"}
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingPhone;
