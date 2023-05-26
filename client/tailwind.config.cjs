/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "landingPage-bg": "url('src/assets/landingBg')",
      },
      boxShadow: {
        custom: "0px 0px 50px rgba(24, 165, 255, 0.15)",
        "blue-custom": "0px 0px 50px rgba(24, 165, 255, 0.15)",
        "purple-custom": "0px 0px 20px rgba(140, 6, 177, 0.1)",
        "gray-custom": "0px 0px 50px rgba(28, 36, 75, 0.15)",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
