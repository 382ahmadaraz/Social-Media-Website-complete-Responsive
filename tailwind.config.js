/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple: "#8933BA", // Give a name to the first color
        Pink: "#D82370",  // Give a name to the second color
      },
      boxShadow: {
        '3xl': '10px 10px 30px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}