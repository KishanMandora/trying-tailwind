/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#60C78B",
        secondary: {
          light: "#028090",
          dark: "#01213a",
        },
      },
      fontFamily: {
        oswald: ["Oswald"],
        dirt: ["Rubik Dirt"],
      },
    },
  },
  plugins: [],
};
