/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          'green' : '#648D68',
        'lightgray': '#797979',
     },
     backgroundColor: {
      'darkgreen' : ' #668E6A',
      'grey' : '#D9D9D9',
      'light_gray' : '#F6F6F6',
      'Dim-gray' : '#D9D9D93B',
      'Dim-red' : '#EA580C0A',
 },
     boxShadow: {
      'custom': '0px 0px 7px 0px #00000040',
    },
    borderColor: {
    'Dim-grey'  :'#BDBDBD'
    },
    fontSize: {
      '22': '22px',
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
      SourceSansPro :['SourceSansPro','sans-serif']
    },
    height: {
      '114px' :'114px'
    },
    spacing: {
      22: '5.5rem', // Custom height of 88px
    },
     
    },
  },
  plugins: [],
};


