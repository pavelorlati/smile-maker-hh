import { Star, Quote } from "lucide-react";
import bubbleImg from "@/assets/review-bubble.jpg";
import thankYouImg from "@/assets/review-thankyou.jpg";
import starsImg from "@/assets/review-stars.jpg";

const reviews = [
  {
    image: bubbleImg,
    imageAlt: "Schimmernde Seifenblase mit kleinem Zahn-Symbol auf pastellfarbenem Hintergrund",
    name: "Familie K. aus Bergedorf",
    role: "Mutter eines Patienten (10 J.)",
    text: "Unser Sohn hatte vor jedem Zahnarztbesuch Angst – hier wurde er von Anfang an mit so viel Geduld empfangen, dass er heute fast freiwillig zum Termin geht. Das Team erklärt jeden Schritt kindgerecht.",
    rating: 5,
  },
  {
    image: thankYouImg,
    imageAlt: "Pastellfarbene Dankeskarte mit Blumen und kleinem Zahn-Plüsch",
    name: "Frau M.",
    role: "Erwachsenen-Behandlung mit Alignern",
    text: "Ich habe mich erst mit über 40 für eine Korrektur entschieden und wurde wunderbar beraten. Die Aligner sind im Alltag kaum spürbar – und das Ergebnis hat all meine Erwartungen übertroffen.",
    rating: 5,
  },
  {
    image: starsImg,
    imageAlt: "Fünf goldene Sterne auf pastelltürkisem Hintergrund",
    name: "Herr T.",
    role: "Vater von zwei Patienten",
    text: "Pünktliche Termine, ehrliche Aufklärung, faire Empfehlungen. Beide Kinder werden hier behandelt und wir fühlen uns als Familie sehr gut aufgehoben. Klare Empfehlung für Bergedorf und Umgebung.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-badge mb-3">Bewertungen</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 mt-3">
            Was unsere Patient:innen sagen
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
            Vertrauen ist die Basis jeder guten Behandlung. Lesen Sie, wie Familien aus Hamburg
            Bergedorf und Umgebung ihre Zeit bei uns erlebt haben.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <article
              key={r.name}
              tabIndex={0}
              className="bubble-card bg-card border border-border overflow-hidden flex flex-col"
            >
              <div className="relative z-[3] aspect-[16/10] w-full overflow-hidden bg-secondary">
                <img
                  src={r.image}
                  alt={r.imageAlt}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="relative z-[3] p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5" aria-label={`${r.rating} von 5 Sternen`}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-primary/30" />
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-5 flex-1">
                  „{r.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
