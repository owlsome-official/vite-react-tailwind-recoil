/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      h5: "1.25rem",
      p: "1rem",
      small: "0.8rem",
      mini: "0.64rem",
      tiny: "0.512rem",
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#424874",             // main color
          "secondary": "#A6B1E1",           // secondary color
          "accent": "#6366f1",              // accent
          "neutral": "#F4EEFF",             // font color (on dark)
          "neutral-content": "#1C1C1C",     // font bg color (on dark)
          "base-100": "#DCD6F7",            // main bg color
          "info": "#1e40af",                // blue one
          "success": "#60992D",             // green one
          "warning": "#FF9F1C",             // yellow one
          "error": "#FF6978",               // red one
        },
      },
    ],
  },
}
