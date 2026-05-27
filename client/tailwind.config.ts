/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{css,js,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: "#004890",
        box: {
          intro: {
            DEFAULT: "#004890",
            bg: "#E6F0FF",
          },
          step: {
            DEFAULT: "#4A90E2",
            bg: "#F5F9FF",
          },
          theory: {
            DEFAULT: "#FFB703",
            bg: "#FFFBF0",
          },
          alert: {
            DEFAULT: "#D90429",
            bg: "#FFF0F3",
          },
          result: {
            DEFAULT: "#06D6A0",
            bg: "#E6FFFA",
          },
        },

        katex: "#0f0f0f",
        title: "hsla(210, 0%, 6%, 0.85)",
        explain: "hsla(210, 0%, 6%, 0.75)",
      },
    },
  },
  plugins: [],
};
