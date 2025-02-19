import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import aboutBg from '../../assets/space2.avif'; // Bakgrundsbild
import myImage from '../../assets/img.png'; // Din personliga bild
import './aboutme.css'; // Importera vår CSS för transitionen

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section
      id="about"
      className="text-white py-16"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center p-8 rounded">
        {/* Vänster kolumn: Text */}
        <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-accent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-md">
            I'm Noel Blom, a frontend developer student based in Gothenburg.
            I am passionate about building responsive, user-friendly websites.
          </p>
          <div className="mt-6">
            <button
              onClick={toggleShowMore}
              className="px-4 py-2 bg-accent text-primary rounded-full transition-all duration-300 hover:bg-secondary focus:outline-none"
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
          <CSSTransition
            in={showMore}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <p
              className="mt-6 text-xl text-gray-300 max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I love working on innovative projects and exploring the latest trends in technology.
              In my free time, I enjoy learning new programming languages, contributing to open-source projects,
              and connecting with other developers. I thrive in collaborative environments and am always eager to take on new challenges.
            </p>
          </CSSTransition>
        </div>

        {/* Höger kolumn: Bild på dig */}
        <div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src={myImage}
            alt="Noel Blom"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}