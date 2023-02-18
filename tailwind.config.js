const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        zillow: {
          DEFAULT: '#006AFF',
          50: '#B8D5FF',
          100: '#A3C9FF',
          200: '#7AB2FF',
          300: '#529AFF',
          400: '#2982FF',
          500: '#006AFF',
          600: '#0053C7',
          700: '#003B8F',
          800: '#002457',
          900: '#000D1F',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
