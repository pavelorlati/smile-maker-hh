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
          "Besonders am Herzen liegt uns die einfühlsame Betreuung von Angstpatienten und Kindern: Mit Geduld, Aufklärung und einer ruhigen Atmosphäre nehmen wir die Anspannung. Bei akuten Beschwerden wie gelösten Brackets oder drückenden Bögen sind wir auch für kurzfristige Notfalltermine erreichbar. Welche Behandlung in Ihrem individuellen Fall die richtige ist, klären wir gemeinsam in einer ausführlichen Erstberatung.",
        ]}
      />
      <CTABanner variant="subtle" />
    </Layout>
  );
};

export default LeistungenPage;
