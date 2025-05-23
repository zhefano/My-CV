import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { AboutMe } from './components/about-me/AboutMe'
import { Skills } from './components/skills/Skills'
import Experience from './components/experience/Experience'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TimelineExample from './components/timeline/TimelineExample'

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <section className="py-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">My Timeline</h2>
          <TimelineExample />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export { App } 