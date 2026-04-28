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
          "Seit vielen Jahren steht die Praxis Dr. Negar Ajoudani in Hamburg Bergedorf für eine vertrauensvolle und persönliche kieferorthopädische Betreuung. Unsere Behandlungsräume sind hell, modern ausgestattet und mit aktueller Diagnostik wie digitalem Röntgen und Intraoralscanner ausgerüstet – das ermöglicht präzise Behandlungsplanung ohne unangenehme Abdrücke.",
          "Wir nehmen uns bewusst Zeit für jeden Patienten. Ob Erstberatung, regelmäßige Kontrolle oder ein offenes Ohr für Fragen zwischendurch: Unser Team begegnet Ihnen freundlich, kompetent und auf Augenhöhe. Eine angenehme Atmosphäre ist uns genauso wichtig wie ein medizinisch hervorragendes Ergebnis.",
        ]}
      />
      <CTABanner variant="subtle" title="Überzeugt?" subtitle="Vereinbaren Sie jetzt einen Beratungstermin in unserer Praxis." />
    </Layout>
  );
};

export default UeberUnsPage;
