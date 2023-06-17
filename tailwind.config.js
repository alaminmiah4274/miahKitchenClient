/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "retro"],
  },
  plugins: [require("daisyui")],
}

