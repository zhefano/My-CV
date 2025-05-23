import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

function Contact(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setSubmitted(true)
    // Här kan du lägga till logik för att skicka formuläret
  }

  const contacts: ContactLink[] = [
    { icon: <FiMail className="w-8 h-8" />, label: 'Email', link: 'mailto:noelblom98@hotmail.com' },
    { icon: <FiLinkedin className="w-8 h-8" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/noel-gill-136763306/' },
    { icon: <FiGithub className="w-8 h-8" />, label: 'GitHub', link: 'https://github.com/zhefano' },
  ]

  return (
    <section ref={ref} className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="bg-card p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-center space-x-8 mb-6">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {submitted && <div className="text-green-500 text-sm">Thank you for your message!</div>}
              <button
                type="submit"
                className="w-full py-2 px-4 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                disabled={submitted}
              >
                {submitted ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Contact }

interface ContactLink {
  icon: React.ReactNode
  label: string
  link: string
}

interface ContactForm {
  name: string
  email: string
  message: string
} 