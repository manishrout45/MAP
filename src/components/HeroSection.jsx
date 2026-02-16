import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ================= HERO BACKGROUND ================= */}
      <div className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden rounded-b-[32px] sm:rounded-b-[48px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-wave-purple-background-modern-design-abstract_343694-2321.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
          }}
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14213D]/90 via-[#2b4aa5]/85 to-[#1F3C88]/90" />

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-32 lg:pt-64">
          <p className="text-xs sm:text-sm text-white/80 flex items-center justify-center gap-2">
            <span className="text-orange-400">★</span>
            ROI-Driven Digital Marketing Agency
          </p>

          <h1 className="text-white font-extrabold leading-tight mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Scale Your Brand With</span>
            <span className="block">High-Impact Digital Growth</span>
          </h1>

          <p className="text-white/80 max-w-xl mx-auto mt-5 text-sm sm:text-base px-2 sm:px-0">
            MarcAdsPro helps businesses grow faster with data-driven ads,
            SEO, social media marketing, and conversion-focused strategies.
          </p>

          <button className="mt-8 sm:mt-12 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium shadow-lg">
            Get Free Strategy Call
            <span className="bg-white text-orange-500 rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* Decorative Shapes */}
        <img
          src="/assets/3d-shape-left.png"
          alt=""
          className="absolute left-6 bottom-32 w-16 sm:w-20 md:w-24 hidden sm:block z-10"
        />
        <img
          src="/assets/3d-shape-right.png"
          alt=""
          className="absolute right-6 bottom-36 w-16 sm:w-20 md:w-24 hidden sm:block z-10"
        />
      </div>

      {/* ================= FLOATING CARDS ================= */}
      <div
        className="
          relative
          md:absolute md:left-1/2
          md:top-[calc(85vh-40px)]
          md:sm:top-[calc(90vh-60px)]
          md:-translate-x-1/2
          w-full max-w-6xl px-4 sm:px-6
          z-30 mt-10 md:mt-0
        "
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">

          {/* CARD 1 */}
          <div className="h-full bg-gradient-to-br from-purple-600 to-violet-700 
                          rounded-xl sm:rounded-2xl 
                          p-4 sm:p-5 lg:p-6 
                          text-white shadow-2xl relative overflow-hidden">

            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-white/70">
              Campaign Performance
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              +320%
            </h2>

            <p className="text-xs sm:text-sm text-white/80 mt-1">
              Average Return on Ad Spend
            </p>

            <div className="mt-4 sm:mt-6 h-14 sm:h-16 lg:h-20">
              <svg viewBox="0 0 120 50" className="w-full h-full">
                <polygon
                  points="0,38 20,34 40,36 60,28 80,20 100,12 120,8 120,50 0,50"
                  fill="white"
                  opacity="0.08"
                />
                <polyline
                  points="0,38 20,34 40,36 60,28 80,20 100,12 120,8"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-3 text-[10px] sm:text-xs text-green-300 font-medium">
              ↑ 42% growth last 90 days
            </div>
          </div>

          {/* CARD 2 */}
          <div className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 
                          rounded-xl sm:rounded-2xl 
                          p-4 sm:p-5 lg:p-6 
                          text-white shadow-2xl relative overflow-hidden">

            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-white/70">
              Lead Generation
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              10K+
            </h2>

            <p className="text-xs sm:text-sm text-white/80">
              Qualified Leads / Month
            </p>

            <div className="mt-4">
              <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full">
                <div className="w-[75%] h-1.5 sm:h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-[10px] sm:text-xs mt-2 text-white/70">
                Conversion optimization performance
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="h-full relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 p-4 sm:p-5 lg:p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                Certified Marketing Experts
              </h3>
              <span className="text-orange-400 text-xs sm:text-sm mt-2">
                VIEW CASE STUDIES →
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Spacer */}
      <div className="h-[300px] sm:h-[250px] lg:h-[220px]" />
    </section>
  );
}
