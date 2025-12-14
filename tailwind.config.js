/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0a1628',
          100: '#0d1f35',
          200: '#102842',
          300: '#13314f',
          400: '#163a5c',
          500: '#1e4a73',
          600: '#2563eb',
          700: '#3b82f6',
          800: '#60a5fa',
          900: '#93c5fd',
        },
        dark: {
          50: '#0a0e1a',
          100: '#0f1419',
          200: '#1a1f2e',
          300: '#252b3d',
          400: '#2d3447',
          500: '#3a4154',
        },
      },
    },
  },
  plugins: [],
}

