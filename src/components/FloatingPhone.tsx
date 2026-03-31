import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+49407245241"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-fade-in"
      aria-label="Jetzt anrufen"
    >
      <Phone className="h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
};

export default FloatingPhone;
