// src/pages/BlogDetails.jsx
import React, { useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CalendarDays, User2 } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const blogs = useMemo(
    () => [
      {
        id: 1,
        category: "SEO",
        image:
          "https://img.magnific.com/free-vector/seo-optimization-banner_33099-1690.jpg?semt=ais_hybrid&w=740&q=80",
        title:
          "10 Proven SEO Strategies To Rank Your Business Higher On Google In 2026",
        date: "May 27, 2026",
        author: "Admin",
        description: `
Search Engine Optimization (SEO) is one of the most effective digital marketing channels for long-term business growth. When your website ranks on the first page of Google, you attract high-intent organic traffic, generate qualified leads, and improve conversions without paying for every click. That’s why SEO services are a long-term investment for brands that want consistent visibility and predictable growth.

In 2026, SEO is not only about adding keywords to a page. Google rewards websites that deliver strong user experience, fast page speed, mobile-first performance, and content that matches search intent. If your goal is to improve Google ranking and outrank competitors, you need a complete strategy that combines on-page SEO, technical SEO, content marketing, and link building.

Start by auditing your website to identify issues that block ranking. Check crawl errors, index coverage, broken links, redirects, duplicate content, canonical tags, mobile usability, and Core Web Vitals. A clean technical foundation helps search engines crawl and index your pages properly.

Next, focus on keyword research that attracts customers who are ready to take action. Target service keywords, location-based keywords for local SEO, and long-tail keywords that bring qualified traffic. Examples include SEO services, local SEO company, technical SEO audit, on-page SEO checklist, and digital marketing agency near me.

On-page SEO makes your content easy for Google to understand and easy for users to read. Use clear headings, SEO-friendly URLs, optimized title tags and meta descriptions, internal links to your main service pages, and image alt text that supports accessibility and relevance. Adding schema markup can also help your pages earn rich results and improve click-through rate.

Technical SEO improves speed, stability, and performance. Optimize page loading time, fix 404 errors, use HTTPS security, maintain an XML sitemap and robots.txt, compress images, and ensure your website is responsive across devices. These improvements reduce bounce rate and increase engagement, which supports rankings.

Content marketing is another major SEO growth driver. Publish helpful blogs consistently such as how-to guides, comparisons, FAQs, and case studies. This builds topical authority and makes it easier for Google to trust your website. Over time, strong content improves organic traffic and helps you rank for more keywords.

If you want more customers from your city, local SEO should be part of your plan. Optimize your Google Business Profile, keep your business name/address/phone consistent, earn genuine reviews, and create location pages that include local keywords. Local SEO helps you appear for “near me” searches and boosts calls and inquiries.

Finally, focus on earning quality backlinks. Backlinks remain a powerful ranking factor. Build links through guest posting, local citations, partnerships, and digital PR mentions. Avoid spammy links and focus on relevance and authority.

SEO-friendly keywords: SEO services, technical SEO, on-page SEO, local SEO, SEO audit, keyword research, Google ranking, organic traffic, content marketing, link building, digital marketing agency.
        `,
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
        description: `
A digital marketing strategy is no longer optional in 2026. Customers search on Google, check social media, compare reviews, and visit your website before making a decision. If your business is not visible online, competitors will capture your customers even if your service is better.

A strong online marketing strategy helps you generate leads, increase sales, improve brand awareness, and build trust. It also gives measurable results, so you can track what works and improve your ROI over time.

Local customers often search for services using intent keywords like “best service near me”, “top company in (city)”, and “pricing + reviews”. If you don’t appear in Google search results or Google Maps, you lose high-intent leads every day. This is why SEO and local SEO are essential for local business marketing.

A complete digital marketing plan combines multiple channels. SEO helps you rank on Google and drive steady organic traffic. Google Ads helps you get instant visibility for high-intent keywords and bring quick leads. Social media marketing builds credibility, engagement, and customer trust on platforms like Instagram, Facebook, LinkedIn, and YouTube.

Content marketing supports all channels by building authority. Blogs, landing pages, service pages, and FAQs help you rank for more keywords and answer customer questions clearly. Email marketing and WhatsApp marketing improve retention, boost repeat business, and help you stay connected with customers.

One of the biggest wins for local businesses is optimizing Google Business Profile. When your profile is well-optimized with accurate details, photos, reviews, and services, you can rank in the local map pack and get more calls and direction requests.

Digital marketing also strengthens branding. Trust elements like testimonials, case studies, consistent social media presence, and a professional website improve conversion rate. When customers trust your brand, they choose you faster and are more likely to recommend you.

The best part is digital marketing is measurable. You can track website traffic, leads, conversions, cost per lead, and return on ad spend. This makes it easier to improve performance and scale what works.

SEO-friendly keywords: digital marketing services, local business marketing, lead generation, online marketing strategy, SEO, Google Ads, social media marketing, content marketing, branding, website optimization, local SEO, business growth.
        `,
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
        description: `
Social media marketing is one of the fastest ways to build brand awareness, engage customers, and generate leads. Platforms like Instagram, Facebook, LinkedIn, and YouTube help businesses reach targeted audiences and convert followers into customers.

In 2026, customers don’t just buy products. They buy trust. Social media builds trust through consistent content, real engagement, and strong brand presence. When your brand stays active and helpful, customers feel confident reaching out.

A good social media strategy starts with a clear content plan. Post a mix of educational content, customer results, testimonials, behind-the-scenes videos, product highlights, and offers. Short-form video content like Reels often gives the best reach and engagement.

Lead generation becomes easier when you combine organic content with paid ads. You can run lead form ads, click-to-WhatsApp campaigns, and retargeting ads for people who visited your website. This brings highly relevant traffic and increases conversion chances.

Social proof is a major conversion factor. Show genuine reviews, before/after results, case studies, and client feedback. When people see real outcomes, they trust your service and make faster decisions.

The best brands also use strong calls-to-action like “Book a free consultation”, “Send a WhatsApp message”, or “Get a quote”. With clear CTA and a simple landing page, social media can become a consistent source of sales leads.

Track your results regularly. Monitor reach, engagement, profile visits, link clicks, and conversions. Improving your content based on analytics helps you grow faster and reduce wasted effort.

SEO-friendly keywords: social media marketing, Instagram marketing, Facebook ads, lead generation, brand awareness, content strategy, digital marketing agency, social media growth, online business promotion.
        `,
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
        description: `
A high-performing business website is your strongest sales asset. In 2026, your website must be fast, mobile-friendly, SEO-optimized, and designed for conversions. A slow or outdated website reduces trust, increases bounce rate, and hurts your Google ranking.

A modern website should load quickly and pass Core Web Vitals. Speed optimization, image compression, clean code, and good hosting improve performance. Mobile responsiveness is equally important because most users browse on mobile devices.

To convert visitors into leads, your website should have clear call-to-action buttons such as Call Now, WhatsApp, Book Appointment, or Get a Quote. Add simple contact forms, trust elements like testimonials and reviews, and service pages that explain your value clearly.

SEO-friendly structure also matters. Use proper headings, optimized meta tags, clean URLs, internal linking, schema markup, and readable content. These help search engines understand your website and improve visibility.

Security and credibility are also important. Use HTTPS, add privacy policy and terms pages, and show genuine business information. Landing pages for each service and location improve local SEO and lead generation.

SEO-friendly keywords: website development, business website design, conversion optimization, SEO-friendly website, page speed optimization, mobile responsive website, UI UX design, lead generation website.
        `,
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
        description: `
Google Ads and SEO are both powerful, but they work differently. SEO builds long-term organic traffic, while Google Ads provides instant visibility. The best choice depends on your goals, budget, and how quickly you need leads.

Google Ads (PPC advertising) is ideal for fast lead generation. You can target high-intent keywords, control your budget, and start getting clicks quickly. Ads are perfect for new businesses, promotions, seasonal offers, and campaigns where speed matters.

SEO is a long-term strategy. It improves your website’s authority, brings consistent traffic, and usually reduces cost per lead over time. Ranking organically also builds trust because many users prefer clicking non-paid results.

In most cases, the best strategy is using both together. Run Google Ads for immediate leads while building SEO for long-term growth. You can also retarget website visitors using ads to improve conversions.

SEO-friendly keywords: Google Ads, PPC advertising, SEO vs PPC, search engine optimization, paid ads, lead generation, ROAS, digital marketing strategy, online advertising.
        `,
      },
      {
        id: 6,
        category: "BRANDING",
        image:
          "https://img.magnific.com/free-photo/branding-strategy-marketing-business-graphic-design_53876-125554.jpg?semt=ais_hybrid&w=740&q=80",
        title: "How Strong Branding Builds Customer Trust And Business Growth",
        date: "May 27, 2026",
        author: "Admin",
        description: `
Branding is what people remember about your business. It’s not only a logo. Branding includes your identity, colors, messaging, service quality, customer experience, and overall trust. Strong branding helps you stand out, improve conversions, and build loyal customers.

A clear brand identity makes your marketing stronger. When your website, social media, ads, and designs look consistent, people recognize you faster and trust you more. Branding also supports premium pricing because customers pay more for brands they believe in.

Good branding improves every marketing channel. It increases click-through rate on ads, improves conversions on landing pages, and increases engagement on social media. Over time, strong branding creates emotional connection and long-term growth.

SEO-friendly keywords: branding services, brand identity, logo design, brand strategy, business branding, digital branding, brand awareness, customer trust.
        `,
      },
    ],
    []
  );

  const blog = blogs.find((item) => item.id === Number(id));

  const handleBack = () => {
    if (window.history.length > 2) navigate(-1);
    else navigate("/blog");
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
    <>
      {/* ===== Blog Header Section ===== */}
      <section className="relative w-full pt-28 pb-24 bg-gradient-to-r from-[#1F3C88] via-[#2b4aa5] to-[#14213D] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Blog Details
          </h1>

          <div className="flex justify-center items-center gap-3 text-white/80 text-sm md:text-base">
            <Link to="/" className="hover:text-white cursor-pointer">
              Homepage
            </Link>
            <span>›</span>
            <button
              type="button"
              onClick={handleBack}
              className="hover:text-white cursor-pointer text-white font-medium"
            >
              Back to Blogs
            </button>
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

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* CATEGORY */}
          <span className="inline-block bg-[#ff5a3c]/10 text-[#ff5a3c] text-sm font-semibold px-4 py-2 rounded-full mb-5 uppercase">
            {blog.category}
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>

          {/* META */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-10 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {blog.date}
            </div>

            <div className="flex items-center gap-2">
              <User2 size={18} />
              By {blog.author}
            </div>
          </div>

          {/* DESCRIPTION */}
          <article className="text-lg leading-8 text-gray-700 whitespace-pre-line">
            {blog.description}
          </article>

          {/* BOTTOM BACK LINK */}
          <div className="mt-12">
            <button
              type="button"
              onClick={handleBack}
              className="text-sm font-semibold text-[#ff5a3c] hover:underline"
            >
              ← Go to Blog List
            </button>
          </div>
        </div>
      </section>
    </>
  );
}