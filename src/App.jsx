import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";


// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ContentMarketing from "./pages/ContentMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import AdShoot from "./pages/AdShoot";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import BusinessBranding from "./pages/BusinessBranding";
import SMM from "./pages/SMM";
import SEO from "./pages/SEO"

// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GlobalCursor from "./components/GlobalCursor";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures page scroll resets on route change */}
      <Navbar />
      <GlobalCursor />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contentmarketing" element={<ContentMarketing />} />
        <Route path="/adshoot" element={<AdShoot />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/smm" element={<SMM />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/performancemarketing" element={<PerformanceMarketing />} />
        <Route path="/businessbranding" element={<BusinessBranding />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
