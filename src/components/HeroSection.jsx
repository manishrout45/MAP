import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* ================= HERO WRAPPER ================= */}
      <div className="relative min-h-[100vh] flex items-center overflow-hidden rounded-b-[60px]">

        {/* ================= BACKGROUND VIDEO ================= */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/assets/herobg-2.mp4" type="video/mp4" />
        </video>

        {/* ================= COLOR GRADIENT OVERLAY ================= */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/100 via-[#1e3a8a]/90 to-[#1e40af]/90" />

        {/* Soft Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-28 lg:py-36">
          
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

            {/* ================= LEFT SIDE ================= */}
            <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">

              <p className="text-sm text-orange-400 font-medium tracking-wide uppercase mb-6">
                ROI-Driven Digital Marketing Agency
              </p>

              <h1 className="text-white font-extrabold leading-[1.15] text-4xl sm:text-5xl md:text-6xl">
                Digital Marketing That Drives
                <span className="block text-orange-400 mt-2">
                  Traffic, Leads & Sales
                </span>
              </h1>

              <p className="text-white/75 mt-8 text-base md:text-lg leading-relaxed">
                Performance-driven strategies for SEO, paid ads, social media 
                marketing, and high-converting funnels designed to scale your 
                business sustainably.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 inline-block"
                >
                  Get Free Strategy Call
                </Link>

                <Link
                  to="/casestudies"
                  className="border border-white/40 hover:bg-white hover:text-blue-900 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-block"
                >
                  View Case Studies
                </Link>

              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="relative w-full max-w-xl">

                <img
                  src="/assets/images/HeroImg.png"
                  alt="Marketing Analytics Dashboard"
                  className="rounded-3xl "
                />
                {/* Floating Stats Cards */}
<div className="absolute -top-6 -left-4 hidden md:block z-20">
  <div className="relative bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-[20px] px-4 py-4 min-w-[180px]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>


    {/* Message Tail */}
<div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/95 rotate-45 "></div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium">
            Ad Performance
          </p>
          <h3 className="text-2xl font-extrabold text-blue-600 leading-none mt-1">
            +245%
          </h3>
        </div>

        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow-inner text-sm">
          📈
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-[10px] font-semibold">
          ↑ 38%
        </span>
        <p className="text-[10px] text-gray-500">
          this quarter
        </p>
      </div>
    </div>
  </div>
</div>

<div className="absolute -bottom-6 -right-4 hidden md:block z-20">
  <div className="relative bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-[20px] px-4 py-4 min-w-[180px]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-green-500/10 to-emerald-400/10"></div>

    {/* Message Tail */}
<div className="absolute -top-2 right-8 w-4 h-4 bg-white/95 rotate-45 "></div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium">
            Conversion
          </p>
          <h3 className="text-2xl font-extrabold text-green-600 leading-none mt-1">
            4.8%
          </h3>
        </div>

        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shadow-inner text-sm">
          🚀
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-semibold">
          Optimized
        </span>
        <p className="text-[10px] text-gray-500">
          funnel
        </p>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}