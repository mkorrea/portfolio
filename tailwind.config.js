/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono'
      },
      colors: {
        'bg-color': '#03050C',
        'border': '#14162D'
      },
      letterSpacing: {
        'widest': '.8rem'
      }
    }
  },
  plugins: [],
}

