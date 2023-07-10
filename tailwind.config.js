/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sssm: '410px',
      ssm: '480px',
      sm: '640px',
      md: '768px',
      llg: '992px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1600px',
    },
    extend: {
      colors: {
        green: {
          main: "rgb(0, 100, 0, 1)",
          113: "rgba(113, 191, 68, 1)",
        },
        blue: {
          main: '#0F44CF',
          text: "#094BEE"
        },
        orange: {
          main: "#e35e00"
        }
      },
      zIndex: {
        9: 9,
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        900: 900,
        999: 999,
      },
    },
  },
  plugins: [],
}