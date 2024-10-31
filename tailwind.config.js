// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',        // Dark background color
        'dark-card': '#2A2A2A',      // Dark card color
        'dark-text': '#EAEAEA',      // Light text color for dark mode
        'dark-highlight': '#4A90E2',  // Highlight color (button, links)
      },
    },
  },
  plugins: [],
}
