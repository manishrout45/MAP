import { useEffect, useState } from "react";
import {
  BarChart3,
  Target,
  TrendingUp,
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

          {/* LEFT */}
          <div>
            <span className="text-sm font-medium text-[#ff5a3c]">
              • Why MarcAdsPro
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Helping brands grow faster <br /> with performance marketing
            </h2>

            <p className="text-black/60 mt-6 max-w-lg text-sm md:text-base">
              At MarcAdsPro, we focus on measurable growth. Our strategies are
              built around data, creativity, and performance to generate real
              business results.
            </p>

            <div className="mt-8 md:mt-10 space-y-8">
              <Feature
                icon={<BarChart3 size={18} />}
                title="Increase Online Visibility"
                desc="Boost reach through SEO, paid ads, and social media marketing."
              />
              <Feature
                icon={<Target size={18} />}
                title="Reach the Right Audience"
                desc="Target users who are most likely to convert into customers."
              />
              <Feature
                icon={<TrendingUp size={18} />}
                title="Maximize ROI & Sales"
                desc="Optimized funnels and ad strategies focused on conversions."
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div
              className="
              relative
              w-[280px] h-[280px]
              sm:w-[320px] sm:h-[320px]
              md:w-[380px] md:h-[380px]
              lg:w-[420px] lg:h-[420px]
              rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500
              flex items-center justify-center
            "
            >
              <img
                src="https://img.freepik.com/free-photo/handsome-smiling-young-man-pointing-finger_171337-17141.jpg"
                alt=""
                className="
                w-[240px] h-[240px]
                sm:w-[280px] sm:h-[280px]
                md:w-[330px] md:h-[330px]
                lg:w-[360px] lg:h-[360px]
                object-cover rounded-full
              "
              />

              {/* FLOATING CARDS */}
              <FloatingCard
                title="98%"
                subtitle="Client Satisfaction"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                className="
                  absolute
                  top-2 right-2
                  sm:top-2 sm:-right-6
                  lg:top-2 lg:-right-10
                "
              />

              <FloatingCard
                title="₹75L+"
                subtitle="Revenue Generated"
                extra="+32% Growth"
                style={{ transform: `translateY(${scrollY * -0.06}px)` }}
                className="
                  absolute
                  bottom-4 left-2
                  sm:bottom-10 sm:-left-6
                  lg:bottom-14 lg:-left-12
                "
              />
            </div>
          </div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div
              className="
              relative
              w-[280px] h-[280px]
              sm:w-[320px] sm:h-[320px]
              md:w-[380px] md:h-[380px]
              lg:w-[420px] lg:h-[420px]
              rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500
              flex items-center justify-center
            "
            >
              <img
                src="https://img.freepik.com/free-photo/portrait-happy-young-woman-showing-ok-sign_171337-13035.jpg"
                alt=""
                className="
                w-[240px] h-[240px]
                sm:w-[280px] sm:h-[280px]
                md:w-[330px] md:h-[330px]
                lg:w-[360px] lg:h-[360px]
                object-cover rounded-full
              "
              />

              <FloatingCard
                title="85%"
                subtitle="Avg. Engagement"
                style={{ transform: `translateY(${scrollY * 0.07}px)` }}
                className="
                  absolute
                  top-2 left-2
                  sm:top-2 sm:-left-6
                  lg:top-2 lg:-left-12
                "
              />

              <FloatingBadge
                text="Fast Execution"
                style={{ transform: `translateY(${scrollY * -0.09}px)` }}
                className="
                  absolute
                  bottom-2 right-2
                  sm:-bottom-8 sm:right-4
                  lg:-bottom-16 lg:right-0
                "
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

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10 rounded-full bg-[#fff2ef] text-[#ff5a3c] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-black/60 mt-1">{desc}</p>
      </div>
    </div>
  );
}

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
