/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFCF9',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EAE0CE',
          400: '#DACBB4',
          500: '#C7B496',
          900: '#2A241A',
        },
        ink: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          800: '#142035',
          850: '#0E1729',
          900: '#0B1220',
          950: '#060B14',
        },
        gold: {
          300: '#E6CA85',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A88438',
          700: '#8C6B28',
        },
        sage: {
          300: '#B4C2B1',
          400: '#94A690',
          500: '#73876F',
          600: '#586A54',
        },
        ai: {
          cyan: '#38BDF8',
          blue: '#60A5FA',
          glow: 'rgba(96, 165, 250, 0.45)',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'parchment-texture': "radial-gradient(#C5A059 0.75px, transparent 0.75px), radial-gradient(#0B1220 0.5px, #FAF6EE 0.5px)",
      }
    },
  },
  plugins: [],
}
