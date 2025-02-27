/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Opcional para otras secciones
        serif: ['Times New Roman', 'serif'], // Configuración para Times
      },
      fontSize: {
        'sm': ['0.625rem', { lineHeight: '1rem' }], // Más pequeño
        'base': ['0.75rem', { lineHeight: '1.25rem' }], // 640 px	Pantallas pequeñas (teléfonos)
        'lg': ['0.875rem', { lineHeight: '1.5rem' }],  // 	768 px	Pantallas medianas (tabletas)
        'xl': ['1rem', { lineHeight: '1.5rem' }], // 1024 px	Pantallas grandes (laptops pequeñas)
        '2xl': ['1.125rem', { lineHeight: '1.75rem' }], // 1280 px	Pantallas muy grandes (laptops grandes)
        '3xl': ['1.375rem', { lineHeight: '1.75rem' }], // 1536 px	Pantallas extra grandes (monitores)
        '4xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.75rem', { lineHeight: '2rem' }],
        '5xl': ['2rem', { lineHeight: '2.25rem' }],
        '6xl': ['2.25rem', { lineHeight: '2.5rem' }],
        // @apply text-base sm:text-lg md:text-xl lg:text-2xl;
      },
    },
  },
  plugins: [],
}

