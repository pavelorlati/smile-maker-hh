import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import AccessibilityInfo from "@/components/AccessibilityInfo";
import CTABanner from "@/components/CTABanner";
import SeoText from "@/components/SeoText";
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
      <main>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="bubble-card bg-card border border-border p-6 hover:shadow-xl group block"
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

      <SeoText
        heading="Ihre Kieferorthopädie in Hamburg Bergedorf"
        paragraphs={[
          "Die Praxis Dr. Negar Ajoudani ist Ihre Anlaufstelle für moderne Kieferorthopädie in Hamburg Bergedorf. Als Fachzahnärztin behandelt Dr. Ajoudani Kinder, Jugendliche und Erwachsene mit aktuellen Methoden – von der klassischen festsitzenden Zahnspange über transparente Aligner bis hin zur Frühbehandlung. Unsere Praxis liegt zentral in der Bergedorfer Schloßstraße und ist mit öffentlichen Verkehrsmitteln sowie dem Auto bequem zu erreichen.",
          "Ein gerades Lächeln ist mehr als Ästhetik: Eine korrekte Zahnstellung erleichtert die tägliche Mundhygiene, schützt vor Karies und Parodontitis und sorgt für ein gesundes Kiefergelenk. Auch das Sprechen, Kauen und die natürliche Atmung profitieren von einem harmonisch ausgerichteten Gebiss – Aspekte, die im Alltag oft unterschätzt werden, aber langfristig einen großen Beitrag zur allgemeinen Gesundheit leisten.",
          "In einem persönlichen Beratungsgespräch nehmen wir uns Zeit, Ihre Wünsche zu verstehen, untersuchen sorgfältig und erklären verständlich, welche Behandlungsoptionen für Sie infrage kommen. Mithilfe digitaler Diagnostik visualisieren wir das mögliche Ergebnis bereits vor Behandlungsbeginn, sodass Sie eine fundierte Entscheidung treffen können – ohne Druck und in Ruhe.",
          "Als Praxis im Herzen von Bergedorf betreuen wir Patientinnen und Patienten aus ganz Hamburg sowie aus den umliegenden Stadtteilen wie Lohbrügge, Reinbek, Wentorf, Glinde und Geesthacht. Kurze Wartezeiten, verlässliche Termine und eine ruhige, freundliche Atmosphäre gehören für uns selbstverständlich zu einer guten kieferorthopädischen Versorgung dazu.",
        ]}
      />

      <CTABanner />
      <Footer />
      <FloatingPhone />
      <AccessibilityInfo />
    </div>
  );
};

export default Index;
