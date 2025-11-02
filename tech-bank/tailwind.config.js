/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ninetea: ["Ninetea", "sans-serif"],
        nyxerin: ["Nyxerin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
