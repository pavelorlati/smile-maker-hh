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
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
      <FloatingPhone />
    </div>
  );
};

export default Layout;
