import { Star, ExternalLink, Quote } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-badge mb-3">Patientenstimmen</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 mt-3">
            Was unsere Patienten sagen
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">auf Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200 relative">
              <Quote className="absolute top-5 right-5 h-7 w-7 text-muted/40" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2 text-sm">{t.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">Google Rezension</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            Alle Google Bewertungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
