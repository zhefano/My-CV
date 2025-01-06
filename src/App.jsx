import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Language from './components/language/Language'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  useEffect(() => {
    // AOS-animationer
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className="bg-[#0b0c10]">
      <Navbar />
      <Hero />
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="language">
        <Language />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}