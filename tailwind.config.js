const withAnimations = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme')

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
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
        "light-gray": "#fafafa",
        "dark-gray": "#333333",
        "white": "#f5f5f5",
        "my-bg": {
          2: '#f6f6f7',
          3: '#ecedef'
        },
        "my-text": {
          1: '#ecedef',
          2: '#b0b2ba',
          3: '#b0b2ba',
          4: '#7c7e8c',
          5: '#44475b'
        },
        "my-border": {
          3: '#ecedef'
        },
        "my-red": {
          1: 'rgba(235,91,60,0.05)',
          2: '#fae9e5',
          3: '#eb5b3c'
        },
        "my-yellow": {
          1: 'rgba(255,182,27,0.05)',
          2: '#fff5e0',
          3: '#ffb61b'
        },
        "my-blue": {
          1: '#eef0ff',
          2: '#98a4ff',
          3: '#5367ff'
        },
        "my-green": {
          1: '#e5faf5',
          2: '#66e3c4',
          3: '#14e4b0'
        }
      },
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-body': theme('colors.pink[800]'),
            '--tw-prose-headings': theme('colors.pink[900]'),
            '--tw-prose-lead': theme('colors.pink[700]'),
            '--tw-prose-links': theme('colors.pink[900]'),
            '--tw-prose-bold': theme('colors.pink[900]'),
            '--tw-prose-counters': theme('colors.pink[600]'),
            '--tw-prose-bullets': theme('colors.pink[400]'),
            '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.pink[900]'),
            '--tw-prose-quote-borders': theme('colors.pink[300]'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.pink[900]'),
            '--tw-prose-pre-code': theme('colors.pink[100]'),
            '--tw-prose-pre-bg': theme('colors.pink[900]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.pink[400]'),
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = withAnimations(tailwindConfig);

