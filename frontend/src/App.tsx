import { Navigate, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Contact from "@/pages/Contact";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/about-us" element={<Navigate to="/about" replace />} />
      <Route path="/our-services" element={<Navigate to="/services" replace />} />
      <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
      <Route path="/linkedin-management" element={<Navigate to="/services/linkedin-management" replace />} />
      <Route path="/email-outreach" element={<Navigate to="/services/email-outreach" replace />} />
      <Route path="/business-support" element={<Navigate to="/services/business-support" replace />} />
      <Route path="/ai-video-creation" element={<Navigate to="/services/ai-video-creation" replace />} />
      <Route path="/lead-generation" element={<Navigate to="/services/lead-generation" replace />} />
      <Route path="/email-setup" element={<Navigate to="/services/email-setup" replace />} />
    </Routes>
  );
}
