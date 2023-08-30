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
        mullish: ["Mullish", "sans-serif"],
      },
      backgroundImage: {
        "landingPage-bg": "url('src/assets/landingBg')",
      },
      boxShadow: {
        custom: "0px 0px 50px rgba(24, 165, 255, 0.15)",
        "blue-custom": "0px 0px 50px rgba(24, 165, 255, 0.15)",
        "purple-custom": "0px 0px 20px rgba(140, 6, 177, 0.1)",
        "gray-custom": "0px 0px 50px rgba(28, 36, 75, 0.15)",
        "project-section-custom": "0px 0px 50px rgba(132, 132, 132, 0.05);",
        "project-section-card-custom": "0px 0px 20px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        spin: "spin 1s linear infinite",
        "fade-in-left": "fade-in-left 0.5s",
        "fade-in-right": "fade-in-right 0.5s",
        "fade-out-left": "fade-out-left 0.5s",
        "fade-out-right": "fade-out-right 0.5s",
      },
      keyframes: {
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-10px)" },
        },
        "fade-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(10px)" },
        },
      },
      gridTemplateRows: {
        3: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
