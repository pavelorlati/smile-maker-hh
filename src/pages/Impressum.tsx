import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">Impressum</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-xl font-display font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>
              Kieferorthopädie Bergedorf<br />
              Dr. Anna Müller<br />
              Bergedorfer Straße 123<br />
              21029 Hamburg
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Kontakt</h2>
            <p>
              Telefon: 040 123 456 789<br />
              E-Mail: info@kfo-bergedorf.de
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Berufsbezeichnung</h2>
            <p>
              Fachzahnärztin für Kieferorthopädie<br />
              Zuständige Kammer: Zahnärztekammer Hamburg<br />
              Verliehen in: Deutschland
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Aufsichtsbehörde</h2>
            <p>Zahnärztekammer Hamburg, Möllner Landstr. 31, 22111 Hamburg</p>

            <h2 className="text-xl font-display font-semibold text-foreground">Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit 
              und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h2 className="text-xl font-display font-semibold text-foreground">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
