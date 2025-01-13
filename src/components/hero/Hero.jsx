import React from 'react'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-purple-900 opacity-75"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
      
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
            Hej! Jag är Noel Blom
          </h1>
          <p className="mb-8 leading-relaxed">
            Frontend utvecklare student som bor i Göteborg.
          </p>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/noel-gill-136763306/" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 hover:shadow-[0_0_40px_rgb(128,0,128,0.7)] rounded-full text-lg">
                Min Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src={img}
            alt="Noel Blom"
            className="object-cover object-center rounded-full w-80 h-80 border-4 border-purple-700"
          />
        </div>
      </div>
    </section>
  )
}
