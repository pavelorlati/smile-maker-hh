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

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Verantwortliche Stelle</h2>
            <p className="leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="leading-relaxed mt-2">
              <strong className="text-foreground">Kieferorthopädie Bergedorf</strong><br />
              Dr. med. dent. Negar Ajoudani<br />
              Bergedorfer Schloßstraße 18<br />
              21029 Hamburg<br />
              Telefon: <a href="tel:+49407245241" className="text-primary hover:underline">+49 (0) 40 7 24 52 41</a><br />
              E-Mail: <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-primary hover:underline">praxis@kieferorthopaedie-bergedorf.de</a>
            </p>
            <p className="leading-relaxed mt-2">
              Wenn Sie Fragen zum Datenschutz haben, können Sie sich jederzeit an die oben genannte Adresse wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten 
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung 
              (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
            </p>
            <p className="leading-relaxed mt-2">
              Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare 
              natürliche Person beziehen. Dazu gehören beispielsweise Ihr Name, Ihre Adresse, Ihre E-Mail-Adresse 
              oder Ihre Telefonnummer.
            </p>
            <p className="leading-relaxed mt-2">
              Wir erheben und verarbeiten Ihre Daten nur, soweit dies für die Bereitstellung unserer Website und 
              unserer Dienstleistungen erforderlich ist. Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn 
              dies gesetzlich vorgeschrieben ist oder Sie ausdrücklich eingewilligt haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Hosting</h2>
            <p className="leading-relaxed">
              Diese Website wird bei einem externen Hosting-Dienstleister bereitgestellt. Die personenbezogenen 
              Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dies 
              kann insbesondere IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten sowie Vertragsdaten 
              umfassen.
            </p>
            <p className="leading-relaxed mt-2">
              Der Einsatz des Hosters erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen und 
              bestehenden Kunden und in Anbetracht der berechtigten Interessen an einer sicheren, schnellen und 
              effizienten Bereitstellung unseres Online-Angebots.
            </p>
            <p className="leading-relaxed mt-2">
              Unser Hosting-Anbieter verarbeitet Ihre Daten ausschließlich im Auftrag und gemäß unseren Weisungen 
              (Auftragsverarbeitung im Sinne von Art. 28 DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Kontaktformular</h2>
            <p className="leading-relaxed">
              Wenn Sie uns über das Kontaktformular auf unserer Website eine Anfrage senden, werden die von Ihnen 
              im Formular angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) bei uns gespeichert, 
              um Ihre Anfrage zu bearbeiten und etwaige Folgefragen zu beantworten.
            </p>
            <p className="leading-relaxed mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 
              lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein 
              berechtigtes Interesse an der Bearbeitung Ihrer Anfrage haben.
            </p>
            <p className="leading-relaxed mt-2">
              Die im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt 
              (zum Beispiel nach abgeschlossener Bearbeitung Ihrer Anfrage).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. E-Mail-Kontakt</h2>
            <p className="leading-relaxed">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage 
              sowie für mögliche Anschlussfragen gespeichert. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 
              Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f 
              DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
            </p>
            <p className="leading-relaxed mt-2">
              Bitte beachten Sie, dass die Datenübertragung im Internet bei der Kommunikation per E-Mail 
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch 
              Dritte ist technisch nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              Auf unserer Website kommen keine Werbe- oder Analyse-Cookies zum Einsatz. Wir verwenden ausschließlich 
              technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies 
              ermöglichen beispielsweise die Speicherung Ihrer Cookie-Einstellungen.
            </p>
            <p className="leading-relaxed mt-2">
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir 
              haben ein berechtigtes Interesse daran, unsere Website technisch fehlerfrei und komfortabel für 
              Sie bereitzustellen.
            </p>
            <p className="leading-relaxed mt-2">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden 
              und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. 
              Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Google Maps Einbindung</h2>
            <p className="leading-relaxed">
              Auf dieser Website nutzen wir den Kartendienst Google Maps, um Ihnen eine interaktive Karte zur 
              Anfahrt zu unserer Praxis anzuzeigen. Anbieter ist die Google Ireland Limited, Gordon House, 
              Barrow Street, Dublin 4, Irland.
            </p>
            <p className="leading-relaxed mt-2">
              Wenn Sie die Google Maps-Karte aufrufen, baut Ihr Browser eine direkte Verbindung zu den Servern 
              von Google auf. Dabei können Informationen über Ihre Nutzung dieser Website (einschließlich Ihrer 
              IP-Adresse) an Google übertragen und dort gespeichert werden. Dies geschieht unabhängig davon, ob 
              Sie ein Google-Nutzerkonto besitzen oder nicht.
            </p>
            <p className="leading-relaxed mt-2">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote 
              und an einer leichten Auffindbarkeit der von uns angegebenen Orte (Art. 6 Abs. 1 lit. f DSGVO). 
              Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Datenschutzerklärung von Google</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">8. Rechte der Nutzer</h2>
            <p className="leading-relaxed">
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-1">
              <li className="leading-relaxed">
                <strong className="text-foreground">Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können jederzeit 
                verlangen, dass wir Ihnen mitteilen, ob und welche personenbezogenen Daten wir von Ihnen verarbeiten.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, 
                die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung 
                Ihrer bei uns gespeicherten Daten verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie 
                können verlangen, dass wir die Verarbeitung Ihrer Daten einschränken.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das 
                Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung 
                Ihrer personenbezogenen Daten widersprechen, sofern diese auf berechtigtem Interesse beruht.
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei 
                einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer Daten zu beschweren. Zuständig ist die 
                Datenschutzaufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Ihres Arbeitsplatzes oder unseres 
                Praxisstandorts.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Um eines Ihrer oben genannten Rechte auszuüben, kontaktieren Sie uns bitte per E-Mail oder postalisch 
              unter den in Abschnitt 1 angegebenen Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">9. Dauer der Speicherung</h2>
            <p className="leading-relaxed">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die jeweiligen Verarbeitungszwecke 
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Sofern gesetzliche Aufbewahrungsfristen 
              bestehen, werden die Daten für die Dauer dieser Fristen gespeichert und anschließend gelöscht.
            </p>
            <p className="leading-relaxed mt-2">
              Anfragen, die Sie uns über das Kontaktformular oder per E-Mail senden, werden in der Regel nach 
              vollständiger Bearbeitung gelöscht, sofern keine weitergehende Verpflichtung zur Speicherung besteht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">10. Weitergabe von Daten</h2>
            <p className="leading-relaxed">
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt grundsätzlich nur, wenn dies zur 
              Erfüllung unserer vertraglichen oder gesetzlichen Pflichten erforderlich ist oder Sie uns Ihre 
              ausdrückliche Einwilligung erteilt haben.
            </p>
            <p className="leading-relaxed mt-2">
              Eine Übermittlung Ihrer Daten an staatliche Stellen oder Behörden erfolgt nur im Rahmen der 
              gesetzlichen Informationspflichten oder wenn wir durch eine gerichtliche Entscheidung dazu verpflichtet 
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">11. Datensicherheit</h2>
            <p className="leading-relaxed">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor Manipulation, 
              Verlust, Zerstörung oder dem Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen 
              werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
            <p className="leading-relaxed mt-2">
              Bitte beachten Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken behaftet 
              sein kann. Ein lückenloser Schutz vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">12. Aktualität und Änderungen</h2>
            <p className="leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Wir behalten uns vor, 
              diese Erklärung bei Bedarf zu aktualisieren, um sie an geänderte rechtliche Anforderungen oder 
              Änderungen unserer Datenverarbeitung anzupassen. Die aktuelle Version ist jederzeit auf dieser 
              Website abrufbar.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Datenschutz;
