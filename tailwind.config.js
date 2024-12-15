/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani"],
      },
      animation: {
        fadeDown: "fadeDown 0.5s ease forwards",
        fadeUp: "fadeUp 0.5s ease forwards",
        typing:
          "typing 3s steps(14) infinite  ,flashing 0.5s steps(8) infinite",
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
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        typing: {
          "0%": { left: "0" },
          "30%,90%": { left: "100%" },
          "100%": { left: "0" },
        },
        flashing: {
          "50%": {
            "border-color": "var(--primary-color)",
          },
          "100%": {
            "border-color": "transparent",
          },
        },
      },
    },
  },
  
};
