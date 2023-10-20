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
      },
      fontFamily: {
        red: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
