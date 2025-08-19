import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisasterRestoration from "./pages/DisasterRestoration";
import FireDamageRestoration from "./pages/disaster-restoration/FireDamageRestoration";
import WaterDamageRestoration from "./pages/disaster-restoration/WaterDamageRestoration";
import StormDamageRestoration from "./pages/disaster-restoration/StormDamageRestoration";
import MoldRemediation from "./pages/disaster-restoration/MoldRemediation";
import RoofingServices from "./pages/disaster-restoration/RoofingServices";
import ConstructionServices from "./pages/disaster-restoration/ConstructionServices";
import CleaningServices from "./pages/disaster-restoration/CleaningServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disaster-restoration" element={<DisasterRestoration />} />
              <Route path="/disaster-restoration/fire-damage" element={<FireDamageRestoration />} />
              <Route path="/disaster-restoration/water-damage" element={<WaterDamageRestoration />} />
              <Route path="/disaster-restoration/storm-damage" element={<StormDamageRestoration />} />
              <Route path="/disaster-restoration/mold-remediation" element={<MoldRemediation />} />
              <Route path="/disaster-restoration/roofing-services" element={<RoofingServices />} />
              <Route path="/disaster-restoration/construction-services" element={<ConstructionServices />} />
              <Route path="/disaster-restoration/cleaning-services" element={<CleaningServices />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
