import Layout from "@/components/Layout";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";

const UeberUnsPage = () => {
  return (
    <Layout>
      <About />
      <CTABanner variant="subtle" title="Überzeugt?" subtitle="Vereinbaren Sie jetzt einen Beratungstermin in unserer Praxis." />
    </Layout>
  );
};

export default UeberUnsPage;
