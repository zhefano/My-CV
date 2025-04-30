import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contacts = [
    {
      icon: <FiMail className="w-8 h-8" />,
      label: 'Email',
      link: 'mailto:noelblom98@hotmail.com',
    },
    {
      icon: <FiLinkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/noel-gill-136763306/',
    },
    {
      icon: <FiGithub className="w-8 h-8" />,
      label: 'GitHub',
      link: 'https://github.com/zhefano',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-background"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex justify-center space-x-8">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={contact.label}
                >
                  {contact.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact