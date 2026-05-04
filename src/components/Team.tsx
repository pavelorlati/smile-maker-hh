import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-doctor.jpg";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Team = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-badge mb-3">Unser Team</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 mt-3">
            In besten Händen
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="max-w-lg mx-auto">
          <div tabIndex={0} className="bubble-card bg-card border border-border p-8 md:p-10 text-center shadow-sm hover:shadow-xl">
            <img
              src={teamImg}
              alt="Dr. Negar Ajoudani – Fachzahnärztin für Kieferorthopädie"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-56 h-56 rounded-full object-cover object-top mx-auto mb-6"
            />
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">Dr. med. dent. Negar Ajoudani</h3>
            <p className="text-primary font-semibold mb-5">Fachzahnärztin für Kieferorthopädie</p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm max-w-md mx-auto">
              Mit Kompetenz, Einfühlungsvermögen und modernsten Behandlungsmethoden 
              begleitet Dr. Ajoudani Patienten jeden Alters auf dem Weg zu einem 
              gesunden, schönen Lächeln.
            </p>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold group"
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
