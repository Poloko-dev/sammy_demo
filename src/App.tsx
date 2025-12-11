import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Alerts from "./pages/Alerts";
import Mentions from "./pages/Mentions";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Configuration from "./pages/Configuration";
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
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/configuration" element={<Configuration />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
