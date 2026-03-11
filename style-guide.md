# TTG Website — Style Guide

## 1. Color System

| Token | Hex | CSS Var | Usage |
|---|---|---|---|
| `black` | `#080808` | `--color-black` | Page background, base |
| `navy` | `#0a0e1a` | `--color-navy` | Card/panel backgrounds, terminal bg |
| `blue` | `#0066ff` | `--color-blue` | Active states, interactive accents, data |
| `green` | `#00ff88` | `--color-green` | CTA buttons, neon highlights, positive data |
| `blue-dim` | `#003d99` | `--color-blue-dim` | Hover states for blue elements |
| `green-dim` | `#00994d` | `--color-green-dim` | Hover states for green elements |

**Rules:**
- Green = CTAs, positive return, "proceed" actions
- Blue = data, analytical elements, links, active nav
- Never use backgrounds with gradients
- Text gradients (`text-gradient-green`) only on hero display text

---

## 2. Typography Scale

| Role | Font | Class | Size |
|---|---|---|---|
| Display / H1 | Inter 700 | `text-7xl font-bold tracking-tight` | `clamp(3rem, 8vw, 7rem)` |
| H2 | Inter 700 | `text-5xl font-bold tracking-tight` | `3rem` |
| H3 | Inter 700 | `text-2xl font-bold` | `1.5rem` |
| H4 | Inter 600 | `text-xl font-semibold` | `1.25rem` |
| Body | Inter 400 | `text-base` | `1rem` |
| Mono body | IBM Plex Mono | `font-mono text-sm` | `0.875rem` |
| Caption / Label | IBM Plex Mono | `font-mono text-xs tracking-widest uppercase` | `0.75rem` |
| Stat number | Inter 700 | `text-4xl font-bold` | `2.25rem` |

---

## 3. Border System

| Variant | Class | Usage |
|---|---|---|
| Subtle | `border border-white/20` | Container boxes, cards, dividers |
| Active | `border border-blue` or `border-blue/40` | Selected state, terminal windows |
| CTA | `border border-green` | Primary action buttons |
| Separator | `border-t border-white/10` | Section dividers, panel separators |
| Error | `border border-red-500/40` | Error states |

**Never use `rounded-xl` or `rounded-lg`. Maximum: `rounded-sm` (2px). Most elements are sharp (`rounded-none`).**

---

## 4. Spacing Grid

- Base unit: 8px (0.5rem)
- Section padding: `py-32` (128px) default
- Hero padding: `py-48` (192px)
- Container max width: `max-w-7xl mx-auto`
- Page horizontal padding: `px-6 md:px-12`
- Component gap: `gap-4` (16px) for tight, `gap-8` (32px) for medium, `gap-16` (64px) for wide

---

## 5. Component Patterns

### BorderBox
```tsx
<BorderBox className="p-6">content</BorderBox>
// Renders: border border-white/20
```

### DataBadge
```tsx
<DataBadge variant="green">LONG</DataBadge>
// Variants: default | green | blue | red
// Always mono font, xs size
```

### MonoText
```tsx
<MonoText className="text-xs tracking-widest uppercase text-white/40">
  SECTION LABEL
</MonoText>
```

### SectionHeader
```tsx
<SectionHeader
  label="// 001 — ABOUT"
  title="Who We Are"
  description="Optional subtitle in mono"
/>
```

---

## 6. Animation Timing

| Type | Duration | Easing |
|---|---|---|
| Micro interactions (hover) | 0.2–0.3s | `power2.out` |
| Entrance reveals | 0.6–0.8s | `power2.out` or `power3.out` |
| Stat counters | 1.5s | `power2.out` |
| SVG draws | `scrub: 1` | `none` (scroll-driven) |
| Stagger step | 0.08–0.15s | — |
| Mount animations | delay 0.2–0.3s | `power2.out` |

**ScrollTrigger defaults:** `start: 'top 80%'`, `once: true` for entry reveals.

---

## 7. Button Variants

All buttons: outline only, mono font, uppercase, letter-spaced. Hover fills.

```css
/* Primary CTA — green */
border border-green text-green
hover:bg-green hover:text-black

/* Secondary — blue */
border border-blue text-blue
hover:bg-blue hover:text-black

/* Tertiary — white */
border border-white/30 text-white/60
hover:border-white hover:text-white

/* Nav Apply button */
border border-green text-green px-4 py-1.5
(smaller, inline with nav)
```

---

## 8. Image Treatment

| Type | Treatment |
|---|---|
| Sponsor logos | `brightness-0 invert opacity-60`, full color on hover |
| Group photos | `next/image`, `bg-black/20` overlay, no border radius |
| Meeting photos | `border border-white/20`, 80% opacity |
| Background textures | Low opacity (10–20%), `pointer-events-none` |

**Never add drop shadows to images. Use borders instead.**

---

## 9. Terminal UI Pattern

```tsx
<div className="bg-navy border border-blue/40">
  {/* Title bar */}
  <div className="border-b border-blue/20 px-4 py-2 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-red-500" />
    <span className="w-2 h-2 rounded-full bg-yellow-500" />
    <span className="w-2 h-2 rounded-full bg-green" />
    <span className="font-mono text-xs text-white/30 ml-2">terminal-title</span>
  </div>
  {/* Content */}
  <div className="p-4 font-mono text-xs text-green/80">
    $ command output
  </div>
</div>
```

---

## 10. Do / Don't

| Do | Don't |
|---|---|
| Use `border` instead of shadows | Use `shadow-*` utilities |
| Use `bg-navy` for panels | Use gradient backgrounds |
| Use `rounded-sm` max | Use `rounded-xl`, `rounded-full` (except avatars) |
| Use `font-mono` for all data/numbers | Mix fonts in data displays |
| Keep animations reduced-motion safe | Hardcode animations without `useReducedMotion` |
| Use `border-white/10` for subtle dividers | Use `opacity` on layout dividers |
| Scale text with `clamp()` on hero only | Use `vw` units for body text |
| Use `next/image` for all images | Use `<img>` tags |
| Use `gsap.context()` + `.revert()` | Leave GSAP instances uncleared |
