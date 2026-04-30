import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import { Star, ExternalLink, MessageSquare } from "lucide-react";

// Google Maps / Profil-Link der Praxis
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Kieferorthop%C3%A4die+Dr.+Negar+Ajoudani+Bergedorf";
const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/search?q=Kieferorthop%C3%A4die+Dr.+Negar+Ajoudani+Bergedorf#lrd=";

const Bewertungen = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge mb-3">Google Bewertungen</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-3">
              Erfahrungen unserer Patient:innen
            </h1>
            <div className="section-divider mt-4" />
            <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
              Vertrauen ist die Basis jeder guten Behandlung. Lesen Sie echte Bewertungen
              auf Google – oder hinterlassen Sie selbst eine Rückmeldung zu Ihrer Erfahrung
              in unserer Praxis in Hamburg Bergedorf.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm text-center">
            <div className="flex justify-center gap-1 mb-4" aria-label="5 von 5 Sternen">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
              Sehen Sie alle aktuellen Bewertungen direkt auf Google. So erhalten Sie ein
              vollständiges, ungefiltertes Bild unserer Arbeit und der Erfahrungen anderer
              Patient:innen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-brand"
              >
                <ExternalLink className="h-4 w-4" />
                Bewertungen auf Google ansehen
              </a>
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Bewertung schreiben
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              Hinweis: Wir zeigen keine Bewertungen direkt auf der Website, damit Sie immer
              die aktuellsten und unverfälschten Rückmeldungen direkt bei Google einsehen
              können.
            </p>
          </div>
        </div>
      </section>

      <CTABanner variant="subtle" title="Überzeugen Sie sich selbst" subtitle="Vereinbaren Sie unverbindlich einen Beratungstermin." />
    </Layout>
  );
};

export default Bewertungen;
