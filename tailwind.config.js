/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#64C661',
        'dark': '#111111'
      },
      fontFamily: {
        'red': ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

