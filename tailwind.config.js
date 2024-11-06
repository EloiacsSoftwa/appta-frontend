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
      'second-gray': '#EAEAEA',
 },
     boxShadow: {
      'custom': '0px 0px 7px 0px #00000040',
    },
    borderColor: {
    'Dim-grey'  :'#BDBDBD',
    
    },
    fontSize: {
      '22': '22px',
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
      SourceSansPro :['SourceSansPro','sans-serif'],
      Poppins :['Poppins', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    height: {
      '100px': '100px',
      '114px' :'114px',
      '650px': '650px',
    },
    spacing: {
      22: '5.5rem', // Custom height of 88px
    },
    width: {
      '250' : '250px',
      '555' :'555px',
      
    }
     
    },
  },
  plugins: [],
};


