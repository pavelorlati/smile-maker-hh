import { ArrowRight } from "lucide-react";
import ajoudaniAsset from "@/assets/ajoudani-new.jpeg.asset.json";
import altiparmakAsset from "@/assets/altiparmak.jpeg.asset.json";
import stephanieAnime from "@/assets/anime-stephanie.jpeg.asset.json";
import doreenAnime from "@/assets/anime-doreen.jpeg.asset.json";
import masomeAnime from "@/assets/anime-masome.jpeg.asset.json";
import huemiAnime from "@/assets/anime-huemi.jpeg.asset.json";
import phuongAnime from "@/assets/anime-phuong.jpeg.asset.json";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

type Member = {
  name: string;
  role: string;
  image?: string;
  objectPosition?: string;
  zoom?: number;
};

const teamGroups: { title: string; members: Member[] }[] = [
  {
    title: "Assistenz Zahnarzt",
    members: [{ name: "Dr. M. Altiparmak", role: "Assistenz Zahnarzt", image: altiparmakAsset.url }],
  },
  {
    title: "Anmeldung / Praxismanagerin / ZFA",
    members: [{ name: "Hümi", role: "Anmeldung & Praxismanagement", image: huemiAnime.url }],
  },
  {
    title: "Verwaltungsfachangestellte / ZMP",
    members: [{ name: "Stephanie", role: "Verwaltung & Prophylaxe", image: stephanieAnime.url }],
  },
  {
    title: "Zahnmedizinische Fachangestellte",
    members: [{ name: "Doreen", role: "Zahnmedizinische Fachangestellte / Bestellung Beauftragte", image: doreenAnime.url }],
  },
  {
    title: "Auszubildende",
    members: [
      { name: "Masome", role: "Auszubildende", image: masomeAnime.url },
      { name: "Phuong", role: "Auszubildende", image: phuongAnime.url },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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

        {/* Fachärztin */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Fachärztin</span>
          </div>
          <div tabIndex={0} className="bubble-card bg-card border border-border p-8 md:p-10 text-center shadow-sm hover:shadow-xl">
            <img
              src={ajoudaniAsset.url}
              alt="Dr. med. dent. Negar Ajoudani – Fachzahnärztin für Kieferorthopädie"
              loading="lazy"
              className="w-56 h-56 rounded-full object-cover object-top mx-auto mb-6"
            />
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">
              Dr. med. dent. Negar Ajoudani
            </h3>
            <p className="text-muted-foreground text-sm mb-1">(Dr. Neggy)</p>
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

        {/* Weiteres Team */}
        <div className="max-w-5xl mx-auto space-y-12">
          {teamGroups.map((group) => (
            <div key={group.title}>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="section-divider mt-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {group.members.map((m) => (
                  <div
                    key={m.name}
                    className="bubble-card bg-card border border-border p-6 text-center shadow-sm hover:shadow-lg"
                  >
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover object-top mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center text-primary font-display font-bold text-xl">
                        {initials(m.name)}
                      </div>
                    )}
                    <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                      {m.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
