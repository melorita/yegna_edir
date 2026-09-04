/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: 'oklch(0.968 0.021 78 / <alpha-value>)',
        secondary: 'oklch(0.93 0.035 85 / <alpha-value>)',
        card: 'oklch(0.99 0.008 90 / <alpha-value>)',
        foreground: 'oklch(0.26 0.045 152 / <alpha-value>)',
        primary: {
          DEFAULT: 'oklch(0.36 0.083 155 / <alpha-value>)',
          foreground: 'oklch(0.98 0.015 90 / <alpha-value>)',
        },
        accent: 'oklch(0.76 0.145 78 / <alpha-value>)',
        mutedForeground: 'oklch(0.48 0.03 140 / <alpha-value>)',
        borderToken: 'oklch(0.88 0.028 84 / <alpha-value>)',
      },
      borderRadius: {
        'xl': '0.75rem',      // Logo image: rounded-xl & Buttons: 0.75rem
        '2xl': '1rem',        // Cards: rounded-2xl
        '3xl': '1.5rem',      // Hero image frame: rounded-3xl
        'button': '0.75rem',  // Buttons: 0.75rem
      }
    },
  },
  plugins: [],
}
