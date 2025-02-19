/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Aktiverar dark mode med hjälp av en klass på <html>
  theme: {
    extend: {
      colors: {
        primary: '#0b0c10', // Grundfärg (bakgrund)
        accent: '#ff910a',  // Accentfärg för rubriker och knappar
        secondary: '#ffdb12',
        info: '#6a0dad',    // Extra färg, kan användas vid behov
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}