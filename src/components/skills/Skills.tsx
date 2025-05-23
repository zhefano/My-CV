import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiBook } from 'react-icons/fi'

const skillCategories: SkillCategory[] = [
  {
    icon: <FiCode className="w-6 h-6" />, title: 'Technologies',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    icon: <FiLayout className="w-6 h-6" />, title: 'Methods & Design',
    skills: [
      { name: 'UX/UI design', level: 75 },
      { name: 'Agile / Scrum', level: 70 },
    ],
  },
  {
    icon: <FiBook className="w-6 h-6" />, title: 'Currently Learning',
    skills: [
      { name: 'React', level: 60 },
      { name: 'Angular', level: 40 },
      { name: 'Basic backend development', level: 30 },
    ],
  },
]

interface Skill {
  name: string
  level: number // 0-100
}

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: Skill[]
}

function Skills(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  if (!skillCategories.length) return <section id="skills" className="py-20"><div className="text-center">No skills to display.</div></section>
  return (
    <section ref={ref} className="py-20" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Tech-Stack</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} inView={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, inView, index }: { category: SkillCategory, inView: boolean, index: number }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-card p-6 rounded-lg shadow-lg"
      aria-label={`Skill category: ${category.title}`}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-primary/10 text-primary mr-4" aria-hidden="true">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
      </div>
      <ul className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} inView={inView} skillIndex={skillIndex} />
        ))}
      </ul>
    </motion.div>
  )
}

function SkillBar({ skill, inView, skillIndex }: { skill: Skill, inView: boolean, skillIndex: number }): JSX.Element {
  return (
    <li className="text-muted-foreground flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-primary/10 rounded" aria-label={`Proficiency in ${skill.name}: ${skill.level}%`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
          className="h-2 bg-primary rounded"
        />
      </div>
    </li>
  )
}

export { Skills } 