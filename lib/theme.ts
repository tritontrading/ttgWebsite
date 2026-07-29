/**
 * Central design tokens for the TTG design prototype.
 * Update values here to experiment with typography, color, spacing, and motion.
 */

export const colors = {
  /** Page background — warm parchment */
  background: "#FAF8F4",
  /** Cards, footer, elevated surfaces */
  surface: "#F1EEE8",
  /** Shared warm border */
  border: "#E3E0D9",
  /** Body copy */
  text: "#272727",
  /** Headings */
  heading: "#101010",

  cream: "#FAF8F4",
  creamLight: "#F1EEE8",
  creamMuted: "#F1EEE8",
  creamPanel: "#F1EEE8",
  creamMobileNav: "#FAF8F4",
  creamHover: "#EBE8E2",
  photoFrame: "#efe1bd",

  navy: "#0d1b3d",
  ink: "#272727",
  inkMuted: "#8b6a24",

  gold: "#c79a3b",
  goldLight: "#efd8a4",

  blue: "#1f5eff",
  blueLight: "#d0dcff",
  blueHoverBg: "#f4f7ff",

  positive: "#efd8a4",
  negative: "#ff9f7d",

  white: "#ffffff",
  cardBorder: "#E3E0D9",

  /** Footer — shares surface + border tokens */
  footerBg: "#F1EEE8",
  footerText: "#272727",
  footerLink: "#122852",
  footerBorder: "#E3E0D9",

  /** Editorial subpage palette */
  editorial: "#101010",
  editorialMuted: "#eff0e7",
  editorialPanel: "#F1EEE8",
  editorialPanelAlt: "#F1EEE8",
  brandBlue: "#0066ff",
} as const;

export const fonts = {
  /** Body copy */
  sans: '"Helvetica LT Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  /** Headings — Century Old Style Std regular (400) only */
  heading: '"Century Old Style Std", "Century Old Style", "Century Schoolbook", Georgia, serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;

/** Local font files — drop matching files into /public/fonts/ to self-host */
export const fontFiles = {
  heading: {
    regular: "/fonts/CenturyOldStyleStd-Regular.woff2",
  },
  body: {
    regular: "/fonts/HelveticaLTPro-Roman.woff2",
    bold: "/fonts/HelveticaLTPro-Bold.woff2",
  },
} as const;

export const fontSizes = {
  hero: "clamp(2.85rem, 13vw, 5.5rem)",
  display: "clamp(2.25rem, 5vw, 3.75rem)",
  displayLg: "clamp(2.5rem, 6vw, 3.75rem)",
  heading: "1.875rem",
  subheading: "1.25rem",
  body: "1rem",
  bodySm: "0.875rem",
  label: "0.75rem",
  micro: "0.72rem",
} as const;

export const letterSpacing = {
  label: "0.24em",
  labelSm: "0.22em",
  nav: "0.24em",
  body: "0.08em",
  ticker: "0.16em",
  social: "0.12em",
} as const;

export const borderRadius = {
  none: "0",
  sm: "6px",
  md: "10px",
  lg: "12px",
  xl: "16px",
} as const;

/** Hairline borders inspired by Linear / Cursor / Mercury */
export const borders = {
  width: "1px",
  widthStrong: "1px",
  opacity: {
    subtle: 0.08,
    default: 0.12,
    emphasis: 0.18,
    strong: 0.22,
  },
} as const;

export const shadows = {
  heroImage: "0 24px 64px rgba(13, 27, 61, 0.10)",
  heroBadge: "0 4px 14px rgba(31, 94, 255, 0.08)",
  card: "0 1px 2px rgba(13, 27, 61, 0.04)",
  cardHover: "0 2px 6px rgba(13, 27, 61, 0.06)",
  recruitmentImage: "0 20px 48px rgba(13, 27, 61, 0.08)",
  tickerInset: "inset 0 1px 0 rgba(239, 216, 164, 0.16)",
} as const;

/** 8px base grid — all layout spacing should use multiples of 8px */
export const spacing = {
  unit: 8,
  scale: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "2.5rem", // 40px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "5rem", // 80px
    "5xl": "6rem", // 96px
    "6xl": "8rem", // 128px
  },
  sectionY: "7rem",
  sectionYMd: "10rem",
  sectionYTight: "6rem",
  sectionYTightMd: "8rem",
  pageHeroTop: "9rem",
  pageHeroTopMd: "12rem",
  containerX: "2rem",
  containerXMd: "4rem",
  maxWidth: "80rem",
  maxWidthNarrow: "56rem",
  navHeight: "4.5rem",
  navItemGap: "2.5rem",
} as const;

export const animation = {
  duration: {
    fast: "200ms",
    base: "300ms",
    slow: "500ms",
    hero: "720ms",
    ticker: "40s",
  },
  easing: {
    hero: "cubic-bezier(0.22, 1, 0.36, 1)",
    default: "ease",
    linear: "linear",
  },
} as const;

export const opacity = {
  ink72: 0.72,
  ink74: 0.74,
  ink78: 0.78,
  ink80: 0.8,
  ink82: 0.82,
  ink86: 0.86,
  border35: 0.35,
  border40: 0.4,
  border45: 0.45,
} as const;

/** Grid overlay used in the hero background */
export const gridPattern = {
  size: "60px",
  color: "rgba(31, 94, 255, 0.055)",
} as const;

export const theme = {
  colors,
  fonts,
  fontSizes,
  letterSpacing,
  borderRadius,
  borders,
  shadows,
  spacing,
  animation,
  opacity,
  gridPattern,
} as const;

export type Theme = typeof theme;
