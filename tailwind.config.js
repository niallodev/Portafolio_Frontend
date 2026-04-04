/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.12)',
        lift: '0 18px 55px rgba(15, 23, 42, 0.16)',
      },
      colors: {
        ink: {
          950: '#0B1220',
          900: '#0F172A',
          800: '#1F2A44',
          700: '#334155',
          600: '#475569',
        },
        sand: {
          50: '#FBFAF7',
          100: '#F6F3EE',
          200: '#ECE6DB',
        },
        copper: {
          500: '#C2410C',
          600: '#9A3412',
        },
        tealish: {
          500: '#0F766E',
          600: '#115E59',
        },
      },
    },
  },
  plugins: [],
}
