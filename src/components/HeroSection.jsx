import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white">
      {/* ================= HERO BACKGROUND ================= */}
      <div className="relative min-h-[90vh] overflow-hidden rounded-b-[48px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-wave-purple-background-modern-design-abstract_343694-2321.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
          }}
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e2b8f]/90 via-[#2b4aa5]/85 to-[#8a2c4f]/90" />

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 sm:pt-32 lg:pt-40">
          <p className="text-xs sm:text-sm text-white/80 flex items-center justify-center gap-2">
            <span className="text-orange-400">★</span>
            ROI-Driven Digital Marketing Agency
          </p>

          <h1 className="text-white font-extrabold leading-tight mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Scale Your Brand With <br />
            High-Impact Digital Growth
          </h1>

          <p className="text-white/80 max-w-xl mx-auto mt-5 text-sm sm:text-base">
            MarcAdsPro helps businesses grow faster with data-driven ads,
            SEO, social media marketing, and conversion-focused strategies.
          </p>

          <button className="mt-10 sm:mt-12 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 sm:px-8 sm:py-4 rounded-xl font-medium shadow-lg">
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
          className="absolute left-10 bottom-44 w-24 hidden md:block z-10"
        />
        <img
          src="/assets/3d-shape-right.png"
          alt=""
          className="absolute right-12 bottom-52 w-24 hidden md:block z-10"
        />
      </div>

      {/* ================= FLOATING CARDS ================= */}
      <div className="absolute left-1/2 top-[calc(90vh-60px)] w-full max-w-6xl px-6 -translate-x-1/2 z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <p className="text-xs uppercase tracking-wide text-white/70">
              Campaign Performance
            </p>

            <h2 className="text-5xl font-bold mt-2">+320%</h2>

            <p className="text-sm text-white/80 mt-1">
              Average Return on Ad Spend
            </p>

            {/* REALISTIC GRAPH */}
            <div className="mt-6 h-20">
              <svg viewBox="0 0 120 50" className="w-full h-full">

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="120" y2="40" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
                <line x1="0" y1="30" x2="120" y2="30" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
                <line x1="0" y1="20" x2="120" y2="20" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>

                {/* Gradient */}
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Area Fill */}
                <polygon
                  points="0,38 20,34 40,36 60,28 80,20 100,12 120,8 120,50 0,50"
                  fill="white"
                  opacity="0.08"
                />

                {/* Line */}
                <polyline
                  points="0,38 20,34 40,36 60,28 80,20 100,12 120,8"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                {[ [0,38], [20,34], [40,36], [60,28], [80,20], [100,12], [120,8] ].map(
                  ([x,y],i)=>(
                    <circle key={i} cx={x} cy={y} r="1.8" fill="white"/>
                  )
                )}

              </svg>
            </div>

            <div className="mt-4 text-xs text-green-300 font-medium">
              ↑ 42% growth last 90 days
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <p className="text-xs uppercase tracking-wide text-white/70">
              Lead Generation
            </p>

            <h2 className="text-5xl font-bold mt-2">10K+</h2>

            <p className="text-sm text-white/80">
              Qualified Leads / Month
            </p>

            <div className="flex items-center gap-2 mt-5">
              <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
              <span className="text-xs ml-2 text-white/80">
                120+ active clients
              </span>
            </div>

            <div className="mt-5">
              <div className="w-full h-2 bg-white/20 rounded-full">
                <div className="w-[75%] h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-xs mt-2 text-white/70">
                Conversion optimization performance
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">
                Certified Marketing Experts
              </h3>
              <span className="text-orange-400 text-sm mt-2">
                VIEW CASE STUDIES →
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Spacer */}
      <div className="h-[320px]" />
    </section>
  );
}
