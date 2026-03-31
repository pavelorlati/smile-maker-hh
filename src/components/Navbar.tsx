import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Team", href: "#team" },
  { label: "Patientenstimmen", href: "#bewertungen" },
  { label: "Kontakt", href: "#kontakt" },
];

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="/" className="flex flex-col">
          <span className="text-xl font-display font-bold text-primary leading-tight">Dr. Negar Ajoudani</span>
          <span className="text-[11px] font-body text-muted-foreground tracking-wide">Kieferorthopädie Bergedorf</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+49407245241"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            040 7 24 52 41
          </a>
          <Button asChild className="rounded-full">
            <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
              Termin vereinbaren
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+49407245241" className="flex items-center gap-2 text-sm font-semibold text-primary py-2">
              <Phone className="h-4 w-4" />
              040 7 24 52 41
            </a>
            <Button asChild className="w-full rounded-full">
              <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Termin vereinbaren
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
