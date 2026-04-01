import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Dr. Negar Ajoudani" className="h-14 w-auto mb-4 brightness-0 invert opacity-80" />
            <p className="text-sm leading-relaxed text-background/60">
              Moderne Kieferorthopädie für die ganze Familie in Hamburg-Bergedorf.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/C1Nj8u9JsQ2931EQ7" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Bergedorfer Schloßstraße 18<br />21029 Hamburg
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+49407245241" className="hover:text-background transition-colors">+49 (0) 40 7 24 52 41</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="hover:text-background transition-colors">praxis@kieferorthopaedie-bergedorf.de</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Schnellzugriff</h4>
            <div className="space-y-2 text-sm">
              <Link to="/leistungen" className="block hover:text-background transition-colors">Leistungen</Link>
              <Link to="/ueber-uns" className="block hover:text-background transition-colors">Über uns</Link>
              <Link to="/team" className="block hover:text-background transition-colors">Team</Link>
              <Link to="/bewertungen" className="block hover:text-background transition-colors">Bewertungen</Link>
              <Link to="/kontakt" className="block hover:text-background transition-colors">Kontakt</Link>
              <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-background transition-colors">Online-Termin buchen</a>
              <a href="https://maps.app.goo.gl/FjZQWMJLnDC7KxXg8" target="_blank" rel="noopener noreferrer" className="block hover:text-background transition-colors">Anfahrt</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Rechtliches</h4>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block hover:text-background transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block hover:text-background transition-colors">Datenschutzerklärung</Link>
            </div>

            <h4 className="font-semibold text-background mb-3 mt-6">Öffnungszeiten</h4>
            <div className="space-y-1 text-sm text-background/60">
              <p>Mo, Di, Do: 09:00 – 12:00, 13:30 – 17:00</p>
              <p>Mi, Fr: 09:00 – 12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Kieferorthopädie Bergedorf · Dr. Negar Ajoudani. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
