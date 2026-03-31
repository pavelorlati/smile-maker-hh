import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Star, Shield, Clock, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Moderne Kieferorthopädie-Praxis in Hamburg Bergedorf"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium tracking-wide mb-6 animate-fade-in">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            5.0 Google Bewertung · Kieferorthopädie Bergedorf
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ihr Lächeln in{" "}
            <span className="relative">
              <span className="gradient-text">besten Händen</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Moderne Kieferorthopädie mit Herz. Dr. Negar Ajoudani und ihr Team 
            begleiten Sie einfühlsam zu Ihrem perfekten Lächeln.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base group"
            >
              <CalendarCheck className="h-5 w-5" />
              Jetzt Termin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+49407245241"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone className="h-5 w-5" />
              040 7 24 52 41
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="flex items-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="mailto:praxis@kieferorthopaedie-bergedorf.de"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              praxis@kieferorthopaedie-bergedorf.de
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
