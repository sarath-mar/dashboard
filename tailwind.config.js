/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#f5f5f5",
      secondary: '#ffffff',
      red: "#ef4444",
      blue: "#2563eb",
      green: "#22c55e", 
      yellow: "#facc15" 
    },
  },
  plugins: [],
}

