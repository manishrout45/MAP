import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      type: "video",
      src: "/assets/6035575_People_Person_1920x1080.mp4",
      title: "Performance Marketing That Drives Real Growth",
      desc:
        "At Marc Ads Pro, we craft data-driven marketing campaigns designed to attract, engage, and convert high-intent audiences across digital platforms.",
      tags: [
        "Performance Marketing",
        "Paid Ads",
        "Conversion Optimization",
        "Analytics",
      ],
    },
    {
      id: 2,
      type: "image",
      src:
        "https://img.freepik.com/premium-photo/blue-dart-hitting-dartboard_175634-2540.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_user_personalization&w=740&q=80",
      title: "Target the Right Audience. Maximize ROI.",
      desc:
        "Our precision-targeted ad strategies ensure your brand reaches the right people at the right time, maximizing return on investment across all channels.",
      tags: [
        "Audience Targeting",
        "Google Ads",
        "Meta Ads",
        "ROI Strategy",
        "Brand Growth",
      ],
    },
    {
      id: 3,
      type: "video",
      src: "/assets/6035575_People_Person_1920x1080.mp4",
      title: "Creative Strategies That Elevate Your Brand",
      desc:
        "From compelling creatives to powerful brand messaging, Marc Ads Pro helps businesses stand out, build trust, and scale faster in competitive markets.",
      tags: [
        "Brand Strategy",
        "Creative Design",
        "Digital Marketing",
        "SEO & Analytics",
        "Web Experience",
      ],
    },
  ];

  return (
    <section className="w-full rounded-[48px] bg-gradient-to-br from-[#5b1bbd] via-[#5a189a] to-[#4a148c] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-24">
          <div>
            <span className="text-sm text-[#ff5a3c] font-medium">
              • Our Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 max-w-2xl">
              Marketing solutions built <br /> for scalable business growth
            </h2>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff5a3c] text-white text-sm font-semibold hover:bg-black transition">
            VIEW ALL CASE STUDIES
            <ArrowRight size={16} />
          </button>
        </div>

        {/* STACKING CARDS */}
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

                    <p className="text-black/60 mt-4 max-w-lg">
                      {project.desc}
                    </p>

                    <button className="flex items-center gap-2 text-sm font-semibold mt-6 hover:text-[#ff5a3c] transition">
                      EXPLORE CASE STUDY
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* TAGS */}
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
