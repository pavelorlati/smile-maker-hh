import Layout from "@/components/Layout";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import SeoText from "@/components/SeoText";

const LeistungenPage = () => {
  return (
    <Layout>
      <Services />
      <SeoText
        heading="Modernes Behandlungsspektrum für jedes Alter"
        paragraphs={[
          "In unserer Kieferorthopädie in Hamburg Bergedorf bieten wir das gesamte Spektrum moderner kieferorthopädischer Behandlungen an. Dazu gehören unsichtbare Aligner wie Invisalign, festsitzende Zahnspangen mit ästhetischen Keramikbrackets, herausnehmbare Apparaturen sowie die kieferorthopädische Frühbehandlung im Wechselgebiss. Auch für Erwachsene bieten wir diskrete Lösungen, die sich problemlos in den Alltag integrieren lassen.",
          "Aligner-Therapien wie Invisalign haben sich in den vergangenen Jahren zu einer der beliebtesten Behandlungsformen entwickelt. Die transparenten Schienen sind nahezu unsichtbar, herausnehmbar und ermöglichen ein uneingeschränktes Essen sowie eine gewohnte Mundhygiene. Mithilfe digitaler 3D-Planung sehen Sie bereits vor Behandlungsbeginn, wie sich Ihre Zähne Schritt für Schritt in die gewünschte Position bewegen werden.",
          "Bei Kindern und Jugendlichen achten wir besonders auf den richtigen Zeitpunkt: Eine Frühbehandlung kann ungünstige Kieferentwicklungen frühzeitig korrigieren und spätere, aufwändigere Maßnahmen vermeiden. Im Jugendalter setzen wir je nach Befund auf festsitzende Brackets oder altersgerechte Aligner-Systeme. Erwachsene profitieren von modernen, ästhetisch unauffälligen Lösungen – denn für ein schönes Lächeln ist es nie zu spät.",
          "Besonders am Herzen liegt uns die einfühlsame Betreuung von Angstpatienten und Kindern: Mit Geduld, transparenter Aufklärung und einer ruhigen Atmosphäre nehmen wir die Anspannung. Bei akuten Beschwerden wie gelösten Brackets, drückenden Bögen oder verlorenen Aligner-Schienen sind wir auch für kurzfristige Notfalltermine erreichbar. Welche Behandlung in Ihrem individuellen Fall die richtige ist, klären wir gemeinsam in einer ausführlichen Erstberatung – ehrlich, nachvollziehbar und ohne unnötigen Aufwand.",
        ]}
      />
      <CTABanner variant="subtle" />
    </Layout>
  );
};

export default LeistungenPage;
