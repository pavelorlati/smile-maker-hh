import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";
import { Camera } from "lucide-react";

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

          <div className="max-w-3xl mx-auto bg-secondary border border-border rounded-2xl p-10 md:p-14 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Camera className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
              Bilder folgen in Kürze
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Wir bereiten gerade aktuelle Fotos unserer Räumlichkeiten vor – Empfang,
              Wartebereich und Behandlungszimmer. Schauen Sie bald wieder vorbei!
            </p>
          </div>
        </div>
      </section>
      <CTABanner variant="subtle" title="Lieber direkt persönlich vorbeikommen?" subtitle="Wir freuen uns auf Ihren Besuch in Hamburg-Bergedorf." />
    </Layout>
  );
};

export default Galerie;
