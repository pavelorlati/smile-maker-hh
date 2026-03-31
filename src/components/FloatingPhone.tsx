import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+49407245241"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center animate-phone-glow transition-transform duration-200 hover:scale-110 group"
      aria-label="Jetzt anrufen"
      style={{ background: "var(--gradient-primary)" }}
    >
      <Phone className="h-7 w-7 md:h-8 md:w-8 text-white group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default FloatingPhone;
