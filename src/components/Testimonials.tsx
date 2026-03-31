import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Lara Beh",
    title: "Fachlich kompetent und einfühlsam.",
    text: "Super Praxis, sehr nette Ärztin hat alle meine Fragen beantwortet. Die Helferin im Zimmer ist total freundlich und einfühlsam. Komme gerne dort hin und werde auch mit meinem Sohn kommen, sobald er alt genug ist. 🙂",
    source: "Google Rezensionen",
    stars: 5,
  },
  {
    name: "Nicole liest so gerne",
    title: "Ich hatte einen Notfall mit meinem Retainer",
    text: "Ich kann diese Praxis aus ganzem Herzen empfehlen. Freundlich, kompetent und hilfsbereit. Ich wurde selbst durch unangenehme Prozesse wie das Abdrucknehmen empathisch begleitet und würde hier jederzeit wieder hinkommen…",
    source: "Google Rezensionen",
    stars: 5,
  },
  {
    name: "Sarah Höffken",
    title: "Tolles kompetentes Team in Bergedorf",
    text: "Obwohl die Praxis aktuell knapp besetzt ist, machen die Damen das hier dermaßen toll. Sie stellen sich so liebevoll auf meine Tochter ein und erklären uns alles in Ruhe und Geduld. Ganz ganz toll.",
    source: "Google Rezensionen",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="bewertungen" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Patientenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Was unsere Patienten über uns sagen
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
                <h4 className="font-display font-semibold text-foreground mb-3">{t.title}</h4>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">über {t.source}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
