/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        react: '#7ed6fa',
        grisjoli: '#c6c9d5'
      }
    },
  },
  plugins: ['daisyui'], 
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

