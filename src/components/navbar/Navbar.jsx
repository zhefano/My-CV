import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listNavbar = [
    { name: 'Hem', link: '#home' },
    { name: 'Färdigheter', link: '#skills' },
    { name: 'Erfarenhet', link: '#experience' },
    { name: 'Språk', link: '#language' },
    { name: 'Projekt', link: '#projects' }, 
    { name: 'Kontakt', link: '#contact' },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header data-aos="fade-up" className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* HEMLÄNK */}
        <a
          href="#home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-3xl font-bold text-white">Noel Blom</span>
        </a>

        {/* Hamburgerknapp mobil */}
        <button className="md:hidden text-white" onClick={toggleNavbar}>
          ☰
        </button>

        {/* NAV-LISTA */}
        <nav
          className={`fixed top-0 left-0 h-full bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-5 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:flex md:ml-auto md:mr-auto md:flex-wrap md:items-center md:justify-center`}
        >
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block md:inline-block mr-5 hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* KONTAKTKNAPP */}
        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-cyan-300 hover:text-gray-900">
          <a href="#contact">Kontakta mig</a>
        </button>
      </div>
    </header>
  );
}