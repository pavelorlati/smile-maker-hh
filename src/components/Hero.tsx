import { ArrowRight, Phone, Star, Shield, Clock, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.webp";

const heroReviews = [
  { name: "Sandra K.", text: "Wunderbares Team – meine Tochter geht gerne hin." },
  { name: "Markus B.", text: "Sehr kompetent, moderne Praxis. Klare Empfehlung!" },
  { name: "Lena H.", text: "Endlich eine KFO, die sich wirklich Zeit nimmt." },
  { name: "Jasmin R.", text: "Als Erwachsene absolut zufrieden. Vielen Dank!" },
];

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Hero = () => {
  const [reviewIdx, setReviewIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReviewIdx((i) => (i + 1) % heroReviews.length), 4500);
    return () => clearInterval(id);
  }, []);

  const review = heroReviews[reviewIdx];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Moderne Kieferorthopädie-Praxis in Hamburg Bergedorf"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Floating animated review badge */}
      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10 z-20 w-[280px] hidden lg:block">
        <div
          key={reviewIdx}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-xl animate-fade-in-review"
        >
          <div className="flex items-center gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 animate-star-twinkle"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
            <span className="text-[11px] text-white/70 ml-1">Google</span>
          </div>
          <p className="text-[12px] leading-snug text-white/90 line-clamp-3">"{review.text}"</p>
          <p className="text-[11px] text-white/60 mt-1">— {review.name}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 text-white/90 text-xs font-medium tracking-wide mb-6">
            Dr. med. dent. Negar Ajoudani · Kieferorthopädie Hamburg Bergedorf
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
              className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-base font-semibold group"
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
