/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   colors: {
    primary: "#93A465",
    secondary: "#D2B16A",
    tertiary: '#2F4858'
   },
   keyframes: {
    wiggle: {
     "0%": { opacity: "0" },
     "100%": { opacity: "1" },
    },
   },
  },
 },
 plugins: [
  function ({ addVariant }) {
   addVariant("child", "& > *");
   addVariant("child-hover", "& > *:hover");
  },
 ],
};
