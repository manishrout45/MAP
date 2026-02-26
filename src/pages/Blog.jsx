import React from "react";
import NewsSection from "../components/NewsSection";
export default function Blog() {
  return (
    <>
            {/* ===== Blog Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Blogs
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <span className="hover:text-white cursor-pointer">Homepage</span>
            <span>›</span>
            <span className="text-white font-medium">Blogs</span>
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
        <NewsSection />

    </>
  );
}
