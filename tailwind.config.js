/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-primary-color": "#DAE6F9",
      "light-secondary-color": "#C8DDFF",
      "light-text-color": "#01041B",

      "dark-primary-color": "#01041B",
      "dark-secondary-color": "#01062D",
      "dark-text-color": "#DAE6F9",

      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};