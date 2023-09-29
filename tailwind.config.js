/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#000000",
        },
        white: {
          1: "#FFFFFF",
        },
      },
      fontFamily: {},
      dropShadow: {
        menu: "0px 3px 5px #ababab",
        darkMenu: "0px 3px 5px #000",
      },
    },
    screens: {
      mobile: "330px",
      tablet: "600px",
      laptop: "960px",
      desktop: "1601px",
    },
  },
  plugins: [],
};
