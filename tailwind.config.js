module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins"],
    },
    colors: {
      primary: "#05070D",
      secondary: "#33394C",
      gray: "#828282",
      green: "#47B39D",
      white: "#FFFFFF",
      transparent: "#00000000",
    },
    backgroundImage: () => ({
      "gradient-green": " linear-gradient(82.84deg, #4ACF8C 0%, #75EDA6 100%)",
      "gradient-dark-alpine":
        "linear-gradient(226.42deg, #0f5f4b 8.93%, #09152f 110.98%)",
      "gradient-dark-side":
        "linear-gradient(277.09deg, #313545 15.4%, #121118 100.07%)",
    }),
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
  ],
};
