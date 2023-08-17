/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bgr1': 'hsl(217, 19%, 24%)',
      'bgr2': 'hsl(218, 23%, 16%)',
      'dice': 'hsl(150, 100%, 66%)'
    },
    extend: {
      screens: {
        'mobile': {'max': '767px'},
        'desktop': {'min': '768px'}
      },
    },
  },
  plugins: [],
}