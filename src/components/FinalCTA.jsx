import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-6">
          Ready to Grow Your Business?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Let’s build a data-driven strategy that increases traffic, generates leads,
          and boosts your revenue faster than ever.
        </p>

        {/* CTA Button */}
        <Link to="/contact">
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Free Strategy
            <ArrowRight size={20} />
          </button>
        </Link>

      </div>
    </section>
  );
}