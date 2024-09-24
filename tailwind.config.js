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
      'montserrat': ['Montserrat', 'sans-serif'], // Added Montserrat
      'century-gothic': ['CustomFont', 'sans-serif'], // Added Century Gothic
    },
    extend: {
      colors: {
        primaryCyan: '#16D5FF', // Add your custom color here
        secondaryGray: '#F3F4F6',  // Another example of a custom color
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxx': '0.4rem',   // 8px
      },
    },
  },
  plugins: [],
}

