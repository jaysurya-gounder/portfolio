/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "circle": "url('/public/images/circle-star.svg')",
        "arrow": "url('/public/images/arrow.svg')",
        "hi": "url('/public/images/hi.png')",
        "html": "url('/public/images/html.png')",
        "javascript": "url('/public/images/javascript.png')",
        "redux": "url('/public/images/redux.png')",
        "react": "url('/public/images/react.png')",
        "tailwind": "url('/public/images/tailwind.png')",
      }
    },
  },
  plugins: [],
}