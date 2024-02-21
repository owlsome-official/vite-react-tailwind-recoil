/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#964F4C", // main color
          secondary: "#CA848A", // secondary color
          accent: "#FFBE98", // accent
          neutral: "#0d181e", // font color (on dark)
          // "neutral-content": "#1C1C1C", // font bg color (on dark)
          "base-100": "#ffffe3", // main bg color
          info: "#00b1ff", // blue one
          success: "#6cc53d", // green one
          warning: "#eebf00", // yellow one
          error: "#d90041", // red one
        },
      },
    ],
  },
};
