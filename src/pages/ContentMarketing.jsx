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
    title: "Strategic Content Planning",
    desc: "We build research-driven content strategies aligned with your business goals, audience interests, and market trends to ensure maximum engagement and ROI.",
  },
  {
    title: "High-Quality Content Creation",
    desc: "Our team crafts compelling blogs, website content, landing pages, case studies, and social media content that strengthen brand authority and trust.",
  },
  {
    title: "SEO-Optimized Content",
    desc: "Every piece of content is structured with targeted keywords and SEO best practices to improve search engine rankings and organic visibility.",
  },
  {
    title: "Distribution & Performance Tracking",
    desc: "We distribute content across the right digital channels and continuously monitor performance to optimize reach, engagement, and conversions.",
  },
];

const faqs = [
  {
    q: "Why is content marketing important?",
    a: "Content marketing helps businesses build trust, increase brand awareness, improve SEO rankings, and generate consistent organic leads.",
  },
  {
    q: "What type of content do you create?",
    a: "We create blog posts, website content, landing pages, brand storytelling content, social media posts, and marketing materials.",
  },
  {
    q: "Do you provide SEO-friendly content?",
    a: "Yes, all content is keyword-researched and optimized according to the latest SEO standards to ensure better search visibility.",
  },
];

export default function ContentMarketing() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Content Marketing Services
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">
              Content Marketing
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
                          service.path === "/contentmarketing"
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
                  456 Elm Avenue, Philadelphia, Pennsylvania
                </p>
                <p className="text-xl font-bold text-[#14213D] mb-4">
                  +91 94384 31918
                </p>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Contact Us Now
                </button>
              </div>

              {/* Promo Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Content Marketing"
                  className="w-full h-60 object-cover"
                />
              </div>

            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Professional Content Marketing Solutions
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Our Content Marketing services are designed to help brands
                connect with their audience through meaningful, engaging, and
                strategic storytelling. We create valuable digital content that
                strengthens brand identity, improves online visibility, and
                drives long-term customer relationships. From blogs and website
                content to social media campaigns and brand storytelling, every
                piece of content is crafted to deliver measurable growth.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Content Marketing"
              className="rounded-2xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Key elements of our Content Marketing services include:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Research-driven content strategy aligned with business objectives.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Creation of blogs, website content, landing pages, and social media posts.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  SEO optimization and performance-focused content distribution.
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
                      <p className="text-gray-600 text-sm">
                        {item.a}
                      </p>
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
