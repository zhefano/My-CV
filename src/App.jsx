import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/aboutme'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TimelineExample from './components/timeline/TimelineExample'

function App() {
  console.log('App component rendering')
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="relative">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutMe />
          <section id="skills" className="py-20">
            <Skills />
          </section>
          <section id="experience" className="py-20">
            <Experience />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
          <section id="timeline" className="py-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8">My Timeline</h2>
            <TimelineExample />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App