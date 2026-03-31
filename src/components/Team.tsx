const Team = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Moderne Praxis Bergedorf
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Unser Praxisteam
          </h2>
        </div>

        <div className="max-w-md mx-auto text-center">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 shadow-lg">
            <span className="text-3xl font-display font-bold text-primary">NA</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">Dr. Negar Ajoudani</h3>
          <p className="text-primary font-medium mb-4">Fachzahnärztin für Kieferorthopädie</p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Mit Kompetenz, Einfühlungsvermögen und modernsten Behandlungsmethoden 
            begleitet Dr. Ajoudani Patienten jeden Alters auf dem Weg zu einem 
            gesunden, schönen Lächeln.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
