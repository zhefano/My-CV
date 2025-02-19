import React from 'react';
import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/x.png';

export default function Footer() {
  const listNavbar = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Language', link: '#language' },
    { name: 'Contact', link: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com/zhefano', icon: githubIcon },
    { name: 'X', link: 'https://x.com/noelblom', icon: twitterIcon },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-t-lg shadow-xl">
      <div className="w-full mx-auto max-w-screen-xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <span className="text-sm text-gray-300">
            © {new Date().getFullYear()}{' '}
            <a href="#home" className="text-indigo-400 hover:underline transition-colors duration-300">
              Copywrigt
            </a>
          </span>
        </div>

        {/* Navigationslänkar */}
        <nav className="flex justify-center space-x-6" aria-label="Footer Navigation">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Sociala medier */}
        <div className="flex justify-center md:justify-end space-x-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.name}`}
              className="hover:scale-110 transform transition-transform duration-300"
            >
              <img src={item.icon} alt={item.name} className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}