import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      type: "video",
      src: "/assets/case-study-clinic.mp4", // Replace with real snapshot video if available
      title: "Local Multi-Specialty Clinic – 200% Lead Growth",
      desc:
        "Problem: The clinic was struggling with low appointment bookings and high cost per lead.\n\nSolution: We restructured Google & Meta Ads campaigns, optimized landing pages, and implemented precise conversion tracking.\n\nResults: +200% leads in 90 days | 4X ROAS | -35% Cost Per Lead.",
      tags: [
        "+200% Leads",
        "4X ROAS",
        "Healthcare Marketing",
        "Google & Meta Ads",
      ],
    },
    {
      id: 2,
      type: "image",
      src: "https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_user_personalization&w=740&q=80", // Use real performance chart image
      title: "Event Management Brand – 3.5X ROI in 4 Months",
      desc:
        "Problem: The business faced inconsistent inquiries and low brand visibility.\n\nSolution: We launched precision-targeted ad funnels, remarketing campaigns, and SEO optimization for high-intent keywords.\n\nResults: +180% inquiries | Top 10 ranking for key wedding term | 3.5X ROI.",
      tags: [
        "+180% Inquiries",
        "Top 10 SEO Ranking",
        "3.5X ROI",
        "Performance Marketing",
      ],
    },
    {
      id: 3,
      type: "video",
      src: "/assets/Ecom.mp4",
      title: "Ecommerce Fashion Brand – 250% Revenue Growth",
      desc:
        "Problem: High cart abandonment and poor return on paid ad spend.\n\nSolution: Optimized ad creatives, improved product pages, and implemented advanced retargeting strategies.\n\nResults: +250% revenue growth | 5X ROAS | -28% cart abandonment.",
      tags: [
        "+250% Revenue",
        "5X ROAS",
        "Ecommerce Scaling",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <section className="w-full rounded-[48px] bg-gradient-to-br from-[#1F3C88] via-[#2b4aa5] to-[#14213D] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-24">
          <div>
            <span className="text-sm text-[#ff5a3c] font-medium">
              • Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 max-w-2xl">
              Case Studies: Real Results, Real Growth
            </h2>
          </div>

          <Link
            to="/casestudies"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff5a3c] text-white text-sm font-semibold hover:bg-black transition"
          >
            VIEW ALL CASE STUDIES
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* STACKING CARDS (Design unchanged) */}
        <div className="relative space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-28"
              style={{ zIndex: 10 + index }}
            >
              <div className="bg-white rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-8 min-h-[460px] shadow-xl">

                {/* MEDIA */}
                <div className="relative h-[260px] lg:h-auto">
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-black/60 mt-4 max-w-lg whitespace-pre-line">
                      {project.desc}
                    </p>

                    <button className="flex items-center gap-2 text-sm font-semibold mt-6 hover:text-[#ff5a3c] transition">
                      VIEW FULL CASE STUDY
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* TAGS (Now showing results highlights) */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full border border-black/10 text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}