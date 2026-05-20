import {
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MeetOurTeam() {
  const team = [
    {
      id: 1,
      name: "AMBIKA MISHRA",
      role: "Director",
      empId: "MAP/EMP/001",
      joining: "Oct 2024",
      image:
        "/assets/images/OurTeam/Ambika.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 2,
      name: "SAMBIT ANIKESH",
      role: "Sales Manager",
      empId: "MAP/EMP/002",
      joining: "16th Oct 2024",
      image:
        "/assets/images/OurTeam/Sambit.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 3,
      name: "OLIVE ASHIS MUNDA",
      role: "Sr. Graphics Designer",
      empId: "MAP/EMP/003",
      joining: "4th Nov 2024",
      image:
        "/assets/images/OurTeam/Olive.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 4,
      name: "MITHUN BISHOI",
      role: "Digital Marketing Head",
      empId: "MAP/EMP/004",
      joining: "2nd Jan 2025",
      image:
        "/assets/images/OurTeam/Mithun.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 5,
      name: "RACHANA CHAUHAN",
      role: "Tele Sales Executive",
      empId: "MAP/EMP/005",
      joining: "2nd Apr 2025",
      image:
        "/assets/images/OurTeam/Rachana.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 6,
      name: "SRITAM DAS",
      role: "Socia Media Manager",
      empId: "MAP/EMP/006",
      joining: "14th Apr 2025",
      image:
        "/assets/images/OurTeam/Sritam.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 7,
      name: "BIJAYALAXMI MISHRA",
      role: "Account & Finance Executive",
      empId: "MAP/EMP/007",
      joining: "8th May 2025",
      image:
        "/assets/images/OurTeam/Bijayalaxmi.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 8,
      name: "SWAGATIKA SINGH",
      role: "Sr. Web Developer",
      empId: "MAP/EMP/008",
      joining: "1st June 2025",
      image:
        "/assets/images/OurTeam/Swagatika.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 9,
      name: "TANUSHREE DAS",
      role: "Socia Media Manager",
      empId: "MAP/EMP/009",
      joining: "1st July 2025",
      image:
        "/assets/images/OurTeam/Tanushree.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 10,
      name: "JEEVANRUP SAHOO",
      role: "Graphics Designer(TL)",
      empId: "MAP/EMP/010",
      joining: "1st July 2025",
      image:
        "/assets/images/OurTeam/Jeevanrup.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 11,
      name: "MANISH ROUT",
      role: "Jr. Web Developer",
      empId: "MAP/EMP/011",
      joining: "24th Nov 2025",
      image:
        "/assets/images/OurTeam/Manish.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 12,
      name: "MAMA MAHAPATRA",
      role: "Tele Sales Executive",
      empId: "MAP/EMP/012",
      joining: "2nd Apr 2026",
      image:
        "/assets/images/OurTeam/Mama.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 13,
      name: "ANINJITA ROUT",
      role: "SEO Analyst",
      empId: "MAP/EMP/013",
      joining: "7th Apr 2026",
      image:
        "/assets/images/OurTeam/Aninjita.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },

    {
      id: 14,
      name: "ITISHREE PATRA",
      role: "Jr. Graphics Designer",
      empId: "MAP/EMP/014",
      joining: "20th Apr 2026",
      image:
        "/assets/images/OurTeam/Itishree.png",

      social: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
      },
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5a3c]" />

              <p className="text-sm font-medium text-[#ff5a3c]">
                Meet Our Team
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              Introducing the team that <br />
              powers our journey
            </h2>
          </div>

          <Link to="/ourteam">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff5a3c] text-white text-sm font-semibold hover:bg-black transition">
              MEET THE TEAM
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.id}>
              {/* CARD */}
              <div className="relative bg-[#ffffff] rounded-2xl h-[420px] overflow-hidden flex items-end justify-center group">
                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[85%] w-[85%] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* SHARE + SOCIALS */}
                <div className="absolute bottom-4 right-4 group/share">
                  {/* SOCIAL POPUP */}
                  <div
                    className="
                      absolute right-12 bottom-0
                      flex items-center gap-2
                      bg-white
                      px-3 py-2
                      rounded-xl
                      shadow-md
                      opacity-0 translate-x-2
                      pointer-events-none
                      group-hover/share:opacity-100
                      group-hover/share:translate-x-0
                      group-hover/share:pointer-events-auto
                      transition-all duration-300
                      z-20
                    "
                  >
                    <Social
                      icon={<Facebook size={14} />}
                      label="Facebook"
                      link={member.social.facebook}
                    />

                    <Social
                      icon={<Twitter size={14} />}
                      label="Twitter"
                      link={member.social.twitter}
                    />

                    <Social
                      icon={<Linkedin size={14} />}
                      label="LinkedIn"
                      link={member.social.linkedin}
                    />

                    <Social
                      icon={<Instagram size={14} />}
                      label="Instagram"
                      link={member.social.instagram}
                    />
                  </div>

                  {/* SHARE BUTTON */}
                  <button className="w-10 h-10 rounded-lg bg-[#ff5a3c] text-white flex items-center justify-center hover:bg-black transition">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-5">
                <h4 className="text-xl font-bold text-black">
                  {member.name}
                </h4>

                <p className="text-[#ff5a3c] font-medium mt-1">
                  {member.role}
                </p>

                <div className="mt-3 space-y-1">
                  <p className="text-sm text-black/60">
                    Employee ID: {member.empId}
                  </p>

                  <p className="text-sm text-black/60">
                    Joined: {member.joining}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SOCIAL BUTTON ===== */
function Social({ icon, label, link }) {
  return (
    <div className="relative group/icon">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#ff5a3c] hover:text-white transition"
      >
        {icon}
      </a>

      {/* TOOLTIP */}
      <span
        className="
          absolute -top-9 left-1/2 -translate-x-1/2
          bg-black text-white text-xs
          px-2 py-1 rounded
          opacity-0
          group-hover/icon:opacity-100
          transition
          whitespace-nowrap
          pointer-events-none
        "
      >
        {label}
      </span>
    </div>
  );
}