import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import AccessibilityInfo from "@/components/AccessibilityInfo";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Users, Heart } from "lucide-react";

const highlights = [
  {
    icon: Stethoscope,
    title: "Leistungen",
    desc: "Notfälle, Aligner, Angstpatienten & mehr",
    href: "/leistungen",
  },
  {
    icon: Users,
    title: "Über uns",
    desc: "Lernen Sie unsere Praxis kennen",
    href: "/ueber-uns",
  },
  {
    icon: Heart,
    title: "Unser Team",
    desc: "Dr. Negar Ajoudani & Team",
    href: "/team",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge mb-3">Willkommen</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-3">
              Entdecken Sie unsere Praxis
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
      <FloatingPhone />
      <AccessibilityInfo />
    </div>
  );
};

export default Index;
