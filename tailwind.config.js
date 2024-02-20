module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFF056",
        "dark-yellow": "#F5ED9C",
        "dark-orange": "#FBAF3C",
        grey: "#78787B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
