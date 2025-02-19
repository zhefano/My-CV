import React from 'react';
import videoBg from '../../assets/video.mp4'; // justera sökvägen efter behov

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Bakgrundsvideon */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
        Din webbläsare stödjer inte video.
      </video>

      {/* Overlay för bättre kontrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Innehåll */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Noel Gill</h1>
        <p className="text-xl md:text-2xl">Frontend Developer Student</p>
        {/* LinkedIn-knapp */}
        <a
          href="https://www.linkedin.com/in/noel-gill-136763306/?originalSubdomain=se" // Ersätt med din LinkedIn-URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.851-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.369-1.851 3.6 0 4.266 2.371 4.266 5.456v6.286zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.141.924-2.066 2.068-2.066 1.14 0 2.065.925 2.065 2.066 0 1.141-.924 2.067-2.065 2.067zM6.837 20.452H3.837V9h3v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.271V1.728C24 .774 23.207 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}