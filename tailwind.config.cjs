/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#00b300",
        dark:"#001a00",
        tertiary: "#000000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#0d0d0d",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #00ff00",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
