/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {                                                
                                                          
      colors:{
      'cyan': 'hsl(180, 66%, 49%)',
      'red' : 'hsl(0, 87%, 67%)',
      'd_violet' : 'hsl(257, 27%, 26%)',
      'gray' : 'hsl(0, 0%, 75%)',
      'g_gray' : 'hsl(257, 7%, 63%)',
      'white' : '#ffffff',
      'v_d_blue' : ' hsl(255, 11%, 22%)',
      'v_d_violet' : ' hsl(260, 8%, 14%)',
     
      },

      fontFamily:{
        'rubik' : `'Rubik', sans-serif`,
        'poppins' : `'Poppins', sans-serif`
      },

      borderRadius:{
        'rounded' : '25px'
      },
      backgroundImage:{
        'home' : 'url(/src/images/bg-boost-desktop.svg)',
        'home2' : 'url(/src/images/bg-shorten-desktop.svg)',
        'home3' : 'url(/src/images/bg-shorten-mobile.svg)',
        'home4' : 'url(/src/images/bg-boost-mobile.svg)',
        // 'home3' : 'url(/src/images/bg-pattern-how-we-work-desktop.svg)',
        // 'home4' : 'url(/src/images/bg-pattern-footer-desktop.svg)',
       
      },
     
      backgroundPosition:{
        'center' : 'center right',
        'center2' : 'center left',
        'center3' : 'center top',
        'bottom' : '70px -53px',
      }
    },
  },
  plugins: [],
}