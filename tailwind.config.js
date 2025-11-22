/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // اضافه کردن فونت ساحل
      fontFamily: {
        sahel: ["Sahel", "sans-serif"],
      },

      // تنظیم فاصله دو سانتی در کل سایت (تقریبی 32px)
      spacing: {
        "2cm": "2cm",
      },
    },
  },
  plugins: [],
};