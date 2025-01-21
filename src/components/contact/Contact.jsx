import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="400"
      className="bg-black text-white"
    >
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-purple-400">
          Contact Me
        </h2>
        <p className="text-center text-xl text-purple-300 mb-8">
          You can reach me via{' '}
          <a
            href="https://www.linkedin.com/in/noel-gill-136763306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline"
          >
            LinkedIn
          </a>{' '}
          or email me at{' '}
          <a
            href="mailto:noelblom98@hotmail.com"
            className="text-purple-400 underline"
          >
            noelblom98@hotmail.com
          </a>.
        </p>
      </div>
    </section>
  )
}