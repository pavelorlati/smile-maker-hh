import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Impressum</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-xl font-display font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
          <p>
            Kieferorthopädie Bergedorf<br />
            Dr. Negar Ajoudani<br />
            Fachzahnärztin für Kieferorthopädie<br />
            Bergedorfer Schloßstraße 18<br />
            21029 Hamburg
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+49407245241" className="text-primary hover:underline">+49 (0) 40 7 24 52 41</a><br />
            E-Mail: <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-primary hover:underline">praxis@kieferorthopaedie-bergedorf.de</a>
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
    </Layout>
  );
};

export default Impressum;
