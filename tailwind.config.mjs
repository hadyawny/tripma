/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueWhite:"#FFFFFF",
        purpleDark:"#1513A0",
        purpleBlue:"#605DEC",
        purpleLight:"#BCBAF7",
        purpleExtraLight:"#E9E8FC",
        purpleWhite:"#F6F6FE",
        blue:"#407AEA",
        red:"#EB5757",
        grey2:"#52527A",
        redLight:"#FDEFEF",
        purpleWhiteLight:"#FAFAFE",
        grey:{
          100:"#FAFAFA",
          200:"#CBD4E6",
          300:"#A1B0CC",
          400:"#7C8DB0",
          500:"#657491",
          600:"#6E7491",
          700:"#52556F",
          800:"#36374A",
          900:"#27273F",
        },
        redLight:"#FDEFEF",


      },
      fontFamily:
      {
        nunito: ['"Nunito Sans"', 'sans-serif'], 
      },  
      fontSize:{
        // Body text sizes
        'body-xl': '1.5rem', // 24px
        'body-lg': '1.125rem', // 18px
        'body-base': '1rem', // 16px
        'body-sm': '0.875rem', // 14px
        'body-xs': '0.75rem', // 12px

        // Header sizes
        'h1': ['2.25rem', { fontWeight: '600' }], // 36px, semibold
        'h2': ['2rem', { fontWeight: '600' }], // 32px, semibold
        'h3': ['1.5rem', { fontWeight: '600' }], // 24px, semibold
        'h4': ['1.125rem', { fontWeight: '600' }], // 18px, semibold
        'h5': ['1rem', { fontWeight: '600' }], // 16px, semibold
        'h6': ['0.875rem', { fontWeight: '600' }], // 14px, semibold

        // Footer/header
        'footer-header': ['1.125rem', { fontWeight: '700' }], // 18px, bold
      }    
    },

  },
  plugins: [],
};
