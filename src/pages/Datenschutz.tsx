import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-xl font-display font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">2. Verantwortliche Stelle</h2>
          <p>
            Kieferorthopädie Bergedorf<br />
            Dr. Negar Ajoudani<br />
            Bergedorfer Schloßstraße 18<br />
            21029 Hamburg<br />
            E-Mail: <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-primary hover:underline">praxis@kieferorthopaedie-bergedorf.de</a>
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie über unser 
            Kontaktformular Anfragen senden, werden Ihre Angaben zur Bearbeitung der Anfrage bei uns gespeichert.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, 
            Sperrung oder Löschung dieser Daten.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">5. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten, die auf 
            dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">6. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns 
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-xl font-display font-semibold text-foreground">7. Google Maps</h2>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited. 
            Durch die Nutzung von Google Maps können Informationen über Ihre Benutzung dieser Website 
            an Google übertragen werden.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Datenschutz;
