const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          reddit: '#ff4500',
          youtube: '#ff0000',
        },
        yellow: {
          crunchyroll: '#ff5a1f',
        },
        purple: {
          funimation: '#410099',
        },
        gray: {
          proton: '#4b5563',
          github: '#252f3f',
          ...colors.blueGray
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
