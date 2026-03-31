import { Smile, Shield, Baby, User, RotateCcw, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Smile,
    title: "Invisalign & Aligner",
    desc: "Nahezu unsichtbare Zahnkorrektur mit transparenten Schienen – ästhetisch und komfortabel für Ihren Alltag.",
  },
  {
    icon: Shield,
    title: "Feste Zahnspangen",
    desc: "Bewährte Bracket-Systeme für präzise Zahnkorrekturen, auch mit zahnfarbenen Keramik-Brackets.",
  },
  {
    icon: Baby,
    title: "Kinder- & Jugend-KFO",
    desc: "Frühbehandlung und kindgerechte Kieferorthopädie für eine gesunde Entwicklung von Anfang an.",
  },
  {
    icon: User,
    title: "Erwachsenen-KFO",
    desc: "Es ist nie zu spät für ein schönes Lächeln. Diskrete Behandlungsmethoden speziell für Erwachsene.",
  },
  {
    icon: RotateCcw,
    title: "Retainer & Nachsorge",
    desc: "Langfristige Stabilisierung Ihres Behandlungsergebnisses mit festsitzenden oder herausnehmbaren Retainern.",
  },
  {
    icon: Activity,
    title: "CMD-Diagnostik",
    desc: "Funktionsanalyse bei Kiefergelenksbeschwerden, Kopfschmerzen und Zähneknirschen.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Unsere Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Kompetenz auf ganzer Linie
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir bieten Ihnen ein umfassendes Spektrum modernster kieferorthopädischer Behandlungen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Card
              key={s.title}
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
