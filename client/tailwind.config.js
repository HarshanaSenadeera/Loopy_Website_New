/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins', 'sans-serif']
      },
      colors:{
        orange:'#FF6B00',
        title:'#DF6951',
        subTitle:'#181E4B',
        servictitle:'#1E1D4C',
        aboutUs:'#1A906B',
        aboutBtn:'#22B286'

      },
      fontSize:{
        sub:50
      },

      margin:{
        section_Space:'5rem'
      }
    },
  },
  plugins: [],
}

