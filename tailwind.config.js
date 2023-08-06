// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        redCustom: '#E48181',
        blackCustom: '#1C1A1A',
        lightGrey: '#4D4545',
        orangeCTA: '#BF360C',
        aboutBg: '#062315',
        pizzasBg: '#006400',
        pizzaCardBg: '#F3EEC1',
        crepesBg: '#2A9639',
        postresBg: '#327B3C',
        locationBg: '#F4D3A1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
