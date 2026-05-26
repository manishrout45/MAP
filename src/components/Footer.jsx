import { ArrowRight, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full mt-32">
      {/* GRADIENT CONTAINER */}
      <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] text-white">

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
            <div className="mb-6">
              <img
                src="/assets/images/logo/finalww.png"
                alt="MarcAdsPro Logo"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </div>

            <div className="flex gap-6 text-white/80">
              <a
                href="https://www.facebook.com/marcadspromedia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5a3c] transition"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/marcadspro.media/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5a3c] transition"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/company/78699537/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5a3c] transition"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://x.com/marcadspro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5a3c] transition"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <p className="text-sm text-white/80 mb-2">+91 90780 90600</p>
            <p className="text-sm text-white/80">marcadspro@gmail.com</p>

            <h4 className="font-semibold mt-6 mb-3">OFFICE ADDRESS</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Plot No-410, near SBI Bank, Saheed Nagar, Bhubaneswar, Odisha 751007
            </p>
          </div>

          {/* Quick Links */}
<div>
  <h4 className="font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-sm text-white/80">
    <li>
      <Link to="/about" className="hover:text-orange-400 transition">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/#transformation" className="hover:text-orange-400 transition">
        Our Process
      </Link>
    </li>
    <li>
      <Link to="/casestudies" className="hover:text-orange-400 transition">
        Case Studies
      </Link>
    </li>
    <li>
      <Link to="/#industriessection" className="hover:text-orange-400 transition">
        Testimonials
      </Link>
    </li>
    <li>
      <Link to="/careers" className="hover:text-orange-400 transition">
        Careers
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-orange-400 transition">
        Contact
      </Link>
    </li>
  </ul>
</div>

{/* SERVICES */}
<div>
  <h4 className="font-semibold mb-4">OUR SERVICES</h4>
  <ul className="space-y-2 text-sm text-white/80">
    <li>
      <Link to="/seo" className="hover:text-orange-400 transition">
        SEO Optimization
      </Link>
    </li>
    <li>
      <Link to="/adshoot" className="hover:text-orange-400 transition">
        Google Ads
      </Link>
    </li>
    <li>
      <Link to="/smm" className="hover:text-orange-400 transition">
        Social Media Marketing
      </Link>
    </li>
    <li>
      <Link to="/businessbranding" className="hover:text-orange-400 transition">
        Brand Strategy
      </Link>
    </li>
    <li>
      <Link to="/contentmarketing" className="hover:text-orange-400 transition">
        Content Marketing
      </Link>
    </li>
    <li>
      <Link to="/webdevelopment" className="hover:text-orange-400 transition">
        Web Design
      </Link>
    </li>
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
