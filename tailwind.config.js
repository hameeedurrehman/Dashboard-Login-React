
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/components/LoginPage.js',
    './src/components/dashboard/SideBar.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

