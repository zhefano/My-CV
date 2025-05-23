import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'

function Projects(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects: Project[] = [
    {
      title: 'Weddit',
      description: 'Built with React, HTML and CSS. Focus on routing and component design.',
      link: 'https://weddit-rho.vercel.app/',
      technologies: ['React', 'HTML', 'CSS'],
      image: '', // Lägg till bild-url om du har
    },
    {
      title: 'Byt Däck',
      description: 'Built with JavaScript, HTML and CSS. Emphasis on form validation and responsive layout.',
      link: 'https://byt-dack.vercel.app/',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: '',
    },
    {
      title: 'Library App',
      description: 'Built with HTML and CSS. Utilizes grid layout and local storage for data management.',
      link: 'https://projektarbete-bibliotek.vercel.app/',
      technologies: ['HTML', 'CSS'],
      image: '',
    },
  ]

  return (
    <section ref={ref} className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              whileTap={{ scale: 0.98, rotate: -1 }}
              className="bg-card p-6 rounded-lg shadow-lg transition-transform cursor-pointer group mb-6 md:mb-0"
            >
              {/* Bild om du har */}
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" loading="lazy" />
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <FiExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects }

interface Project {
  title: string
  description: string
  link: string
  technologies: string[]
  image?: string
} 