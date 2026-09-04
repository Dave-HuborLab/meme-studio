/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950:'#07080B', 900:'#0B0C10', 850:'#101218', 800:'#161822', 700:'#1E2130', 600:'#2A2E40' },
        sand: { 50:'#F7F3EA', 100:'#EDE8DF', 500:'#9A958A' },
        gold: { 400:'#E0C056', 500:'#C9A227' },
      },
    },
  },
  plugins: [],
}
