/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#d104d1',
        cian: '#05dae3',
        verdao: '#00a000',
        container: '#2d2d2d',
        card: '#ffffff',
        bgitens: '#f5f5f5',
        bg: '#222222',
        link: '#de4e14',
        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
        green500: '#00875f',
        green300: '#00b37e',
      },
      fontSize: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      screens: {
        '4xl': '1600px',
        '5xl': '1920px',
        '6xl': '2560px',
      },
      gridTemplateColumns: {
        '4xl': 'repeat(6, minmax(0, 1fr))',
        '5xl': 'repeat(7, minmax(0, 1fr))',
        '6xl': 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
