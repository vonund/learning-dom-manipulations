/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'inner-300': `inset 0 0 0 1px ${colors.slate[300]}`,
        'inner-500': `inset 0 0 0 1px ${colors.slate[500]}`,
        'inner-xs-300': `inset 0 0 0 2px ${colors.slate[300]}`,
        'inner-xs-500': `inset 0 0 0 2px ${colors.slate[500]}`,
        'inner-xs-white': `inset 0 0 0 1px ${colors.white}`,
      }
    },
  },
  plugins: [],
};
