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

        <h1 className="text-4xl font-display font-bold text-foreground mb-2">Impressum</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Kieferorthopädie Bergedorf<br />
              Dr. med. dent. Negar Ajoudani<br />
              Bergedorfer Schloßstraße 18<br />
              21029 Hamburg<br />
              Deutschland
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <a href="tel:+49407245241" className="text-primary hover:underline">
                +49 (0) 40 7 24 52 41
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:praxis@kieferorthopaedie-bergedorf.de"
                className="text-primary hover:underline"
              >
                praxis@kieferorthopaedie-bergedorf.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              2. Berufsbezeichnung
            </h2>
            <p>
              Fachzahnärztin für Kieferorthopädie<br />
              Verliehen in: Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              3. Zuständige Kammer
            </h2>
            <p>
              Zahnärztekammer Hamburg<br />
              Körperschaft des öffentlichen Rechts<br />
              Möllner Landstraße 31<br />
              22111 Hamburg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              4. Aufsichtsbehörde
            </h2>
            <p>
              Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration der
              Freien und Hansestadt Hamburg<br />
              Hamburger Straße 47<br />
              22083 Hamburg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              5. Berufsrechtliche Regelungen
            </h2>
            <p>
              Es gelten folgende berufsrechtliche Regelungen für Zahnärztinnen und
              Zahnärzte in der Freien und Hansestadt Hamburg:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Hamburgisches Kammergesetz für die Heilberufe (HmbKGH)</li>
              <li>Berufsordnung der Zahnärztekammer Hamburg</li>
              <li>Gebührenordnung für Zahnärzte (GOZ)</li>
              <li>Heilberufsgesetz</li>
              <li>Zahnheilkundegesetz (ZHG)</li>
            </ul>
            <p className="mt-3">
              Die genannten Vorschriften können bei der Zahnärztekammer Hamburg
              eingesehen werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              6. Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
              Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              7. Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
            <p className="mt-3">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechts­verletzungen
              werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">
              8. Urheberrecht
            </h2>
            <p>
              Die durch die Praxisbetreiberin erstellten Inhalte und Werke auf dieser
              Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
              jeweiligen Autorin.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
