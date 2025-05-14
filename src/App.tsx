
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from './pages/ServiceDetail'; 
import AllServices from "./pages/AllServices";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VirtualBidManager from "./pages/VirtualBidManager";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/all-services" element={<AllServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/virtual-bid-manager" element={<VirtualBidManager />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
