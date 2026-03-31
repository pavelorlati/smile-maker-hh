const cases = [
  { id: 1, label: "Engstand-Korrektur" },
  { id: 2, label: "Überbiss-Behandlung" },
  { id: 3, label: "Lückenstand" },
  { id: 4, label: "Kreuzbiss-Korrektur" },
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Ergebnisse
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Vorher & Nachher
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Überzeugen Sie sich selbst von unseren Behandlungsergebnissen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border flex flex-col items-center justify-center gap-4 group-hover:shadow-lg transition-shadow">
                <div className="flex gap-2">
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
                    Vorher
                  </div>
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
                    Nachher
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
