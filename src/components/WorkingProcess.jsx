import React, { useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Research & Strategy",
    desc:
      "We analyze your business goals, target audience, and competitors to craft a data-driven marketing strategy that delivers real results.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    num: "02",
    title: "Planning & Setup",
    desc:
      "Our team creates a structured execution plan, selects the right channels, and sets up tools to ensure smooth campaign performance.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    num: "03",
    title: "Execution",
    desc:
      "We launch and manage campaigns with precision, continuously monitoring performance to maximize engagement and conversions.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    num: "04",
    title: "Optimization",
    desc:
      "Using real-time data, we optimize ads, content, and funnels to improve ROI and achieve sustainable business growth.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
];

export default function WorkingProcess() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index) => {
    const cardWidth = 420 + 32;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActive(index);
  };

  return (
    <section className="w-full py-28 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-[60px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-white">

        <div className="text-center mb-16">
          <p className="text-orange-400 mb-3 tracking-wide">
            • Our Working Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore how our digital marketing works
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-10 scroll-smooth no-scrollbar"
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className="group min-w-[420px] bg-white text-gray-800 rounded-3xl p-8 relative 
              transition-all duration-500 ease-out hover:shadow-2xl"
            >
              <div className="flex gap-6 items-start mb-10">

                {/* Image Smooth Morph */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-2xl 
                  transition-all duration-700 ease-in-out 
                  group-hover:rounded-full group-hover:scale-105"
                />

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              {/* Number Smooth Animation */}
              <span className="absolute bottom-6 right-6 text-4xl font-bold text-orange-400 border border-orange-300 px-3 py-1 rounded-lg 
              transition-all duration-500 ease-in-out
              group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 group-hover:scale-110">
                {item.num}
              </span>
            </div>
          ))}
        </div>

        {/* Carousel Buttons */}
        <div className="flex justify-center mt-8 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
}
