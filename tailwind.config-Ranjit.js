/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'NorthStarsans': ['Nunito Sans', 'sans-serif'],
      'eras-bold': ['"Eras Bold ITC"', 'sans-serif'],
      'antipasto-pro': ['"Antipasto Pro"', 'sans-serif'],
      'century-gothic': ['"Century Gothic"', 'sans-serif'],
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
