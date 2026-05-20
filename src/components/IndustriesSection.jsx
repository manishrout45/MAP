import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa6";

export default function IndustriesSection() {
  const testimonials = [
    {
      text:
        "MarcAdsPro Media has been amazing to work with. Their team is professional, creative, and delivers great results in social media, SEO, and online growth. Highly recommended.",
      name: "Anup Dhal",
      role: "Business Owner",
      image:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      text:
        "My experience with MarcAdsPro Media has been great. Their performance marketing service helped my store generate huge leads. Highly thankful to their team.",
      name: "Mihir Ranajan Mohanty",
      role: "Shop Owner",
      image:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      text:
        "They are best in gmb.",
      name: "Satyajit Mohapatra",
      role: "Business Owner",
      image:
        "https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  const partnerLogos = [
    "/assets/images/clientLogo/B4ULogo.png",
    "/assets/images/clientLogo/AnLoungeLogo.png",
    "/assets/images/clientLogo/GraceHomesLogo.png",
    "/assets/images/clientLogo/PillanceLogo.png",
    "/assets/images/clientLogo/RidleypubLogo.png",
    "/assets/images/clientLogo/DrSangramLogo.png",
    "/assets/images/clientLogo/HillSideAquaLogo.png",
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="industriessection" className="w-full pt-16 md:pt-24 pb-48 md:pb-28 px-4">
      <div className="relative max-w-7xl mx-auto">

        {/* ================= TOP BLUE CONTAINER ================= */}
        <div className="relative rounded-[28px] md:rounded-[48px] bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] px-5 md:px-12 pt-12 md:pt-20 pb-40 md:pb-60 overflow-hidden">

          <div className="max-w-3xl mx-auto text-white text-center">
            <p className="text-xs md:text-sm text-orange-400 mb-3 md:mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              Clients Testimonials
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-12">
              What Our Clients Say
            </h2>

            {/* ================= MARQUEE LOGOS ================= */}
            <div className="relative overflow-hidden">
              <div className="flex w-max items-center gap-8 md:gap-16 animate-marquee">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="marketing-partner"
                    className="h-14 sm:h-7 md:h-14 object-contain opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="absolute left-1/2 -bottom-60 md:-bottom-24  -translate-x-1/2 w-[94%] md:w-full max-w-4xl">
          <div className="bg-gray-100 rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-10 shadow-xl relative overflow-hidden">

            {/* MOBILE = COLUMN / DESKTOP = ROW */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">

              {/* QUOTE ICON */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaQuoteLeft className="text-blue-900 text-lg md:text-2xl" />
                </div>
              </div>

              {/* TESTIMONIAL SLIDER */}
              <div className="flex-1 overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {testimonials.map((t, i) => (
                    <div key={i} className="min-w-full">
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-relaxed text-center md:text-left">
                        {t.text}
                      </p>

                      <div className="mt-6 md:mt-8 border-t pt-5 md:pt-6 flex items-center justify-center md:justify-start gap-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm md:text-base text-gray-900">
                            {t.name}
                          </p>
                          <p className="text-xs md:text-sm text-gray-500">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 md:mt-0 md:absolute md:bottom-6 md:right-8 flex justify-center md:justify-end gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border bg-white hover:bg-gray-200 flex items-center justify-center transition"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={next}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border bg-white hover:bg-gray-200 flex items-center justify-center transition"
              >
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MARQUEE KEYFRAME ================= */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
        `}
      </style>
    </section>
  );
}