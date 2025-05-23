import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiBook, FiBriefcase, FiAward } from 'react-icons/fi'

function Experience(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences: ExperienceItem[] = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Frontend Development Student',
      company: 'EC Utbildning',
      period: '2024',
      type: 'education',
      description: 'Skills include HTML, CSS, JavaScript, UX/UI design and Agile/Scrum. Currently focusing on React, Angular and backend basics.',
      skills: ['HTML', 'CSS', 'JavaScript', 'UX/UI Design', 'Agile/Scrum', 'React', 'Angular', 'Backend Basics'],
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: 'Frontend Development Student',
      company: 'EC Utbildning',
      period: '2025',
      type: 'education',
      description: 'Continuing studies with a focus on expanding knowledge and skills in frontend development. Eager to learn more and take on new challenges.',
      skills: ['Frontend Development', 'Web Technologies', 'Problem Solving', 'Continuous Learning'],
    },
  ]

  return (
    <section ref={ref} className="py-20" id="experience">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey in frontend development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 hidden md:block"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-8`}
              >
                {/* Timeline dot with ping effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary" />
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 p-6 rounded-lg shadow-lg bg-card ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                      {experience.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                      {experience.period}
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                      {experience.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Experience }

interface ExperienceItem {
  icon: React.ReactNode
  title: string
  company: string
  period: string
  type: 'education' | 'work' | 'project'
  description: string
  skills: string[]
} 