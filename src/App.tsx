import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

const Leistungen = lazy(() => import("./pages/Leistungen"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const Bewertungen = lazy(() => import("./pages/Bewertungen"));
const Galerie = lazy(() => import("./pages/Galerie"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Formulare = lazy(() => import("./pages/Formulare"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/bewertungen" element={<Bewertungen />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/formulare" element={<Formulare />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
