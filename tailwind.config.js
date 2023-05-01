/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0591aa',

          secondary: '#47e5d0',

          accent: '#95ef83',

          neutral: '#302A3C',

          'base-100': '#E7E3ED',

          info: '#2C57E2',

          success: '#1EB364',

          warning: '#EB9437',

          error: '#DF2A33',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
