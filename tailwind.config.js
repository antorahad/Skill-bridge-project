/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baseFont' : 'Be Vietnam Pro , sans-serif'
      },
      colors: {
        'baseColor' : '#FF9500',
        'primaryColor' : '#262626',
        'secondaryColor' : '#FCFCFD',
        'bodyColor' : '#F7F7F8',
        'navColor' : '#F1F1F3'
      }
    },
  },
  plugins: [require("daisyui")],
}

