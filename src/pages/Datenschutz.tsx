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
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-muted-foreground mb-10">Stand: Mai 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">1. Verantwortliche Stelle</h2>
            <p className="leading-relaxed">
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="leading-relaxed mt-3">
              <strong className="text-foreground">Kieferorthopädie Bergedorf</strong><br />
              Dr. med. dent. Negar Ajoudani<br />
              Bergedorfer Schloßstraße 18<br />
              21029 Hamburg<br />
              Telefon: <a href="tel:+49407245241" className="text-primary hover:underline">+49 (0) 40 7 24 52 41</a><br />
              E-Mail: <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-primary hover:underline">praxis@kieferorthopaedie-bergedorf.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">2. Allgemeine Informationen zur Datenverarbeitung</h2>
            <p className="leading-relaxed">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
              einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
              erfolgt regelmäßig nur nach Einwilligung der Nutzer oder wenn die Verarbeitung durch gesetzliche
              Vorschriften gestattet ist.
            </p>
            <p className="leading-relaxed mt-2">
              Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), lit. b DSGVO
              (Vertragserfüllung und vorvertragliche Maßnahmen), lit. c DSGVO (rechtliche Verpflichtung) sowie
              lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p className="leading-relaxed mt-2">
              Diese Datenschutzerklärung bezieht sich ausschließlich auf unsere Website. Die Verarbeitung Ihrer
              Patientendaten im Rahmen der kieferorthopädischen Behandlung ist nicht Gegenstand dieser Erklärung.
              Hierüber informieren wir Sie gesondert in der Praxis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">3. Hosting und Server-Logfiles</h2>
            <p className="leading-relaxed">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Mit dem Hoster
              besteht ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 DSGVO, der die weisungsgebundene
              und datenschutzkonforme Verarbeitung sicherstellt.
            </p>
            <p className="leading-relaxed mt-2">
              Bei jedem Aufruf unserer Website erfasst der Hoster automatisch Informationen, die Ihr Browser
              übermittelt. Diese werden in sogenannten Server-Logfiles gespeichert:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-1">
              <li>IP-Adresse des anfragenden Geräts (gekürzt bzw. anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Meldung, ob der Abruf erfolgreich war</li>
              <li>Verwendeter Browser-Typ und Browser-Version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der
              technisch fehlerfreien Auslieferung der Website sowie der Gewährleistung der Systemsicherheit.
              Die Logfiles werden nach spätestens 30 Tagen gelöscht, sofern keine sicherheitsrelevanten Vorfälle
              eine längere Speicherung erfordern.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">4. Kontaktformular</h2>
            <p className="leading-relaxed">
              Wenn Sie uns über das Kontaktformular auf unserer Website eine Anfrage senden, verarbeiten wir
              folgende Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (sofern angegeben)</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>Datum und Uhrzeit der Anfrage</li>
            </ul>
            <p className="leading-relaxed mt-3">
              <strong className="text-foreground">Zweck:</strong> Bearbeitung Ihrer Anfrage und gegebenenfalls
              die Aufnahme der vorvertraglichen Kommunikation, etwa zur Vereinbarung eines Beratungstermins.
            </p>
            <p className="leading-relaxed mt-2">
              <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertragsverhältnisses gerichtet ist.
              In allen anderen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              Beantwortung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="leading-relaxed mt-2">
              <strong className="text-foreground">Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie
              für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind – in der Regel nach
              vollständiger Bearbeitung Ihrer Anfrage. Gesetzliche Aufbewahrungspflichten (insbesondere aus
              dem Handels- und Steuerrecht) bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">5. E-Mail-Kontakt</h2>
            <p className="leading-relaxed">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Name, Inhalt der
              Nachricht) bei uns gespeichert, um Ihre Anfrage zu bearbeiten und für etwaige Anschlussfragen
              zur Verfügung zu haben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen
              Anfragen, ansonsten Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="leading-relaxed mt-2">
              Die Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind.
            </p>
            <p className="leading-relaxed mt-2">
              <strong className="text-foreground">Hinweis zur Sicherheit:</strong> Die Kommunikation per
              unverschlüsselter E-Mail kann Sicherheitslücken aufweisen. Ein lückenloser Schutz vor
              unberechtigtem Zugriff Dritter ist auf diesem Weg nicht möglich. Für die Übermittlung
              vertraulicher Gesundheitsdaten empfehlen wir daher den telefonischen oder persönlichen Kontakt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              Auf dieser Website setzen wir ausschließlich technisch notwendige Cookies und vergleichbare
              Speichertechnologien (z. B. Local Storage) ein. Diese sind erforderlich, um den Betrieb der
              Website sicherzustellen und Ihre Auswahl in unserem Cookie-Hinweisbanner zu speichern.
            </p>
            <p className="leading-relaxed mt-2">
              Konkret verwenden wir folgenden Eintrag im lokalen Speicher Ihres Browsers:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-1">
              <li>
                <code className="text-foreground bg-secondary/50 px-1 rounded text-[13px]">cookie-consent-v1</code>
                {" "}– speichert Ihre Entscheidung zum Cookie-Hinweis, damit dieser nicht erneut angezeigt wird.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Wir setzen <strong className="text-foreground">keine</strong> Analyse-, Tracking- oder
              Marketing-Cookies ein. Eine Profilbildung oder ein Tracking Ihres Nutzungsverhaltens findet
              nicht statt.
            </p>
            <p className="leading-relaxed mt-2">
              Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist § 25 Abs. 2 Nr. 2 TDDDG
              in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO. Sie können Cookies in den Einstellungen Ihres
              Browsers jederzeit löschen oder das Setzen von Cookies generell unterbinden. In diesem Fall
              kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">7. Google Maps</h2>
            <p className="leading-relaxed">
              Auf unserer Kontaktseite binden wir Karten des Dienstes Google Maps ein, um Ihnen die Anfahrt
              zu unserer Praxis zu erleichtern. Anbieter ist die Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland („Google").
            </p>
            <p className="leading-relaxed mt-2">
              Beim Aufruf einer Seite, in die eine Google-Maps-Karte eingebettet ist, stellt Ihr Browser
              eine direkte Verbindung zu den Servern von Google her. Dabei werden insbesondere folgende
              Daten an Google übertragen:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-1">
              <li>IP-Adresse Ihres Endgeräts</li>
              <li>Datum und Uhrzeit des Aufrufs</li>
              <li>aufgerufene Seite unserer Website (Referrer-URL)</li>
              <li>Browser- und Geräteinformationen</li>
              <li>bei eingeloggten Nutzern: Zuordnung zu Ihrem Google-Konto</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Wir haben keinen Einfluss auf die durch Google durchgeführte Datenverarbeitung. Eine
              Übermittlung Ihrer Daten in die USA und damit in ein Drittland kann nicht ausgeschlossen
              werden. Google ist unter dem EU-US Data Privacy Framework zertifiziert, sodass für die
              Übermittlung ein Angemessenheitsbeschluss der EU-Kommission gemäß Art. 45 DSGVO als
              Grundlage besteht.
            </p>
            <p className="leading-relaxed mt-2">
              <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse besteht in einer ansprechenden Darstellung unseres Standortes
              und der einfachen Auffindbarkeit der Praxis für unsere Patientinnen und Patienten.
            </p>
            <p className="leading-relaxed mt-2">
              Weitere Informationen finden Sie in der{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Datenschutzerklärung von Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">8. Weitere eingebundene Dienste</h2>
            <h3 className="text-base font-display font-semibold text-foreground mt-4 mb-2">8.1 Google Fonts</h3>
            <p className="leading-relaxed">
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die
              von Google Ireland Limited bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser
              die benötigten Schriftarten von Google-Servern. Hierdurch erlangt Google Kenntnis von Ihrer
              IP-Adresse sowie davon, dass über Ihren Browser unsere Website aufgerufen wurde. Eine
              Übertragung in die USA kann nicht ausgeschlossen werden; auch hier dient das EU-US Data
              Privacy Framework als Übermittlungsgrundlage.
            </p>
            <p className="leading-relaxed mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in
              einer einheitlichen und ansprechenden Darstellung unseres Online-Angebots.
            </p>

            <h3 className="text-base font-display font-semibold text-foreground mt-5 mb-2">8.2 Verlinkung zu Doctolib</h3>
            <p className="leading-relaxed">
              Auf unserer Website finden Sie Verlinkungen zur Online-Terminbuchung über Doctolib (Doctolib GmbH,
              Mehringdamm 51, 10961 Berlin). Erst wenn Sie einen solchen Link anklicken, werden Sie auf die
              Website von Doctolib weitergeleitet und Daten an Doctolib übermittelt. Auf unserer Seite selbst
              werden keine Inhalte oder Skripte von Doctolib geladen. Für die Verarbeitung Ihrer Daten auf
              den Doctolib-Seiten gilt deren eigene Datenschutzerklärung.
            </p>

            <h3 className="text-base font-display font-semibold text-foreground mt-5 mb-2">8.3 Verlinkung zu Instagram</h3>
            <p className="leading-relaxed">
              Wir verweisen mittels eines einfachen Hyperlinks auf unser Instagram-Profil. Erst durch Anklicken
              des Links werden Sie zur Instagram-Plattform weitergeleitet, betrieben von Meta Platforms
              Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Bis zum Klick werden keine Daten
              an Meta/Instagram übertragen.
            </p>

            <p className="leading-relaxed mt-5">
              Über die genannten Dienste hinaus setzen wir keine weiteren externen Tools, Tracking-Pixel,
              Analyse-Werkzeuge, Social-Media-Plug-ins oder Werbedienste auf dieser Website ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">9. Rechte der betroffenen Personen</h2>
            <p className="leading-relaxed">
              Sie haben uns gegenüber folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-1">
              <li>
                <strong className="text-foreground">Auskunft</strong> (Art. 15 DSGVO) über die zu Ihrer Person
                gespeicherten Daten und deren Verarbeitung.
              </li>
              <li>
                <strong className="text-foreground">Berichtigung</strong> (Art. 16 DSGVO) unrichtiger oder
                unvollständiger Daten.
              </li>
              <li>
                <strong className="text-foreground">Löschung</strong> (Art. 17 DSGVO) Ihrer bei uns
                gespeicherten Daten, sofern keine gesetzliche Aufbewahrungspflicht entgegensteht.
              </li>
              <li>
                <strong className="text-foreground">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO),
                wenn Sie die Richtigkeit der Daten bestreiten oder die Verarbeitung unrechtmäßig ist.
              </li>
              <li>
                <strong className="text-foreground">Datenübertragbarkeit</strong> (Art. 20 DSGVO) – Erhalt
                Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format.
              </li>
              <li>
                <strong className="text-foreground">Widerspruch</strong> (Art. 21 DSGVO) gegen Verarbeitungen,
                die auf einem berechtigten Interesse beruhen.
              </li>
              <li>
                <strong className="text-foreground">Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)
                mit Wirkung für die Zukunft.
              </li>
              <li>
                <strong className="text-foreground">Beschwerde bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO).
                Für unsere Praxis ist zuständig: Der Hamburgische Beauftragte für Datenschutz und
                Informationsfreiheit, Ludwig-Erhard-Straße 22, 20459 Hamburg.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die in Abschnitt 1 genannten
              Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">10. Speicherdauer</h2>
            <p className="leading-relaxed">
              Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorsehen. Als Orientierung gilt:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3 ml-1">
              <li>Server-Logfiles: bis zu 30 Tage</li>
              <li>Kontaktanfragen per Formular oder E-Mail: bis zur abschließenden Bearbeitung Ihres Anliegens</li>
              <li>Cookie-Einstellung im Browser: bis zur Löschung durch Sie oder Ablauf des Speicherwerts</li>
              <li>
                Daten, die handels- oder steuerrechtlichen Aufbewahrungspflichten unterliegen: 6 bzw. 10 Jahre
                gemäß § 257 HGB und § 147 AO
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Nach Ablauf der jeweiligen Frist werden die Daten routinemäßig gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">11. Datensicherheit</h2>
            <p className="leading-relaxed">
              Wir setzen geeignete technische und organisatorische Maßnahmen (TOM) ein, um Ihre Daten gegen
              zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter
              Personen zu schützen. Dazu gehören insbesondere eine TLS/SSL-Verschlüsselung der gesamten
              Website, regelmäßige Sicherheitsaktualisierungen sowie Zugriffsbeschränkungen auf erforderliche
              Personen.
            </p>
            <p className="leading-relaxed mt-2">
              Eine vollständige Sicherheit der Datenübertragung im Internet kann jedoch nicht garantiert
              werden. Jeder Nutzer ist daher zugleich aufgefordert, seinerseits zum Schutz seiner Daten
              durch sichere Passwörter und aktuelle Software beizutragen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground mb-3">12. Änderungen dieser Datenschutzerklärung</h2>
            <p className="leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Rechtslage, unsere
              Website oder die Art der Datenverarbeitung ändert. Es gilt jeweils die zum Zeitpunkt Ihres
              Besuchs auf dieser Seite veröffentlichte Fassung. Wir empfehlen, die Datenschutzerklärung
              gelegentlich erneut zu lesen.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Datenschutz;
