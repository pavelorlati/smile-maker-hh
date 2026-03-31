import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+49407245241"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-18 md:h-18 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-phone-glow"
      aria-label="Jetzt anrufen"
    >
      <Phone className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
};

export default FloatingPhone;
