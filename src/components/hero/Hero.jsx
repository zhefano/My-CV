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
        {/* Du kan lägga till fler knappar eller länkar här */}
      </div>
    </section>
  );
}