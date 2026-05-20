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
    title: "Data-Driven Advertising Strategy",
    desc: "We create performance-focused campaigns based on deep audience research, competitor analysis, and measurable KPIs to ensure maximum ROI.",
  },
  {
    title: "Paid Ads Management",
    desc: "Our team manages Google Ads, Meta Ads, and other paid platforms with precision targeting, budget optimization, and continuous A/B testing.",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "We optimize landing pages, funnels, and ad creatives to improve click-through rates, reduce cost per acquisition, and increase conversions.",
  },
  {
    title: "Analytics & Performance Tracking",
    desc: "Through advanced analytics and reporting tools, we monitor campaign performance in real-time and refine strategies for consistent growth.",
  },
];

const faqs = [
  {
    q: "What is performance marketing?",
    a: "Performance marketing is a results-driven digital strategy where businesses pay only for measurable outcomes such as clicks, leads, or conversions.",
  },
  {
    q: "Which platforms do you use for performance campaigns?",
    a: "We run campaigns on Google Ads, Facebook & Instagram Ads, YouTube, LinkedIn, and other high-performing digital advertising platforms.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We track KPIs such as CTR, CPC, CPA, ROAS, and overall conversion rates to ensure your campaigns deliver measurable and profitable results.",
  },
];

export default function PerformanceMarketing() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Performance Marketing
          </h1>
          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">
              Performance Marketing
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
                          service.path === "/performancemarketing"
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
                  src="https://img.magnific.com/premium-photo/seo-analytics-business-strategy-with-financial-planning-tools_41050-10168.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
                  alt="Performance Marketing"
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Results-Driven Performance Marketing Services
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Our Performance Marketing services focus on delivering measurable
                business outcomes through highly targeted and data-driven
                advertising campaigns. We combine strategic planning, creative
                excellence, and advanced analytics to maximize your return on
                investment. From paid search and social media advertising to
                conversion optimization and detailed reporting, we ensure every
                campaign drives real, trackable growth.
              </p>
            </div>

            <img
              src="https://img.magnific.com/free-photo/development-performance-self-improvement-ratings-icon_53876-122739.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
              alt="Performance Marketing Strategy"
              className="rounded-2xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Key elements of our Performance Marketing services include:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Targeted paid advertising campaigns across multiple platforms.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Continuous A/B testing and campaign optimization.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Detailed performance reporting and ROI tracking.
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
