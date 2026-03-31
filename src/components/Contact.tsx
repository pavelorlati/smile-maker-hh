import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "Erstberatung", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setForm({ firstName: "", lastName: "", email: "", subject: "Erstberatung", message: "" });
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Haben Sie Fragen?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nehmen Sie Kontakt zu uns auf!
          </h2>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" asChild className="rounded-full px-8 py-6 text-base shadow-lg">
            <a href="tel:+49407245241">
              <Phone className="h-5 w-5 mr-2" />
              Jetzt anrufen: 040 7 24 52 41
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-base">
            <a href="mailto:praxis@kieferorthopaedie-bergedorf.de">
              <Mail className="h-5 w-5 mr-2" />
              E-Mail schreiben
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-base">
            <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
              Online-Termin buchen
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Vorname *</Label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  required
                  maxLength={100}
                  placeholder="Ihr Vorname"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nachname *</Label>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  required
                  maxLength={100}
                  placeholder="Ihr Nachname"
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                placeholder="ihre@email.de"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="subject">Anliegen</Label>
              <select
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1.5"
              >
                <option value="Erstberatung">Erstberatung</option>
                <option value="Termin stornieren">Termin stornieren</option>
                <option value="Angstpatientenbehandlung">Angstpatientenbehandlung</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">Nachricht *</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={1000}
                placeholder="Wie können wir Ihnen helfen?"
                className="mt-1.5 min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full rounded-full py-6 text-base">
              Nachricht senden
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Adresse</h4>
                  <a
                    href="https://maps.app.goo.gl/C1Nj8u9JsQ2931EQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors block"
                  >
                    Bergedorfer Schloßstraße 18<br />
                    21029 Hamburg
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefon</h4>
                  <a href="tel:+49407245241" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors block font-medium">
                    +49 (0) 40 7 24 52 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">E-Mail</h4>
                  <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors block">
                    praxis@kieferorthopaedie-bergedorf.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Öffnungszeiten</h4>
                  <div className="text-muted-foreground text-sm mt-1 space-y-1">
                    <p><span className="font-medium text-foreground/80">Mo, Di, Do:</span> 09:00 – 12:00, 13:30 – 17:00 Uhr</p>
                    <p><span className="font-medium text-foreground/80">Mi, Fr:</span> 09:00 – 12:00 Uhr</p>
                    <p><span className="font-medium text-foreground/80">Sa, So:</span> geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <a
              href="https://maps.app.goo.gl/C1Nj8u9JsQ2931EQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video rounded-2xl bg-muted border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <iframe
                title="Standort Kieferorthopädie Bergedorf – Bergedorfer Schloßstraße 18"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.5!2d10.2094!3d53.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1896e1b3e4f5d%3A0x4263df27bd63aa0!2sBergedorfer+Schlo%C3%9Fstra%C3%9Fe+18%2C+21029+Hamburg!5e0!3m2!1sde!2sde!4v1700000000000"
                className="w-full h-full rounded-2xl pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
