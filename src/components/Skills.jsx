import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava,
  FaDatabase, FaLeaf, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiMongodb, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]' },
    { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]' },
    { name: 'React JS', icon: FaReact, color: 'text-[#61DAFB]' },
    { name: 'Node JS', icon: FaNodeJs, color: 'text-[#339933]' },
    { name: 'Java', icon: FaJava, color: 'text-[#007396]' },
    { name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },
    { name: 'MySQL', icon: FaDatabase, color: 'text-[#4479A1]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'Figma', icon: FaFigma, color: 'text-[#F24E1E]' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-[#7952B3]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Animation */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Skills & Technologies
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto mt-6">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid with Staggered Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 xl:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl p-6 border border-[#233554] hover:border-[#64ffda] transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-scale-in shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/10 to-[#00bfff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-4">
                {/* Icon Container with Gradient Background */}
                <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a192f] group-hover:from-[#64ffda]/20 group-hover:to-[#00bfff]/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#64ffda] transition-all duration-500"></div>
                  <skill.icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-[#ccd6f6] font-semibold text-base text-center group-hover:text-[#64ffda] transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#64ffda]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Skills;

