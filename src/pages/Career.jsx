import React, { useRef } from "react";
import {
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiBriefcase,
  FiUpload,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const jobsData = [
  {
    title: "Social Media Manager",
    location: "Bhubaneswar, Odisha",
    type: "Full Time",
    experience: "1-3 Years",
    description:
      "Manage social media platforms, create engaging content, run campaigns, and grow brand presence across digital channels.",
  },
  {
    title: "Web Developer",
    location: "Bhubaneswar, Odisha",
    type: "Full Time",
    experience: "2+ Years",
    description:
      "Build responsive and modern websites using React.js, Tailwind CSS, JavaScript, and backend integrations.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Bhubaneswar, Odisha",
    type: "Full Time",
    experience: "1-2 Years",
    description:
      "Manage SEO, social media campaigns, paid advertising, and performance marketing strategies.",
  },
  {
    title: "Sales Executive",
    location: "Bhubaneswar, Odisha",
    type: "Full Time",
    experience: "1-3 Years",
    description:
      "Generate leads, communicate with clients, close deals, and build long-term customer relationships for business growth.",
  },
  {
    title: "Content Writer",
    location: "Remote",
    type: "Part Time",
    experience: "1+ Years",
    description:
      "Write SEO-friendly blogs, website content, marketing copy, and social media captions.",
  },
  {
    title: "Graphic Designer",
    location: "Bhubaneswar, Odisha",
    type: "Full Time",
    experience: "1-3 Years",
    description:
      "Design creative branding materials, social media posts, banners, and promotional graphics.",
  },
];

export default function Career() {
  const formRef = useRef(null);

  // Smooth Scroll
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // WhatsApp Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const position = form.position.value;
    const message = form.message.value;

    const whatsappMessage = `*Career Application*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Position:* ${position}%0A
*Message:* ${message}%0A%0A
Please find my resume attached.`;

    window.open(
      `https://wa.me/919337303150?text=${whatsappMessage}`,
      "_blank"
    );

    setTimeout(() => {
      alert(
        "WhatsApp opened successfully. Please attach your resume manually before sending."
      );
    }, 500);
  };

  return (
    <>
      {/* ===== Career Hero Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Careers
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>

            <span>›</span>

            <span className="text-white font-medium">
              Careers
            </span>
          </div>
        </div>

        {/* Decorative Images */}
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

      {/* ===== Career Intro Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-medium mb-3">
              • Join Our Team
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build your future with our <br />
              creative digital team
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are always looking for talented and passionate individuals
              who want to create meaningful digital experiences, innovative
              solutions, and grow together with our company.
            </p>
          </div>

          {/* ===== Job Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobsData.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                      <FiBriefcase className="text-2xl text-[#1F3C88]" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {job.title}
                    </h3>
                  </div>

                  <span className="bg-red-100 text-red-500 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                    {job.type}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FiMapPin className="text-red-500" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FiClock className="text-red-500" />
                    {job.experience}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {job.description}
                </p>

                {/* Apply Button */}
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 text-[#1F3C88] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Apply Now
                  <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1F3C88] to-[#14213D] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Don’t See the Right Role?
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              We’re always looking for talented people. Send us your resume
              and we’ll reach out when a suitable opportunity becomes
              available.
            </p>

            {/* Scroll Button */}
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1F3C88] px-8 py-4 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Send Your Resume
            </button>

            {/* Decorative Blur */}
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full -top-20 -right-20 blur-3xl"></div>

            <div className="absolute w-72 h-72 bg-red-400/10 rounded-full -bottom-20 -left-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* ===== Application Form ===== */}
      <section
        ref={formRef}
        className="pb-24 bg-white"
      >
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white border border-gray-200 rounded-[40px] shadow-xl p-8 md:p-14">

            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-red-500 text-sm font-medium mb-3">
                • Apply Now
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Submit Your Application
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Fill out the form below and send your details directly on WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-300 outline-none focus:border-[#1F3C88]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-300 outline-none focus:border-[#1F3C88]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-300 outline-none focus:border-[#1F3C88]"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Applying For
                </label>

                <select
                  name="position"
                  required
                  className="w-full h-14 px-5 rounded-2xl border border-gray-300 outline-none focus:border-[#1F3C88] bg-white"
                >
                  <option value="">Select Position</option>

                  <option>Social Media Manager</option>
                  <option>Web Developer</option>
                  <option>Digital Marketing Executive</option>
                  <option>Sales Executive</option>
                  <option>Content Writer</option>
                  <option>Graphic Designer</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Resume
                </label>

                <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center bg-gray-50 hover:border-[#1F3C88] transition-all duration-300">

                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FiUpload className="text-2xl text-[#1F3C88]" />
                  </div>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-gray-500"
                  />

                  <p className="text-sm text-gray-500 mt-4">
                    Resume will need to be attached manually in WhatsApp before sending.
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Cover Letter / Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write something about yourself..."
                  className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-[#1F3C88] resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1F3C88] to-[#14213D] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send on WhatsApp
                  <FiArrowRight />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}