

## Redesign: Professioneller Aufbau nach VBLH-Vorbild

Die Referenz-Website (vblh.de) hat ein sauberes, professionelles Design ohne typische AI-Merkmale. Das aktuelle Design nutzt zu viele Gradient-Effekte, Glow-Schatten, Glass-Morphism und schwebende Orbs, die es "AI-generiert" wirken lassen.

### Analyse: Was macht VBLH professionell?
- Klare, flache Farbflächen statt Gradient-Overlays
- Saubere Karten mit dezenten Schatten statt Glass-Morphism
- Keine schwebenden Blur-Orbs oder animierte Dekorelemente
- Strukturierter Aufbau: Hero → Schnellzugriff-Karten → Inhalte abwechselnd → Kontakt → Footer
- Schlichtes, seriöses Farbschema

### Geplante Änderungen

**1. CSS-Grundlagen bereinigen (`src/index.css`)**
- `gradient-text` entfernen oder durch einfache Primärfarbe ersetzen
- `glass-card` vereinfachen: solider weißer Hintergrund, dezenter Schatten, kein Backdrop-Blur
- `btn-gradient` durch sauberen Primärfarben-Button ersetzen
- `section-divider` dezenter gestalten
- `cta-badge` vereinfachen
- Shadow-Variablen reduzieren (kein Glow)

**2. Hero (`src/components/Hero.tsx`)**
- Dekorative Gradient-Orbs entfernen
- Saubereres Overlay über dem Hintergrund
- `gradient-text` durch weiße oder einfarbige Hervorhebung ersetzen
- Trust-Indikatoren beibehalten, aber schlichter gestalten

**3. Startseite (`src/pages/Index.tsx`)**
- Aufbau wie VBLH: Hero → "Was können wir für Sie tun?" Schnellzugriff → CTA → Footer
- `gradient-text` und `cta-badge` durch schlichtere Varianten ersetzen
- Karten-Hover-Effekte dezenter

**4. About (`src/components/About.tsx`)**
- Blur-Orb im Hintergrund entfernen
- Gradient-Glow hinter dem Bild entfernen
- Floating Stats-Badge statisch machen
- Saubere Text-Hervorhebung statt `gradient-text`

**5. Services (`src/components/Services.tsx`)**
- Hintergrund-Orb entfernen
- Karten schlichter: keine farbigen Ecken-Overlays
- Saubere Iconfarben ohne Gradient-Hintergründe

**6. Team (`src/components/Team.tsx`)**
- Riesigen Blur-Orb entfernen
- Animated glow um das Foto entfernen
- Schlichtere Karte

**7. Testimonials (`src/components/Testimonials.tsx`)**
- Blur-Orb entfernen
- Hover-Effekte dezenter

**8. CTABanner (`src/components/CTABanner.tsx`)**
- Saubere Primärfarbe statt Gradient
- Keine dekorativen Blur-Orbs

**9. Contact (`src/components/Contact.tsx`)**
- Blur-Orb entfernen
- Schlichtere Kartenoptik

**10. Footer (`src/components/Footer.tsx`)**
- Bereits sauber, minimal anpassen

**11. Navbar (`src/components/Navbar.tsx`)**
- Bereits gut, backdrop-blur beibehalten da es hier dezent und funktional ist

### Betroffene Dateien
- `src/index.css` - Basis-Styles
- `src/components/Hero.tsx`
- `src/pages/Index.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Team.tsx`
- `src/components/Testimonials.tsx`
- `src/components/CTABanner.tsx`
- `src/components/Contact.tsx`

### Ergebnis
Eine professionelle, seriöse Kieferorthopädie-Website mit klarem Aufbau, sauberen Farben und ohne die typischen AI-Design-Merkmale wie Gradient-Text, Glow-Schatten und schwebende Farbkugeln.

