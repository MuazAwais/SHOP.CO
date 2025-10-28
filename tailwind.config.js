const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter : ['var(--font-geist-inter)', ...fontFamily.sans]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',      // 16px for mobile
          sm: '2rem',           // 32px for small screens
          md: '2.5rem',         // 40px for tablets
          lg: '3.75rem',        // 60px for desktop
          xl: '6.25rem',        // 100px for XL screens
          '2xl': '6.25rem',     // 100px for 2XL screens
        }
      }
    },
  },
  plugins: [],
}

