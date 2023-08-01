/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts"],
  theme: {
    extend: {
      animation: {
        "slide-right": "slide-right 0.25s ease-in-out",
        "slide-left": "slide-left 0.25s ease-in-out",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(-50%)" },
          "70%": { transform: "translateX(2%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(50%)" },
          "70%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
