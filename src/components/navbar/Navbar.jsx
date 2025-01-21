import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listNavbar = [
    { name: 'Home', link: '#home' },
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
    <header data-aos="fade-up" className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* HOME LINK */}
        <a
          href="#home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-3xl font-bold text-white">Noel Blom</span>
        </a>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* NAV LIST */}
        <nav
          className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-6 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:w-auto md:max-w-none md:flex md:ml-auto md:mr-auto md:flex-wrap md:items-center md:justify-center`}
        >
          {/* Close button inside the menu (optional on mobile) */}
          <div className="flex items-center justify-between mb-8 md:hidden">
            <span className="text-2xl font-bold">Menu</span>
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={toggleNavbar}
            >
              ✕
            </button>
          </div>

          <ul className="space-y-4 md:space-y-0 md:flex md:space-x-8">
            {listNavbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block text-lg hover:text-cyan-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTACT BUTTON */}
        <button className="hidden md:inline-flex items-center py-1 px-7 focus:outline-none text-base text-white border border-white hover:border-cyan-300 hover:text-gray-900 transition-colors duration-300">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </header>
  );
}