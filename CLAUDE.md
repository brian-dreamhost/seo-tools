# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of free SEO tools built for DreamHost. Each tool is a standalone React app in its own subfolder, deployed individually to Vercel via GitHub. The root `index.html` serves as a landing page linking to all tools.

### Projects

| Folder | Description | Vercel URL |
|---|---|---|
| `schema-markup-generator` | JSON-LD structured data generator | https://schema-generator-ochre.vercel.app/ |
| `metadata-preview-tool` | Google/social metadata preview | TBD |
| `core-web-vitals-checker` | LCP, INP, CLS performance checker | TBD |

## Stack

All projects use the same stack unless there's a specific reason to deviate:

- **Framework:** React 19+ (JSX, not TypeScript unless the project spec calls for it)
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **State management:** React hooks (`useState`, `useReducer`) — no external state libraries
- **Deployment:** Vercel (each project is its own GitHub repo)

### Common Commands (per project)

```
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview production build
npm run lint       # eslint
```

## DreamHost Design System

**Every project must follow this design system.** These tokens and patterns are derived from DreamHost branding and must be used consistently.

### Color Palette

Use these exact values. In Tailwind projects, register them in `@theme` block in `index.css` and reference as utility classes (e.g., `bg-abyss`, `text-azure`). In plain CSS, use CSS custom properties.

| Token | Hex | Usage |
|---|---|---|
| `abyss` | `#000000` | Page background |
| `oblivion` | `#111111` | Card/surface background |
| `midnight` | `#071C26` | Deep background (tooltips, code blocks, inline code) |
| `azure` | `#0073EC` | Primary action, links, focus rings |
| `azure-hover` | `#0066D4` | Primary hover state |
| `prince` | `#A644E5` | Accent purple (decorative glow, syntax highlighting keys) |
| `turtle` | `#00CAAA` | Success, status badges, check icons |
| `coral` | `#FF4A48` | Error, destructive actions |
| `tangerine` | `#F59D00` | Warning, "coming soon" status |
| `sunflower` | `#FFDA00` | Highlight accent (sparingly) |
| `off-white` | `#F4F6F9` | Light mode backgrounds (if needed) |
| `smoke` | `#E0E4E8` | Light borders |
| `cloudy` | `#AFBFC9` | Body text, descriptions, secondary text |
| `galactic` | `#677983` | Muted text, labels, placeholders |
| `metal` | `#434F58` | Borders, dividers (often used at `/20` or `/30` opacity) |

### Typography

- **Primary font:** `'Gilroy', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Gilroy font files (woff2/woff) go in `public/fonts/` — weights: 400, 500, 600, 700
- If Gilroy files aren't available, the system font fallback stack is acceptable
- Headings: bold (700), white
- Body text: `cloudy`
- Muted/labels: `galactic`
- Code/monospace: system monospace stack

### Tailwind index.css Setup

Every Tailwind project should include this in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-abyss: #000000;
  --color-oblivion: #111111;
  --color-midnight: #071C26;
  --color-azure: #0073EC;
  --color-azure-hover: #0066D4;
  --color-prince: #A644E5;
  --color-turtle: #00CAAA;
  --color-coral: #FF4A48;
  --color-tangerine: #F59D00;
  --color-sunflower: #FFDA00;
  --color-off-white: #F4F6F9;
  --color-smoke: #E0E4E8;
  --color-cloudy: #AFBFC9;
  --color-galactic: #677983;
  --color-metal: #434F58;
}
```

Also include the Gilroy `@font-face` declarations and CSS custom properties in `:root` (see `schema-markup-generator/src/index.css` for the full reference).

### Component Patterns

**Cards/panels:**
- Background: `card-gradient` — `linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(7,28,38,0.5) 100%)`
- Border: `border-metal/20`
- Radius: `rounded-2xl`

**Page background:**
- `bg-abyss` base
- Purple glow pseudo-element: `radial-gradient(ellipse at center, rgba(166,68,229,0.15) 0%, transparent 70%)`
- Grid overlay: `linear-gradient(rgba(67,79,88,0.1) 1px, transparent 1px)` at 50px intervals

**Buttons:**
- Primary: `bg-azure text-white rounded-lg hover:bg-azure-hover`
- With focus ring: `focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss`

**Badges/pills:**
- `border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium`
- Also used for status indicators with `turtle` (live/success) or `tangerine` (coming soon/warning)

**Links:**
- `text-azure hover:text-white transition-colors`

**Footer:**
- `border-t border-metal/30`, muted `galactic` text, azure links

**Transitions:**
- Duration: 200ms standard, 250ms for page transitions
- Page enter animation: `fadeIn` (opacity 0 → 1, translateY 10px → 0) at 250ms ease-out

**Layout:**
- Max width: `max-w-6xl` (72rem / 1152px) for main content
- Padding: `px-4 py-12` standard page padding

### Icons

Use inline SVGs from Heroicons (outline style, 24x24, stroke-width 1.5). Color with `text-cloudy` default, `text-azure` on hover via group-hover. Do not use icon font libraries.
