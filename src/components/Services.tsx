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
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
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
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
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
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-500",
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
    color: "from-accent/10 to-accent/5",
    iconColor: "text-accent",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="cta-badge mb-4">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Was wir für Sie tun können
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <Card
              key={s.title}
              className="group border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 bg-card hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 relative">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${s.color} opacity-60`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 relative z-10`}>
                  <s.icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">{s.desc}</p>

                {s.details.length > 0 && (
                  <ul className="space-y-2 mb-6 relative z-10">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={DOCTOLIB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 relative z-10 group/link"
                >
                  Termin vereinbaren
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking CTA card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-[60px]" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">Online-Terminbuchung</h3>
                  <p className="text-white/70 text-sm mt-1">Rund um die Uhr · schnell & unkompliziert über Doctolib</p>
                </div>
              </div>
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white text-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex-shrink-0"
              >
                Jetzt online buchen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
