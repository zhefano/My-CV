import React from 'react';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.png';
import webdesign from '../../assets/web-design.png';
import react from '../../assets/react.png';
import spaceBackground from '../../assets/space-background.jpg';

const skillsList = [
  { name: 'JavaScript', img: javascript },
  { name: 'HTML', img: html },
  { name: 'Web Design', img: webdesign },
  { name: 'React', img: react },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col text-white body-font"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center bg-black bg-opacity-50">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-blue-400"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-blue-300"
          >
            Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base text-blue-200"
          >
            I have experience with various technologies and tools essential for
            frontend development. On the right, you can see some of the
            technologies I master.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {skillsList.map((skill, index) => (
              <li key={index} className="w-full flex justify-center">
                <img
                  src={skill.img}
                  alt={`${skill.name} Icon`}
                  className="rounded-full w-24 h-24 object-cover border-4 border-blue-300"
                />
              </li>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}