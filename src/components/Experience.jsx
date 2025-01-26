import React from "react"
import { FaBriefcase } from "react-icons/fa"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Cloud Counselage Pvt. Ltd.",
      date: "June 2023 - August 2023",
      description: "Worked on developing and maintaining web applications using React and Node.js.",
     
      offerLetterPdf: "/cloudinternship.png",
      experienceLetterPdf: "/CloudE.jpg",
    },
    {
      id: 2,
      title: "C++ Intern",
      company: "Technohacks EduTech",
      date: "September 2023 - Present",
      description:
        "Responsible for creating responsive and user-friendly websites for clients across various industries.",
     
      offerLetterPdf: "/TechO.jpg",
      experienceLetterPdf: "/TechE.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Experience</h2>
          <p className="text-[#8892b0] text-lg">My professional journey</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#112240] rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaBriefcase className="text-[#64ffda] text-2xl" />
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6]">{exp.title}</h3>
                  <p className="text-[#8892b0]">{exp.company}</p>
                </div>
              </div>
              <p className="text-[#64ffda] font-mono text-sm mb-4">{exp.date}</p>
              <p className="text-[#8892b0] mb-4">{exp.description}</p>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#ccd6f6] font-medium">{exp.type}</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={exp.offerLetterPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#64ffda] text-[#0a192f] px-3 py-1.5 rounded hover:bg-opacity-80 transition-all duration-300 flex items-center flex-1 justify-center"
                  >
                    Offer Letter
                  </a>
                  <a
                    href={exp.experienceLetterPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:bg-opacity-80 transition-all duration-300 flex items-center flex-1 justify-center"
                  >
                    Experience Letter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

