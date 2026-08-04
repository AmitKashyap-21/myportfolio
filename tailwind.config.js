/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FBFBFD',
          surface: '#FFFFFF',
          alt: '#F5F5F7',
          border: '#E5E7EB',
          text: '#1D1D1F',
          secondary: '#6E6E73',
          muted: '#8E8E93',
          blue: '#0071E3',
          blueHover: '#0077ED',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Helvetica Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
