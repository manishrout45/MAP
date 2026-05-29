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

        {/* BIG LOGO SHAPE */}
        <div className="pointer-events-none absolute top-0 right-0 opacity-[0.12]">
          <img
            src="/assets/images/logo/finalww.png"
            alt=""
            className="w-[480px] h-[480px] object-contain translate-x-8 -translate-y-8"
          />
        </div>

        {/* ================= TOP CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />
              <p className="text-sm font-medium text-[#ff5a3c]">Our Newsletter</p>
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
        {/* ✅ changed grid to 6 columns so Google Review can sit BETWEEN social & contact */}
        <div className="relative -mt-8 z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* SOCIAL / LOGO */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/assets/images/logo/finalww.png"
                alt="MarcAdsPro Logo"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </div>
            {/* SMALL ABOUT TEXT */}
              <p className="text-sm text-white/75 leading-relaxed mb-5 max-w-[260px]">
                MarcAdsPro is a creative digital marketing agency helping brands grow through
                SEO, social media marketing, branding, performance ads, and web development.
              </p>

            <p className="text-sm font-semibold text-white mb-3">Follow us on</p>

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

          {/* ✅ GOOGLE REVIEW (NOW IN BETWEEN) */}
          <div className="lg:col-span-2 flex lg:justify-center">
            <div className="w-full max-w-[220px]">
              {/* title */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.6-6 7.1l6.2 5.2C39.2 37 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-white leading-tight">Review Us on Google</h4>
                  <p className="text-xs text-white/70">Scan & share your experience</p>
                </div>
              </div>

              {/* card */}
              <div className="rounded-2xl w-40 bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
                {/* ✅ scanner at top */}
                <div className="bg-white rounded-xl p-2 items-center justify-center">
                  <img
                    src="/assets/images/MAP_QR.png"
                    alt="Google Review QR"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                {/* ✅ scan me + button under scanner */}
                <p className="text-sm font-semibold text-[#ffb347] mt-3">
                  Scan Me
                </p>
                <p className="text-xs text-white/70 leading-relaxed mt-1">
                  Leave your valuable review on our Google Business Profile.
                </p>

                <a
                  href="https://g.page/r/CTc0t2JA1gjHEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 text-xs font-semibold bg-[#ff5a3c] hover:bg-[#ff734f] transition px-3 py-2 rounded-lg"
                >
                  Write Review
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <p className="text-sm text-white/80 mb-2">+91 90780 90600</p>
            <p className="text-sm text-white/80">marcadspro@gmail.com</p>

            <h4 className="font-semibold mt-6 mb-3">OFFICE ADDRESS</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Plot No-410, near SBI Bank, Saheed Nagar, Bhubaneswar, Odisha 751007
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1">
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