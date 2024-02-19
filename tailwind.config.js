/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'btn': 'none', 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    utils: true,
    themes: [
      {
        mytheme: {
          "primary": "#3E85C6",
          "info": "#684FA1",
          "accent": "#339999",
          "error": "#A80000",
          "base": "#494949"
        }
      }
    ]
  }
}

