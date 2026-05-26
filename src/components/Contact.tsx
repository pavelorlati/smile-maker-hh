import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CalendarCheck, FileText, Download, PencilLine, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const DOCTOLIB_URL = "https://www.doctolib.de/einzelpraxis/hamburg/kieferorthopaedie-ajoudani-negar?utm_campaign=website-button&utm_source=kieferorthopaedie-ajoudani-negar-website-button&utm_medium=referral&utm_content=option-8&utm_term=kieferorthopaedie-ajoudani-negar";

const PRAXIS_EMAIL = "praxis@kieferorthopaedie-bergedorf.de";

type MailProvider = "default" | "gmail" | "outlook" | "yahoo";

const buildMailLink = (provider: MailProvider, to: string, subject: string, body: string) => {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  const t = encodeURIComponent(to);
  switch (provider) {
    case "gmail":
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${t}&su=${s}&body=${b}`;
    case "outlook":
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${t}&subject=${s}&body=${b}`;
    case "yahoo":
      return `https://compose.mail.yahoo.com/?to=${t}&subject=${s}&body=${b}`;
    case "default":
    default:
      return `mailto:${to}?subject=${s}&body=${b}`;
  }
};

const ContactForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "Erstberatung", message: "" });

  const mailSubject = `${form.subject} – Anfrage von ${form.firstName} ${form.lastName}`.trim();
  const mailBody = `Guten Tag,

${form.message}

Mit freundlichen Grüßen
${form.firstName} ${form.lastName}
E-Mail: ${form.email}`;

  const isValid = form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.message.trim();

  const openWith = (provider: MailProvider) => {
    if (!isValid) return;
    const url = buildMailLink(provider, PRAXIS_EMAIL, mailSubject, mailBody);
    if (provider === "default") {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const providers: { id: MailProvider; label: string; hint: string }[] = [
    { id: "default", label: "Standard / Apple Mail", hint: "Mail-App auf diesem Gerät" },
    { id: "gmail", label: "Gmail", hint: "Im Browser öffnen" },
    { id: "outlook", label: "Outlook", hint: "Outlook im Web" },
    { id: "yahoo", label: "Yahoo Mail", hint: "Im Browser öffnen" },
  ];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-card border border-border rounded-lg p-7 space-y-5">
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

      <div className="pt-1">
        <p className="text-sm font-semibold text-foreground mb-2">Nachricht im E-Mail-Programm öffnen:</p>
        <p className="text-xs text-muted-foreground mb-3">
          Wählen Sie Ihr E-Mail-Programm – Ihre Nachricht wird dort vorausgefüllt geöffnet. Sie können sie noch prüfen, anpassen und anschließend absenden.
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {providers.map((p) => (
            <button
              key={p.id}
              type="button"
              disabled={!isValid}
              onClick={() => openWith(p.id)}
              className="flex items-center justify-between gap-3 p-3 rounded-md border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors group text-left disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:border-border"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-foreground block truncate">{p.label}</span>
                  <span className="text-xs text-muted-foreground truncate block">{p.hint}</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </button>
          ))}
        </div>
        {!isValid && (
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Bitte füllen Sie zuerst die Pflichtfelder aus.
          </p>
        )}
      </div>
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge mb-3">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 mt-3">
            Wir freuen uns auf Sie
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          <a href="tel:+49407245241" className="bg-card border border-border rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-200">
            <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-3">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground block">Anrufen</span>
            <span className="text-xs text-muted-foreground">040 7 24 52 41</span>
          </a>
          <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="bg-card border border-border rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-200">
            <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground block">E-Mail</span>
            <span className="text-xs text-muted-foreground">Schreiben Sie uns</span>
          </a>
          <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="bg-primary rounded-lg p-5 text-center hover:bg-primary/90 transition-colors duration-200">
            <div className="w-11 h-11 rounded-lg bg-primary-foreground/15 flex items-center justify-center mx-auto mb-3">
              <CalendarCheck className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-primary-foreground block">Online buchen</span>
            <span className="text-xs text-primary-foreground/70">24/7 über Doctolib</span>
          </a>
          <a href="#formulare" className="bg-card border border-border rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-200">
            <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-3">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground block">Formulare</span>
            <span className="text-xs text-muted-foreground">Anamnese & Datenschutz</span>
          </a>
        </div>

        <div id="formulare" className="max-w-5xl mx-auto mb-12 scroll-mt-32">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">Anamnesebogen & Datenschutz</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sparen Sie Zeit beim ersten Termin: Laden Sie die Formulare bequem auf Ihr Gerät herunter
                  und füllen Sie die leeren Felder direkt am Computer, Tablet oder Smartphone aus –
                  ganz ohne Drucken. Senden Sie uns die ausgefüllten PDFs anschließend per E-Mail zurück
                  oder bringen Sie sie ausgedruckt zum Termin mit.
                </p>
              </div>
            </div>
            <Link
              to="/formulare"
              className="mb-3 flex items-center justify-between gap-3 p-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-primary-foreground/15 flex items-center justify-center">
                  <PencilLine className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold block">Direkt am Handy ausfüllen</span>
                  <span className="text-xs text-primary-foreground/75">Danach als bearbeitbare PDF speichern</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/dokumente/Anamnesebogen.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-between gap-3 p-4 rounded-md border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-foreground block">Anamnesebogen</span>
                    <span className="text-xs text-muted-foreground">PDF zum Ausfüllen</span>
                  </div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="/dokumente/Datenschutz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-between gap-3 p-4 rounded-md border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-foreground block">Datenschutzerklärung</span>
                    <span className="text-xs text-muted-foreground">PDF zum Ausfüllen</span>
                  </div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Tipp: Auf dem iPad lassen sich die PDFs direkt in der Dateien-App oder in „Vorschau" mit dem Apple Pencil unterschreiben.
              Senden Sie die ausgefüllten Dokumente an{" "}
              <a href="mailto:praxis@kieferorthopaedie-bergedorf.de" className="text-primary hover:underline">
                praxis@kieferorthopaedie-bergedorf.de
              </a>.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <ContactForm />

          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <div className="text-muted-foreground text-sm mt-0.5">{item.content}</div>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
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
              className="block aspect-video rounded-lg bg-muted border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <iframe
                title="Standort Kieferorthopädie Bergedorf – Bergedorfer Schloßstraße 18"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.5!2d10.2094!3d53.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1896e1b3e4f5d%3A0x4263df27bd63aa0!2sBergedorfer+Schlo%C3%9Fstra%C3%9Fe+18%2C+21029+Hamburg!5e0!3m2!1sde!2sde!4v1700000000000"
                className="w-full h-full rounded-lg pointer-events-none"
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
