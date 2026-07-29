/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          800: '#0f1b3a',
          900: '#0a1738',
          950: '#060e20',
        },
        gold: {
          300: '#ffe652',
          400: '#ffd700',
          500: '#d4af37',
          600: '#c59b27',
          700: '#a37b1e',
        }
      },
      fontFamily: {
        serifGold: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Mukta Malar', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
