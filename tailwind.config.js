/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#FFF',
        'black': '#00000',
        'darkPurple': '#624DE7',
        'darkPurple1':'#463d80',
        'purple': '#9483FF',
        'black1': '#29282B',
        'gray':'#575757',
      }
    },
  },
  plugins: [],
}
