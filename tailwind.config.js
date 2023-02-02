/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 1px 4px 0px rgba(0, 0, 0, 0.24)',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['focus'],
    }
  },
  plugins: [],
}
