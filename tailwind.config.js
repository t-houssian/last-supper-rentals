/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{ts,tsx}",       
      "./components/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          "dark-green": "#013220",
          "neon-green": "#39FF14"
        }
      }
    },
    plugins: []
  };
  