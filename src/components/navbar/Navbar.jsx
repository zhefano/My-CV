import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listNavbar = [
    { name: 'Home', link: '#home' },
    { name: 'About Me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Language', link: '#language' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-[#0b0c10] shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
          >
            Noel Gill
          </a>

          <button
            onClick={toggleNavbar}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {listNavbar.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white hover:text-purple-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0b0c10] p-4">
            {listNavbar.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-white hover:text-purple-400 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
