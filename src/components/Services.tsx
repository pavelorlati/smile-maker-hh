import { AlertTriangle, Users, Heart, CalendarCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const services = [
  {
    icon: AlertTriangle,
    title: "Notfall­behandlungen",
    desc: "Zahnspange gebrochen? Bracket gelöst? Draht pikt unangenehm? In akuten Fällen sind wir für Sie da – schnelle Hilfe bei kieferorthopädischen Notfällen.",
    details: [
      "Gebrochenes Bracket, störender Draht oder Schmerzen durch die Spange",
      "Bitte rufen Sie immer vorher kurz an – so können wir schnell reagieren",
      "Wachs aus dem Startset hilft gegen Reibung bis zum Praxisbesuch",
    ],
  },
  {
    icon: Users,
    title: "Behandlung für jedes Alter",
    desc: "Von der spielerischen Frühbehandlung im Kindesalter bis zur diskreten Korrektur bei Erwachsenen – maßgeschneiderte Lösungen mit höchstem Anspruch.",
    details: [
      "Erste kieferorthopädische Beratung ab etwa 6–7 Jahren empfohlen",
      "Herausnehmbare Spangen, Keramikbrackets oder transparente Aligner",
      "Auch Erwachsene profitieren – moderne Methoden sind diskret und komfortabel",
    ],
  },
  {
    icon: Heart,
    title: "Angstpatienten",
    desc: "Wir begegnen Ängsten mit Feingefühl, Geduld und Respekt. Schonende Methoden und transparente Erklärungen für eine stressfreie Behandlung.",
    details: [
      "Sanfte, schmerzarme Methoden mit Empathie und moderner Technik",
      "Auf Wunsch planen wir besonders ruhige Termine ein",
      "Teilen Sie uns Ihre Ängste bei der Terminvereinbarung mit",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Online-Terminbuchung",
    desc: "Vereinbaren Sie Ihren Termin bequem online über Doctolib – rund um die Uhr, schnell und unkompliziert.",
    details: [],
    isBooking: true,
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Was wir in unserer Praxis anbieten
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Leistungen unserer Praxis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lernen Sie unsere umfangreichen Leistungen rund um Ihr Lächeln und Ihre Zähne kennen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                
                {s.details.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {s.isBooking ? (
                  <Button asChild className="rounded-full w-full">
                    <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
                      Jetzt online buchen
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" asChild className="rounded-full">
                    <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
                      Termin vereinbaren
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
