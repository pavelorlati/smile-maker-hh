import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Behandlung", href: "#behandlung" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-primary">KFO</span>
          <span className="text-sm font-body text-muted-foreground hidden sm:block">
            Kieferorthopädie<br />Bergedorf
          </span>
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
          <a href="tel:+4940123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            040 123 456 789
          </a>
          <Button asChild>
            <a href="#kontakt">Termin vereinbaren</a>
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
            <a href="tel:+4940123456789" className="flex items-center gap-2 text-sm text-muted-foreground py-2">
              <Phone className="h-4 w-4" />
              040 123 456 789
            </a>
            <Button asChild className="w-full">
              <a href="#kontakt" onClick={() => setMobileOpen(false)}>Termin vereinbaren</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
