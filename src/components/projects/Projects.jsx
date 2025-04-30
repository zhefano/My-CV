import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Weddit',
      description: 'Built with React, HTML and CSS. Focus on routing and component design.',
      link: 'https://weddit-rho.vercel.app/',
      technologies: ['React', 'HTML', 'CSS'],
    },
    {
      title: 'Byt Däck',
      description: 'Built with JavaScript, HTML and CSS. Emphasis on form validation and responsive layout.',
      link: 'https://byt-dack.vercel.app/',
      technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Library App',
      description: 'Built with HTML and CSS. Utilizes grid layout and local storage for data management.',
      link: 'https://projektarbete-bibliotek.vercel.app/',
      technologies: ['HTML', 'CSS'],
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-background"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
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

export default Projects