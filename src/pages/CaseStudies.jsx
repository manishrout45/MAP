import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import FinalCTA from "../components/FinalCTA";

export default function CaseStudies() {
  return (
    <>
      {/* ===== Case Studies Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <span className="hover:text-white cursor-pointer">Homepage</span>
            <span>›</span>
            <span className="text-white font-medium">Case Studies</span>
          </div>
        </div>

        <img
          src="/assets/3d-cube.png"
          alt=""
          className="hidden md:block absolute right-10 top-32 w-32 opacity-90"
        />
        <img
          src="/assets/spiral.png"
          alt=""
          className="hidden md:block absolute left-10 bottom-0 w-40 opacity-90"
        />
      </section>

      {/* ===== About Case Studies Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Real Strategies. Real Results.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our case studies showcase how we help businesses scale through
            data-driven marketing strategies, performance advertising, and
            smart conversion optimization.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            From e-commerce brands to real estate and local businesses, we
            focus on measurable growth, increased ROI, and sustainable long-term
            success.
          </p>

          {/* Small Divider */}
          <div className="mt-10 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== Featured Projects Section ===== */}
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}