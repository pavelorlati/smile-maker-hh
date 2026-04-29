import { useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Team", href: "/team" },
  { label: "Kontakt", href: "/kontakt" },
];

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Dr. Negar Ajoudani – Kieferorthopädie Bergedorf" className="h-16 md:h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+49407245241"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-4 w-4" />
            040 7 24 52 41
          </a>
          <a
            href="https://www.instagram.com/kieferorthopaedie.bergedorf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" />
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
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium transition-colors py-2 ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 py-2">
              <a href="tel:+49407245241" className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" />
                040 7 24 52 41
              </a>
              <a
                href="https://www.instagram.com/kieferorthopaedie.bergedorf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
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
