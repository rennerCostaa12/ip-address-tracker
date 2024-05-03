/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop-nav': "url('/pattern-bg-desktop.png')",
        'bg-mobile-nav': "url('/pattern-bg-mobile.png')"
      }
    },
  },
  plugins: [],
}

