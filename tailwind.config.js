/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0BE58A",
        "primary_hover": "#02B76C",
        "dark_purple": "#150B2B",
        "light_purple": "#5B546B",
        "dark_gray": "#282828",
        "gray": "#878787",
        "medium_gray": "#535353",
        "off-white": "#F3F3F4"
      },
      fontFamily: {
        lexend: "Lexend",
      },
      backgroundImage: {
        "banner_bg": "linear-gradient(0deg, rgba(21,11,43,0.9) 0%, rgba(21,11,43,0) 100%), url('/images/banner.webp')"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
