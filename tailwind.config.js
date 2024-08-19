/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'NorthStarsans': ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryCyan: '#16D5FF', // Add your custom color here
        customRed: '#f87171',  // Another example of a custom color
      },
    },
  },
  plugins: [],
}
