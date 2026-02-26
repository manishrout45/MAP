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
                  src="https://img.freepik.com/premium-photo/complex-business-application-website-with-statistic-infographic-design-aig53_31965-597884.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_user_personalization&w=740&q=80"
                  alt="Marketing Analytics Dashboard"
                  className="rounded-3xl shadow-2xl border border-white/10"
                />

                <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-5 hidden md:block">
                  <p className="text-xs text-gray-500 mb-1">Ad Performance</p>
                  <p className="text-2xl font-bold text-blue-600">+245%</p>
                  <p className="text-xs text-green-500 mt-1">
                    ↑ 38% this quarter
                  </p>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-5 hidden md:block">
                  <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                  <p className="text-2xl font-bold text-green-600">4.8%</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Optimized funnel
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}