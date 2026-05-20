import React from "react";
import WorkingProcess from "../components/WorkingProcess";
import FinalCTA from "../components/FinalCTA";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* ===== About Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">Homepage</Link>
            <span>›</span>
            <span className="text-white font-medium">About Us</span>
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

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Who We Are
            </div>

            <div className="flex flex-col mt-16 ml-6">
              <h2 className="text-8xl font-extrabold bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent">
                99%
              </h2>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                Satisfied customers <br /> get our service
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              We help brands and retailers to easily scale, and delight customers globally
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-gray-600">
              <p>
                We empower brands and retailers to scale effortlessly with smart, data-driven digital strategies.
              </p>
              <p>
                We create impactful customer engagement through tailored content and seamless experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WorkingProcess />

      {/* ===== PREMIUM DIGITAL PRESENCE SECTION ===== */}
<section className="relative w-full py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center">

    {/* Small Label */}
    <div className="flex justify-center items-center gap-2 text-orange-500 font-medium mb-6 animate-fadeIn">
      <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
      Strong Online Presence
    </div>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] bg-clip-text text-transparent">
      Establishing and growing <br />
      our digital presence
    </h2>

    {/* Main Grid */}
    <div className="relative grid lg:grid-cols-3 gap-12 items-center">

      {/* ===== LEFT FEATURES ===== */}
      <div className="space-y-20 text-left">
        {[
          {
            title: "Strategic Digital Campaigns",
            desc: "Strategic digital campaigns that drive engagement, visibility, and measurable results.",
          },
          {
            title: "Engaging Content Creation",
            desc: "Crafting impactful and creative content designed to engage and convert your audience.",
          },
        ].map((item, i) => (
          <div key={i} className="group transition duration-500">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block">
              {item.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-500 group-hover:w-full"></span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ===== CENTER 3D IMAGE ===== */}
      <div className="relative flex justify-center items-center">

        {/* Floating 3D Object */}
        <img
          src="https://img.freepik.com/free-vector/polygonal-wireframe-business-strategy-composition-with-editable-text-images-columns-arrow-shining-particles_1284-32260.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"   // replace with your image
          alt="Digital Growth"
          className="w-[380px] md:w-[460px] drop-shadow-2xl animate-float"
        />

        {/* 99% Glass Badge */}
        <div className="absolute -top-12 right-0 backdrop-blur-lg bg-white/70 border border-white/40 rounded-full shadow-xl px-6 py-3 flex items-center gap-3">
          <div className="w-9 h-9 bg-green-500 text-white rounded-full flex items-center justify-center text-sm shadow-md">
            ✓
          </div>
          <div className="text-left">
            <h5 className="font-bold text-gray-900 text-sm">99%</h5>
            <p className="text-xs text-gray-600">Happy Clients</p>
          </div>
        </div>

        {/* Sales Glass Card */}
        <div className="absolute -bottom-16 -left-4 backdrop-blur-xl bg-white/70 border border-white/40 rounded-xl shadow-xl p-4 w-48 hover:scale-105 transition duration-500">
  <p className="text-[10px] text-gray-500 mb-1">Total Sales</p>
  
  <h4 className="text-lg font-bold text-gray-900">$49.000</h4>

  <div className="flex justify-between items-center mt-3 text-[10px]">
    <span className="text-gray-500">Up in 1 month</span>
    <span className="text-green-500 font-semibold">+25.90%</span>
  </div>
</div>

      </div>

      {/* ===== RIGHT FEATURES ===== */}
      <div className="space-y-20 text-left">
        {[
          {
            title: "Search Engine Optimization",
            desc: "SEO that boosts visibility, improves ranking, and drives organic traffic to your website.",
          },
          {
            title: "Data-Driven Analytics Tools",
            desc: "Using powerful analytics and insights to make smarter, performance-based decisions.",
          },
        ].map((item, i) => (
          <div key={i} className="group transition duration-500">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block">
              {item.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-500 group-hover:w-full"></span>
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>

  {/* Background Glow Effect */}
  <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-400/20 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
</section>


      {/* ===== STRATEGY SECTION (NEW ADDED SECTION) ===== */}
      <section className="relative w-full py-28 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-[50px]  my-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-white">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336688.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"   // Replace with your image path
              alt="Strategy"
              className="rounded-2xl shadow-2xl w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center gap-2 text-orange-400 font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Transform Your Digital
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
              Transform your presence <br />
              through smart strategies
            </h2>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold mb-2">
                  Strategic Expertise
                </h4>
                <p className="text-white/70 text-sm">
                  We don’t just execute marketing tactics; we craft comprehensive strategies tailored to each client's unique goals and challenges.
                </p>
              </div>

              {/* Item 2 */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold mb-2">
                  Innovative Solutions
                </h4>
                <p className="text-white/70 text-sm">
                  We stay ahead of the curve by embracing new technologies and trends in the ever-evolving digital landscape.
                </p>
              </div>

              {/* Item 3 */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold mb-2">
                  Client-Centric Approach
                </h4>
                <p className="text-white/70 text-sm">
                  We prioritize our clients’ success above all else. Our collaborative process ensures we understand your business inside and out.
                </p>
              </div>

              {/* Item 4 */}
              <div className="border-t border-white/20 pt-6 border-b border-white/20 pb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Proven Results
                </h4>
                <p className="text-white/70 text-sm">
                  Our track record speaks for itself. Over the years, we’ve helped countless businesses achieve their marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Object */}
        <img
          src="/assets/3d-ball.png"   // Replace with your 3D object image
          alt=""
          className="hidden md:block absolute top-10 right-10 w-24 opacity-90"
        />
      </section>
      <FinalCTA />
    </>
  );
}
