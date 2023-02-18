/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablette: '768px',
      laptop: '976px',
      desktop: '1440px'
    },
  extend: {
    redDesk: 'rgba(255, 0, 0, 1)',
    grayFooter: 'rgba(244, 246, 248, 1)',
    blackDesk: 'rgba(0, 0, 0, 1)',
    whiteDesk: 'rgba(255, 255, 255, 1)',
    blueDesk: 'rgba(30, 125, 189, 1)',
  },
  },
  plugins: [],
}
