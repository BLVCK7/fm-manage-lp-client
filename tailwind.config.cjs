/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      brigthRed: 'hsl(12, 88%, 59%)',
      darkBlue: 'hsl(228, 39%, 23%),',
      darkGreyishBlue: 'hsl(227, 12%, 61%)',
      vDarkBlue: 'hsl(233, 12%, 13%)',
      vPaleRed: 'hsl(13, 100%, 96%)',
      vLightGrey: 'hsl(0, 0%, 98%)',
      white: '#fff',
    },
    fontFamily: {
      vietnam: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
};
