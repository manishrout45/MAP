import React from "react";
import {
  FiMessageCircle,
  FiPhone,
  FiMapPin,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Contact() {

  // ===== WhatsApp Form Submit =====
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const whatsappMessage = `*New Contact Form Message*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Subject:* ${subject}%0A
*Message:* ${message}`;

    // Replace with your WhatsApp number
    window.open(
      `https://wa.me/919078090600?text=${whatsappMessage}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact MarcAdsPro
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>

            <span>›</span>

            <span className="text-white font-medium">
              Contact Us
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

      {/* ===== Contact Intro ===== */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Top Content */}
          <div className="text-center mb-14">
            <p className="text-red-500 font-medium mb-3">
              ● Get In Touch With Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Let’s Build Something Amazing Together
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or need expert digital marketing and IT
              solutions? Our team at MarcAdsPro is ready to help your business
              grow and succeed.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-[30px] overflow-hidden shadow-xl mb-16">
            <img
              src="/assets/images/ContactHeadImg.png"
              alt="MarcAdsPro Team"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Chat Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <FiMessageCircle className="text-red-500 text-3xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Chat with Us
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Speak to our friendly support team via email or WhatsApp.
              </p>

              <a
                href="mailto:info@marcadspro.com"
                className="font-semibold text-[#1F3C88] hover:text-red-500 transition"
              >
                Send us a message →
              </a>

              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <FiMail />
                marcadspro@gmail.com
              </p>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <FiPhone className="text-red-500 text-3xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Call Us Now
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Available Monday to Friday from 10AM to 7PM.
              </p>

              <a
                href="tel:+919078090600"
                className="font-semibold text-[#1F3C88] hover:text-red-500 transition"
              >
                +91 90780 90600
              </a>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <FiMapPin className="text-red-500 text-3xl" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Our Office
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Visit us at our Bhubaneswar office location.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Plot No-410, near SBI Bank, Saheed Nagar,
                Bhubaneswar, Odisha 751007
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us On The Map
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Visit our Bhubaneswar office or schedule a meeting with our team.
              We’re always happy to connect with you.
            </p>
          </div>

          {/* Map */}
          <div className="rounded-[30px] overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1634702899337!2d85.84443457447604!3d20.293499712627124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a4384cbb5e2a63%3A0xc708d64062b73437!2sMarcAdsPro%20Media%20-Transforming%20Brands!5e0!3m2!1sen!2sin!4v1771243745612!5m2!1sen!2sin"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* ===== Contact Form ===== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Top Text */}
          <p className="text-orange-500 font-medium mb-4">
            ● Ready To Start Your Project?
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            Fill out the form below and our team will get back to you
            as soon as possible to discuss your requirements.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left bg-gray-50 p-8 md:p-12 rounded-[35px] shadow-xl border border-gray-100"
          >

            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-6">

              <input
                type="text"
                name="name"
                required
                placeholder="Your name *"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email address *"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone number *"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
            />

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              required
              placeholder="Your message *"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition resize-none"
            ></textarea>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              >
                SEND ON WHATSAPP
                <FiArrowRight />
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}