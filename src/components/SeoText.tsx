interface SeoTextProps {
  heading: string;
  paragraphs: string[];
}

const SeoText = ({ heading, paragraphs }: SeoTextProps) => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            {heading}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoText;
