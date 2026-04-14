import { Phone, CalendarCheck, ArrowRight } from "lucide-react";

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
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-secondary border border-border rounded-lg p-8 md:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
              >
                <CalendarCheck className="h-5 w-5" />
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+49407245241"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-base font-semibold text-primary border border-primary/20 hover:bg-primary/5 transition-colors"
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
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md text-base font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors group"
          >
            <CalendarCheck className="h-5 w-5" />
            Jetzt Termin vereinbaren
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+49407245241"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md text-base font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
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
