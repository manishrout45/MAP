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
      name: "Emily Kasavana",
      role: "Ceo & Founder",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "Matt Sinclair",
      role: "Department Manager",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 3,
      name: "Anna Cochémè",
      role: "Marketing Manager",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 4,
      name: "Kent Harrison",
      role: "Vice President",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 5,
      name: "Kent Harrison",
      role: "Vice President",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 6,
      name: "Jay Bhatnagar",
      role: "Deputy Director",
      image:
        "https://img.freepik.com/premium-photo/smiling-indian-businessman-png-transparent-background_53876-944800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
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
              Introducing the team that <br /> powers our journey
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
              <div className="relative bg-[#f2f2f2] rounded-2xl h-[360px] overflow-hidden flex items-end justify-center">

                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />

                {/* SHARE + SOCIALS (STABLE HOVER ZONE) */}
                <div className="absolute bottom-4 right-4 group">

                  {/* INVISIBLE HOVER BUFFER */}
                  <div className="absolute right-10 bottom-0 w-12 h-12" />

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
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      group-hover:pointer-events-auto
                      transition-all duration-300
                      z-20
                    "
                  >
                    <Social icon={<Facebook size={14} />} label="Facebook" />
                    <Social icon={<Twitter size={14} />} label="Twitter" />
                    <Social icon={<Linkedin size={14} />} label="LinkedIn" />
                    <Social icon={<Instagram size={14} />} label="Instagram" />
                  </div>

                  {/* SHARE BUTTON */}
                  <button className="w-9 h-9 rounded-md bg-[#ff5a3c] text-white flex items-center justify-center hover:bg-black transition">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-4">
                <h4 className="text-base font-bold">{member.name}</h4>
                <p className="text-sm text-black/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SOCIAL ICON WITH STABLE TOOLTIP */
function Social({ icon, label }) {
  return (
    <div className="relative group/icon">
      <button className="w-8 h-8 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#ff5a3c] hover:text-white transition">
        {icon}
      </button>

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
