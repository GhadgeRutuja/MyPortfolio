import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
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
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center px-4 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <p className="text-[#64ffda] text-lg font-mono">Hi, my name is</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#ccd6f6]">
              Rutuja Ghadge.
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
              I build things for the web.
            </h2>
            <p className="text-xl text-[#8892b0]">
              Full Stack Developer | Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/GhadgeRutuja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rutuja-ghadge-98b6b72a1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            
            
          </div>

          {/* Resume Button */}
          <a
            href="/RutujaGhadge_Resume (4).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300 font-mono"
          >
            Resume
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-w-4 aspect-h-5">
              {!imageError ? (
                <img
                  src={RutujaPic}
                  alt="Rutuja Ghadge"
                  className="rounded-lg object-cover shadow-2xl"
                  onError={handleImageError}
                />
              ) : (
                <img
                  src="/Rutujapic.jpg"
                  alt="Rutuja Ghadge"
                  className="rounded-lg object-cover shadow-2xl"
                  onError={() => console.error("Both image sources failed to load")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

