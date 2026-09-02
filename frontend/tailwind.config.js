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
        background: 'var(--background)',
        secondary: 'var(--secondary)',
        card: 'var(--card)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        accent: 'var(--accent)',
        mutedForeground: 'var(--muted-foreground)',
        borderToken: 'var(--border)',
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
