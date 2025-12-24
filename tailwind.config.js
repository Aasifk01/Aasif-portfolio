/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#0f172a",
        glass: "rgba(30, 41, 59, 0.7)",
      },
    },
  },
  plugins: [],
}
