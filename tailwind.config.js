/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        fadeDown: "fadeDown 0.5s ease forwards",
      },
      colors: {
        primary: "#09216d",
        secondary: "#2c448f",
        textPrimary: "#09216d",
      },
      keyframes: {
        fadeDown: {
          "0%": { top: "-100%" },
          "100%": { top: "0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
