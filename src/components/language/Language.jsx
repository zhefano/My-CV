import React from 'react'

export default function Language() {
  const languages = [
    { code: 'En', name: 'Engelska', level: 5 },
    { code: 'Sv', name: 'Svenska', level: 5 },
    { code: 'Sp', name: 'Spanska', level: 2 },
    { code: 'Fr', name: 'Franska', level: 2 },
  ]

  const renderStars = (level) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
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
      )
    }
    return stars
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="language"
      className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 h-[300px] text-blue-950 mt-11"
    >
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((lang, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="circle w-20 h-20 md:w-16 md:h-16 bg-black rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
              <span className="z-10 text-white">{lang.code}</span>
              <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] 
                md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] 
                rounded-full bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] 
                shadow-[0_0_20px_rgba(59,130,246,0.7)] z-0"
              />
            </div>
            <span className="text-xl md:text-xl text-white">{lang.name}</span>
            <div className="flex">{renderStars(lang.level)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}