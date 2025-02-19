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
    setIsOpen(prev => !prev);
  };

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors duration-300"
          >
            Noel Gill
          </a>

          {/* Mobilmeny-knapp */}
          <button
            onClick={toggleNavbar}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block" aria-label="Main Navigation">
            <ul className="flex space-x-8">
              {listNavbar.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-white hover:text-indigo-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Mobil navigation */}
        {isOpen && (
          <nav className="md:hidden" aria-label="Mobile Navigation">
            <ul className="mt-4 space-y-4 pb-4 border-t border-gray-700 transition-all duration-300 ease-out">
              {listNavbar.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block text-white hover:text-indigo-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}