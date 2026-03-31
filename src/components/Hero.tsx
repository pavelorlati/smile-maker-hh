import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, Mail } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary mb-4 animate-fade-in">
          Dr. Negar Ajoudani · Fachzahnärztin für Kieferorthopädie
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ihre moderne<br />
          <span className="text-primary">Kieferorthopädie</span><br />
          in Bergedorf
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Mit viel Feingefühl, innovativer Technik und individuell abgestimmten 
          Behandlungskonzepten begleiten wir Kinder, Jugendliche und Erwachsene 
          auf dem Weg zu gesunden, schönen Zähnen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg">
            <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
              Jetzt Termin vereinbaren
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-base px-8 py-6 rounded-full">
            <a href="tel:+49407245241">
              <Phone className="h-5 w-5 mr-2" />
              040 7 24 52 41
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="mailto:praxis@kieferorthopaedie-bergedorf.de"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            praxis@kieferorthopaedie-bergedorf.de
          </a>
        </div>

        <a
          href="#leistungen"
          className="inline-flex items-center justify-center mt-16 w-12 h-12 rounded-full border-2 border-primary/30 text-primary/50 hover:text-primary hover:border-primary transition-colors animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
