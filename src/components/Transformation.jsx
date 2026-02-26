import React, { useEffect, useRef, useState } from "react";

export default function Transformation() {
  const cards = [
    {
      title: "Performance Marketing Expertise",
      desc: "Our specialists bring deep expertise in Google Ads, Meta Ads, and conversion-focused marketing strategies that drive measurable growth.",
      img: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631009.jpg?w=740",
      icon: (
        <i className="fa-solid fa-chart-line fa-beat text-orange-500 text-xl" />
      ),
    },
    {
      title: "Data-Driven Growth Strategies",
      desc: "Every campaign is built on analytics, audience insights, and continuous optimization to maximize ROI and scale profitably.",
      img: "https://img.freepik.com/free-photo/man-is-working-computer-with-graph-screen_23-2151929046.jpg?w=740",
      icon: (
        <i className="fa-solid fa-rocket fa-bounce text-orange-500 text-xl" />
      ),
    },
    {
      title: "Results-Focused Partnerships",
      desc: "We work as an extension of your team, aligning our strategies with your business goals to deliver consistent leads and revenue.",
      img: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003788.jpg?w=740",
      icon: (
        <i className="fa-solid fa-handshake fa-beat-fade text-orange-500 text-xl" />
      ),
    },
  ];

  const stats = [
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 1000000, suffix: "+", label: "Ad Spend Managed" },
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Industries Served" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounts();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, incrementTime);
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    return num;
  };

  return (
    <section id="transformation" className="w-full py-24">
      <div
        ref={sectionRef}
        className="relative max-w-7xl mx-auto rounded-[32px] bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] overflow-hidden"
      >
        {/* Floating Logo */}
        <div className="absolute top-6 right-8">
          <img
            src="/assets/logo-u.png"
            alt="MarcAdsPro Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white py-20">

          <p className="text-xs tracking-widest uppercase text-orange-400 mb-4">
            ● Scale Smarter With MarcAdsPro
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-16">
            Transform your digital growth <br />
            with performance-driven marketing
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white text-gray-800 rounded-2xl p-6 text-left h-[360px] flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg leading-snug">
                    {card.title}
                  </h3>

                  <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    {card.icon}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                  {card.desc}
                </p>

                <img
                  src={card.img}
                  alt=""
                  className="w-full h-32 object-cover mt-auto rounded-2xl transition-[border-radius,transform] duration-700 ease-in-out group-hover:rounded-full group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* STATS WITH ANIMATION */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative h-[1px] w-full mb-6 overflow-hidden bg-white/25">
                  <span className="absolute left-0 top-0 h-full w-0 bg-orange-400 transition-all duration-700 ease-out group-hover:w-full" />
                </div>

                <h3 className="text-5xl md:text-6xl font-bold tracking-tight group-hover:text-orange-400 transition-colors">
                  {formatNumber(counts[index])}
                  {stat.suffix}
                </h3>

                <p className="text-base md:text-lg text-white/80 mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}