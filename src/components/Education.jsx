import React from "react"
import { FaGraduationCap, FaSchool } from "react-icons/fa"

const Education = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Science",
      institution: "Sandip Institute of Technology and Research Center, Nashik",
      year: "2022 - 2026",
      score: "8.86 CGPA",
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
    <div className="min-h-screen bg-[#0a192f] py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-3 sm:mb-4">Education</h2>
          <p className="text-[#8892b0] text-base sm:text-lg">My educational journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 sm:transform sm:-translate-x-1/2 bg-[#64ffda] opacity-20"></div>

          {/* Education Items */}
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? "sm:left-timeline" : "sm:right-timeline"}`}
            >
              <div
                className={`flex items-start sm:items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center mt-1.5 sm:mt-0">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#64ffda]"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                  <div className="bg-[#112240] p-4 sm:p-6 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <item.icon className="text-[#64ffda] text-xl sm:text-2xl" />
                      <h3 className="text-lg sm:text-xl font-bold text-[#ccd6f6]">{item.title}</h3>
                    </div>
                    <p className="text-[#8892b0] text-sm sm:text-base mb-1 sm:mb-2">{item.institution}</p>
                    <p className="text-[#64ffda] font-mono text-xs sm:text-sm">{item.year}</p>
                    <p className="text-[#8892b0] mt-2 font-medium text-sm sm:text-base">Score: {item.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education

