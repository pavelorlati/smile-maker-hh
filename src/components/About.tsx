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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-badge mb-3">Über uns</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 mt-3">
              Kieferorthopädie mit Herz
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

            <div className="grid grid-cols-3 gap-3 mb-8">
              {values.map((v) => (
                <div key={v.label} className="bg-secondary rounded-lg p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              Beratungstermin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <img
              src={aboutImg}
              alt="Moderne Behandlungsräume der Kieferorthopädie Bergedorf"
              width={1920}
              height={1440}
              loading="lazy"
              className="aspect-[4/3] rounded-lg object-cover w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
