import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import zahnarztstuhl from "@/assets/gallery-zahnarztstuhl.jpg";
import empfang from "@/assets/gallery-empfang-wartebereich.jpg";
import tresen from "@/assets/gallery-tresen.jpg";
import wartezimmer from "@/assets/gallery-wartezimmer.jpg";
import bonsai from "@/assets/gallery-bonsai-instagram.jpg";
import aligners from "@/assets/reviews-aligners.jpg";
import braces from "@/assets/reviews-braces-mouth.jpg";
import toothModel from "@/assets/reviews-tooth-model.jpg";

const images = [
  { src: empfang, alt: "Empfang und Wartebereich der Praxis Dr. Ajoudani" },
  { src: tresen, alt: "Moderner Empfangstresen" },
  { src: wartezimmer, alt: "Helles Wartezimmer mit Tageslicht" },
  { src: zahnarztstuhl, alt: "Modernes Behandlungszimmer mit Behandlungsstuhl" },
  { src: aligners, alt: "Transparente Aligner-Schienen für die Kieferorthopädie" },
  { src: braces, alt: "Festsitzende Zahnspange – Brackets in der Kieferorthopädie" },
  { src: toothModel, alt: "Kieferorthopädisches Zahnmodell" },
  { src: bonsai, alt: "Bonsai im Wartebereich mit Instagram-Hinweis" },
];

const Galerie = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge mb-3">Galerie</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-3">
              Einblicke in unsere Praxis
            </h1>
            <div className="section-divider mt-4" />
            <p className="text-muted-foreground text-sm md:text-base mt-5 max-w-2xl mx-auto">
              Hier bekommen Sie einen ersten Eindruck von unserer Praxis in Hamburg-Bergedorf –
              vom Empfang über das Wartezimmer bis zu den modernen Behandlungsräumen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {images.map((img) => (
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
        </div>
      </section>
      <CTABanner variant="subtle" title="Lieber direkt persönlich vorbeikommen?" subtitle="Wir freuen uns auf Ihren Besuch in Hamburg-Bergedorf." />
    </Layout>
  );
};

export default Galerie;
