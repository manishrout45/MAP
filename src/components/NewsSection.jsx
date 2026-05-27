// src/components/NewsSection.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsSection() {
  const posts = [
    {
      id: 1,
      category: "SEO",
      image:
        "https://img.magnific.com/free-vector/seo-optimization-banner_33099-1690.jpg?semt=ais_hybrid&w=740&q=80",
      title:
        "10 Proven SEO Strategies To Rank Your Business Higher On Google In 2026",
      date: "May 27, 2026",
      author: "Admin",
    },
    {
      id: 2,
      category: "DIGITAL MARKETING",
      image:
        "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg",
      title:
        "Why Every Local Business Needs A Digital Marketing Strategy In 2026",
      date: "May 27, 2026",
      author: "Admin",
    },
    {
      id: 3,
      category: "SOCIAL MEDIA",
      image:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063150.jpg",
      title:
        "How Social Media Marketing Helps Brands Generate More Leads And Sales",
      date: "May 27, 2026",
      author: "Admin",
    },
    {
      id: 4,
      category: "WEB DEVELOPMENT",
      image:
        "https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg",
      title:
        "Top Website Features Every Business Website Must Have For Better Conversions",
      date: "May 27, 2026",
      author: "Admin",
    },
    {
      id: 5,
      category: "GOOGLE ADS",
      image:
        "https://www.infowindtech.com/wp-content/uploads/2024/07/Google-ads-VS-SEO.webp",
      title:
        "Google Ads Vs SEO: Which Marketing Strategy Is Better For Your Business?",
      date: "May 27, 2026",
      author: "Admin",
    },
    {
      id: 6,
      category: "BRANDING",
      image:
        "https://img.magnific.com/free-photo/branding-strategy-marketing-business-graphic-design_53876-125554.jpg?semt=ais_hybrid&w=740&q=80",
      title: "How Strong Branding Builds Customer Trust And Business Growth",
      date: "May 27, 2026",
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
                Latest Blogs & Insights
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              Latest SEO, Marketing & Business Growth Insights
            </h2>
          </div>

          <Link to="/blog">
            <button className="self-start lg:self-center flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff5a3c] text-white text-sm font-semibold hover:bg-black transition">
              VIEW ALL POSTS
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="p-6">
                {/* META */}
                <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                  <span className="text-[#ff5a3c] font-semibold uppercase">
                    {post.category}
                  </span>
                  <span className="text-black/50">{post.date}</span>
                  <span className="text-black/50">By {post.author}</span>
                </div>

                {/* TITLE */}
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold leading-snug mb-5 transition duration-300 group-hover:text-[#ff5a3c] cursor-pointer">
                    {post.title}
                  </h3>
                </Link>

                {/* READ MORE */}
                <Link to={`/blog/${post.id}`}>
                  <button className="flex items-center gap-2 text-sm font-semibold text-black transition hover:text-[#ff5a3c]">
                    READ MORE
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}