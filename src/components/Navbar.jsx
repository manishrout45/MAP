import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const location = useLocation();

  const menu = [
    "Home",
    "Services",
    "Pages",
    "Portfolio",
    "Case Studies",
    "Blog",
    "Contact",
  ];

  const servicesMenu = [
    { name: "Ad Shoot/Corporate Shoot", path: "/adshoot" },
    { name: "Content Marketing", path: "/contentmarketing" },
    { name: "Website/Mobile App Development", path: "/webdevelopment" },
    { name: "Performance Marketing", path: "/performancemarketing" },
    { name: "Product/Personal/Business Branding", path: "/businessbranding" },
    { name: "Social Media Management", path: "/smm" },
    { name: "Search Engine Optimisation", path: "/seo" },
  ];

  const pagesMenu = [
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Career", path: "/career" },
    { name: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
        ${ 
          scrolled
          ? "bg-blue-800 shadow-md rounded-b-3xl"
          : "bg-transparent"
        }
        `}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img
              src={
                scrolled
                  ? "/assets/images/logo/final.png"
                  : "/assets/images/logo/finalww.png"
              }
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
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

                  <div className="absolute left-0 top-full mt-4 w-64 bg-white rounded-2xl shadow-xl
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300">
                    <ul className="py-3 text-gray-700">
                      {servicesMenu.map((s, idx) => (
                        <Link
                          key={idx}
                          to={s.path}
                          className={`block px-6 py-3 border-b last:border-none ${
                            isActive(s.path)
                              ? "text-orange-500 font-semibold"
                              : "hover:text-orange-500"
                          }`}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : item === "Pages" ? (
                <div key={i} className="relative group">
                  <button className="flex items-center gap-1 hover:text-orange-500">
                    Pages <FiChevronDown size={14} />
                  </button>

                  <div className="absolute left-0 top-full mt-4 w-56 bg-white rounded-2xl shadow-xl
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300">
                    <ul className="py-3 text-gray-700">
                      {pagesMenu.map((p, idx) => (
                        <Link
                          key={idx}
                          to={p.path}
                          className={`block px-6 py-3 border-b last:border-none ${
                            isActive(p.path)
                              ? "text-orange-500 font-semibold"
                              : "hover:text-orange-500"
                          }`}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={i}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Portfolio"
                      ? "/portfolio"
                      : item === "Case Studies"
                      ? "/casestudies"
                      : item === "Blog"
                      ? "/blog"
                      : item === "Contact"
                      ? "/contact"
                      : "#"
                  }
                  className={`hover:text-orange-500 ${
                    (item === "Home" && isActive("/")) ||
                    (item === "Portfolio" && isActive("/portfolio")) ||
                    (item === "Case Studies" &&
                      isActive("/casestudies")) ||
                    (item === "Blog" && isActive("/blog")) ||
                    (item === "Contact" && isActive("/contact"))
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
           <Link
  to="/contact"
  className={`hidden lg:inline-block px-5 py-2 rounded-full border text-sm transition
  ${
    scrolled
      ? "border-black/30 text-black hover:bg-black hover:text-white"
      : "border-white/30 text-white hover:bg-white hover:text-black"
  }`}
>
  Get Free Consultation
</Link>

            <button onClick={() => setOpen(true)} className="lg:hidden text-white">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 ${
            open ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        />

        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white p-6
          transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-lg">MAIN MENU</span>
            <button onClick={() => setOpen(false)}>
              <FiX size={22} />
            </button>
          </div>

          <nav className="space-y-4">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block border-b pb-3 ${
                isActive("/") ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* SERVICES */}
            <div className="border-b pb-3">
              <button
                onClick={() => {
                  setMobileServicesOpen(!mobileServicesOpen);
                  setMobilePagesOpen(false);
                }}
                className="flex justify-between items-center w-full"
              >
                <span>Services</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-3 ml-4 space-y-2">
                  {servicesMenu.map((s, idx) => (
                    <Link
                      key={idx}
                      to={s.path}
                      onClick={() => setOpen(false)}
                      className={`block text-sm ${
                        isActive(s.path)
                          ? "text-orange-500 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* PAGES */}
            <div className="border-b pb-3">
              <button
                onClick={() => {
                  setMobilePagesOpen(!mobilePagesOpen);
                  setMobileServicesOpen(false);
                }}
                className="flex justify-between items-center w-full"
              >
                <span>Pages</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobilePagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobilePagesOpen && (
                <div className="mt-3 ml-4 space-y-2">
                  {pagesMenu.map((p, idx) => (
                    <Link
                      key={idx}
                      to={p.path}
                      onClick={() => setOpen(false)}
                      className={`block text-sm ${
                        isActive(p.path)
                          ? "text-orange-500 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              onClick={() => setOpen(false)}
              className={`block border-b pb-3 ${
                isActive("/portfolio")
                  ? "text-orange-500 font-semibold"
                  : ""
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/casestudies"
              onClick={() => setOpen(false)}
              className={`block border-b pb-3 ${
                isActive("/casestudies")
                  ? "text-orange-500 font-semibold"
                  : ""
              }`}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className={`block border-b pb-3 ${
                isActive("/blog") ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`block border-b pb-3 ${
                isActive("/contact") ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Contact
            </Link>

          </nav>
        </div>
      </div>
    </>
  );
}
