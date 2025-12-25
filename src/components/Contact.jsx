import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'GitHub',
      value: 'github.com/GHADGERUTUJA',
      icon: FaGithub,
      link: 'https://github.com/GHADGERUTUJA',
      bgColor: 'hover:bg-[#2b3137]'
    },
    {
      id: 2,
      title: 'LinkedIn',
      value: 'linkedin.com/in/rutuja-ghadge-98b6b72a1',
      icon: FaLinkedin,
      link: 'https://linkedin.com/in/rutuja-ghadge-98b6b72a1',
      bgColor: 'hover:bg-[#0077b5]'
    },
    {
      id: 3,
      title: 'Email',
      value: 'gahdgerutuja04@gmail.com.com',
      icon: FaEnvelope,
      link: 'mailto:ghadgerutuja04@gmail.com',
      bgColor: 'hover:bg-[#d44638]'
    },
    {
      id: 4,
      title: 'Phone',
      value: '+91 8010876380',
      icon: FaPhone,
      link: 'tel:+918010876380',
      bgColor: 'hover:bg-[#075e54]'
    }
  ]

  return (
    <div className="relative z-10 min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Local neon glow + sparkles for Contact */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-36 left-[16%] h-72 w-72 bg-[#64ffda]/16 blur-[140px] opacity-80 animate-pulse"></div>
        <div className="absolute top-[42%] right-[10%] h-96 w-96 bg-[#0ea5e9]/14 blur-[170px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-14%] left-[26%] h-80 w-80 bg-[#64ffda]/12 blur-[150px] opacity-65 animate-pulse"></div>
        <div className="contact-sparkle-layer"></div>
        <div className="contact-neon-grid"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-down">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-4 relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfff] rounded-full"></span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto mt-4">
            Let’s build something great together. Reach out via your favorite channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* Left: message card */}
          <div className="relative bg-gradient-to-br from-[#112240] to-[#0a192f] border border-[#233554] rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:shadow-[#64ffda]/20 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/6 to-[#00bfff]/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6]">Let’s talk!</h3>
              <p className="text-[#8892b0] leading-relaxed">
                Have a project in mind or want to collaborate? Drop me a message and I’ll get back to you soon.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:ghadgerutuja04@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#64ffda] to-[#00bfff] text-[#0a192f] font-semibold shadow-lg hover:shadow-[#64ffda]/40 transform hover:scale-105 transition-all"
                >
                  <FaEnvelope />
                  Email me
                </a>
                <a
                  href="tel:+918010876380"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#64ffda] text-[#64ffda] font-semibold hover:bg-[#64ffda]/10 transition-all"
                >
                  <FaPhone />
                  Call now
                </a>
              </div>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#112240] border border-[#233554] rounded-2xl p-6 flex flex-col gap-3 hover:border-[#64ffda] hover:-translate-y-2 transition-all duration-400 shadow-lg hover:shadow-[#64ffda]/25 animate-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#64ffda]/10 text-[#64ffda] group-hover:bg-[#64ffda] group-hover:text-[#0a192f] transition-all">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#8892b0]">Tap to open</span>
                </div>
                <div>
                  <h3 className="text-[#ccd6f6] font-semibold text-lg group-hover:text-[#64ffda] transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-[#8892b0] text-sm mt-1 break-words group-hover:text-[#ccd6f6]">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 text-[#8892b0]">
          <p>Always open to exciting opportunities and collaborations.</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.6s ease-out; }
        .animate-card { animation: slide-up 0.55s ease-out forwards; opacity: 0; }

        .contact-sparkle-layer {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 14% 20%, rgba(100, 255, 218, 0.76), transparent),
            radial-gradient(2px 2px at 80% 28%, rgba(14, 165, 233, 0.82), transparent),
            radial-gradient(2px 2px at 30% 70%, rgba(100, 255, 218, 0.7), transparent),
            radial-gradient(2px 2px at 64% 56%, rgba(14, 165, 233, 0.82), transparent),
            radial-gradient(3px 3px at 46% 44%, rgba(255, 255, 255, 0.38), transparent),
            radial-gradient(2px 2px at 88% 68%, rgba(100, 255, 218, 0.58), transparent),
            radial-gradient(2px 2px at 10% 84%, rgba(14, 165, 233, 0.58), transparent);
          background-size: 22% 22%;
          mix-blend-mode: screen;
          opacity: 0.75;
          animation: contact-sparkle-shift 13s ease-in-out infinite alternate;
        }

        .contact-neon-grid {
          position: absolute;
          inset: -12%;
          background-image:
            linear-gradient(90deg, rgba(100, 255, 218, 0.07) 1px, transparent 1px),
            linear-gradient(0deg, rgba(14, 165, 233, 0.07) 1px, transparent 1px);
          background-size: 150px 150px;
          mask-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.82), transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.82), transparent 70%);
          opacity: 0.4;
          mix-blend-mode: screen;
          animation: contact-grid-pan 24s linear infinite;
        }

        @keyframes contact-sparkle-shift {
          from { transform: translate3d(0, 0, 0); opacity: 0.6; }
          to { transform: translate3d(14px, -10px, 0); opacity: 0.9; }
        }

        @keyframes contact-grid-pan {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-130px, -88px, 0); }
        }
      `}</style>
    </div>
  )
}

export default Contact

