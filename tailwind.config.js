/* eslint-disable no-undef */
module.exports = {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        poly: "url('./src/assets/bg.svg')",
        waves: "url('./src/assets/bg-waves.svg')",
        poly2: "url('./src/assets/bg-poly2.svg')",
      }
    },
  },
};
