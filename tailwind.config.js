/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#7445FB'
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

