/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        custom: "calc(100vh - 82.1px)",
      },
      colors: {
        primaryBlue: "#c0e3e5",
        primaryYellow: "#fdc936",
        primaryGrey: "#ebebeb",
        primaryBlack: "#322625",
      },
    },
  },
  plugins: [heroui()],
};
