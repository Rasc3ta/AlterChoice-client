/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        superDarkBlue: "#003135",
        darkBlue: "#024950",
        lightBlue: "#afdde5",
        veryLightBlue: "#0fa4af",
      },
    },
  },
  plugins: [require("daisyui")],
};
