module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Beau Rivage', 'cursive']
      },
      colors: {
        'greece': '#046878',
        'vampire': '#ff0808',
        'wizard': 'rgb(28,77,26)',
        'elf': '#ae9400',
        'pirate': '#e206e2',
        'warrior': '#000',
        'monster': '#00ff0a'
      }
    },
  },
  plugins: [],
}
