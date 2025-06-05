/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E90FF',
        'primary-light': '#f8c8c8',
        'secondary': '#FFB7CE'
      },
    },
  },
  plugins: [],
}
