/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',//add custom screen size
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.6)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

