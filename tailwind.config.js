const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "index.html",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|link|navbar|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono',
        'merienda': 'Merienda'
      },
      colors: {
        'bg-header': '#272E45',
        'bg-color': '#03050C',
        'bg-quote': '#030611',
        'bg-project': '#0C0C21',
        'bg-contact': '#050710',
        'border': '#14162D',
      },
      letterSpacing: {
        'wide': '.14rem',
        'wider': '.24rem',
        'widest': '.36rem'
      },
      backgroundImage: {
        'shadow': 'linear-gradient(78.34deg, rgba(96, 165, 250, 0.29) 10.75%, rgba(79, 70, 229, 0.29) 71.7%, rgba(79, 70, 229, 0.1624) 96.81%)',
        'quote-shadow': 'linear-gradient(to bottom, #03050C, #030611 95%, #03050C 10%)'
      },
      boxShadow: {
        'middle': '0px 0px 8px',
        'middle-xl': '0px 0px 20px',
        'tech': '0px 0px 4px 1.5px, inset 0px 0px 12px',
        'tech-inset': ' inset 0px 0px 1px 1px',
      },
      transitionProperty: {
        'height': 'height'
      },
      backdropBlur: {
        'contact': '2px'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-20deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
    }
  },
  plugins: [nextui()],
}
