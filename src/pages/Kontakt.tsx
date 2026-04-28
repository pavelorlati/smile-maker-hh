import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import SeoText from "@/components/SeoText";

const KontaktPage = () => {
  return (
    <Layout>
      <Contact />
      <SeoText
        heading="So erreichen Sie unsere Praxis in Bergedorf"
        paragraphs={[
          "Sie finden die Kieferorthopädie Dr. Ajoudani zentral in der Bergedorfer Schloßstraße – nur wenige Gehminuten vom Bergedorfer Bahnhof entfernt. Mit der S-Bahn (S21) erreichen Sie uns ebenso bequem wie mit dem Auto: Parkmöglichkeiten finden Sie in den umliegenden Parkhäusern und auf öffentlichen Stellplätzen in unmittelbarer Nähe. Auch zahlreiche Buslinien halten in direkter Umgebung, sodass eine Anreise aus Lohbrügge, Reinbek, Wentorf oder Glinde unkompliziert möglich ist.",
          "Termine vereinbaren Sie am einfachsten online über Doctolib – rund um die Uhr und ohne Wartezeit am Telefon. Selbstverständlich erreichen Sie uns auch telefonisch zu unseren Sprechzeiten, wenn Sie Ihre Anfrage lieber persönlich besprechen möchten. Bei akuten kieferorthopädischen Beschwerden wie gelösten Brackets, drückenden Drähten oder Schmerzen bemühen wir uns um einen kurzfristigen Termin – rufen Sie uns einfach an, wir finden gemeinsam eine Lösung.",
          "Für Ihren ersten Besuch planen wir bewusst etwas mehr Zeit ein: So können wir Sie in Ruhe kennenlernen, Ihre Anliegen besprechen und einen umfassenden Befund erstellen. Bringen Sie nach Möglichkeit Ihre Versichertenkarte sowie eventuell vorhandene Unterlagen früherer Behandlungen mit – so erhalten wir das vollständige Bild und können Sie bestmöglich beraten.",
        ]}
      />
    </Layout>
  );
};

export default KontaktPage;
