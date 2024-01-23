/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34495e",
        secondery: "#16a085",
        danger: "#d35400"
      },
    },
  },
  plugins: [],
}

