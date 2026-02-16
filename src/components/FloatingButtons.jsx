import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-[999]">

      {/* WHATSAPP */}
      <div className="relative flex items-center group">

        {/* Slide Text */}
        <span className="absolute right-16 opacity-0 translate-x-4 
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-300
                         bg-white text-green-600 text-sm font-medium
                         px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
          Chat on WhatsApp
        </span>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full
                     bg-green-500
                     flex items-center justify-center
                     shadow-lg
                     hover:scale-110
                     transition-all duration-300"
        >
          {/* Pulse Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>

          <FaWhatsapp size={24} className="text-white relative z-10" />
        </a>
      </div>

      {/* CALL */}
      <div className="relative flex items-center group">

        {/* Slide Text */}
        <span className="absolute right-16 opacity-0 translate-x-4 
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-300
                         bg-white text-blue-600 text-sm font-medium
                         px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
          Call Us Now
        </span>

        <a
          href="tel:+91XXXXXXXXXX"
          className="relative w-14 h-14 rounded-full
                     bg-blue-500
                     flex items-center justify-center
                     shadow-lg
                     hover:scale-110
                     transition-all duration-300"
        >
          {/* Pulse Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50 animate-ping"></span>

          <FaPhoneAlt size={20} className="text-white relative z-10" />
        </a>
      </div>

    </div>
  );
}

