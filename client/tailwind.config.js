/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: '#0f172a',
          light: '#ffffff'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: '#38bdf8',
          light: '#0284c7'
        },
        light: {
          DEFAULT: 'var(--text)',
          dark: '#f1f5f9',
          light: '#0f172a'
        },
        dark: {
          DEFAULT: 'var(--background)',
          dark: '#020617',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}; 