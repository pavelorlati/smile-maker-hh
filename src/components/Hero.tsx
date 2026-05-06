import { ArrowRight, Phone, Star, Shield, Clock, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

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
              className="btn-brand-ghost px-8 py-4 text-base font-semibold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="phoneBrandGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(268 70% 75%)" />
                    <stop offset="55%" stopColor="hsl(165 75% 62%)" />
                    <stop offset="100%" stopColor="hsl(165 75% 62%)" />
                  </linearGradient>
                </defs>
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                  stroke="url(#phoneBrandGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="btn-brand-text">040 7 24 52 41</span>
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
