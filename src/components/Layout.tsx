import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
      <FloatingPhone />
    </div>
  );
};

export default Layout;
