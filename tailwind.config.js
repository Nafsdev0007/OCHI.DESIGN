/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors : {
        'Primary' : '#F1F1F1'
      },

      fontFamily : {
        'Poppins' : [ "Poppins", 'system-ui'],
        'Founders' : ['FoundersGrotesk-Semibold', 'system-ui']
      }
    },
  },
  plugins: [],
}