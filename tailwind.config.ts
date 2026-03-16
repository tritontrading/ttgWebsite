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
        black:         '#080808',
        cream:         '#fafbf3',
        navy:          '#0a0e1a',
        'navy-accent': '#1b3a6b',   // rich navy — borders, icons, active accents
        'navy-bright': '#1e4d9e',   // brighter navy — hover states, links
        'navy-muted':  '#e8edf7',   // very light navy tint — subtle panel bg
        blue:          '#0066ff',
        green:         '#00ff88',
        'blue-dim':    '#003d99',
        'green-dim':   '#00994d',
      },
      fontSize: {
        // Bumped ~1-2px across the board for readability
        xs:    ['0.8125rem', { lineHeight: '1.25rem'  }],  // 13px (was 12px)
        sm:    ['0.9375rem', { lineHeight: '1.5rem'   }],  // 15px (was 14px)
        base:  ['1.0625rem', { lineHeight: '1.8rem'   }],  // 17px (was 16px)
        lg:    ['1.1875rem', { lineHeight: '1.85rem'  }],  // 19px (was 18px)
        xl:    ['1.3125rem', { lineHeight: '1.9rem'   }],  // 21px (was 20px)
        '2xl': ['1.5625rem', { lineHeight: '2.1rem'   }],  // 25px (was 24px)
        '3xl': ['1.9375rem', { lineHeight: '2.35rem'  }],  // 31px (was 30px)
        '4xl': ['2.3125rem', { lineHeight: '2.75rem'  }],  // 37px (was 36px)
        '5xl': ['3.0625rem', { lineHeight: '1.1'      }],  // 49px (was 48px)
        '6xl': ['3.8125rem', { lineHeight: '1.05'     }],  // 61px (was 60px)
        '7xl': ['4.5625rem', { lineHeight: '1'        }],  // 73px (was 72px)
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