import { Award, Heart, Clock } from "lucide-react";

const team = [
  { name: "Dr. Anna Müller", role: "Fachzahnärztin für Kieferorthopädie", initials: "AM" },
  { name: "Dr. Thomas Weber", role: "Kieferorthopäde", initials: "TW" },
  { name: "Sarah Petersen", role: "Praxismanagerin", initials: "SP" },
  { name: "Lisa Hartmann", role: "Zahnmedizinische Fachangestellte", initials: "LH" },
];

const values = [
  { icon: Award, label: "15+ Jahre Erfahrung" },
  { icon: Heart, label: "Einfühlsame Betreuung" },
  { icon: Clock, label: "Moderne Technologie" },
];

const About = () => {
  return (
    <section id="ueber-uns" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Über unsere Praxis
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ihre Praxis für<br />
              <span className="text-primary">schöne Zähne</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Im Herzen von Hamburg Bergedorf verbinden wir modernste Kieferorthopädie 
              mit persönlicher Betreuung. Unser erfahrenes Team nimmt sich die Zeit, 
              die Sie verdienen – für ein Ergebnis, das begeistert.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mit digitaler Behandlungsplanung, 3D-Scans und schonenden Methoden 
              machen wir Ihren Weg zum perfekten Lächeln so angenehm wie möglich.
            </p>
            <div className="flex flex-wrap gap-6">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <v.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border">
              <p className="text-muted-foreground text-sm">Praxisbild Platzhalter</p>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10 blur-xl" />
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Unser Team</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="text-center group">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <span className="text-2xl font-display font-bold text-primary">{m.initials}</span>
              </div>
              <h4 className="font-display font-semibold text-foreground">{m.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
