/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "landingPage-bg": "url('src/assets/landingBg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
