import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-2xl font-display font-bold text-background">KFO</span>
            <p className="text-sm mt-1 text-background/50">Kieferorthopädie Bergedorf</p>
            <p className="text-sm mt-4 leading-relaxed text-background/60">
              Moderne Kieferorthopädie für die ganze Familie in Hamburg Bergedorf.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Bergedorfer Str. 123, 21029 Hamburg</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+4940123456789" className="hover:text-background transition-colors">040 123 456 789</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@kfo-bergedorf.de" className="hover:text-background transition-colors">info@kfo-bergedorf.de</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Schnellzugriff</h4>
            <div className="space-y-2 text-sm">
              <a href="#leistungen" className="block hover:text-background transition-colors">Leistungen</a>
              <a href="#ueber-uns" className="block hover:text-background transition-colors">Über uns</a>
              <a href="#faq" className="block hover:text-background transition-colors">FAQ</a>
              <a href="#kontakt" className="block hover:text-background transition-colors">Kontakt</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Rechtliches</h4>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block hover:text-background transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block hover:text-background transition-colors">Datenschutz</Link>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Kieferorthopädie Bergedorf. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
