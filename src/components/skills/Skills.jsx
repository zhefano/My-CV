import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiBook } from 'react-icons/fi'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Technologies',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: <FiLayout className="w-6 h-6" />,
      title: 'Methods & Design',
      skills: ['UX/UI design', 'Agile / Scrum'],
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: 'Currently Learning',
      skills: ['React', 'Angular', 'Basic backend development'],
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-background"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Tech-Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills