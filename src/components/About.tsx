import { Award, Heart, Clock, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-practice.jpg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const values = [
  { icon: Award, label: "Erfahrene Fachärztin", desc: "Spezialisierte Ausbildung" },
  { icon: Heart, label: "Einfühlsame Betreuung", desc: "Auch für Angstpatienten" },
  { icon: Clock, label: "Innovative Technik", desc: "Modernste Behandlung" },
];

const About = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="cta-badge mb-4">Über uns</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 mt-4">
              Kieferorthopädie{" "}
              <span className="gradient-text">mit Herz</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Herzlich willkommen in unserer Praxis für moderne Kieferorthopädie in Hamburg-Bergedorf. 
              Bei uns steht nicht nur das perfekte Lächeln im Fokus – sondern auch der Mensch dahinter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Mit viel Feingefühl, innovativer Technik und individuell abgestimmten 
              Behandlungskonzepten begleiten wir Kinder, Jugendliche und Erwachsene 
              auf dem Weg zu gesunden, schönen Zähnen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unser Team nimmt sich Zeit für Ihre Fragen, Ängste und Wünsche. 
              In entspannter Atmosphäre gestalten wir die Behandlung so angenehm 
              wie möglich – auch für Angstpatienten.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {values.map((v) => (
                <div key={v.label} className="glass-card rounded-xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground block">{v.label}</span>
                  <span className="text-[10px] text-muted-foreground">{v.desc}</span>
                </div>
              ))}
            </div>

            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-base group"
            >
              Beratungstermin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
            <img
              src={aboutImg}
              alt="Moderne Behandlungsräume der Kieferorthopädie Bergedorf"
              width={1920}
              height={1440}
              loading="lazy"
              className="relative aspect-[4/3] rounded-2xl object-cover w-full shadow-2xl"
            />
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 glass-card rounded-2xl p-5 animate-float">
              <div className="text-3xl font-display font-bold gradient-text">5.0</div>
              <div className="text-xs text-muted-foreground font-medium">Google Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
