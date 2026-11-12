/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F6F3',
          100: '#DCE8E1',
          200: '#BCD2C5',
          300: '#94B6A3',
          400: '#64957D',
          500: '#3D745B',
          600: '#2A5D47',
          700: '#204E3B',
          800: '#164B35', // Primary Forest Green
          900: '#0F3827',
          950: '#082117',
        },
        cream: {
          50: '#FCFAF5',
          100: '#F8F5ED', // Secondary Warm Cream
          200: '#EFE9DC',
          300: '#E4DAC7',
          400: '#D5C6AA',
          500: '#C1AE8B',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F3E8CE',
          200: '#E9D39E',
          300: '#DFBD6E',
          400: '#D6A84F', // Accent Muted Gold
          500: '#BF8E36',
          600: '#9A6E24',
          700: '#77521A',
        },
        charcoal: {
          50: '#F5F6F5',
          100: '#E6E7E6',
          200: '#C8CAC8',
          300: '#9EA29F',
          400: '#6F7470',
          500: '#4D534E',
          600: '#3A3F3B',
          700: '#2E332F',
          800: '#242A25', // Main Charcoal Text
          900: '#1A1E1B',
          950: '#101311',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(22, 75, 53, 0.08)',
        'card': '0 10px 30px -4px rgba(22, 75, 53, 0.1)',
        'elevated': '0 20px 40px -10px rgba(22, 75, 53, 0.15)',
      },
    },
  },
  plugins: [],
}

