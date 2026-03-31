import { Award, Heart, Clock } from "lucide-react";
import aboutImg from "@/assets/about-practice.jpg";

const values = [
  { icon: Award, label: "Erfahrene Fachärztin" },
  { icon: Heart, label: "Einfühlsame Betreuung" },
  { icon: Clock, label: "Innovative Technik" },
];

const About = () => {
  return (
    <section id="ueber-uns" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Kieferorthopädie Bergedorf · Über uns
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Was es über uns<br />
              <span className="text-primary">zu wissen gibt</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Herzlich willkommen in unserer Praxis für moderne Kieferorthopädie in Hamburg-Bergedorf. 
              Bei uns steht nicht nur das perfekte Lächeln im Fokus – sondern auch der Mensch dahinter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mit viel Feingefühl, innovativer Technik und individuell abgestimmten 
              Behandlungskonzepten begleiten wir Kinder, Jugendliche und Erwachsene 
              auf dem Weg zu gesunden, schönen Zähnen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unser Team aus erfahrenen Fachkräften nimmt sich Zeit für Ihre Fragen, 
              Ängste und Wünsche. In entspannter Atmosphäre erklären wir alle Schritte 
              verständlich und gestalten die Behandlung so angenehm wie möglich – auch 
              für Angstpatienten und Menschen mit besonderen Bedürfnissen.
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
      </div>
    </section>
  );
};

export default About;
