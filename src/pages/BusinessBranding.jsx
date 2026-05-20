import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "Ad Shoot", path: "/adshoot" },
  { name: "Content Marketing", path: "/contentmarketing" },
  { name: "WebApp Development", path: "/webdevelopment" },
  { name: "Business Brand", path: "/businessbranding" },
  { name: "Social Media", path: "/smm" },
  { name: "Performance Marketing", path: "/performancemarketing" },
  { name: "SEO Optimization", path: "/seo" },
];

const features = [
  {
    title: "Brand Strategy & Positioning",
    desc: "We define your brand’s core values, mission, and market positioning to create a strong and differentiated identity in a competitive marketplace.",
  },
  {
    title: "Visual Identity & Design",
    desc: "From logo design and brand guidelines to packaging and marketing creatives, we craft a cohesive and memorable visual identity.",
  },
  {
    title: "Personal & Product Branding",
    desc: "We build powerful personal brands and product identities that connect emotionally with your target audience and build trust.",
  },
  {
    title: "Brand Communication & Growth",
    desc: "Through consistent messaging, storytelling, and digital presence, we strengthen brand recognition and long-term customer loyalty.",
  },
];

const faqs = [
  {
    q: "Why is branding important for businesses?",
    a: "Branding builds trust, credibility, and recognition. A strong brand helps you stand out from competitors and creates lasting impressions in customers’ minds.",
  },
  {
    q: "Do you offer personal branding services?",
    a: "Yes, we help entrepreneurs, professionals, and influencers build strong personal brands through strategic positioning and digital presence.",
  },
  {
    q: "Can you rebrand an existing business?",
    a: "Absolutely. We analyze your current brand identity and reposition it with updated visuals, messaging, and strategy to align with modern market trends.",
  },
];

export default function BusinessBranding() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Business, Product & Personal Branding
          </h1>
          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">
              Business Brand
            </span>
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

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-4 gap-10">
          {/* ================= Sidebar ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Services Category */}
              <div className="bg-gradient-to-b from-[#1F3C88] to-[#14213D] rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-semibold mb-6">
                  Services Category
                </h3>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        className={`flex justify-between items-center px-4 py-2 rounded-lg transition ${
                          service.path === "/businessbranding"
                            ? "bg-white text-[#14213D]"
                            : "hover:bg-[#1F3C88]"
                        }`}
                      >
                        {service.name}
                        <span>+</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-2">
                  Have additional questions?
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  marcadspro@gmail.com
                </p>
                <p className="text-xl font-bold text-[#14213D] mb-4">
                  +91 90780 90600
                </p>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Contact Us Now
                </button>
              </div>

              {/* Promo Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://img.magnific.com/premium-photo/businessman-suit-building-from-wooden-blocks-brand-concept_389076-209.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
                  alt="Business Branding"
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Strategic Branding Solutions for Long-Term Growth
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Our Business, Product, and Personal Branding services are designed
                to create strong, impactful identities that resonate with your
                target audience. We help businesses establish credibility,
                differentiate from competitors, and build meaningful connections
                through powerful storytelling and consistent brand messaging.
                From developing brand strategy to designing visual identities,
                we ensure your brand leaves a lasting impression.
              </p>
            </div>

            <img
              src="https://img.magnific.com/premium-photo/side-view-businessman-analyzing-chart_107420-93378.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
              alt="Brand Strategy"
              className="rounded-2xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Key elements of our Branding services include:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Brand identity creation including logo and visual guidelines.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Market positioning and competitive differentiation strategy.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Consistent brand communication across digital platforms.
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex justify-between items-center p-4 font-medium"
                    >
                      {item.q}
                      <span className="text-red-500 text-xl">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    <div
                      className={`px-4 transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "max-h-40 opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="text-gray-600 text-sm">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
