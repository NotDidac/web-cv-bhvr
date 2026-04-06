/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7b948",
        accent: "#fbc462",
        dark: "#222",
        light: "#fff",
        background: {
          DEFAULT: "#fff",
          alt: "#f0f0f0",
          grey: "#2d2d2d",
          dark: "#252525",
        },
        success: "#3cb948",
        error: "#ff8787",
        info: "#17b9c8",
      },
      fontFamily: {
        primary: ["Montserrat-Light", "sans-serif"],
        secondary: ["OpenSans-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
