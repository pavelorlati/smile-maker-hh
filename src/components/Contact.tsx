import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "Erstberatung", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet! ✓",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setForm({ firstName: "", lastName: "", email: "", subject: "Erstberatung", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 glass-card p-8 rounded-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Vorname *</Label>
          <Input id="firstName" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required maxLength={100} placeholder="Ihr Vorname" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lastName">Nachname *</Label>
          <Input id="lastName" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required maxLength={100} placeholder="Ihr Nachname" className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">E-Mail *</Label>
        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} placeholder="ihre@email.de" className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="subject">Anliegen</Label>
        <select id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1.5">
          <option value="Erstberatung">Erstberatung</option>
          <option value="Termin stornieren">Termin stornieren</option>
          <option value="Angstpatientenbehandlung">Angstpatientenbehandlung</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
      <div>
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} placeholder="Wie können wir Ihnen helfen?" className="mt-1.5 min-h-[120px]" />
      </div>
      <button type="submit" className="btn-gradient w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-base group">
        <Send className="h-4 w-4" />
        Nachricht senden
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: <a href="https://maps.app.goo.gl/C1Nj8u9JsQ2931EQ7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Bergedorfer Schloßstraße 18<br />21029 Hamburg</a>,
  },
  {
    icon: Phone,
    title: "Telefon",
    content: <a href="tel:+49407245241" className="hover:text-primary transition-colors font-medium">+49 (0) 40 7 24 52 41</a>,
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="hover:text-primary transition-colors">praxis@kieferorthopaedie-bergedorf.de</a>,
  },
];

const Contact = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="cta-badge mb-4">Kontakt</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 mt-4">
            Wir freuen uns auf Sie
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Quick action cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
          <a href="tel:+49407245241" className="glass-card rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground block">Anrufen</span>
            <span className="text-xs text-muted-foreground">040 7 24 52 41</span>
          </a>
          <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="glass-card rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground block">E-Mail</span>
            <span className="text-xs text-muted-foreground">Schreiben Sie uns</span>
          </a>
          <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="relative rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                <CalendarCheck className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-white block">Online buchen</span>
              <span className="text-xs text-white/70">24/7 über Doctolib</span>
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactForm />

          <div className="space-y-8">
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 glass-card rounded-xl p-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <div className="text-muted-foreground text-sm mt-0.5">{item.content}</div>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4 glass-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Öffnungszeiten</h4>
                  <div className="text-muted-foreground text-sm mt-1 space-y-0.5">
                    <p><span className="font-medium text-foreground/80">Mo, Di, Do:</span> 09:00 – 12:00, 13:30 – 17:00</p>
                    <p><span className="font-medium text-foreground/80">Mi, Fr:</span> 09:00 – 12:00</p>
                    <p><span className="font-medium text-foreground/80">Sa, So:</span> geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

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
