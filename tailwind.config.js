/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    dropShadow: {
      'holy': '0 0 25px  #fff',
    },
    fontFamily:{
      display:["Roboto","sans-serif"],
      second:['Source Sans Pro', 'sans-serif'],
      dynamic: ['Roboto Mono', 'monospace'],
      front:['Rajdhani', 'sans-serif'],
      VS:['Source Code Pro', 'monospace']
    },
    extend: {
      
      screens:{
        'xxs': '300px',
        'xs': '420px',
        'ss': '480px',
        // 'mobS': '320px',
        'mobM': '375px',
        // 'mobL': '425px',
      },
      backgroundImage: {
        'img-background': "url('/src/assets/Background-1.svg')",
        'img-pattern': "url('/src/assets/future-grid.webp')",
        'img-me': "url('/src/assets/Me.JPG')",
      },
      zIndex: {
        'negative': '-10',
       },
      colors:{
        'whitey': '#EDEDED',
        'second': '#1E2022',
        'nav': 'rgba(23, 23, 23,0.4 )',
        'footer':'#171717',
        'prime': '#393E46',
        'tertiary':'#4ECCA3',
      },
    },
  },
  plugins: [],
}