import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { ThreeDViewer } from '../3d-viewer/3DViewer'

function Hero(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [typedText, setTypedText] = useState('')
  const fullText = "Hi, I'm Noel Gill"

  React.useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [inView])

  const particlesInit = async (engine: any) => { await loadSlim(engine) }

  const particlesOptions = {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 2, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false },
    },
    interactivity: {
      detect_on: 'window',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-primary/10 py-16 sm:py-24"
    >
      <div className="absolute inset-0 z-0">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="w-full h-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4"
            >
              <span className="text-primary">{typedText}</span>
              <span className="blinking-cursor text-primary">|</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-2"
            >
              Frontend Developer Student
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Gothenburg, Sweden
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Passionate about building responsive, user-friendly websites
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <motion.a
                href="https://github.com/zhefano"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/noel-gill-136763306"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center justify-center"
          >
            <ThreeDViewer />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-2xl">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export { Hero }

// Static content och typer
// ... 