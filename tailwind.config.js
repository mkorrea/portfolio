const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "index.html",
    "./node_modules/@nextui-org/theme/dist/components/(link|navbar).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono',
        'merienda': 'Merienda'
      },
      colors: {
        'bg-color': '#03050C',
        'bg-quote': '#030611',
        'border': '#14162D',
        'bg-header': '#272E45'
      },
      letterSpacing: {
        'wide': '.14rem',
        'wider': '.24rem',
        'widest': '.36rem'
      },
      backgroundImage: {
        'shadow': 'linear-gradient(78.34deg, rgba(96, 165, 250, 0.29) 10.75%, rgba(79, 70, 229, 0.29) 71.7%, rgba(79, 70, 229, 0.1624) 96.81%)',
        'quote-shadow': 'linear-gradient(0deg, #030611, #030611), linear-gradient(90deg, rgba(3, 5, 12, 0.04) 0%, rgba(7, 7, 19, 0.04) 20%, rgba(15, 13, 34, 0.04) 43.5%, rgba(15, 13, 34, 0.04) 60%, rgba(7, 7, 19, 0.04) 80%, rgba(3, 5, 12, 0.04) 100%)'
      },
      boxShadow: {
        'middle': '0px 6px 8px'
      },
      transitionProperty: {
        'height': 'height'
      },
      backdropBlur: {
        'header': '12px',
        'header2': '5px'
      }
    }
  },
  plugins: [nextui()],
}
