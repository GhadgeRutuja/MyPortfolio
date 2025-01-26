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
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Skills</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1a1a1a] group-hover:bg-[#64ffda]/10 transition-colors duration-300">
                  <skill.icon className={`w-10 h-10 ${skill.color} group-hover:text-[#64ffda]`} />
                </div>
                <h3 className="text-[#ccd6f6] font-medium text-lg group-hover:text-[#64ffda]">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

