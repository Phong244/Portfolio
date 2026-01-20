/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: 'var(--mainColor)',
        secondColor: 'var(--secondColor)',
        thirdColor: 'var(--thirdColor)',
        pink: 'var(--pink)',
        greenAlt: 'var(--green-alt)',
        purple: 'var(--purple)',
        bg: 'var(--bg)',
        darkBlue: 'var(--darkBlue)',
        white: 'var(--white)',
        whiteLight: 'var(--whiteLight)',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
