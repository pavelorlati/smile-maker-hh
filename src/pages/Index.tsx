import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Users, Heart, Star } from "lucide-react";

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
  {
    icon: Star,
    title: "Bewertungen",
    desc: "5.0 Sterne auf Google",
    href: "/bewertungen",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Quick navigation cards */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="cta-badge mb-4">Willkommen</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-4">
              Entdecken Sie unsere <span className="gradient-text">Praxis</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="glass-card rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
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
    </div>
  );
};

export default Index;
