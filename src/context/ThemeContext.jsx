import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const getInitialTheme = () => {
  console.log('Getting initial theme')
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    console.log('Saved theme:', savedTheme)
    if (savedTheme) return savedTheme
    
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    console.log('System theme:', systemTheme)
    return systemTheme
  }
  console.log('Using default light theme')
  return 'light' // Fallback for SSR
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  console.log('ThemeProvider initialized with theme:', theme)

  useEffect(() => {
    console.log('Applying theme:', theme)
    // Apply theme class immediately
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    
    // Store theme preference
    localStorage.setItem('theme', theme)

    // Apply CSS variables
    if (theme === 'dark') {
      root.style.setProperty('--background', '#020817')
      root.style.setProperty('--foreground', '#f8fafc')
      root.style.setProperty('--primary', '#f8fafc')
      root.style.setProperty('--primary-foreground', '#0f172a')
      root.style.setProperty('--secondary', '#1e293b')
      root.style.setProperty('--secondary-foreground', '#f8fafc')
      root.style.setProperty('--muted', '#1e293b')
      root.style.setProperty('--muted-foreground', '#94a3b8')
    } else {
      root.style.setProperty('--background', '#ffffff')
      root.style.setProperty('--foreground', '#020817')
      root.style.setProperty('--primary', '#0f172a')
      root.style.setProperty('--primary-foreground', '#f8fafc')
      root.style.setProperty('--secondary', '#f1f5f9')
      root.style.setProperty('--secondary-foreground', '#0f172a')
      root.style.setProperty('--muted', '#f1f5f9')
      root.style.setProperty('--muted-foreground', '#64748b')
    }
    root.style.setProperty('--accent', '#3b82f6')
    root.style.setProperty('--accent-foreground', '#ffffff')
  }, [theme])

  const toggleTheme = () => {
    console.log('Toggling theme from', theme, 'to', theme === 'light' ? 'dark' : 'light')
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 