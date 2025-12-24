import React from "react"
import { FaBriefcase, FaFileAlt, FaAward } from "react-icons/fa"

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: "Web Development Intern",
      company: "Inpernpe",
      date: "13/01/2025 - 09/02/2025",
      description: "Worked on developing and maintaining web applications with modern technologies.",
     
      offerLetterPdf: "/Certificate3.jpg",
      experienceLetterPdf: "/Certificate4 (1).jpg",
    },
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Cloud Counselage Pvt. Ltd.",
      date: "June 2024 - Oct 2024",
      description: "Worked on developing and maintaining web applications using React and Node.js.",
     
      offerLetterPdf: "/cloudinternship.png",
      experienceLetterPdf: "/CloudE.jpg",
    },
    {
      id: 2,
      title: "C++ Intern",
      company: "Technohacks EduTech",
      date: "Dec 2023 - Jan 2024",
      description:
        "Responsible for creating responsive and user-friendly websites for clients across various industries.",
     
      offerLetterPdf: "/TechO.jpg",
      experienceLetterPdf: "/TechE.jpg",
    },
  ]

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg mt-6">My professional journey and achievements</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl p-8 border border-[#233554] hover:border-[#64ffda] transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#64ffda]/20 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/5 to-[#00bfff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="bg-gradient-to-br from-[#64ffda] to-[#00bfff] p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <FaBriefcase className="text-[#0a192f] text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-[#8892b0] text-lg font-medium mb-2">{exp.company}</p>
                    <p className="text-[#64ffda] font-mono text-sm bg-[#64ffda]/10 inline-block px-3 py-1 rounded-full">
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#8892b0] leading-relaxed mb-6 text-base">
                  {exp.description}
                </p>

                {/* Buttons Section */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={exp.offerLetterPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#64ffda] to-[#00bfff] text-[#0a192f] font-semibold rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#64ffda]/50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00bfff] to-[#64ffda] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <FaFileAlt className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Offer Letter</span>
                  </a>
                  
                  <a
                    href={exp.experienceLetterPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center gap-2 px-6 py-3 bg-transparent text-[#64ffda] font-semibold rounded-lg border-2 border-[#64ffda] overflow-hidden transform hover:scale-105 transition-all duration-300 hover:text-[#0a192f]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#00bfff] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></span>
                    <FaAward className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Experience Letter</span>
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#64ffda]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Experience

