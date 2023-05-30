/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'blackGreen': '#00242c',
        'lightGreen': '#eeffee',
        'darkGreen': '#003440',
        'brightGreen': '#81e291',
      }
    },
  },
  plugins: [],
}

