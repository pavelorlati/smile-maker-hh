import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was kostet eine kieferorthopädische Behandlung?",
    a: "Die Kosten variieren je nach Behandlungsumfang. Bei gesetzlich versicherten Kindern und Jugendlichen übernimmt die Krankenkasse einen Großteil der Kosten. Für Erwachsene und Zusatzleistungen erstellen wir Ihnen einen transparenten Kostenvoranschlag.",
  },
  {
    q: "Ab welchem Alter sollte mein Kind zum Kieferorthopäden?",
    a: "Wir empfehlen eine erste Untersuchung im Alter von 6–7 Jahren. So können wir frühzeitig eventuelle Fehlstellungen erkennen und die Entwicklung optimal begleiten.",
  },
  {
    q: "Wie lange dauert eine Behandlung?",
    a: "Die durchschnittliche Behandlungsdauer beträgt 1,5 bis 3 Jahre, abhängig von der Komplexität der Zahnfehlstellung. Bei Aligner-Therapien kann die Dauer kürzer sein.",
  },
  {
    q: "Tut eine Zahnspange weh?",
    a: "In den ersten Tagen nach dem Einsetzen oder Nachstellen kann es zu leichten Druckgefühlen kommen. Diese klingen schnell ab und sind mit modernen Materialien minimal.",
  },
  {
    q: "Kann ich auch als Erwachsener eine Zahnspange bekommen?",
    a: "Selbstverständlich! Immer mehr Erwachsene entscheiden sich für eine kieferorthopädische Behandlung. Mit Invisalign oder linguale Brackets bieten wir besonders ästhetische Lösungen.",
  },
  {
    q: "Wie oft muss ich zur Kontrolle kommen?",
    a: "In der Regel alle 4–8 Wochen, je nach Behandlungsphase. Die Termine dauern meist nur 15–30 Minuten.",
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
