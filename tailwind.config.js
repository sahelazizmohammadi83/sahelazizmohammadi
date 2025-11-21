/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui'], // فونت اصلی برای متن‌ها
        heading: ['Vazirmatn', 'ui-sans-serif', 'system-ui'], // فونت جدا برای تیترها اگر بخوای کلاس جدا داشته باشه
      },
    },
  },
  plugins: [],
};