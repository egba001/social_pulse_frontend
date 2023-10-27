/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#64C661",
        dark: "#111111",
        purple: "rgba(111, 45, 189, 1)",
        bg_grey: "#eee",
        bg_positive: "#D7EDFF",
        text_positive: "#35A7FF",
        bg_neutral: "#FFF7C3",
        text_neutral: "#D4C03F",
        bg_negative: "#FFDEE0",
        text_negative: "#D44A53",
        text_color: "#393939",
      },
      fontFamily: {
        red: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
