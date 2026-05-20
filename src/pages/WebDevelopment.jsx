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
    title: "Custom Website Development",
    desc: "We build fully customized, responsive websites tailored to your brand, ensuring seamless performance across all devices.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Our team develops secure and scalable e-commerce platforms designed to enhance user experience and maximize conversions.",
  },
  {
    title: "Mobile App Development",
    desc: "We create powerful Android and iOS applications with intuitive UI/UX design and high-performance functionality.",
  },
  {
    title: "Maintenance & Technical Support",
    desc: "From regular updates to security enhancements, we provide ongoing maintenance and technical support for long-term reliability.",
  },
];

const faqs = [
  {
    q: "Do you develop both websites and mobile applications?",
    a: "Yes, we specialize in responsive website development as well as Android and iOS mobile app development tailored to your business needs.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every website we develop is fully responsive and optimized to work seamlessly across desktops, tablets, and smartphones.",
  },
  {
    q: "Do you provide ongoing maintenance after development?",
    a: "Yes, we offer continuous maintenance, security updates, and technical support to ensure smooth and secure performance.",
  },
];

export default function WebDevelopment() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Website & Mobile App Development
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">
              WebApp Development
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
                          service.path === "/webdevelopment"
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Web Development"
                  className="w-full h-60 object-cover"
                />
              </div>

            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Professional Website & App Development Solutions
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We provide modern, scalable, and high-performance website and
                mobile app development services designed to elevate your digital
                presence. From corporate websites and e-commerce platforms to
                feature-rich mobile applications, our development solutions are
                built with cutting-edge technology, intuitive design, and strong
                security frameworks to ensure long-term success.
              </p>
            </div>

            <img
              src="https://img.magnific.com/premium-photo/working-it-developer-concentrating-online-software-development-information-surrounded-by-coding-application-pc-screens-creating-program-firmware-website-neon-modern-office-home-gusher_31965-275070.jpg?ga=GA1.1.367325703.1777638219&semt=ais_incoming&w=740&q=80"
              alt="Website Development"
              className="rounded-2xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Key elements of our Web Development services include:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Custom UI/UX design for seamless user experience.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Responsive and mobile-friendly website development.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  Secure, scalable, and performance-optimized applications.
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
