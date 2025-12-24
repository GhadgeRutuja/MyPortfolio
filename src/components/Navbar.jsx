import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80 // adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#0a192f]/80 shadow-[0_10px_40px_-15px_rgba(100,255,218,0.35)]' : 'bg-[#0a192f]/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfff]"
          >
            Rutuja
            <span className="h-2 w-2 rounded-full bg-[#64ffda] animate-pulse"></span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            {['about', 'skills', 'projects', 'education', 'experience', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative px-3 py-2 text-base md:text-lg font-semibold text-[#ccd6f6] capitalize transition-colors duration-300 hover:text-[#64ffda]"
              >
                <span>{item}</span>
                <span className="pointer-events-none absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#64ffda] to-[#00bfff] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-[#112240] text-[#ccd6f6] hover:text-[#64ffda] hover:bg-[#233554] transition-colors"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a192f]/95 backdrop-blur-xl border-t border-[#233554]">
          <div className="px-4 py-3 space-y-2">
            {['about', 'skills', 'projects', 'education', 'experience', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-full text-left px-4 py-3 rounded-lg text-[#ccd6f6] text-lg font-semibold capitalize bg-[#112240] hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

