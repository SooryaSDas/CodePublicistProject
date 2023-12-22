/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        black: "var(--black)",
        body: "var(--body)",
        "card-background": "var(--card-background)",
        "input-background": "var(--input-background)",
        label: "var(--label)",
        line: "var(--line)",
        "off-white": "var(--off-white)",
        "place-holder": "var(--place-holder)",
        primary: "var(--primary)",
        red: "var(--red)",
        secondary: "var(--secondary)",
        "tertiary-1": "var(--tertiary-1)",
        "tertiary-2": "var(--tertiary-2)",
        "tertiary-3": "var(--tertiary-3)",
        "tertiary-blue": "var(--tertiary-blue)",
        white: "var(--white)",
      },
      boxShadow: {
        "drop-shadow-botton-left": "var(--drop-shadow-botton-left)",
        "drop-shadow-button-right": "var(--drop-shadow-button-right)",
      },
    },
  },
  plugins: [],
};
