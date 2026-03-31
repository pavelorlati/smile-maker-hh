import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ab welchem Alter kann mein Kind behandelt werden?",
    a: "Eine erste kieferorthopädische Beratung empfehlen wir ab etwa 6–7 Jahren. So lassen sich Fehlstellungen frühzeitig erkennen und bei Bedarf sanft korrigieren.",
  },
  {
    q: "Bin ich zu alt für eine Zahnkorrektur?",
    a: "Definitiv nicht! Viele unserer Patient:innen sind Erwachsene – die heutigen Methoden sind effektiv, diskret und komfortabel.",
  },
  {
    q: "Welche Spangenarten bieten Sie an?",
    a: "Je nach Alter und Bedarf: herausnehmbare Spangen, feste Zahnspangen, Keramikbrackets oder transparente Aligner. Wir beraten Sie individuell.",
  },
  {
    q: "Was gilt als kieferorthopädischer Notfall?",
    a: "Zum Beispiel ein gebrochenes Bracket, ein störender Draht oder Schmerzen durch die Spange. Rufen Sie uns an – wir beraten Sie, ob Sie direkt vorbeikommen sollten.",
  },
  {
    q: "Kann ich auch ohne Termin bei Notfällen kommen?",
    a: "Ja, aber bitte rufen Sie immer vorher kurz an – so können wir die Dringlichkeit einschätzen und schnell reagieren.",
  },
  {
    q: "Ich habe Angst vor Schmerzen – wie läuft die Behandlung ab?",
    a: "Unsere Methoden sind sanft und auf minimalen Stress ausgerichtet. Wir erklären jeden Schritt genau und behandeln schmerzarm – mit Empathie und moderner Technik.",
  },
  {
    q: "Muss ich meine Angst vorher mitteilen?",
    a: "Sehr gerne – denn je mehr wir wissen, desto besser können wir auf Sie eingehen. Sagen Sie uns einfach bei der Terminvereinbarung Bescheid.",
  },
  {
    q: "Was kann ich zu Hause tun, wenn ein Draht stört?",
    a: "Der Draht kann vorsichtig mit einem stumpfen Gegenstand (z.B. einem Löffelstiel) weggedrückt werden. Wachs aus dem Startset hilft gegen Reibung. Kommen Sie aber zeitnah in die Praxis, damit wir professionell helfen können.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Häufige Fragen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen unserer Patienten.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-card shadow-sm">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
