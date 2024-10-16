/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D27D6",
        gray: "#181818",
        "gray-2": "#898989",
      },
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
