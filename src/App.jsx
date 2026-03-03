import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import ContentMarketing from "./pages/ContentMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import AdShoot from "./pages/AdShoot";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import BusinessBranding from "./pages/BusinessBranding";
import SMM from "./pages/SMM";
import SEO from "./pages/SEO";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GlobalCursor from "./components/GlobalCursor";




/* ===============================
   SCROLL HANDLER (IMPORTANT)
================================= */
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
}



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler />

      <Navbar />
      <GlobalCursor />
      <FloatingButtons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/casestudies" element={<CaseStudies />} />
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