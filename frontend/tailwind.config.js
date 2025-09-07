/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the Poppins font
      },
      colors:{
        customYellow: {
          DEFAULT: '#FFD700',
          light: '#FFE066',
          dark: '#E6BE00',
        },
        burntOrange: {
          DEFAULT: '#CC5500',
          light: '#D97828',
          dark: '#A04000',
        },
        cream: {
          DEFAULT: '#FFFDD0',
          light: '#FFFEE4',
          dark: '#E6E2B8',
        },
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
    },
  }
  },
  plugins: [],
}