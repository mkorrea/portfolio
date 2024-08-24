/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono',
        'merienda': 'Merienda'
      },
      colors: {
        'bg-color': '#03050C',
        'border': '#14162D',
        'bg-header': '#272E45'
      },
      letterSpacing: {
        'widest': '.8rem'
      },
      backgroundImage: {
        'shadow': 'linear-gradient(78.34deg, rgba(96, 165, 250, 0.29) 10.75%, rgba(79, 70, 229, 0.29) 71.7%, rgba(79, 70, 229, 0.1624) 96.81%)'
      }
    }
  },
  plugins: [],
}

/* shadow 

position: absolute;
width: 380.34px;
height: 129.03px;
left: 27.8px;
top: -1px;

background: linear-gradient(78.34deg, rgba(96, 165, 250, 0.29) 10.75%, rgba(79, 70, 229, 0.29) 71.7%, rgba(79, 70, 229, 0.1624) 96.81%);
opacity: 0.7;
filter: blur(80px);
transform: matrix(1, 0, -0.25, 0.97, 0, 0);
*/