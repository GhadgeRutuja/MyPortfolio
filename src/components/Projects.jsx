import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "Developed my own responsive portfolio describing my work.",
      dateRange: "Dec 2024 - Jan 2025",
      image: "/Portfolio.png",
      category: "WEBSITES",
      techStack: ["React.js", "Tailwind CSS", "Figma",  "JavaScript"],
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
      
    }
  ];

  const categories = [ "WEBSITES"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Projects</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            I have worked on a wide range of projects. Here are some of my projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-[#6c3ce9] text-white' 
                  : 'bg-[#112240] text-[#8892b0] hover:text-[#64ffda]'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
              onClick={() => handleProjectClick(project.githubUrl)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-[#1a1a1a] text-[#64ffda]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8892b0] mb-2">
                  {project.dateRange}
                </p>
                <p className="text-[#8892b0] mb-4 line-clamp-3">
                  {project.description}
                </p>
  
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

