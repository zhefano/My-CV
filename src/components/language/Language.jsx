import React from 'react';

export default function Language() {
  const languages = [
    { code: 'En', name: 'English', level: 5 },
    { code: 'Sv', name: 'Swedish', level: 5 },
    { code: 'Sp', name: 'Spanish', level: 2 },
    { code: 'Fr', name: 'French', level: 2 },
  ];

  const renderStars = (level) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < level ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.042a1 1 0 00.95.69h7.416c.969 0 
          1.371 1.24.588 1.81l-6.01 4.36a1 1 0 00-.364 1.118l2.286 7.042c.3.921-.755 1.688-1.54 1.118l-6.01-4.36a1 1 0 
          00-1.176 0l-6.01 4.36c-.784.57-1.84-.197-1.54-1.118l2.286-7.042a1 1 0 00-.364-1.118l-6.01-4.36c-.783-.57-.381-1.81.588-1.81
          h7.416a1 1 0 00.95-.69l2.286-7.042z"
        />
      </svg>
    ));
  };

  return (
    <section
      id="language"
      data-aos="fade-up"
      data-aos-delay="400"
      className="py-16 bg-transparent"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${200 + index * 100}`}
              className="flex flex-col items-center p-4 bg-opacity-30 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full relative z-10 text-2xl font-bold text-white">
                  {lang.code}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] blur-md opacity-70"></div>
              </div>
              <span className="text-xl text-white mb-2">{lang.name}</span>
              <div className="flex">{renderStars(lang.level)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}