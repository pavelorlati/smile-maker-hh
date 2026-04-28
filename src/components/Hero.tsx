import { ArrowRight, Phone, Star, Shield, Clock, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Moderne Kieferorthopädie-Praxis in Hamburg Bergedorf"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 text-white/90 text-xs font-medium tracking-wide mb-6">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            5.0 Google Bewertung · Kieferorthopädie Bergedorf
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Ihr Lächeln in besten Händen
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Moderne Kieferorthopädie mit Herz. Dr. Negar Ajoudani und ihr Team 
            begleiten Sie einfühlsam zu Ihrem perfekten Lächeln.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              <CalendarCheck className="h-5 w-5" />
              Jetzt Termin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+49407245241"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              040 7 24 52 41
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { icon: Shield, text: "Fachzahnärztin" },
              { icon: Clock, text: "Kurzfristige Termine" },
              { icon: Star, text: "Top bewertet" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/50 text-sm">
                <item.icon className="h-4 w-4" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
