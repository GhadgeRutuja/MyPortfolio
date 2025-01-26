import React, { useState } from 'react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "DSA in Java, Apna College",
      image: "/DSA.jpg",
      fullImage: "/DSA-full.jpg"
    },
    {
      id: 2,
      title: "React Masterclass, Scaler",
      image: "/ReactMasterclass.jpg",
      fullImage: "/ReactMasterclass-full.png"
    },
    {
      id: 3,
      title: "Basics of Python, Infosys Springboard",
      image: "/Python.jpg",
      fullImage: "/Python-full.jpg"
    },
    {
      id: 4,
      title: "Java Course, Scaler",
      image: "/JavaCourse.jpg",
      fullImage: "/JavaCourse-full.jpg"
    },
    {
      id: 5,
      title: "Flipkart Runway: Season 4, Flipkart",
      image: "/FlipkartRunway.jpg",
      fullImage: "/FlipkartRunway-full.jpg"
    },
    {
      id: 6,
      title: "Smart India Hackathon",
      image: "/SIH.jpg",
      fullImage: "/SIH-full.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Certificates</h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#112240] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div 
                className="relative h-64 cursor-pointer"
                onClick={() => window.open(cert.fullImage, '_blank')}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:opacity-75 transition-opacity duration-300"
                />
              </div>

              {/* Certificate Title */}
              <div className="p-6">
                <h3 className="text-[#ccd6f6] text-lg font-medium text-center">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#112240] text-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-10 rounded-full p-4 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

