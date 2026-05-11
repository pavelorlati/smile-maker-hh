import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import zahnarztstuhl from "@/assets/gallery-zahnarztstuhl.jpg";
import empfang from "@/assets/gallery-empfang-wartebereich.jpg";
import tresen from "@/assets/gallery-tresen.jpg";
import wartezimmer from "@/assets/gallery-wartezimmer.jpg";
import bonsai from "@/assets/gallery-bonsai-instagram.jpg";
import behandlung1 from "@/assets/gallery-behandlungsraum-1.jpg";
import behandlung2 from "@/assets/gallery-behandlungsraum-2.jpg";
import behandlung3 from "@/assets/gallery-behandlungsraum-3.jpg";

const wartezimmerImages = [
  { src: empfang, alt: "Empfang und Wartebereich der Praxis Dr. Ajoudani" },
  { src: tresen, alt: "Moderner Empfangstresen" },
  { src: wartezimmer, alt: "Helles Wartezimmer mit Tageslicht" },
  { src: zahnarztstuhl, alt: "Behandlungsstuhl im Übersichtsbereich" },
  { src: bonsai, alt: "Bonsai im Wartebereich mit Instagram-Hinweis" },
];

const arbeitsumfeldImages = [
  {
    src: behandlung1,
    alt: "Heller Behandlungsraum mit modernem kieferorthopädischen Equipment",
    caption: "Großzügiger Behandlungsraum mit Tageslicht und modernster Technik.",
  },
  {
    src: behandlung2,
    alt: "Behandlungseinheit mit ergonomischem Arbeitsplatz",
    caption: "Ergonomischer Arbeitsplatz für präzise kieferorthopädische Behandlungen.",
  },
  {
    src: behandlung3,
    alt: "Zweiter Behandlungsraum mit Fensterfront",
    caption: "Lichtdurchfluteter Raum für eine entspannte Atmosphäre während der Behandlung.",
  },
];

const Section = ({
  badge,
  title,
  intro,
  children,
}: {
  badge?: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) => (
  <div className="mb-20">
    <div className="text-center mb-10">
      {badge && <span className="section-badge mb-3">{badge}</span>}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3 mb-3">
        {title}
      </h2>
      <div className="section-divider mt-4" />
      <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
        {intro}
      </p>
    </div>
    {children}
  </div>
);

const Galerie = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-badge mb-3">Galerie</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-3">
              Einblicke in unsere Praxis
            </h1>
            <div className="section-divider mt-4" />
            <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
              Hier bekommen Sie einen ersten Eindruck von unserer Praxis in Hamburg-Bergedorf –
              vom Empfang und Wartezimmer bis zu unseren modernen Behandlungsräumen.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Wartezimmer */}
            <Section
              title="Wartezimmer & Empfang"
              intro="Ankommen, durchatmen, wohlfühlen: Unser heller Empfangsbereich und das gemütliche Wartezimmer sind so gestaltet, dass Sie sich vom ersten Moment an entspannen können."
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {wartezimmerImages.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Section>

            {/* Video */}
            <Section
              title="Ein Rundgang durch die Praxis"
              intro="Begleiten Sie uns auf einem kurzen Rundgang durch unsere Räumlichkeiten – ein erster Eindruck, bevor Sie uns persönlich besuchen."
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card max-w-4xl mx-auto">
                <video
                  src="/videos/wartezimmer.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block"
                  aria-label="Videorundgang durch die Praxis Dr. Ajoudani"
                />
              </div>
            </Section>

            {/* Arbeitsumfeld */}
            <Section
              title="Unser Arbeitsumfeld"
              intro="Modernste kieferorthopädische Technik, helle und freundlich gestaltete Behandlungsräume – hier arbeiten wir täglich für Ihr schönstes Lächeln."
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {arbeitsumfeldImages.map((img) => (
                  <figure
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm group flex flex-col"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </section>
      <CTABanner
        variant="subtle"
        title="Lieber direkt persönlich vorbeikommen?"
        subtitle="Wir freuen uns auf Ihren Besuch in Hamburg-Bergedorf."
      />
    </Layout>
  );
};

export default Galerie;
