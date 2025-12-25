import React from "react"
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa"

const Education = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computers",
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
    <div className="relative min-h-screen bg-[#0a192f] py-16 px-4 sm:py-20 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft glow backdrops behind the timeline */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 left-[20%] h-80 w-80 bg-[#64ffda]/15 blur-[140px] opacity-70 animate-pulse"></div>
        <div className="absolute top-[32%] -left-40 h-96 w-96 bg-[#0ea5e9]/12 blur-[160px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-18%] right-1/4 h-80 w-80 bg-[#64ffda]/12 blur-[150px] opacity-65 animate-pulse"></div>
        <div className="sparkle-layer"></div>
        <div className="neon-grid"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg mt-6">My academic journey and achievements</p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#64ffda] via-[#00bfff] to-[#64ffda] opacity-40"></div>

          <div className="space-y-12 md:space-y-16">
            {education.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Mobile (vertical with left dot) */}
                <div className="md:hidden flex items-start gap-4">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <span className="block h-3 w-3 rounded-full bg-gradient-to-br from-[#64ffda] to-[#00bfff] shadow-[0_0_12px_rgba(100,255,218,0.6)] animate-pulse"></span>
                    <span className="absolute left-1/2 -translate-x-1/2 top-3 h-12 w-px bg-[#233554]"></span>
                  </div>
                  {/* Card */}
                  <div className="group bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#64ffda] p-6 w-full shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/25 transition-all duration-500 animate-card">
                    {/* Top row (original inner layout) */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#00bfff] shadow-lg">
                          <item.icon className="text-[#0a192f] text-2xl" />
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
                    <h3 className="text-lg sm:text-xl font-bold text-[#ccd6f6] leading-tight group-hover:text-[#64ffda] transition-colors">{item.title}</h3>
                    <p className="text-[#8892b0] mt-2">{item.institution}</p>
                    {/* Footer accent */}
                    <div className="flex items-center gap-2 text-[#8892b0] text-sm mt-4">
                      <span className="h-px w-10 bg-[#233554]"></span>
                      <span>Milestone achieved</span>
                    </div>
                  </div>
                </div>

                {/* Desktop (alternating left/right) */}
                <div className="hidden md:grid md:grid-cols-3 md:gap-2 items-center">
                  {/* Left card for even, empty for odd */}
                  <div className={`${index % 2 === 0 ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {index % 2 === 0 && (
                      <div className="ml-auto md:-mr-2 max-w-[92%] group bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#64ffda] p-8 shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/25 transition-all duration-500 animate-left" style={{ animationDelay: `${index * 0.12}s` }}>
                        {/* Top row (original inner layout) */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#00bfff] shadow-lg">
                              <item.icon className="text-[#0a192f] text-2xl" />
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
                        <h3 className="text-xl font-bold text-[#ccd6f6] leading-tight group-hover:text-[#64ffda] transition-colors">{item.title}</h3>
                        <p className="text-[#8892b0] mt-2">{item.institution}</p>
                        {/* Footer accent */}
                        <div className="flex items-center gap-2 text-[#8892b0] text-sm mt-4">
                          <span className="h-px w-10 bg-[#233554]"></span>
                          <span>Milestone achieved</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <span className="block h-4 w-4 rounded-full bg-gradient-to-br from-[#64ffda] to-[#00bfff] ring-4 ring-[#0a192f] shadow-[0_0_18px_rgba(100,255,218,0.6)]"></span>
                    </div>
                  </div>

                  {/* Right card for odd, empty for even */}
                  <div className={`${index % 2 !== 0 ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
                    {index % 2 !== 0 && (
                      <div className="mr-auto md:-ml-2 max-w-[92%] group bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#64ffda] p-8 shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/25 transition-all duration-500 animate-right" style={{ animationDelay: `${index * 0.12}s` }}>
                        {/* Top row (original inner layout) */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#00bfff] shadow-lg">
                              <item.icon className="text-[#0a192f] text-2xl" />
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
                        <h3 className="text-xl font-bold text-[#ccd6f6] leading-tight group-hover:text-[#64ffda] transition-colors">{item.title}</h3>
                        <p className="text-[#8892b0] mt-2">{item.institution}</p>
                        {/* Footer accent */}
                        <div className="flex items-center gap-2 text-[#8892b0] text-sm mt-4">
                          <span className="h-px w-10 bg-[#233554]"></span>
                          <span>Milestone achieved</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .sparkle-layer {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 10% 20%, rgba(100, 255, 218, 0.75), transparent),
            radial-gradient(2px 2px at 80% 30%, rgba(14, 165, 233, 0.8), transparent),
            radial-gradient(2px 2px at 30% 75%, rgba(100, 255, 218, 0.7), transparent),
            radial-gradient(2px 2px at 65% 60%, rgba(14, 165, 233, 0.8), transparent),
            radial-gradient(3px 3px at 45% 40%, rgba(255, 255, 255, 0.35), transparent);
          background-size: 22% 22%;
          mix-blend-mode: screen;
          opacity: 0.7;
          animation: sparkle-shift 12s ease-in-out infinite alternate;
        }

        .neon-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px);
          background-size: 140px 140px;
          mask-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8), transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8), transparent 70%);
          opacity: 0.45;
          mix-blend-mode: screen;
          animation: grid-pan 22s linear infinite;
        }

        @keyframes sparkle-shift {
          from { transform: translate3d(0, 0, 0); opacity: 0.55; }
          to { transform: translate3d(12px, -10px, 0); opacity: 0.85; }
        }

        @keyframes grid-pan {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-120px, -80px, 0); }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-card {
          animation: slide-in-up 0.65s ease-out forwards;
          opacity: 0;
        }
        .animate-left { animation: slide-in-left 0.6s ease-out forwards; opacity: 0; }
        .animate-right { animation: slide-in-right 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  )
}

export default Education

