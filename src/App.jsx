import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/aboutme'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Language from './components/language/Language'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  useEffect(() => {
    // Initiera AOS-animationer
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className="bg-primary">
      <Navbar />
      <Hero />
      <AboutMe />
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="language">
        <Language />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}