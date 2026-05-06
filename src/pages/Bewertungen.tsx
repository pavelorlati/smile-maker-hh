import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import { Star, ExternalLink, MessageSquare, Quote } from "lucide-react";
import bgAbstract from "@/assets/reviews-bg-abstract.jpg";
import imgAligners from "@/assets/reviews-aligners.jpg";
import imgTooth from "@/assets/reviews-braces-mouth.jpg";
import imgFlowers from "@/assets/reviews-flowers.jpg";
import imgFlowerSingle from "@/assets/reviews-flower-single.jpg";
import imgThankyou from "@/assets/reviews-thankyou-card.jpg";
import imgTea from "@/assets/reviews-adult-smile.jpg";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Kieferorthop%C3%A4die+Dr.+Negar+Ajoudani+Bergedorf";
const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/search?q=Kieferorthop%C3%A4die+Dr.+Negar+Ajoudani+Bergedorf#lrd=";

const reviews = [
  {
    name: "Sandra K.",
    initials: "SK",
    rating: 5,
    date: "vor 2 Wochen",
    text: "Frau Dr. Ajoudani und ihr Team sind einfach wunderbar. Meine Tochter hatte vorher Angst vor dem Zahnarzt – hier geht sie jetzt gerne hin. Alles wird ruhig und kindgerecht erklärt.",
    image: imgFlowers,
    imageAlt: "Blumenstrauß am Empfang der Praxis",
  },
  {
    name: "Markus B.",
    initials: "MB",
    rating: 5,
    date: "vor 1 Monat",
    text: "Sehr kompetente Beratung und moderne Praxis. Die Behandlung mit Alignern verlief absolut reibungslos. Termine immer pünktlich, Team super freundlich.",
    image: imgAligners,
    imageAlt: "Transparente Aligner Zahnschiene",
  },
  {
    name: "Lena H.",
    initials: "LH",
    rating: 5,
    date: "vor 1 Monat",
    text: "Endlich eine Kieferorthopädin, die sich wirklich Zeit nimmt. Mein Sohn fühlt sich ernst genommen und das Team geht toll auf Kinder ein. Klare Empfehlung in Bergedorf!",
    image: imgThankyou,
    imageAlt: "Handgeschriebene Dankeskarte mit Herz",
  },
  {
    name: "Familie Petersen",
    initials: "FP",
    rating: 5,
    date: "vor 2 Monaten",
    text: "Vom ersten Beratungsgespräch bis zur festen Spange alles top organisiert. Sehr saubere, helle Praxis und ein Team, das einem ehrlich jede Frage beantwortet.",
    image: imgTooth,
    imageAlt: "Kindermund mit bunter fester Zahnspange",
  },
  {
    name: "Jasmin R.",
    initials: "JR",
    rating: 5,
    date: "vor 3 Monaten",
    text: "Ich bin als Erwachsene in Behandlung und absolut zufrieden. Frau Dr. Ajoudani erklärt jeden Schritt verständlich und das Ergebnis spricht für sich. Vielen Dank!",
    image: imgFlowerSingle,
    imageAlt: "Zarte rosa Blüte",
  },
  {
    name: "Tobias W.",
    initials: "TW",
    rating: 5,
    date: "vor 4 Monaten",
    text: "Tolle Atmosphäre, freundlicher Empfang und kurze Wartezeiten. Die Kinderecke ist liebevoll gestaltet – unsere Kleine möchte am liebsten sofort wiederkommen.",
    image: imgTea,
    imageAlt: "Strahlendes Lächeln nach der Behandlung",
  },
];

const Bewertungen = () => {
  const avgRating = 5.0;

  return (
    <Layout>
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Soft abstract background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `url(${bgAbstract})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-background/70" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge mb-3">Google Bewertungen</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-3">
              Erfahrungen unserer Patient:innen
            </h1>
            <div className="section-divider mt-4" />
            <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
              Vertrauen ist die Basis jeder guten Behandlung. Hier sehen Sie eine Auswahl
              an Rückmeldungen – die vollständige, aktuelle Liste finden Sie jederzeit
              direkt auf Google.
            </p>
          </div>

          {/* Summary card */}
          <div className="max-w-3xl mx-auto bg-card/90 backdrop-blur border border-border rounded-2xl p-6 md:p-8 shadow-sm text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl font-display font-bold text-foreground">
                {avgRating.toFixed(1)}
              </span>
              <div className="flex gap-1" aria-label={`${avgRating} von 5 Sternen`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Basierend auf einer Auswahl von Google-Bewertungen unserer Patient:innen
            </p>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <article
                key={idx}
                className="bubble-card bg-card/95 backdrop-blur border border-border rounded-2xl shadow-sm flex flex-col overflow-hidden"
              >
                {review.image && (
                  <div className="relative h-36 w-full overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.imageAlt ?? ""}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/10 to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <Quote className="h-6 w-6 text-primary/40 mb-3" />
                  <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} von 5 Sternen`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-5 flex-1">
                    „{review.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                      {review.initials}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="max-w-3xl mx-auto mt-14 text-center">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
              Alle Bewertungen ansehen oder selbst bewerten
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Auf Google finden Sie die vollständige, ungefilterte Liste aller Rückmeldungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-brand"
              >
                <ExternalLink className="h-4 w-4" />
                Alle Bewertungen auf Google
              </a>
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Bewertung schreiben
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        variant="subtle"
        title="Überzeugen Sie sich selbst"
        subtitle="Vereinbaren Sie unverbindlich einen Beratungstermin."
      />
    </Layout>
  );
};

export default Bewertungen;
