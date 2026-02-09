import React from "react";

export default function About() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ================= TOP CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm text-orange-500 font-medium mb-4">
            ● About MarcAdsPro
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            We help businesses grow faster <br />
            with data-driven digital <br />
            marketing strategies
          </h2>

          <p className="text-gray-500 mt-6 max-w-lg text-sm leading-relaxed">
            MarcAdsPro is a results-focused digital marketing agency helping
            brands generate qualified leads, boost online visibility, and
            maximize ROI through performance marketing, SEO, and social media.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://img.freepik.com/premium-photo/group-people-looking-digital-tablet-with-social-media-icons-workplace_926199-2209176.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
            alt="MarcAdsPro Team"
            className="w-64 md:w-80"
          />
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          {
            no: "01",
            title: "Performance-First Approach",
            desc:
              "Every strategy we build is focused on measurable growth, higher conversions, and long-term ROI.",
            link: "ABOUT US",
          },
          {
            no: "02",
            title: "Custom Growth Strategies",
            desc:
              "We don’t believe in one-size-fits-all. Our campaigns are tailored to your industry, goals, and audience.",
            link: "OUR SERVICES",
          },
          {
            no: "03",
            title: "Certified Marketing Experts",
            desc:
              "Our team consists of experienced professionals in paid ads, SEO, content, and analytics.",
            link: "WORK WITH US",
          },
        ].map((item) => (
          <div key={item.no} className="group">
            {/* NUMBER */}
            <span
              className="
                text-6xl font-extrabold
                relative inline-block
                bg-gradient-to-r from-pink-400 to-blue-400
                bg-clip-text text-transparent
                [-webkit-text-stroke:4.8px_transparent]
                before:content-[attr(data-text)]
                before:absolute before:inset-0
                before:bg-white
                before:bg-clip-text before:text-transparent
                before:[-webkit-text-stroke:3.2px]
                before:[-webkit-text-fill-color:white]
                group-hover:before:opacity-0
                transition-all duration-500
              "
              data-text={item.no}
            >
              {item.no}
            </span>

            <h4 className="mt-6 font-bold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-4">{item.desc}</p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-black"
            >
              {item.link} <span className="text-orange-500">→</span>
            </a>
          </div>
        ))}
      </div>

      {/* ================= CROSS MARQUEE ================= */}
      <div className="relative w-full h-80 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-[7deg] bg-blue-600 py-6">
          <div className="flex gap-16 marquee">
            <MarqueeText />
            <MarqueeText />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-[7deg] bg-black py-6">
          <div className="flex gap-16 marquee-slow">
            <MarqueeText />
            <MarqueeText />
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeText() {
  return (
    <div className="flex items-center gap-12 whitespace-nowrap text-2xl md:text-3xl font-extrabold text-white">
      <span>ROI-Driven Marketing</span>
      <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" />
      <span>Leads. Sales. Growth.</span>
      <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" />
      <span>ROI-Driven Marketing</span>
      <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" />
      <span>Leads. Sales. Growth.</span>
    </div>
  );
}
