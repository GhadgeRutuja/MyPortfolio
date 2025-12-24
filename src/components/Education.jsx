import React from "react"
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa"

const Education = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Science",
      institution: "Sandip Institute of Technology and Research Center, Nashik",
      year: "2022 - 2026",
      score: "8.98 CGPA",
      icon: FaGraduationCap,
    },
    {
      id: 2,
      title: "Higher Secondary (12th)",
      institution: "Chattrapati Shivaji Highschool, Rahuri Factory",
      year: "2020 - 2022",
      score: "69.33%",
      icon: FaSchool,
    },
    {
      id: 3,
      title: "Secondary School (10th)",
      institution: "De Paul English Medium Highschool, Rahuri Factory",
      year: "March 2020",
      score: "90.80%",
      icon: FaSchool,
    },
  ]

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg mt-6">My academic journey and achievements</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {education.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#64ffda] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#64ffda]/25 transform hover:-translate-y-2 transition-all duration-500 animate-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/8 to-[#00bfff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 gap-4">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#00bfff] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="text-[#0a192f] text-2xl sm:text-3xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full">{item.year}</span>
                      <span className="text-sm text-[#8892b0] mt-1">Score: <span className="text-[#64ffda] font-semibold">{item.score}</span></span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#64ffda]/10 text-[#64ffda]">
                    <FaAward className="text-lg" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[#ccd6f6] leading-tight group-hover:text-[#64ffda] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#8892b0] text-base leading-relaxed">
                    {item.institution}
                  </p>
                </div>

                {/* Footer accent */}
                <div className="flex items-center gap-2 text-[#8892b0] text-sm">
                  <span className="h-px w-10 bg-[#233554]"></span>
                  <span>Milestone achieved</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#64ffda]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-card {
          animation: slide-in-up 0.65s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Education

