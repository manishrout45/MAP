"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Target,
  Rocket,
  Search,
  MousePointerClick,
  Share2,
  MonitorSmartphone,
  PenTool,
} from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Performance Marketing",
      desc:
        "We run data-driven ad campaigns focused on conversions, ROI, and scalable business growth across digital platforms.",
      icon: <BarChart3 className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/performancemarketing",
    },
    {
      title: "Paid Advertising",
      desc:
        "We create high-performing ad strategies on Google, Facebook, and Instagram to drive qualified leads and sales.",
      icon: <Target className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/adshoot",
    },
    {
      title: "Branding & Growth Strategy",
      desc:
        "We build strong brand identities and growth strategies that help businesses stand out and scale sustainably.",
      icon: <Rocket className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/businessbranding",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc:
        "Improve your organic visibility and achieve higher keyword rankings with strategic SEO optimization.",
      icon: <Search className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/seo",
    },
    {
      title:
        "Pay-Per-Click Advertising (PPC / Google Ads / Meta Ads)",
      desc:
        "Target the right audience and maximize ROI through optimized bidding strategies.",
      icon: (
        <MousePointerClick className="w-7 h-7 text-[#ff5a3c]" />
      ),
      link: "/adshoot",
    },
    {
      title: "Social Media Management",
      desc:
        "Build powerful brands on Facebook, Instagram, and LinkedIn with strategic content and engagement.",
      icon: <Share2 className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/smm",
    },
    {
      title: "Website Design & Development",
      desc:
        "Mobile-friendly websites designed for conversions and optimized user experience with scalable performance architecture.",
      icon: (
        <MonitorSmartphone className="w-7 h-7 text-[#ff5a3c]" />
      ),
      link: "/webdevelopment",
    },
    {
      title: "Content & Branding Services",
      desc:
        "Professional copywriting and brand identity creation to position your business for long-term success.",
      icon: <PenTool className="w-7 h-7 text-[#ff5a3c]" />,
      link: "/contentmarketing",
    },
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  const extended = [
    services[services.length - 1],
    ...services,
    services[0],
  ];

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const auto = setInterval(nextSlide, 5000);
    return () => clearInterval(auto);
  }, []);

  useEffect(() => {
    if (current === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }
    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(services.length);
      }, 700);
    }
    setTimeout(() => setTransition(true), 50);
  }, [current]);

  return (
    <section id="services" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />
              <p className="text-sm font-medium text-[#ff5a3c]">
                Our Core Services
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight max-w-2xl">
              Results-driven digital marketing services for modern businesses
            </h2>
          </div>

          <Link
            to="/contentmarketing"
            className="self-start lg:self-center inline-flex items-center gap-2 bg-[#ff5a3c] text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition"
          >
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* CARD SECTION */}
        <div className="relative">

          {/* ARROWS */}
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#ff5a3c] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#ff5a3c] hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className={`flex ${
                transition
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${current * (100 / 3)}%)`,
              }}
            >
              {extended.map((item, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <div className="group relative rounded-2xl p-8 overflow-hidden bg-[#f3f3f3] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                    {/* GRADIENT */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff5a3c 0%, #14213D 50%, #1F3C88 100%)",
                      }}
                    />

                    {/* DOT PATTERN (UNCHANGED) */}
                    <div
                      className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-60 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "7px 7px",
                        maskImage:
                          "radial-gradient(circle at center, black 60%, transparent 100%)",
                        WebkitMaskImage:
                          "radial-gradient(circle at center, black 60%, transparent 100%)",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-[float_4s_ease-in-out_infinite]">
                        {item.icon}
                      </div>

                      <h3 className="text-xl font-bold mb-4 group-hover:text-white transition">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-white/90 transition">
                        {item.desc}
                      </p>

                      <Link
                        to={item.link}
                        className="flex items-center gap-2 text-sm font-semibold text-black group-hover:text-white transition"
                      >
                        Learn More
                        <ArrowRight
                          size={14}
                          className="text-[#ff5a3c] group-hover:translate-x-1 transition-transform"
                        />
                      </Link>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}