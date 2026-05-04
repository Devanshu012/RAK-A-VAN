/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Conicorn exact palette — white/light base */
        'c-bg':       '#FAFAF9',       /* page background */
        'c-surface':  '#F2F1EE',       /* section alternating bg */
        'c-border':   '#E8E6E1',       /* card / divider border */
        'c-text':     '#0D0D0D',       /* headings */
        'c-muted':    '#6B6860',       /* body / secondary text */
        'c-subtle':   '#9B9890',       /* placeholder / tertiary */
        /* RAK A VAN brand orange replaces Conicorn lime-green CTA */
        'c-accent':   '#E8540A',       /* primary CTA / badge bg */
        'c-accent-h': '#C8430A',       /* hover */
        'c-accent-lt':'#FDF0EA',       /* light tint for chips */
        'c-accent-tx':'#8B2E04',       /* text on light accent bg */
        /* Numbered label color — Conicorn uses a warm grey */
        'c-num':      '#B5B3AD',
      },
      fontFamily: {
        /* Conicorn uses DM Sans + DM Serif Display */
        sans:   ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif:  ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee:  'marquee 28s linear infinite',
        'fade-up':'fadeUp 0.55s ease both',
      },
    },
  },
  plugins: [],
}
