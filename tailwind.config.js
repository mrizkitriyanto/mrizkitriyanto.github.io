module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'pulse-very-slow': 'pulse 5s cubic-bezier(0.6, 0, 0.5, 1) infinite;',
        'pulse-slow': 'pulse 3s cubic-bezier(0.1, 0, 0.3, 1) infinite;',
        'pulse-fast': 'pulse 1s cubic-bezier(0.1, 0, 0.3, 1) infinite;',
        'pulse-super-fast': 'pulse 0.5s cubic-bezier(0.5, 0, 0.7, 1) infinite;',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
