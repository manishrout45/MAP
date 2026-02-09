import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-32">
      {/* GRADIENT CONTAINER */}
      <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-r from-[#6b1c6f] via-[#5b2ea6] to-[#3b46d1] text-white">

        {/* BIG WATERMARK LOGO */}
        <div className="pointer-events-none absolute left-[-120px] bottom-[-120px] opacity-[0.08]">
          <svg width="600" height="600" viewBox="0 0 200 200" fill="none">
            <path
              d="M40 160L100 40L160 160H130L100 100L70 160H40Z"
              fill="white"
            />
          </svg>
        </div>

        {/* ABSTRACT SHAPE */}
        <div className="pointer-events-none absolute top-0 right-0 opacity-[0.15]">
          <svg width="500" height="500" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="280" fill="white" />
          </svg>
        </div>

        {/* ================= TOP CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />
              <p className="text-sm font-medium text-[#ff5a3c]">
                Our Newsletter
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
              Discover how MarcAdsPro helps your business grow
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-sm text-white/80 max-w-lg mb-6">
              Let’s build powerful digital strategies that drive traffic,
              engagement, and real business results.
            </p>

            <div className="flex items-center bg-white rounded-xl overflow-hidden max-w-lg shadow-xl">
              <div className="px-4 text-[#ff5a3c]">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-2 py-4 text-sm text-black outline-none"
              />
              <button className="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-black hover:text-[#ff5a3c] transition">
                SUBSCRIBE
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/15" />
        </div>

        {/* ================= BOTTOM CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* LOGO & SOCIAL */}
          <div className="lg:col-span-2">
            {/* 🔥 MarcAdsPro LOGO */}
            <div className="mb-6">
              <img
                src="/assets/images/logo/logo.png"
                alt="MarcAdsPro Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            <div className="flex gap-6 text-sm text-white/80">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <p className="text-sm text-white/80 mb-2">+91 94384 31918</p>
            <p className="text-sm text-white/80">info@marcadspro.com</p>

            <h4 className="font-semibold mt-6 mb-3">OFFICE ADDRESS</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              India • Serving Clients Worldwide
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="font-semibold mb-4">ABOUT MARCADSPRO</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Case Studies</li>
              <li>Testimonials</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">OUR SERVICES</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>SEO Optimization</li>
              <li>Google Ads</li>
              <li>Social Media Marketing</li>
              <li>Brand Strategy</li>
              <li>Content Marketing</li>
              <li>Web Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-blue-800/70">
        <p>© 2025 MarcAdsPro. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
