/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {

    screens: {
      '3xl': {'max': '2560px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'Llg': {'max': '1100px'},
      // => @media (max-width: 1023px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'ip': {'max': '999px'},
      // => @media (max-width: 999px) { ... }

      'gi': {'max': '928px'},
      // => @media (max-width: 999px) { ... }

      'bm': {'max': '850px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'sxs' : {'max' : '584px'},
      // => @media (max-width : 500px) { .... }

      'xs' : {'max' : '500px'},
      // => @media (max-width : 500px) { .... }
      
      'li' : {'max' : '450px'},
      // => @media (max-width : 500px) { .... }      

      'spm' : { 'max' : '360px' },
      // => @media (max-width : 360px) { .... }

      'ti' : { 'max' : '320px' } ,
      // => @media (max-width: 639px) { ... }
    } , 
      
    extend: {},
  },
  plugins: [],
}
