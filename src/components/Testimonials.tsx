import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria S.",
    text: "Ich bin begeistert vom Ergebnis! Das gesamte Team war immer freundlich und hat mir jede Angst genommen. Absolute Empfehlung!",
    stars: 5,
  },
  {
    name: "Tobias K.",
    text: "Meine Invisalign-Behandlung war unkompliziert und das Ergebnis übertrifft alle Erwartungen. Sehr professionelle Praxis.",
    stars: 5,
  },
  {
    name: "Familie Petersen",
    text: "Unsere beiden Kinder werden hier behandelt. Die Praxis ist modern, kinderfreundlich und die Terminplanung klappt super.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Das sagen unsere Patienten
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Patientenstimmen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
