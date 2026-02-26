import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function NewsSection() {
  const posts = [
    {
      id: 1,
      category: "DIGITAL MARKETING",
      image:
        "https://img.freepik.com/premium-photo/business-question-mark-concept_1410957-59624.jpg",
      title: "Questions To Ask Before Hiring A Digital Marketing Agency",
      date: "Jun 11, 2025",
      author: "Admin",
    },
    {
      id: 2,
      category: "BRANDING",
      image:
        "https://img.freepik.com/premium-photo/branding-concept-hologram-with-display_991097-2793.jpg",
      title:
        "Case Study: How A Digital Marketing Agency Transformed A Local Business",
      date: "Jun 11, 2025",
      author: "Admin",
    },
    {
      id: 3,
      category: "OPTIMIZATION",
      image:
        "https://img.freepik.com/premium-photo/business-innovation-with-ai-marketing-analytics_1057472-254.jpg",
      title:
        "The Cost Of Hiring A Digital Marketing Agency: Is It Worth It?",
      date: "Jun 11, 2025",
      author: "Admin",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />
              <p className="text-sm font-medium text-[#ff5a3c]">
                News And Insights
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              Update with us and know our latest insights
            </h2>
          </div>

          <Link to="/blog">
          <button className="self-start lg:self-center flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff5a3c] text-white text-sm font-semibold hover:bg-black transition">
            VIEW ALL POSTS
            <ArrowRight size={16} />
          </button>
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id}>
              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[260px] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* META */}
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="text-[#ff5a3c] font-semibold uppercase">
                  / {post.category}
                </span>
                <span className="text-black/50">{post.date}</span>
                <span className="text-black/50">By {post.author}</span>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold leading-snug mb-4 transition hover:text-[#ff5a3c] cursor-pointer">
                {post.title}
              </h3>

              {/* READ MORE */}
              <button className="flex items-center gap-2 text-sm font-semibold text-black transition hover:text-[#ff5a3c]">
                READMORE
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
