import Layout from "@/components/Layout";
import Team from "@/components/Team";
import CTABanner from "@/components/CTABanner";

const TeamPage = () => {
  return (
    <Layout>
      <Team />
      <CTABanner variant="subtle" title="Lernen Sie uns persönlich kennen" subtitle="Buchen Sie einen Beratungstermin und überzeugen Sie sich selbst." />
    </Layout>
  );
};

export default TeamPage;
