import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero has its own full-height layout, so we don't use Layout wrapper for it */}
      <Layout>
        <div /> {/* spacer since Hero is positioned absolutely */}
      </Layout>
    </div>
  );
};

export default Index;
