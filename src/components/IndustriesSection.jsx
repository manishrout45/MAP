import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function IndustriesSection() {
  /* ================= TESTIMONIAL DATA ================= */
  const testimonials = [
    {
      text:
        "MarcAdsPro transformed our ad performance across Google and Meta. Data-driven approach helped us scale with a lower cost per acquisition.",
      name: "Aarav Mehta",
      role: "E-commerce Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text:
        "From strategy to execution, Marcads Pro team delivered consistent leads and clear ROI reporting. Highly recommended for growth-focused brands.",
      name: "Sophia Williams",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text:
        "Their performance marketing expertise helped us dominate our niche. Every campaign was optimized for conversions, not just clicks.",
      name: "Daniel Foster",
      role: "Startup CEO",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  /* ================= PARTNER LOGOS ================= */
const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="industriessection" className="w-full py-24">
      <div className="relative max-w-7xl mx-auto">

        {/* ================= GRADIENT CONTAINER ================= */}
        <div className="relative rounded-[48px] bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] px-12 pt-20 pb-60 overflow-hidden">

          {/* CENTERED CONTENT */}
          <div className="max-w-3xl mx-auto text-white text-center">

            <p className="text-sm text-orange-400 mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              Clients Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
              What Our Clients Say
            </h2>

            {/* ================= PARTNER LOGO MARQUEE ================= */}
            <div className="relative overflow-hidden">
              <div className="flex w-max items-center gap-16 animate-marquee">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="marketing-partner"
                    className="
                      h-8 md:h-10
                      object-contain
                      opacity-80
                      hover:opacity-100
                      transition
                    "
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= TESTIMONIAL ================= */}
        <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 w-full max-w-4xl">
          <div className="bg-gray-100 rounded-[28px] p-10 shadow-xl relative overflow-hidden">

            {/* Quote */}
            <div className="absolute left-10 top-10">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl font-bold">
                “
              </div>
            </div>

            {/* Slides */}
            <div className="relative h-[160px] overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full pl-28 pr-6">
                    <p className="text-lg md:text-xl font-semibold text-gray-900">
                      {t.text}
                    </p>

                    <div className="mt-8 border-t pt-6 flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-6 right-8 flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border bg-white hover:bg-gray-200 flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border bg-white hover:bg-gray-200 flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MARQUEE ANIMATION ================= */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 24s linear infinite;
          }
        `}
      </style>
    </section>
  );
}