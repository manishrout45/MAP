import React from "react";
import { FiMessageCircle, FiPhone, FiMapPin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      {/* ===== About Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact MarcAdsPro
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <span className="hover:text-white cursor-pointer">Homepage</span>
            <span>›</span>
            <span className="text-white font-medium">Contact Us</span>
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

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Top Content */}
          <div className="text-center mb-14">
            <p className="text-red-500 font-medium mb-3">
              ● Get In Touch With Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let’s Build Something Amazing Together
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or need expert digital marketing and IT solutions?
              Our team at MarcAdsPro is ready to help your business grow and succeed.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="MarcAdsPro Team"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Chat Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
              <FiMessageCircle className="text-red-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chat with Us</h3>
              <p className="text-gray-600 mb-4">
                Speak to our friendly support team via email.
              </p>
              <p className="font-medium cursor-pointer hover:text-red-500 transition">
                Send us a message →
              </p>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                <FiMail /> info@marcadspro.com
              </p>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
              <FiPhone className="text-red-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="text-gray-600 mb-4">
                Available Monday to Friday from 10AM to 7PM.
              </p>
              <p className="font-medium hover:text-red-500 transition cursor-pointer">
                +91 90780 90600
              </p>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
              <FiMapPin className="text-red-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p className="text-gray-600 mb-4">
                Visit us at our Bhubaneswar office location.
              </p>
              <p className="text-gray-700">
                2nd floor, Aangan Restaurant Side, Plot 43, Saheed Nagar, Bhubaneswar, Odisha 751007
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us On The Map
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our Bhubaneswar office or schedule a meeting with our team.
              We’re always happy to connect with you.
            </p>
          </div>

          {/* Map Container */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
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

      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Small Top Text */}
          <p className="text-orange-500 font-medium mb-4">
            ● Ready To Start Your Project?
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Fill out the form below and our team will get back to you
            as soon as possible to discuss your requirements.
          </p>

          {/* Form */}
          <form className="space-y-6 text-left">

            <div className="grid md:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Your name *"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email address *"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
            />

            <textarea
              rows="5"
              placeholder="Your message *"
              className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition resize-none"
            ></textarea>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                SEND A MESSAGE
                <FiArrowRight />
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}
