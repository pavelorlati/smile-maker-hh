import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const faqs = [
  { q: "Ab welchem Alter kann mein Kind behandelt werden?", a: "Eine erste kieferorthopädische Beratung empfehlen wir ab etwa 6–7 Jahren. So lassen sich Fehlstellungen frühzeitig erkennen und bei Bedarf sanft korrigieren." },
  { q: "Bin ich zu alt für eine Zahnkorrektur?", a: "Definitiv nicht! Viele unserer Patient:innen sind Erwachsene – die heutigen Methoden sind effektiv, diskret und komfortabel." },
  { q: "Welche Spangenarten bieten Sie an?", a: "Je nach Alter und Bedarf: herausnehmbare Spangen, feste Zahnspangen, Keramikbrackets oder transparente Aligner. Wir beraten Sie individuell." },
  { q: "Was gilt als kieferorthopädischer Notfall?", a: "Zum Beispiel ein gebrochenes Bracket, ein störender Draht oder Schmerzen durch die Spange. Rufen Sie uns an – wir beraten Sie, ob Sie direkt vorbeikommen sollten." },
  { q: "Kann ich auch ohne Termin bei Notfällen kommen?", a: "Ja, aber bitte rufen Sie immer vorher kurz an – so können wir die Dringlichkeit einschätzen und schnell reagieren." },
  { q: "Ich habe Angst vor Schmerzen – wie läuft die Behandlung ab?", a: "Unsere Methoden sind sanft und auf minimalen Stress ausgerichtet. Wir erklären jeden Schritt genau und behandeln schmerzarm – mit Empathie und moderner Technik." },
  { q: "Muss ich meine Angst vorher mitteilen?", a: "Sehr gerne – denn je mehr wir wissen, desto besser können wir auf Sie eingehen. Sagen Sie uns einfach bei der Terminvereinbarung Bescheid." },
  { q: "Was kann ich zu Hause tun, wenn ein Draht stört?", a: "Der Draht kann vorsichtig mit einem stumpfen Gegenstand weggedrückt werden. Wachs aus dem Startset hilft gegen Reibung. Kommen Sie aber zeitnah in die Praxis." },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div className="lg:sticky lg:top-32">
            <span className="cta-badge mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 mt-4">
              Häufig gestellte{" "}
              <span className="gradient-text">Fragen</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen unserer Patienten. 
              Sie haben eine andere Frage? Kontaktieren Sie uns gerne!
            </p>
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm group"
            >
              Beratungstermin buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
