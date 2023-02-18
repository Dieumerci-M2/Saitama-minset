/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      télephone: '480px',
      tablette: '768px',
      laptop: '976px',
      desktop: '1440px'
    }
  },
  plugins: [],
}
