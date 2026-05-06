import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText } from "lucide-react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { useState } from "react";

type AnamneseData = {
  patient_vorname: string;
  patient_nachname: string;
  patient_strasse_ort: string;
  patient_geburtsdatum_ort: string;
  patient_telefon: string;
  versichert_vorname: string;
  versichert_nachname: string;
  versichert_strasse_ort: string;
  versichert_geburtsdatum: string;
  versichert_telefon: string;
  email: string;
  krankenkasse: string;
  aktueller_zahnarzt: string;
  kfo_bei: string;
  allergien_details: string;
  datum: string;
  unterschrift: string;
  bemerkungen: string;
};

type DatenschutzData = {
  name_patient: string;
  geburtsdatum: string;
  adresse: string;
  ort_datum: string;
  unterschrift_patient: string;
  notizen_datenschutz: string;
};

type DownloadResult = { url: string; filename: string };

const emptyAnamnese: AnamneseData = {
  patient_vorname: "",
  patient_nachname: "",
  patient_strasse_ort: "",
  patient_geburtsdatum_ort: "",
  patient_telefon: "",
  versichert_vorname: "",
  versichert_nachname: "",
  versichert_strasse_ort: "",
  versichert_geburtsdatum: "",
  versichert_telefon: "",
  email: "",
  krankenkasse: "",
  aktueller_zahnarzt: "",
  kfo_bei: "",
  allergien_details: "",
  datum: "",
  unterschrift: "",
  bemerkungen: "",
};

const emptyDatenschutz: DatenschutzData = {
  name_patient: "",
  geburtsdatum: "",
  adresse: "",
  ort_datum: "",
  unterschrift_patient: "",
  notizen_datenschutz: "",
};

type CheckboxOption = { name: string; label: string };
type CheckboxGroup = { title: string; options: CheckboxOption[] };

const anamneseGroups: CheckboxGroup[] = [
  {
    title: "Versicherung",
    options: [
      { name: "gesetzlich_versichert", label: "gesetzlich" },
      { name: "privat_versichert", label: "privat" },
    ],
  },
  {
    title: "Grund des Besuchs",
    options: [
      { name: "grund_ueberweisung", label: "Überweisung" },
      { name: "grund_eigen", label: "Eigener Entschluss" },
      { name: "grund_eltern", label: "Wunsch der Eltern" },
    ],
  },
  {
    title: "KFO-Behandlung",
    options: [
      { name: "kfo_ja", label: "ja" },
      { name: "kfo_nein", label: "nein" },
    ],
  },
  {
    title: "Logo-/Ergotherapie",
    options: [
      { name: "logo_ja", label: "ja" },
      { name: "logo_nein", label: "nein" },
    ],
  },
  {
    title: "Zahnunfall",
    options: [
      { name: "unfall_ja", label: "ja" },
      { name: "unfall_nein", label: "nein" },
    ],
  },
  {
    title: "Herzerkrankungen",
    options: [
      { name: "herzerkrankungen_ja", label: "ja" },
      { name: "herzerkrankungen_nein", label: "nein" },
    ],
  },
  {
    title: "Asthma / Atemwege",
    options: [
      { name: "asthma_atemwegserkrankungen_ja", label: "ja" },
      { name: "asthma_atemwegserkrankungen_nein", label: "nein" },
    ],
  },
  {
    title: "Allergien",
    options: [
      { name: "allergien_ja", label: "ja" },
      { name: "allergien_nein", label: "nein" },
    ],
  },
];

const datenschutzCheckboxes = [
  ["einwilligung_behandlung", "Datenverarbeitung zur Behandlung"],
  ["einwilligung_abrechnung", "Weitergabe zur Abrechnung"],
  ["einwilligung_erinnerung", "Termin-Erinnerungen"],
  ["einwilligung_kontakt", "Kontakt per Telefon oder E-Mail"],
] as const;

const savePdf = async (bytes: Uint8Array, filename: string): Promise<DownloadResult> => {
  const data = new Uint8Array(bytes);
  const blob = new Blob([data.buffer as ArrayBuffer], { type: "application/pdf" });
  const file = new File([blob], filename, { type: "application/pdf" });

  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({ files: [file], title: filename });
    return { url: "", filename };
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  return { url, filename };
};

const fillPdf = async (source: string, fields: Record<string, string>, checks: Record<string, boolean>) => {
  const response = await fetch(source);
  const pdf = await PDFDocument.load(await response.arrayBuffer());
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const form = pdf.getForm();

  Object.entries(fields).forEach(([name, value]) => {
    const field = form.getTextField(name);
    field.setText(value || "");
    field.updateAppearances(font);
  });

  Object.entries(checks).forEach(([name, checked]) => {
    const field = form.getCheckBox(name);
    checked ? field.check() : field.uncheck();
  });

  form.updateFieldAppearances(font);
  return pdf.save({ updateFieldAppearances: true });
};

const FormularField = ({ label, value, onChange, textarea = false }: { label: string; value: string; onChange: (value: string) => void; textarea?: boolean }) => (
  <div>
    <Label>{label}</Label>
    {textarea ? (
      <Textarea value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5 min-h-[120px]" />
    ) : (
      <Input value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5" />
    )}
  </div>
);

const Formulare = () => {
  const { toast } = useToast();
  const [anamnese, setAnamnese] = useState(emptyAnamnese);
  const [datenschutz, setDatenschutz] = useState(emptyDatenschutz);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [download, setDownload] = useState<DownloadResult | null>(null);

  const updateAnamnese = (name: keyof AnamneseData, value: string) => setAnamnese((current) => ({ ...current, [name]: value }));
  const updateDatenschutz = (name: keyof DatenschutzData, value: string) => setDatenschutz((current) => ({ ...current, [name]: value }));
  const toggle = (name: string, checked: boolean) => setChecks((current) => ({ ...current, [name]: checked }));

  const downloadAnamnese = async () => {
    setLoading("anamnese");
    try {
      const pdf = await fillPdf("/dokumente/Anamnesebogen.pdf", anamnese, checks);
      const result = await savePdf(pdf, "Anamnesebogen-ausgefuellt.pdf");
      if (result.url) setDownload(result);
      toast({ title: "Anamnesebogen gespeichert", description: "Die PDF wurde mit Ihren Angaben heruntergeladen und bleibt bearbeitbar." });
    } finally {
      setLoading(null);
    }
  };

  const downloadDatenschutz = async () => {
    setLoading("datenschutz");
    try {
      const pdf = await fillPdf("/dokumente/Datenschutz.pdf", datenschutz, checks);
      const result = await savePdf(pdf, "Datenschutz-ausgefuellt.pdf");
      if (result.url) setDownload(result);
      toast({ title: "Datenschutzerklärung gespeichert", description: "Die PDF wurde mit Ihren Angaben heruntergeladen und bleibt bearbeitbar." });
    } finally {
      setLoading(null);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <span className="section-badge mb-3">Formulare</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Anamnesebogen & Datenschutz ausfüllen</h1>
          </div>

          {download?.url && (
            <a
              href={download.url}
              download={download.filename}
              className="mb-6 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              PDF in Dateien speichern: {download.filename}
            </a>
          )}

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <form className="bg-card border border-border rounded-lg p-5 md:p-7 space-y-6" onSubmit={(event) => event.preventDefault()}>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-semibold text-foreground">Anamnesebogen</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormularField label="Vorname Patient/in" value={anamnese.patient_vorname} onChange={(value) => updateAnamnese("patient_vorname", value)} />
                <FormularField label="Nachname Patient/in" value={anamnese.patient_nachname} onChange={(value) => updateAnamnese("patient_nachname", value)} />
                <FormularField label="Straße, PLZ und Ort" value={anamnese.patient_strasse_ort} onChange={(value) => updateAnamnese("patient_strasse_ort", value)} />
                <FormularField label="Geburtsdatum & -ort" value={anamnese.patient_geburtsdatum_ort} onChange={(value) => updateAnamnese("patient_geburtsdatum_ort", value)} />
                <FormularField label="Telefon / Handy" value={anamnese.patient_telefon} onChange={(value) => updateAnamnese("patient_telefon", value)} />
                <FormularField label="E-Mail" value={anamnese.email} onChange={(value) => updateAnamnese("email", value)} />
                <FormularField label="Krankenkasse" value={anamnese.krankenkasse} onChange={(value) => updateAnamnese("krankenkasse", value)} />
                <FormularField label="Aktueller Zahnarzt" value={anamnese.aktueller_zahnarzt} onChange={(value) => updateAnamnese("aktueller_zahnarzt", value)} />
                <FormularField label="KFO-Behandlung bei" value={anamnese.kfo_bei} onChange={(value) => updateAnamnese("kfo_bei", value)} />
                <FormularField label="Ort, Datum" value={anamnese.datum} onChange={(value) => updateAnamnese("datum", value)} />
              </div>
              <FormularField label="Versicherte Person, falls abweichend" value={anamnese.versichert_vorname} onChange={(value) => updateAnamnese("versichert_vorname", value)} />
              <FormularField label="Allergien / Details" value={anamnese.allergien_details} onChange={(value) => updateAnamnese("allergien_details", value)} />
              <FormularField label="Bemerkungen" value={anamnese.bemerkungen} onChange={(value) => updateAnamnese("bemerkungen", value)} textarea />
              <div className="grid sm:grid-cols-2 gap-3">
                {anamneseCheckboxes.map(([name, label]) => (
                  <label key={name} className="flex items-center gap-2 text-sm text-foreground">
                    <Checkbox checked={Boolean(checks[name])} onCheckedChange={(checked) => toggle(name, checked === true)} />
                    {label}
                  </label>
                ))}
              </div>
              <Button type="button" onClick={downloadAnamnese} disabled={loading === "anamnese"} className="w-full">
                <Download className="h-4 w-4" />
                {loading === "anamnese" ? "PDF wird erstellt…" : "Anamnesebogen als bearbeitbare PDF herunterladen"}
              </Button>
            </form>

            <form className="bg-card border border-border rounded-lg p-5 md:p-7 space-y-6" onSubmit={(event) => event.preventDefault()}>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-semibold text-foreground">Datenschutz</h2>
              </div>
              <FormularField label="Name Patient/in" value={datenschutz.name_patient} onChange={(value) => updateDatenschutz("name_patient", value)} />
              <FormularField label="Geburtsdatum" value={datenschutz.geburtsdatum} onChange={(value) => updateDatenschutz("geburtsdatum", value)} />
              <FormularField label="Adresse" value={datenschutz.adresse} onChange={(value) => updateDatenschutz("adresse", value)} />
              <FormularField label="Ort, Datum" value={datenschutz.ort_datum} onChange={(value) => updateDatenschutz("ort_datum", value)} />
              <FormularField label="Unterschrift / Name" value={datenschutz.unterschrift_patient} onChange={(value) => updateDatenschutz("unterschrift_patient", value)} />
              <FormularField label="Notizen / Rückfragen" value={datenschutz.notizen_datenschutz} onChange={(value) => updateDatenschutz("notizen_datenschutz", value)} textarea />
              <div className="space-y-3">
                {datenschutzCheckboxes.map(([name, label]) => (
                  <label key={name} className="flex items-center gap-2 text-sm text-foreground">
                    <Checkbox checked={Boolean(checks[name])} onCheckedChange={(checked) => toggle(name, checked === true)} />
                    {label}
                  </label>
                ))}
              </div>
              <Button type="button" onClick={downloadDatenschutz} disabled={loading === "datenschutz"} className="w-full">
                <Download className="h-4 w-4" />
                {loading === "datenschutz" ? "PDF wird erstellt…" : "Datenschutz als bearbeitbare PDF herunterladen"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formulare;