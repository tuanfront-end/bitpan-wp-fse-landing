/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
