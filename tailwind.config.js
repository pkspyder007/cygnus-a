const withAnimations = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme')

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '5rem',
      },
      colors: {
        "light-green": "#75b1ad",
        "dark-green": "#27363b",
        "green": "#425e5e",
        "light-gray": "#f5f5f5",
        "dark-gray": "#333333",
        "white": "#f5f5f5"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = withAnimations(tailwindConfig);

