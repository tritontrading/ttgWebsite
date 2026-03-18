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
        black:       '#102347',
        cream:       '#f8f1df',
        navy:        '#0d1b3d',
        blue:        '#1f5eff',
        gold:        '#c79a3b',
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
