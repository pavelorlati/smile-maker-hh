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
          "Sie finden die Kieferorthopädie Dr. Ajoudani zentral in der Bergedorfer Schloßstraße – nur wenige Gehminuten vom Bergedorfer Bahnhof entfernt. Mit der S-Bahn (S21) erreichen Sie uns ebenso bequem wie mit dem Auto: Parkmöglichkeiten finden Sie in den umliegenden Parkhäusern und auf öffentlichen Stellplätzen in unmittelbarer Nähe.",
          "Termine vereinbaren Sie am einfachsten online über Doctolib oder telefonisch zu unseren Sprechzeiten. Bei akuten kieferorthopädischen Beschwerden bemühen wir uns um einen kurzfristigen Termin – rufen Sie uns einfach an, wir finden gemeinsam eine Lösung.",
        ]}
      />
    </Layout>
  );
};

export default KontaktPage;
