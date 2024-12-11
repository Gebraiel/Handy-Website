/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#09216d",
        secondary: "#2c448f",
        textPrimary: "#09216d",
      },
    },
  },
  plugins: [require("daisyui")],
};
