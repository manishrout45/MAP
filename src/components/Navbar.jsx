import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menu = ["Home", "Services", "Pages", "Blog", "Contact"];

  const servicesMenu = [
    "Services – Style 01",
    "Services – Style 02",
    "Services – Style 03",
    "Services – Style 04",
    "Service Single",
  ];

  // ================= SCROLL DETECTION =================
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <img
            src="/assets/images/logo/logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />

          {/* ================= DESKTOP MENU ================= */}
          <nav
            className={`hidden lg:flex items-center gap-8 rounded-full px-8 py-3 text-sm border
            ${
              scrolled
                ? "bg-white text-black border-black/10"
                : "bg-white/10 text-white border-white/10 backdrop-blur-xl"
            }`}
          >
            {menu.map((item, i) =>
              item === "Services" ? (
                <div key={i} className="relative group">
                  <button className="flex items-center gap-1 hover:text-orange-500">
                    Services <FiChevronDown size={14} />
                  </button>

                  {/* DESKTOP DROPDOWN */}
                  <div className="absolute left-0 top-full mt-4 w-64 bg-white rounded-2xl shadow-xl
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300"
                  >
                    <ul className="py-3 text-gray-700">
                      {servicesMenu.map((s, idx) => (
                        <li
                          key={idx}
                          className="px-6 py-3 hover:text-orange-500 cursor-pointer border-b last:border-none"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  key={i}
                  className={`hover:text-orange-500 ${
                    item === "Home" ? "text-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden lg:block px-5 py-2 rounded-full border text-sm
              ${
                scrolled
                  ? "border-black/30 text-black hover:bg-black hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              GET STARTED
            </button>

            {/* MOBILE ICON */}
            <button onClick={() => setOpen(true)} className="lg:hidden text-white">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        {/* OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 ${
            open ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        />

        {/* PANEL */}
        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white p-6
          transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-lg">MAIN MENU</span>
            <button onClick={() => setOpen(false)}>
              <FiX size={22} />
            </button>
          </div>

          {/* LINKS */}
          <nav className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span>Home</span>
              <FiChevronRight />
            </div>

            {/* SERVICES ACCORDION */}
            <div className="border-b pb-3">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center text-purple-600"
              >
                Services
                <FiChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <ul className="mt-4 space-y-3 pl-4 text-gray-700">
                  {servicesMenu.map((s, i) => (
                    <li key={i} className="hover:text-orange-500 cursor-pointer">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {["Pages", "Blog", "Contact"].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-3"
              >
                <span>{item}</span>
                <FiChevronRight />
              </div>
            ))}
          </nav>

          {/* FLAGS */}
          <div className="flex gap-3 mt-10 text-xl">
            🇬🇧 🇩🇪 🇮🇹 🇮🇳
          </div>
        </div>
      </div>
    </>
  );
}
