/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // colors for light mode (BG & text)
        // "light-primary-color": "#F0F4FF",
        "light-primary-color": "#F4F7FE",
        "light-secondary-color": "#C8DDFF",
        "light-navbar-border-bottom": "#B2C4E4",
        "light-text-color": "#01041B",

        // colors for dark mode (BG & text)
        // gray
        // "dark-primary-color": "#2B2B2B",
        // second gray
        "dark-primary-color": "#26292B",
        "dark-secondary-color": "#01062D",
        "dark-navbar-border-bottom": "#313b4b",
        "dark-text-color": "#F0F4FF",

        // blue colors for light mode
        "light-blue-normal": "#355CEF",
        "light-blue-hover": "#2246CD",
        "light-blue-active": "#1433AB",

        // blue colors for dark mode
        "dark-blue-normal": "#6188FF",
        "dark-blue-hover": "#4B6FDD",
        "dark-blue-active": "#3858BB",

        /* colors for light mode hover menus */
        "light-menu-hover": "rgba(1, 4, 27, 0.05)",

        /* colors for dark mode hover menus */
        "dark-menu-hover": "rgba(240, 244, 255, 0.05)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
