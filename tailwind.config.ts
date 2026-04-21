import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.6vw, 1.375rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
        'fluid-3xl': 'clamp(2rem, 1.7rem + 1.5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 2rem + 2.5vw, 4.5rem)',
        'fluid-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 5.5rem)',
        'fluid-6xl': 'clamp(3.5rem, 2.8rem + 3.5vw, 6.5rem)',
      },
      colors: {
        brand: {
          // RGB triplets — enables opacity modifiers like bg-brand-terra/10
          bg:        'rgb(var(--brand-bg) / <alpha-value>)',
          text:      'rgb(var(--brand-text) / <alpha-value>)',
          muted:     'rgb(var(--brand-muted) / <alpha-value>)',
          surface:   'rgb(var(--brand-surface) / <alpha-value>)',
          terra:     'rgb(var(--brand-terra) / <alpha-value>)',
          terraDark: 'rgb(var(--brand-terra-dark) / <alpha-value>)',
          dark:      'rgb(var(--brand-dark) / <alpha-value>)',
        },
      },
      boxShadow: {
        'soft':  '0 4px 24px rgba(28, 25, 23, 0.04), 0 1px 2px rgba(28, 25, 23, 0.02)',
        'hover': '0 12px 32px rgba(28, 25, 23, 0.08), 0 2px 4px rgba(28, 25, 23, 0.02)',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      transitionTimingFunction: {
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
