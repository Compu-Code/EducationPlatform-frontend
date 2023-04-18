/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-primary-color": "#F0F4FF",
        "light-secondary-color": "#C8DDFF",
        "light-text-color": "#01041B",

        "dark-primary-color": "#01041B",
        "dark-secondary-color": "#01062D",
        "dark-text-color": "#F0F4FF",

        "text-hover-color": "#2246CD",
        "text-clicked-color": "#355CEF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
