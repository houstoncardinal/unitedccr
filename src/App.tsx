import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DisasterRestoration from "./pages/DisasterRestoration";
import RoofingServices from "./pages/RoofingServices";
import ConstructionServices from "./pages/ConstructionServices";
import CleaningServices from "./pages/CleaningServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/disaster-restoration" element={<DisasterRestoration />} />
          <Route path="/roofing-services" element={<RoofingServices />} />
          <Route path="/construction-services" element={<ConstructionServices />} />
          <Route path="/cleaning-services" element={<CleaningServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
