// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        redCustom: '#CD2F2B',
        blackCustom: '#1C1A1A',
        lightGrey: '#4D4545',
        orangeCTA: '#E64A19',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
