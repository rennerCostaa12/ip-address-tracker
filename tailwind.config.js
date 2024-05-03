/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop-nav': "url('./src/assets/images/pattern-bg-desktop.png')",
        'bg-mobile-nav': "url('./src/assets/images/pattern-bg-mobile.png')"
      }
    },
  },
  plugins: [],
}

