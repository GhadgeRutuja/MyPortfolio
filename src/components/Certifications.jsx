import React from 'react'

const Certifications = () => {
  

  const certificates = [
    {
      id: 0,
      title: "Oracle Certified Foundations Associate, Oracle",
      image: "/oracle.png",
      fullImage: "/oracle.png"
    },
    {
      id: 1,
      title: "Smart India Hackathon, 2025",
      image: "/SIH,2025.jpeg",
      fullImage: "/SIH,2025.jpeg"
    },
    {
      id: 2,
      title: "DSA in Java, Apna College",
      image: "/DSA.jpg",
      fullImage: "/DSA-full.jpg"
    },
    {
      id: 3,
      title: "React Masterclass, Scaler",
      image: "/ReactMasterclass.jpg",
      fullImage: "/ReactMasterclass-full.jpg"
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
  ]

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Certificates
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg mt-4">Highlights of my certified milestones</p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden border border-[#233554] hover:border-[#64ffda] shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/25 transform hover:-translate-y-2 transition-all duration-500 animate-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/10 to-[#00bfff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Certificate Image */}
              <div
                className="relative h-56 cursor-pointer overflow-hidden bg-[#0a192f]"
                onClick={() => window.open(cert.fullImage, '_blank', 'noopener,noreferrer')}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-[#8892b0] text-sm">Image not found</div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-50"></div>
                <div className="absolute bottom-3 right-3 flex justify-end items-center text-sm font-semibold text-[#ccd6f6] z-10">
                  <span className="px-3 py-1 rounded-full bg-[#233554]/70 text-[#ccd6f6]">{index + 1}/{certificates.length}</span>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="relative z-10 p-6 flex flex-col gap-3">
                <h3 className="text-[#ccd6f6] text-lg font-semibold leading-snug group-hover:text-[#64ffda] transition-colors duration-300 text-center">
                  {cert.title}
                </h3>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => window.open(cert.fullImage, '_blank', 'noopener,noreferrer')}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#64ffda] to-[#00bfff] text-[#0a192f] font-semibold text-sm shadow-md hover:shadow-[#64ffda]/40 transform hover:scale-105 transition-all"
                  >
                    View Full
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#112240] text-[#64ffda] border border-[#233554] hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300"
          >
            <span className="text-sm font-semibold">Back to top</span>
            <svg
              className="w-5 h-5"
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

      {/* Lightbox */}
      {/* Lightbox removed: images now open in a new tab */}

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-card {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-card { animation: slide-card 0.55s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  )
}

export default Certifications

