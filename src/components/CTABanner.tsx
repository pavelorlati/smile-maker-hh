import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

interface CTABannerProps {
  variant?: "primary" | "subtle";
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  variant = "primary",
  title = "Bereit für Ihr neues Lächeln?",
  subtitle = "Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin – online oder telefonisch.",
}: CTABannerProps) => {
  if (variant === "subtle") {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base group"
              >
                <CalendarCheck className="h-5 w-5" />
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+49407245241"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 blur-[60px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-base font-bold bg-white text-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <CalendarCheck className="h-5 w-5" />
            Jetzt Termin vereinbaren
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+49407245241"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
          >
            <Phone className="h-5 w-5" />
            040 7 24 52 41
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
