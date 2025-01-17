import React from 'react'

export default function Projects() {
  const projectList = [
    {
      title: 'Weddit',
      description: 'Skapat med React, HTML och CSS.',
      link: 'https://weddit-rho.vercel.app/',
    },
    {
      title: 'Byt Däck',
      description: 'Skapat med JavaScript, HTML och CSS..',
      link: 'https://byt-dack.vercel.app/',
    },
    {
      title: 'Biblioteksapp',
      description: 'Skapat med HTML och CSS.',
      link: 'https://projektarbete-bibliotek.vercel.app/',
    },
  ]

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="400"
      className="bg-[#0b0c10] text-white py-16"
    >
      <div className="container mx-auto px-5">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-purple-400">
          Projekt
        </h2>
        <p className="text-center text-xl text-purple-300 mb-8 max-w-2xl mx-auto">
          Nedan ser du några av de projekt jag byggt och hostat på Vercel.
        </p>

       
        <div className="flex flex-col items-center justify-center gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-3/4 bg-black/70 p-6 rounded shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-purple-200 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-200"
              >
                Besök projektet här
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}