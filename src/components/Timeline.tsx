import { CalendarCheck, ScanSearch, ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Erstberatung", desc: "Kostenlose Erstberatung und Beurteilung Ihrer Zahnsituation." },
  { icon: ScanSearch, title: "Diagnostik", desc: "Digitale 3D-Scans, Röntgenbilder und präzise Analyse." },
  { icon: ClipboardList, title: "Behandlungsplan", desc: "Individueller Plan mit transparenter Kostenaufstellung." },
  { icon: Wrench, title: "Behandlung", desc: "Professionelle Behandlung mit regelmäßigen Kontrollterminen." },
  { icon: ShieldCheck, title: "Nachsorge", desc: "Retainer und langfristige Stabilisierung des Ergebnisses." },
];

const Timeline = () => {
  return (
    <section id="behandlung" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Ihr Weg zum Lächeln
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Ablauf der Behandlung
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={step.title} className={`relative flex items-start gap-6 mb-12 last:mb-0 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>

                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                  <step.icon className="h-5 w-5" />
                </div>

                <div className="md:hidden flex-1">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>

                <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:pl-12" : "md:pr-12"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
