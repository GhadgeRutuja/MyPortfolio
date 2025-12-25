import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
    return (
   
    <div className="w-screen min-h-screen bg-[#0a192f] overflow-x-hidden relative">
      {/* Global neon sparkle backdrop behind all sections */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-[12%] h-72 w-72 bg-[#64ffda]/14 blur-[140px] opacity-75 animate-pulse"></div>
        <div className="absolute top-1/3 right-[8%] h-96 w-96 bg-[#0ea5e9]/14 blur-[170px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-[18%] h-72 w-72 bg-[#64ffda]/12 blur-[140px] opacity-65 animate-pulse"></div>
        <div className="global-sparkle-field"></div>
        <div className="global-neon-grid"></div>
      </div>

      <Navbar />
      <main className="w-full pt-16">
        <section id="about" className="w-full min-h-screen"><About /></section>
        <section id="skills" className="w-full min-h-screen"><Skills /></section>
        <section id="projects" className="w-full min-h-screen"><Projects /></section>
        <section id="education" className="w-full min-h-screen"><Education /></section>
        <section id="experience" className="w-full min-h-screen"><Experience /></section>
        <section id="certifications" className="w-full min-h-screen"><Certifications /></section>
        <section id="contact" className="w-full min-h-screen"><Contact /></section>
      </main>
      <footer className="w-full text-center py-4 text-[#8892b0]">
        © {new Date().getFullYear()} Rutuja Ghadge. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

