const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-canvas": colors.neutral[900],
        "bg-canvas-light": colors.neutral[800],
        "text-content": colors.neutral[100],

        "bg-primary": colors.indigo[500],
        "bg-secondary": "#28303C",

        "text-primary": colors.amber[300],
        "text-muted": colors.indigo[400],

        "link-regular": colors.amber[300],
        "link-hover": colors.amber[400],

        "button-primary": colors.indigo[600],
        "button-secondary": colors.neutral[700],
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        animatedTextGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "80%": { transform: "rotate(0.0deg)" },
          "90%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        "tilt-shaking": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulse: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(0.9.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
    animation: {
      "waving-hand": "wave 2s linear 2",
      "text-gradient": "animatedTextGradient 6s ease infinite",
      "animate-shake": "tilt-shaking .2s linear 1",
      "animate-pulse": "pulse .2s ease 1",
    },
  },
};
