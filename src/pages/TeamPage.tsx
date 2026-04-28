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
          "Dr. Negar Ajoudani ist Fachzahnärztin für Kieferorthopädie und bildet sich kontinuierlich in modernen Behandlungstechniken fort – von der Aligner-Therapie über digitale Behandlungsplanung bis hin zur Behandlung komplexer Fehlstellungen. Ihre langjährige Erfahrung mit Patienten jeden Alters bildet die Grundlage für maßgeschneiderte Behandlungskonzepte, die medizinische Notwendigkeit und persönliche Wünsche gleichermaßen berücksichtigen.",
          "Das gesamte Praxisteam in Hamburg Bergedorf legt großen Wert auf eine herzliche, transparente Kommunikation. Wir nehmen uns Zeit, jeden Behandlungsschritt verständlich zu erklären, und stehen Ihnen bei Fragen zu Ablauf, Kosten oder Krankenkassen-Erstattung jederzeit zur Verfügung. Gerade bei längeren Behandlungen ist es uns wichtig, dass Sie sich bei jedem Termin gut aufgehoben und informiert fühlen.",
          "Unsere Mitarbeiterinnen unterstützen Sie nicht nur fachlich, sondern auch organisatorisch: bei der Terminplanung, beim Ausfüllen von Anträgen für die Krankenkasse oder bei Fragen rund um die Pflege Ihrer Zahnspange. Diese Mischung aus medizinischer Kompetenz und persönlicher Betreuung ist es, die unsere Praxis auszeichnet – und die uns immer wieder von zufriedenen Patientinnen und Patienten zurückgemeldet wird.",
        ]}
      />
      <CTABanner variant="subtle" title="Lernen Sie uns persönlich kennen" subtitle="Buchen Sie einen Beratungstermin und überzeugen Sie sich selbst." />
    </Layout>
  );
};

export default TeamPage;
