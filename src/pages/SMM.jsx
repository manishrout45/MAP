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
    title: "Strategic Social Media Planning",
    desc: "We create customized social media strategies aligned with your brand goals to maximize reach, engagement, and conversions.",
  },
  {
    title: "Creative Content Creation",
    desc: "Our team designs eye-catching graphics, engaging captions, reels, and promotional posts tailored for each platform.",
  },
  {
    title: "Platform Management & Optimization",
    desc: "We manage and optimize your profiles across platforms like Facebook, Instagram, LinkedIn, and more to ensure consistent brand presence.",
  },
  {
    title: "Analytics & Performance Tracking",
    desc: "Through data-driven insights and regular reporting, we monitor campaign performance and continuously optimize for better results.",
  },
];

const faqs = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage Facebook, Instagram, LinkedIn, Twitter, YouTube, and other major social platforms based on your business requirements.",
  },
  {
    q: "Do you create content for social media?",
    a: "Yes, we handle complete content creation including graphics, reels, captions, hashtags, and campaign creatives.",
  },
  {
    q: "How do you measure social media success?",
    a: "We track engagement rate, reach, impressions, follower growth, website traffic, and conversions through detailed analytics reports.",
  },
];

export default function SMM() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Social Media Management
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">Social Media</span>
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
                          service.path === "/smm"
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
                  src="https://img.magnific.com/premium-photo/business-woman-using-smart-phone-with-social-network-service-sns-social-media-concept-woman-using-laptop-computer-staying-home-online-marketing-business-social-media-business_721781-1049.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
                  alt="Social Media Marketing"
                  className="w-full h-60 object-cover"
                />
              </div>

            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Professional Social Media Management Services
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Our Social Media Management services help businesses build a
                powerful online presence and connect with their target audience
                effectively. We create engaging content, manage daily posting,
                run targeted campaigns, and monitor performance to ensure your
                brand stands out across all major social platforms. Our goal is
                to increase brand awareness, drive engagement, and generate
                quality leads through strategic social media marketing.
              </p>
            </div>

            <img
              src="https://img.magnific.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
              alt="Social Media Management"
              className="rounded-2xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Key elements of our Social Media services include:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Strategic content planning and posting schedules.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Creative graphics, reels, and engaging captions.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Paid campaigns, audience targeting, and performance tracking.
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
