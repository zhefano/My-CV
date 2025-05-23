import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiCode, FiHeart } from 'react-icons/fi'

function AboutMe(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const aboutSections: AboutSection[] = [
    {
      icon: <FiUser className="w-6 h-6" />,
      title: 'Who I Am',
      content: 'A Gothenburg-based frontend developer student passionate about creating responsive, user-friendly web experiences.',
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'What I Do',
      content: 'I build modern web applications using React, TypeScript, and Tailwind CSS. I love exploring new technologies and solving complex problems.',
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'What I Love',
      content: 'Contributing to open-source, collaborating with others, and continuously learning new skills in the ever-evolving tech landscape.',
    },
  ]

  return (
    <section ref={ref} className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg mb-6 md:mb-0"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {section.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                {section.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-card p-8 rounded-lg shadow-lg"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am currently focused on expanding my knowledge in modern web development, 
            with a particular interest in React, TypeScript, and UI/UX design. 
            I believe in writing clean, maintainable code and creating intuitive user experiences.
            When I'm not coding, you can find me exploring new technologies, contributing to the developer community,
            and staying up-to-date with the latest industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export { AboutMe }

interface AboutSection {
  icon: React.ReactNode
  title: string
  content: string
} 