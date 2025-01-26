import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

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
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Contact Me</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Feel free to reach out to me through any of these platforms
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#112240] rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 ${contact.bgColor} group`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <contact.icon className="w-8 h-8 text-[#64ffda] group-hover:text-white transition-colors duration-300" />
                <h3 className="text-[#ccd6f6] font-medium text-lg group-hover:text-white">
                  {contact.title}
                </h3>
                <p className="text-[#8892b0] text-sm group-hover:text-white">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Contact Message */}
        <div className="text-center mt-16">
          <p className="text-[#8892b0] text-lg">
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

