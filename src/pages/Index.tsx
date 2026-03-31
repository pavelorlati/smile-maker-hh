import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Timeline />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
