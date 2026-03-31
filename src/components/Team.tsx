import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-doctor.jpg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Team = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="cta-badge mb-4">Unser Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 mt-4">
            In besten Händen
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-10 text-center hover:shadow-[var(--shadow-card-hover)] transition-all duration-500">
            <div className="relative w-44 h-44 mx-auto mb-6">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-md animate-float" />
              <img
                src={teamImg}
                alt="Dr. Negar Ajoudani – Fachzahnärztin für Kieferorthopädie"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative w-44 h-44 rounded-full object-cover shadow-xl border-4 border-background"
              />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">Dr. Negar Ajoudani</h3>
            <p className="gradient-text font-semibold mb-5">Fachzahnärztin für Kieferorthopädie</p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm max-w-md mx-auto">
              Mit Kompetenz, Einfühlungsvermögen und modernsten Behandlungsmethoden 
              begleitet Dr. Ajoudani Patienten jeden Alters auf dem Weg zu einem 
              gesunden, schönen Lächeln.
            </p>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm group"
            >
              Beratungstermin bei Dr. Ajoudani
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
