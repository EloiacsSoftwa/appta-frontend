/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '22': '22px',
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 7px 0px #00000040',
      },
      colors: {
        'lightgray': '#797979',
      },
      spacing: {
        22: '5.5rem', // Custom height of 88px
      },
    },
  },
  plugins: [],
};

