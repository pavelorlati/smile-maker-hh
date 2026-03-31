import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary mb-4 animate-fade-in">
          Kieferorthopädie in Hamburg Bergedorf
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Ihr Lächeln in<br />
          <span className="text-primary">besten Händen</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Moderne Kieferorthopädie für die ganze Familie. 
          Wir begleiten Sie mit Kompetenz, Einfühlungsvermögen und 
          neuesten Behandlungsmethoden zu Ihrem perfekten Lächeln.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg">
            <a href="#kontakt">Termin vereinbaren</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-base px-8 py-6 rounded-full">
            <a href="#leistungen">Unsere Leistungen</a>
          </Button>
        </div>

        <a
          href="#leistungen"
          className="inline-flex items-center justify-center mt-20 w-12 h-12 rounded-full border-2 border-primary/30 text-primary/50 hover:text-primary hover:border-primary transition-colors animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
