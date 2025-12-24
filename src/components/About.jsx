import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
// Import the image if it's in the src/components folder
import RutujaPic from './Rutujapic.jpg';

const About = () => {
  // State to handle image load error
  const [imageError, setImageError] = React.useState(false);

  // Function to handle image load error
  const handleImageError = () => {
    console.error("Failed to load image");
    setImageError(true);
  };

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] flex items-center justify-center px-4 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 animate-slide-in-left">
          <div className="space-y-4">
            <p className="text-[#64ffda] text-lg font-mono animate-fade-in" style={{animationDelay: '0.1s'}}>
              Hi, my name is
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight md:leading-[1.15] pb-1 sm:pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ccd6f6] to-[#64ffda] drop-shadow-md animate-fade-in" style={{animationDelay: '0.2s'}}>
              Rutuja Ghadge.
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] animate-fade-in" style={{animationDelay: '0.3s'}}>
              I build things for the web.
            </h2>
            <p className="text-xl text-[#8892b0] animate-fade-in" style={{animationDelay: '0.4s'}}>
              Full Stack Developer | Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <a
              href="https://github.com/GhadgeRutuja"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-[#112240] rounded-lg text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#64ffda]/30"
            >
              <FaGithub size={28} />
              <span className="absolute inset-0 rounded-lg border-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="https://linkedin.com/in/rutuja-ghadge-98b6b72a1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-[#112240] rounded-lg text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#64ffda]/30"
            >
              <FaLinkedin size={28} />
              <span className="absolute inset-0 rounded-lg border-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Resume Button */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a
              href="/RutujaNitinGhadge_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#64ffda] to-[#00bfff] text-[#0a192f] font-bold rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#64ffda]/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00bfff] to-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <FaDownload className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 animate-slide-in-right">
          <div className="relative w-full max-w-md mx-auto group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="relative aspect-w-4 aspect-h-5 rounded-lg overflow-hidden border-4 border-[#233554] group-hover:border-[#64ffda] transition-all duration-500">
              {!imageError ? (
                <img
                  src={RutujaPic}
                  alt="Rutuja Ghadge"
                  className="rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
              ) : (
                <img
                  src="/Rutujapic.jpg"
                  alt="Rutuja Ghadge"
                  className="rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  onError={() => console.error("Both image sources failed to load")}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;

