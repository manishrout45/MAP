import { ArrowRight } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Performance Marketing",
      desc:
        "We run data-driven ad campaigns focused on conversions, ROI, and scalable business growth across digital platforms.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 stroke-[#ff5a3c] fill-none"
          strokeWidth="1.7"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="7" y1="20" x2="17" y2="20" />
          <line x1="12" y1="18" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      title: "Paid Advertising (Google & Meta)",
      desc:
        "We create high-performing ad strategies on Google, Facebook, and Instagram to drive qualified leads and sales.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 stroke-[#ff5a3c] fill-none"
          strokeWidth="1.7"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3,7 12,13 21,7" />
        </svg>
      ),
    },
    {
      title: "Branding & Growth Strategy",
      desc:
        "We build strong brand identities and growth strategies that help businesses stand out and scale sustainably.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 stroke-[#ff5a3c] fill-none"
          strokeWidth="1.7"
        >
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 1 4 12c-.6.6-1-1.5-1-2H9c0-.5-.4-1.4-1-2a7 7 0 0 1 4-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />
              <p className="text-sm font-medium text-[#ff5a3c]">
                Our Core Services
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight max-w-2xl">
              Results-driven digital marketing services for modern businesses
            </h2>
          </div>

          <button className="self-start lg:self-center flex items-center gap-2 bg-[#ff5a3c] text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition">
            Explore All Services
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="
                group relative rounded-2xl p-8 overflow-hidden
                bg-[#f3f3f3]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* GRADIENT HOVER LAYER */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{
                  background:
                    "linear-gradient(135deg, #ff5a3c 0%, #8a4bdc 50%, #3b4bff 100%)",
                }}
              />

              {/* DOT PATTERN */}
              <div
                className="
                  absolute -top-10 -right-10 w-48 h-48 rounded-full
                  opacity-60 group-hover:opacity-30
                  transition-opacity duration-500
                "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                  maskImage:
                    "radial-gradient(circle at center, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 60%, transparent 100%)",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-white/90 transition">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-sm font-semibold text-black group-hover:text-white transition">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="text-[#ff5a3c] group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
