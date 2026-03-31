import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Termin vereinbaren
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir freuen uns auf Sie! Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                placeholder="Ihr vollständiger Name"
                className="mt-1.5"
              />
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
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={30}
                placeholder="040 ..."
                className="mt-1.5"
              />
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
                  <p className="text-muted-foreground text-sm mt-1">
                    Bergedorfer Straße 123<br />
                    21029 Hamburg Bergedorf
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefon</h4>
                  <a href="tel:+4940123456789" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors">
                    040 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">E-Mail</h4>
                  <a href="mailto:info@kfo-bergedorf.de" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors">
                    info@kfo-bergedorf.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Öffnungszeiten</h4>
                  <div className="text-muted-foreground text-sm mt-1 space-y-0.5">
                    <p>Mo – Do: 08:00 – 18:00 Uhr</p>
                    <p>Fr: 08:00 – 14:00 Uhr</p>
                    <p>Sa – So: geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl bg-muted border border-border flex items-center justify-center overflow-hidden">
              <iframe
                title="Standort KFO Bergedorf"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9524.46!2d10.2094!3d53.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1896e1b3e4f5d%3A0x4263df27bd63aa0!2sHamburg-Bergedorf!5e0!3m2!1sde!2sde!4v1700000000000"
                className="w-full h-full rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
