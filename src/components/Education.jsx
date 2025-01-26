import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Science",
      institution: "Sandip Institute of Technology and Research Center, Nashik",
      year: "2022 - 2026",
      score: "8.16 CGPA",
      icon: FaGraduationCap
    },
    {
      id: 2,
      title: "Higher Secondary (12th)",
      institution: "Chattrapati Shivaji Highschool, Rahuri Factory",
      year: "2020 - 2022",
      score: "69.33%",
      icon: FaSchool
    },
    {
      id: 3,
      title: "Secondary School (10th)",
      institution: "De Paul English Medium Highschool, Rahuri Factory",
      year: "March 2020",
      score: "90.80%",
      icon: FaSchool
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Education</h2>
          <p className="text-[#8892b0] text-lg">My educational journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#64ffda] opacity-20"></div>

          {/* Education Items */}
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'left-timeline' : 'right-timeline'
              }`}
            >
              <div className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-[#112240] p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-[#64ffda] text-2xl" />
                      <h3 className="text-xl font-bold text-[#ccd6f6]">{item.title}</h3>
                    </div>
                    <p className="text-[#8892b0] mb-2">{item.institution}</p>
                    <p className="text-[#64ffda] font-mono text-sm">{item.year}</p>
                    <p className="text-[#8892b0] mt-2 font-medium">Score: {item.score}</p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#64ffda]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

