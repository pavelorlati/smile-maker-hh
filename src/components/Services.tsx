import { AlertTriangle, Users, Heart, CalendarCheck, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    iconColor: "text-destructive",
    iconBg: "bg-destructive/8",
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
    iconColor: "text-primary",
    iconBg: "bg-primary/8",
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
    iconColor: "text-primary",
    iconBg: "bg-primary/8",
  },
  {
    icon: Sparkles,
    title: "Aligner & Invisalign",
    desc: "Fast unsichtbare Zahnkorrektur für Erwachsene und Jugendliche – komfortabel, diskret und ideal für den Berufsalltag.",
    details: [
      "Transparente Schienen, die kaum sichtbar sind",
      "Herausnehmbar zum Essen und Zähneputzen",
      "Digitale 3D-Planung für präzise Ergebnisse",
    ],
    iconColor: "text-accent",
    iconBg: "bg-accent/8",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-badge mb-3">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 mt-3">
            Was wir für Sie tun können
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <Card
              key={s.title}
              className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg"
            >
              <CardContent className="p-7">
                <div className={`w-12 h-12 rounded-lg ${s.iconBg} flex items-center justify-center mb-4`}>
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

                <ul className="space-y-2 mb-6">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href={DOCTOLIB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                >
                  Termin vereinbaren
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-w-5xl mx-auto">
          <div className="bg-primary rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-lg bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                <CalendarCheck className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary-foreground">Online-Terminbuchung</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">Rund um die Uhr · schnell & unkompliziert über Doctolib</p>
              </div>
            </div>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors group flex-shrink-0"
            >
              Jetzt online buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
