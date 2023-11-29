/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    colors:{
      'theme-100': 'white' ,
      'theme-200': 'red',
      'theme-300': 'blue',
      'theme-400': 'purple',
      'theme-500': 'black',
      'theme-600': '#d6d3d1',
      'theme-700':' black',
      'theme-800':'#e4e4e7',
      'theme-rgba': 'rgba(0,0,255,0.5)',
      'theme-900':'#22c55e'
      
      
      
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundColor: {
        'dark': '#1a202c',
      },
      textColor: {
        'dark': '#ffffff',
      },
    },
  },
  plugins: [],
}

