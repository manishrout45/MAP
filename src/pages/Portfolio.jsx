import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      name: "Ridley Pub",
      image: "/assets/images/RidleyPub.png",
      description:
        "Modern pub and restaurant website showcasing menu, ambience, events, and contact details with a stylish and engaging design.",
      link: "https://ridleypub.com/",
    },
    {
      name: "Dr. Sangram Bal",
      image: "/assets/images/DRSangram.png",
      description:
        "Healthcare-focused website designed to present medical expertise, treatments, and patient engagement professionally.",
      link: "http://drsangrambal.com/",
    },
    {
      name: "Grace Homes",
      image: "/assets/images/GraceHomes.png",
      description:
        "Real estate website featuring property listings, modern UI design, and responsive layouts for seamless browsing experience.",
      link: "https://gracehomes.in/",
    },
    {
      name: "Shree BDM",
      image: "/assets/images/ShreeBDM.png",
      description:
        "A modern website for a leading flour manufacturing brand, showcasing premium Atta, Maida, and grain-based products with a strong focus on quality, trust, and customer satisfaction.",
      link: "https://bdmfresh.com/",
    },
    {
      name: "Future Career Solutions",
      image: "/assets/images/FutureCareer.png",
      description:
        "Career consultancy website with service details, guidance programs, and responsive design tailored for student engagement.",
      link: "http://futurecareersolutions.com/",
    },
    {
      name: "Dr. J.P Pani",
      image: "/assets/images/DrJPPani.png",
      description:
        "Professional gynecology and women's healthcare website showcasing expert medical services, maternity care, fertility consultation, patient resources, appointments, and contact information with a trusted, compassionate, and modern design.",
      link: "https://drjppani.netlify.app/",
    },
    {
      name: "Pillance",
      image: "/assets/images/Pillance.png",
      description:
        "Pharmaceutical company website showcasing high-quality healthcare products, manufacturing standards, product portfolio, research initiatives, and industry expertise with a professional and trustworthy design.",
      link: "https://pillance.com/",
    },
    {
      name: "Eden Events",
      image: "/assets/images/EdenEvents.png",
      description:
        "Creative event management website highlighting wedding planning, corporate events, social celebrations, event services, gallery showcases, and client experiences with an elegant and engaging design.",
      link: "https://edenevent.netlify.app/",
    },
    {
      name: "Taj Steel Furniture",
      image: "/assets/images/TajSteel.png",
      description:
        "Modern furniture manufacturing website featuring premium steel furniture solutions, product catalogs, custom designs, quality craftsmanship, and business inquiries with a sleek and professional design.",
      link: "https://tajsteelfurniture.netlify.app/",
    },
    {
    name: "Dr. Somnath Jena",
    image: "/assets/images/DrSomnathJena.png",
    description:
      "Doctor portfolio and clinic website showcasing medical expertise, treatments, patient resources, appointment booking, and contact details with a clean and trustworthy design.",
    link: "https://drsomnathjena.com",
  },
    {
    name: "Cosmodent Cuttack",
    image: "/assets/images/Cosmodent.png",
    description:
      "Dental clinic website showcasing expert dental care, treatments, cosmetic dentistry, patient resources, appointment booking, and contact details with a clean, modern, and trustworthy design.",
    link: "https://cosmodentcuttack.com/",
    },
  {
    name: "HB Iconic Odisha",
    image: "/assets/images/HBIconicOdisha.png",
    description:
      "Modern business website showcasing brand identity, services, portfolio highlights, customer trust, and contact details with a bold and professional design.",
    link: "https://hbiconicodisha.com/",
  },
  ];

  return (
    <>
      {/* ===== Portfolio Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Portfolio
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <span className="text-white font-medium">Portfolio</span>
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

      {/* ===== Portfolio Projects Section ===== */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-[#ff5a3c]">
              • Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Featured Projects
            </h2>
            <p className="text-black/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Explore some of the websites and digital experiences we’ve built
              to help brands grow and stand out online.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.name}
                  </h3>

                  <p className="text-sm text-black/60 mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* ✅ Fixed at bottom */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-[#ff5a3c] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-black transition duration-300 text-center"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}