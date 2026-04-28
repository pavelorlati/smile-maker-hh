import Layout from "@/components/Layout";
import Team from "@/components/Team";
import CTABanner from "@/components/CTABanner";
import SeoText from "@/components/SeoText";

const TeamPage = () => {
  return (
    <Layout>
      <Team />
      <SeoText
        heading="Erfahrung und Empathie aus einer Hand"
        paragraphs={[
          "Dr. Negar Ajoudani ist Fachzahnärztin für Kieferorthopädie und bildet sich kontinuierlich in modernen Behandlungstechniken fort – von der Aligner-Therapie über digitale Behandlungsplanung bis hin zur Behandlung komplexer Fehlstellungen. Ihre langjährige Erfahrung mit Patienten jeden Alters bildet die Grundlage für maßgeschneiderte Behandlungskonzepte.",
          "Das gesamte Praxisteam in Hamburg Bergedorf legt großen Wert auf eine herzliche, transparente Kommunikation. Wir nehmen uns Zeit, jeden Behandlungsschritt verständlich zu erklären, und stehen Ihnen bei Fragen zu Ablauf, Kosten oder Krankenkassen-Erstattung jederzeit zur Verfügung.",
        ]}
      />
      <CTABanner variant="subtle" title="Lernen Sie uns persönlich kennen" subtitle="Buchen Sie einen Beratungstermin und überzeugen Sie sich selbst." />
    </Layout>
  );
};

export default TeamPage;
