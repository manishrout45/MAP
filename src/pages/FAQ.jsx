import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "What services does your digital marketing agency offer?",
    answer:
      "We provide a full suite of digital marketing services including SEO, social media marketing, PPC campaigns, content marketing, website development, branding, and analytics tracking to help businesses grow online.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO typically takes 3–6 months for noticeable results, while paid ads and social media campaigns can generate faster results depending on strategy and budget.",
  },
  {
    question: "Do you work with businesses in all industries?",
    answer:
      "Yes, we work with startups, small businesses, and enterprises across multiple industries including tech, healthcare, real estate, e-commerce, and more.",
  },
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer:
      "We track KPIs such as traffic, conversions, ROI, engagement rates, and lead generation using advanced analytics and reporting tools.",
  },
  {
    question: "Can you customize a marketing plan to fit my business needs?",
    answer:
      "Absolutely. Every strategy we create is tailored to your specific goals, target audience, and market competition.",
  },
  {
    question: "What’s your approach to SEO and content marketing?",
    answer:
      "We focus on keyword research, technical SEO, high-quality content creation, and continuous optimization to improve rankings and visibility.",
  },
  {
    question: "Do you provide reports and performance tracking regularly?",
    answer:
      "Yes, we provide detailed monthly reports and real-time performance insights to ensure transparency and measurable growth.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines depend on the service. Paid campaigns can show immediate traction, while organic strategies require consistent effort over time.",
  },
  {
    question: "What sets your agency apart from others?",
    answer:
      "We combine creativity with data-driven strategies, personalized support, and transparent communication to deliver real, measurable results.",
  },
  {
    question: "How do we get started with your services?",
    answer:
      "Simply contact us for a free consultation. We’ll discuss your goals, analyze your needs, and create a strategy tailored to your business.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    {/* ===== FAQ Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            FAQ
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <span className="hover:text-white cursor-pointer">Homepage</span>
            <span>›</span>
            <span className="text-white font-medium">FAQ</span>
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
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Small Top Label */}
        <p className="text-red-500 text-sm font-medium text-center mb-3">
          • Frequently Asked Questions
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
          Fast solutions for your <br /> digital marketing needs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {index + 1}. {item.question}
                </span>

                <FiChevronDown
                  className={`text-red-500 text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-40 mt-3 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
