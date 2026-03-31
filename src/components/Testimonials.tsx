import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Lara Beh",
    title: "Fachlich kompetent und einfühlsam.",
    text: "Super Praxis, sehr nette Ärztin hat alle meine Fragen beantwortet. Die Helferin im Zimmer ist total freundlich und einfühlsam. Komme gerne dort hin und werde auch mit meinem Sohn kommen, sobald er alt genug ist. 🙂",
    stars: 5,
  },
  {
    name: "Nicole liest so gerne",
    title: "Ich hatte einen Notfall mit meinem Retainer",
    text: "Ich kann diese Praxis aus ganzem Herzen empfehlen. Freundlich, kompetent und hilfsbereit. Ich wurde selbst durch unangenehme Prozesse wie das Abdrucknehmen empathisch begleitet und würde hier jederzeit wieder hinkommen…",
    stars: 5,
  },
  {
    name: "Sarah Höffken",
    title: "Tolles kompetentes Team in Bergedorf",
    text: "Obwohl die Praxis aktuell knapp besetzt ist und dringend zahnmedizinische Fachangestellte sucht, machen die Damen das hier dermaßen toll. Sie stellen sich so liebevoll auf meine Tochter ein und erklären uns alles in Ruhe und Geduld. Ganz ganz toll.",
    stars: 5,
  },
  {
    name: "M. Hoffmann",
    title: "Sehr zufrieden mit der Behandlung",
    text: "Frau Dr. Ajoudani und ihr Team sind wirklich herausragend. Die Beratung war sehr ausführlich, alle Optionen wurden erklärt und ich habe mich sofort wohl gefühlt. Die Praxis ist modern und einladend.",
    stars: 5,
  },
  {
    name: "Kathrin W.",
    title: "Empfehlenswert für die ganze Familie",
    text: "Meine beiden Kinder werden hier behandelt und sind immer gerne dabei. Das Team geht toll mit den Kleinen um und nimmt sich wirklich Zeit. Die Terminvergabe über Doctolib ist super praktisch.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    title: "Endlich eine gute Kieferorthopädin",
    text: "Nach langer Suche endlich eine Praxis gefunden, in der man sich wirklich gut aufgehoben fühlt. Kompetent, freundlich und sehr professionell. Kann ich nur weiterempfehlen!",
    stars: 5,
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Praxis+Dr.+Negar+Ajoudani+Zahn%C3%A4rztin+f.+Kieferorthop%C3%A4die/@53.4889,10.2094,17z";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Patientenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Was unsere Patienten über uns sagen
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">5.0 Sterne auf Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  <p className="text-xs text-muted-foreground mt-0.5">über Google Rezensionen</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="rounded-full px-8">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Alle Google Bewertungen ansehen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
