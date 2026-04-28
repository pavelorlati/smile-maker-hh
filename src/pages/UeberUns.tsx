import Layout from "@/components/Layout";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import SeoText from "@/components/SeoText";

const UeberUnsPage = () => {
  return (
    <Layout>
      <About />
      <SeoText
        heading="Eine Praxis, in der sich Patienten wohlfühlen"
        paragraphs={[
          "Seit vielen Jahren steht die Praxis Dr. Negar Ajoudani in Hamburg Bergedorf für eine vertrauensvolle und persönliche kieferorthopädische Betreuung. Unsere Behandlungsräume sind hell, modern ausgestattet und mit aktueller Diagnostik wie digitalem Röntgen und Intraoralscanner ausgerüstet – das ermöglicht präzise Behandlungsplanung ohne unangenehme Abdrücke und reduziert die Strahlenbelastung auf ein Minimum.",
          "Wir nehmen uns bewusst Zeit für jeden Patienten. Ob Erstberatung, regelmäßige Kontrolle oder ein offenes Ohr für Fragen zwischendurch: Unser Team begegnet Ihnen freundlich, kompetent und auf Augenhöhe. Eine angenehme Atmosphäre ist uns genauso wichtig wie ein medizinisch hervorragendes Ergebnis – denn nur wer sich wohlfühlt, kommt gerne wieder.",
          "Hygiene und Sicherheit haben in unserer Praxis höchste Priorität. Alle Instrumente werden nach den geltenden Richtlinien aufbereitet, unsere Abläufe sind klar strukturiert und werden regelmäßig überprüft. So sorgen wir dafür, dass Sie sich bei jedem Besuch in besten Händen wissen – vom ersten Beratungsgespräch bis zum letzten Kontrolltermin nach Behandlungsende.",
          "Auch barrierefreie Erreichbarkeit, kindgerechte Wartebereiche und ein freundliches Empfangsteam tragen dazu bei, dass sich bei uns Patientinnen und Patienten jeden Alters wohlfühlen. Familien schätzen, dass wir Termine nach Möglichkeit aufeinander abstimmen, und Berufstätige freuen sich über flexible Sprechzeiten, die sich gut in den Alltag integrieren lassen.",
        ]}
      />
      <CTABanner variant="subtle" title="Überzeugt?" subtitle="Vereinbaren Sie jetzt einen Beratungstermin in unserer Praxis." />
    </Layout>
  );
};

export default UeberUnsPage;
