import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:       '#080808',
        cream:       '#fafbf3',
        navy:        '#0a0e1a',
        blue:        '#0066ff',
        green:       '#00ff88',
        'blue-dim':  '#003d99',
        'green-dim': '#00994d',
      },
      fontFamily: {
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"PT Serif"', 'Georgia', 'serif'],
        mono:  ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm:  '3px',
        md:  '5px',
        lg:  '5px',
        xl:  '5px',
        '2xl': '5px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
