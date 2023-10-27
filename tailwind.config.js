/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', //puede que falte el index revisar
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{html,js,jsx}',
    './src/styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontFamily: {
        eudoxusSans: ['var(--font-eudoxusSans)']
      },
      boxShadow: {
        'grande': '0px 0px 15px 3px'
      }
    },
  },
  plugins: [],
}
