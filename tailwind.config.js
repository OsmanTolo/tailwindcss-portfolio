/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        'white': '#f4f4f4',
        'black': '#242424',
        'onyx': '#424242',
        'blue': '#0094ff'
      },
      gridTemplateColumns: {
        'skills-grid': 'repeat(3, minmax(100px, 200px))'
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

