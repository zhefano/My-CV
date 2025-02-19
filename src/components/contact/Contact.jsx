import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="400"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="py-12 lg:py-16 mx-auto max-w-screen-md px-4">
        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-indigo-400">
          Contact Me
        </h2>
        <p className="text-center text-xl text-gray-300 mb-8">
          You can reach me via{' '}
          <a
            href="https://www.linkedin.com/in/noel-gill-136763306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-300"
          >
            LinkedIn
          </a>{' '}
          or email me at{' '}
          <a
            href="mailto:noelblom98@hotmail.com"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-300"
          >
            noelblom98@hotmail.com
          </a>.
        </p>
      </div>
    </section>
  );
}