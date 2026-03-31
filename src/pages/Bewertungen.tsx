import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

const BewertungenPage = () => {
  return (
    <Layout>
      <Testimonials />
      <CTABanner title="Werden Sie unser nächster zufriedener Patient" subtitle="Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin." />
    </Layout>
  );
};

export default BewertungenPage;
