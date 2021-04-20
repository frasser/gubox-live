module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary':'#353535',
        'realgrey': '#ccc',
        'successgreen':'#7dcd40',
        'fbcolor':'#3b5999',
        'twcolor':'#60a9de',
        'bannerscolor':'#273742',
        'muted': '#34314c'
       
      },
      
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['responsive', 'hover'],
    },
  },
  plugins: [],
}

/*module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },
  },
  plugins: [],
}*/
