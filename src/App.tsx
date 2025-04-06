
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InterviewProvider } from "./context/InterviewContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import InterviewSetupPage from "./pages/InterviewSetupPage";
import InterviewSessionPage from "./pages/InterviewSessionPage";
import InterviewResultsPage from "./pages/InterviewResultsPage";
import InterviewTipsPage from "./pages/InterviewTipsPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <InterviewProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-screen bg-background pt-6 pb-12">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/interview/setup" element={<InterviewSetupPage />} />
              <Route path="/interview/session/:id" element={<InterviewSessionPage />} />
              <Route path="/interview/results/:id" element={<InterviewResultsPage />} />
              <Route path="/tips" element={<InterviewTipsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </InterviewProvider>
  </QueryClientProvider>
);

export default App;
