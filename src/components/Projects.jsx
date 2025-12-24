import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 0,
      title: "HealthCare+",
      description: "A doctor appointment booking website in React, Node, and MongoDB with separate logins for doctor, patient, and admin.",
      dateRange: "2025",
      image: "/image.png",
      category: "WEBSITES",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/GhadgeRutuja/HealthCare-",
      liveUrl: "https://doctor-appointment-booking-gilt.vercel.app/",
    },
    {
      id: 1,
      title: "Portfolio",
      description: "Developed my own responsive portfolio describing my work.",
      dateRange: "Dec 2024 - Jan 2025",
      image: "/Portfolio.png",
      category: "WEBSITES",
      techStack: ["React.js", "Tailwind CSS", "Figma", "JavaScript"],
      githubUrl: "https://github.com/GhadgeRutuja/Rutuja-s-Portfolio/tree/master",
    },
    {
      id: 2,
      title: "AI Assistant",
      description: "Developed a AI chatbot using web API key...",
      dateRange: "June 2024 - July 2024",
      image: "/AI.png",
      category: "WEBSITES",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/GhadgeRutuja/AI-Assistant",
    },
    {
      id: 3,
      title: "College Navigator Website",
      description: "Developed a website that can help students to find desired college in specific cutoff score...",
      dateRange: "Oct 2024 - Nov 2024",
      image: "/ClgNav.png",
      category: "WEBSITES",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/GhadgeRutuja/College_Navigator",
    },
  ]

  const categories = ["WEBSITES"]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  const handleProjectClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto mt-6">
            I have worked on a wide range of projects. Here are some of my projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden
                ${activeFilter === category
                  ? 'bg-gradient-to-r from-[#64ffda] to-[#00bfff] text-[#0a192f] shadow-lg shadow-[#64ffda]/50'
                  : 'bg-[#112240] text-[#8892b0] border-2 border-[#233554] hover:border-[#64ffda] hover:text-[#64ffda]'}`}
            >
              {activeFilter !== category && (
                <span className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/10 to-[#00bfff]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden border border-[#233554] hover:border-[#64ffda] transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 animate-slide-in-up shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/5 to-[#00bfff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-60 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Action Buttons (GitHub + Live) */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button
                    onClick={() => handleProjectClick(project.githubUrl)}
                    className="p-3 bg-[#112240]/90 backdrop-blur-sm rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
                  >
                    <FaGithub size={20} />
                  </button>
                  {project.liveUrl && (
                    <button
                      onClick={() => handleProjectClick(project.liveUrl)}
                      className="px-3 py-2 bg-[#112240]/90 backdrop-blur-sm rounded-lg text-[#64ffda] text-xs font-semibold hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
                    >
                      Live
                    </button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="relative z-10 p-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 group-hover:bg-[#64ffda]/20 group-hover:border-[#64ffda]/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#64ffda] font-mono mb-3 bg-[#64ffda]/10 inline-block px-3 py-1 rounded-full">
                  {project.dateRange}
                </p>
                <p className="text-[#8892b0] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#64ffda]/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Projects

