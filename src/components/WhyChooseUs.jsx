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
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-24 md:space-y-32">

        {/* ================= WHY CHOOSE US ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm font-medium text-[#ff5a3c]">
              • Why MarcAdsPro
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Helping brands grow faster with performance marketing
            </h2>

            <p className="text-black/60 mt-6 max-w-lg text-sm md:text-base">
              At MarcAdsPro, we focus on measurable growth. Our strategies are
              built around data, creativity, and performance to generate real
              business results.
            </p>

            {/* FEATURE GRID */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">

              {[
                {
                  icon: <Lightbulb size={22} />,
                  title: "Customized Strategies",
                  desc: "Tailored marketing strategies designed specifically for your business goals.",
                  color: "from-orange-100 to-orange-200 text-orange-600"
                },
                {
                  icon: <BarChart3 size={22} />,
                  title: "Data-Driven Campaigns",
                  desc: "Performance-focused campaigns backed by analytics and measurable results.",
                  color: "from-blue-100 to-indigo-200 text-blue-600"
                },
                {
                  icon: <Users size={22} />,
                  title: "Dedicated Attention",
                  desc: "End-to-end support with a team fully committed to your success.",
                  color: "from-purple-100 to-pink-200 text-purple-600"
                },
                {
                  icon: <FileBarChart size={22} />,
                  title: "Transparent Reporting",
                  desc: "Clear performance tracking and reporting so you always know your ROI.",
                  color: "from-green-100 to-emerald-200 text-green-600"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl p-7 shadow-md border border-gray-200 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE - BLOB SHAPE */}
          <div className="relative flex justify-center">
            <div className="relative">

              {/* Blob Image */}
              <img
                src="https://img.freepik.com/free-photo/handsome-smiling-young-man-pointing-finger_171337-17141.jpg"
                alt=""
                className="
                  w-[280px] h-[280px]
                  sm:w-[320px] sm:h-[320px]
                  md:w-[380px] md:h-[380px]
                  lg:w-[420px] lg:h-[420px]
                  object-cover
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                  shadow-2xl
                "
              />

              <FloatingCard
                title="98%"
                subtitle="Client Satisfaction"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                className="absolute top-0 -right-10"
              />

              <FloatingCard
                title="₹75L+"
                subtitle="Revenue Generated"
                extra="+32% Growth"
                style={{ transform: `translateY(${scrollY * -0.06}px)` }}
                className="absolute -bottom-6 -left-10"
              />
            </div>
          </div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE - DIAMOND SHAPE */}
          <div className="relative flex justify-center order-2 lg:order-1">
  <div className="relative w-[380px] lg:w-[460px] h-[420px] lg:h-[520px] group">

    {/* Background Gradient Blur */}
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-pink-200 to-purple-200 rounded-[50px] blur-3xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

    {/* Main Image Card */}
    <div className="relative overflow-hidden mt-16 rounded-[50px] shadow-2xl border border-white/30 transition duration-500 group-hover:scale-105">

      <img
        src="/assets/images/HowweWork.png"
        alt="Marketing Strategy"
        className="w-full h-[320px] lg:h-[420px] object-cover "
      />

          </div>

    {/* Floating Card */}
    <FloatingCard
      title="85%"
      subtitle="Avg. Engagement"
      style={{ transform: `translateY(${scrollY * 0.07}px)` }}
      className="absolute -top-0 -left-10 bg-white shadow-xl"
    />

    {/* Floating Badge */}
    <FloatingBadge
      text="Fast Execution"
      style={{ transform: `translateY(${scrollY * -0.09}px)` }}
      className="absolute -bottom-28 -right-8"
    />
  </div>
</div>
          {/* CONTENT */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium text-[#ff5a3c]">
              • How We Work
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              A proven system to scale <br /> your digital growth
            </h2>

            <p className="text-black/60 mt-6 max-w-lg text-sm md:text-base">
              Our approach combines strategy, creativity, analytics, and
              optimization to consistently deliver results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8 md:mt-10">
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
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-xs text-black/60">{subtitle}</p>
      {extra && <p className="text-xs text-green-500 mt-1">{extra}</p>}
    </div>
  );
}

function FloatingBadge({ text, className, style }) {
  return (
    <div
      style={style}
      className={`bg-white px-4 py-2 rounded-full shadow text-sm font-medium transition-transform duration-300 ${className}`}
    >
      {text}
    </div>
  );
}

function Service({ icon, title }) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition">
      <div className="w-10 h-10 rounded-lg bg-[#fff2ef] text-[#ff5a3c] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}