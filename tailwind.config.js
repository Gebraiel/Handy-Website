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
        flashing:
          "flashing 0.5s steps(4) infinite",
        slideDown:"slideDown 0.3s forwards",
        slideUp:"slideUp 0.3s",
      },
      colors: {
        primary: "#09216d",
        secondary: "#e46a5a",
        gray:"#2c448f",
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

        flashing: {
          "50%": {
            "border-color": "var(--primary-color)",
          },
          "100%": {
            "border-color": "transparent",
          },
        },
        slideDown:{
          "0%":{
            "max-height" : "0px",
            "opacity" : 0
          },
          "100%":{
            "max-height" : "300px",
            "opacity":1
          }
        },
        slideUp:{
          "0%":{
            "max-height" : "300px",
            "opacity" : 1
          },
          "100%":{
            "max-height" : "0px",
            "opacity":0
          }
        }
      },
    },
  },
  
};
