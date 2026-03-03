"use client";

import { useEffect, useState } from "react";
import {
  Lightbulb,
  BarChart3,
  Users,
  FileBarChart,
  Rocket,
  PieChart,
  PenTool,
  Search,
} from "lucide-react";

export default function WhyChooseUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 md:space-y-32">

        {/* ================= WHY CHOOSE US ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-medium text-[#ff5a3c]">
              • Why MarcAdsPro
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Helping brands grow faster with performance marketing
            </h2>

            <p className="text-black/60 mt-5 sm:mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
              At MarcAdsPro, we focus on measurable growth. Our strategies are
              built around data, creativity, and performance to generate real
              business results.
            </p>

            {/* FEATURE GRID */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: <Lightbulb size={20} />,
                  title: "Customized Strategies",
                  desc: "Tailored marketing strategies designed specifically for your business goals.",
                  color: "from-orange-100 to-orange-200 text-orange-600",
                },
                {
                  icon: <BarChart3 size={20} />,
                  title: "Data-Driven Campaigns",
                  desc: "Performance-focused campaigns backed by analytics and measurable results.",
                  color: "from-blue-100 to-indigo-200 text-blue-600",
                },
                {
                  icon: <Users size={20} />,
                  title: "Dedicated Attention",
                  desc: "End-to-end support with a team fully committed to your success.",
                  color: "from-purple-100 to-pink-200 text-purple-600",
                },
                {
                  icon: <FileBarChart size={20} />,
                  title: "Transparent Reporting",
                  desc: "Clear performance tracking and reporting so you always know your ROI.",
                  color: "from-green-100 to-emerald-200 text-green-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200 transition-all duration-300 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 transition`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div className="relative">

              <img
                src="https://img.freepik.com/free-photo/handsome-smiling-young-man-pointing-finger_171337-17141.jpg"
                alt="Marketing Expert"
                className="
                  w-[240px] h-[240px]
                  sm:w-[300px] sm:h-[300px]
                  md:w-[360px] md:h-[360px]
                  lg:w-[420px] lg:h-[420px]
                  object-cover
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                  shadow-2xl
                "
              />

              {/* Floating Cards Hidden on Small Screens */}
              <div className="hidden sm:block">
                <FloatingCard
                  title="98%"
                  subtitle="Client Satisfaction"
                  style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                  className="absolute top-2 sm:top-0 -right-6 sm:-right-10"
                />

                <FloatingCard
                  title="₹75L+"
                  subtitle="Revenue Generated"
                  extra="+32% Growth"
                  style={{ transform: `translateY(${scrollY * -0.06}px)` }}
                  className="absolute -bottom-6 -left-6 sm:-left-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] h-[350px] sm:h-[420px] lg:h-[520px] group">

              <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-pink-200 to-purple-200 rounded-[40px] lg:rounded-[50px] blur-3xl opacity-40"></div>

              <div className="relative overflow-hidden mt-10 sm:mt-16 rounded-[40px] lg:rounded-[50px] shadow-2xl border border-white/30">

                <img
                  src="/assets/images/HowweWork.png"
                  alt="Marketing Strategy"
                  className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover"
                />
              </div>

              <div className="hidden sm:block">
                <FloatingCard
                  title="85%"
                  subtitle="Avg. Engagement"
                  style={{ transform: `translateY(${scrollY * 0.07}px)` }}
                  className="absolute top-0 -left-8 bg-white shadow-xl"
                />

                <FloatingBadge
                  text="Fast Execution"
                  style={{ transform: `translateY(${scrollY * -0.09}px)` }}
                  className="absolute -bottom-20 -right-6"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-sm font-medium text-[#ff5a3c]">
              • How We Work
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              A proven system to scale your digital growth
            </h2>

            <p className="text-black/60 mt-5 sm:mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
              Our approach combines strategy, creativity, analytics, and
              optimization to consistently deliver results.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
              <Service icon={<Rocket />} title="High-Impact Ad Campaigns" />
              <Service icon={<PieChart />} title="Performance & ROI Tracking" />
              <Service icon={<PenTool />} title="Creative Ad & Content Design" />
              <Service icon={<Search />} title="SEO & Traffic Optimization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function FloatingCard({ title, subtitle, extra, className, style }) {
  return (
    <div
      style={style}
      className={`bg-white rounded-xl shadow-lg px-4 py-3 text-center transition-transform duration-300 ${className}`}
    >
      <h4 className="text-lg sm:text-xl font-bold">{title}</h4>
      <p className="text-xs text-black/60">{subtitle}</p>
      {extra && <p className="text-xs text-green-500 mt-1">{extra}</p>}
    </div>
  );
}

function FloatingBadge({ text, className, style }) {
  return (
    <div
      style={style}
      className={`bg-white px-4 py-2 rounded-full shadow text-xs sm:text-sm font-medium transition-transform duration-300 ${className}`}
    >
      {text}
    </div>
  );
}

function Service({ icon, title }) {
  return (
    <div className="border rounded-xl p-4 sm:p-5 hover:shadow-md transition">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#fff2ef] text-[#ff5a3c] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
    </div>
  );
}