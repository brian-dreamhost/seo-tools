# Developer Handoff: DreamHost Free Marketing Tools

## Overview

This is a collection of 70 free marketing tools for DreamHost. The static hub and 9 category pages live in this repo and deploy to Vercel. Each individual tool is a standalone React app in its own GitHub repo, also deployed to Vercel.

**Live URL:** https://seo-tools-tau.vercel.app/

---

## Architecture

```
Static pages (this repo)          Standalone React apps (separate repos)
┌─────────────────────┐           ┌──────────────────────────────┐
│ index.html (hub)    │           │ schema-markup-generator/     │
│ seo/index.html      │──links──▶│ metadata-preview-tool/       │
│ social-media/       │           │ hashtag-generator/           │
│ copywriting/        │           │ ... (45 tools total)         │
│ email-marketing/    │           └──────────────────────────────┘
│ analytics/          │                    │
│ design/             │                    ▼
│ local-business/     │           Each deploys independently
│ advertising/        │           to *.vercel.app
└─────────────────────┘
         │
    shared/styles.css (all static pages)
    shared/tool-urls.json (URL config)
    scripts/update-urls.js (migration tool)
```

---

## URL Migration System

**This is the most important thing for production migration.**

Every link to a tool or category page uses `data-tool` or `data-base` HTML attributes as stable markers. This lets you update all URLs from a single config file instead of find-and-replacing across 10+ HTML files.

### How it works

1. **`shared/tool-urls.json`** — Single source of truth for every URL
   - `base` section: hub + 9 category page URLs
   - `tools` section: 45+ tool slug → URL mappings

2. **`data-tool` attribute** — On every `<a>` that links to a tool:
   ```html
   <a data-tool="schema-markup-generator" href="https://schema-generator-ochre.vercel.app/">
   ```

3. **`data-base` attribute** — On every `<a>` that links to the hub or a category page:
   ```html
   <a data-base="seo" href="https://seo-tools-tau.vercel.app/seo/">
   ```

4. **`scripts/update-urls.js`** — Node.js script that syncs all hrefs to match the config:
   ```bash
   node scripts/update-urls.js           # dry run — preview changes
   node scripts/update-urls.js --write   # apply changes to files
   ```

### Migration to production

When moving from `*.vercel.app` to `tools.dreamhost.com` (or wherever):

1. Update `shared/tool-urls.json` with new production URLs
2. Run `node scripts/update-urls.js --write`
3. Done. Every link across all 10 HTML files updates automatically.

The script also audits for any untagged `.vercel.app` links and tells you what `data-tool` or `data-base` attribute to add.

---

## Shared Stylesheet

**`shared/styles.css`** is the single stylesheet for all static pages. It contains:

- DreamHost design system tokens (CSS custom properties)
- Layout, grid, tile styles
- Liquid glass card effects (backdrop-filter, pseudo-element refractions)
- Category content sections (audience cards, workflow illustrations, tips, FAQs)
- CSS-only mock screenshots (no images — pure HTML/CSS)
- Suggestion form modal
- CTA banner
- Responsive breakpoints
- WCAG accessibility (skip links, focus indicators)

Category pages link to it via `../shared/styles.css`. The hub links via `./shared/styles.css`.

---

## Design System Tokens

| Token | Hex | Usage |
|---|---|---|
| `abyss` | `#000000` | Page background |
| `oblivion` | `#111111` | Card/surface background |
| `midnight` | `#071C26` | Deep background |
| `azure` | `#0073EC` | Primary action, links |
| `azure-hover` | `#0066D4` | Primary hover |
| `prince` | `#A644E5` | Accent purple |
| `turtle` | `#00CAAA` | Success, live status |
| `coral` | `#FF4A48` | Error, destructive |
| `tangerine` | `#F59D00` | Warning, coming soon |
| `cloudy` | `#AFBFC9` | Body text |
| `galactic` | `#7E939F` | Muted text, labels |
| `metal` | `#434F58` | Borders, dividers |

**Font:** Gilroy (700 for headings, 400/500 for body) with system fallback stack.

---

## Tool Card Styling (Liquid Glass)

All tool cards use an Apple-inspired liquid glass effect:

- **Background:** `rgba(255, 255, 255, 0.04)` — semi-transparent white
- **Backdrop-filter:** `blur(16px) saturate(140%)` — frosted glass
- **Border:** White at 0.08 opacity, brighter top edge (0.12) for light catching
- **Box-shadow:** Dual — outer depth + inset top highlight
- **::before:** Subtle azure radial glow in upper-left corner
- **::after:** Diagonal white sheen with inset refraction shadows + brightness filter

The same treatment applies to `.tile` (category pages), `.tool-card` (homepage), and `.suggestion-section`.

---

## Standalone React Tools

Each tool is a separate repo under `brian-dreamhost/` on GitHub.

### Stack (all tools)
- React 19 + Vite + Tailwind CSS v4
- DreamHost design system tokens registered in `src/index.css` `@theme` block
- Gilroy font files in `public/fonts/`
- `vercel.json`: `{"buildCommand":"npm run build","outputDirectory":"dist","framework":"vite"}`

### Required patterns per tool
- **Breadcrumbs:** `Free Tools / [Category] / [Tool Name]` at top of page, using full Vercel URLs
- **Fill Test Data button:** Purple mono button in upper-right, populates all form fields
- **Skip link:** `<a href="#main" class="skip-link">` in `index.html` before `#root`
- **WCAG AA:** Focus indicators, aria labels, heading hierarchy, color contrast

### Deploy a new tool
```bash
cd tool-folder/
npm install && npm run build
git init && git add . && git commit -m "Initial commit"
gh repo create brian-dreamhost/REPO --public --source=. --push
npx vercel --token=TOKEN --prod --yes --scope brian-dreamhosts-projects
```

Then update the category page tile with the live URL and add entry to `shared/tool-urls.json`.

---

## Category Page Content Sections

Each category page has these sections below the tool grid:

1. **Suggestion box** — "What Should We Build Next?" with modal form
2. **Who these tools are for** — 2x2 persona cards
3. **How it works** — 3-step workflow with CSS mock screenshots
4. **Pick the right tool** — Task-to-tool mapping grid
5. **Expert tips** — 6 numbered tips with timeline layout
6. **FAQ** — Expandable accordions
7. **Cross-category links** — Links to other category pages
8. **CTA banner** — DreamHost hosting pitch with trust line

### CSS Mock Screenshots

Workflow illustrations are pure CSS (no images). Each category has 3 custom mocks that look like real tool interfaces. All CSS classes are prefixed with `mock-` and defined in `shared/styles.css`.

Examples: Google SERP rich result, robots.txt code editor, Core Web Vitals gauges, email inbox view, Google local pack, ROAS calculator, WCAG scorecard, etc.

---

## Suggestion Form

Every category page has a "What Should We Build Next?" section below the tool grid with a modal form. Currently uses a placeholder `mailto:` action.

**Fields:** First Name, Email, Your Idea (textarea), pre-checked consent checkbox.

**To make it functional:** Replace the `<form action="mailto:...">` with a real endpoint (Formspree, Vercel serverless function, or your own API). The form targets `brian.glassman@dreamhost.com` with subject "New DreamHost Free Tool Request".

---

## Content Standards

- No competitor name-drops (Ahrefs, Semrush, Mailchimp, etc. — we're friends with them)
- No fabricated or unsourced statistics
- Advice must reflect real-world practice, not theoretical best-case
- Write for beginners — explain the "why," not just the "what"
- "Coming soon" categories (Analytics, Design, Legal, Advertising) use future tense for tool references
- All tool mentions in content should be hyperlinked with `data-tool` attributes

---

## Vercel Deployment

- **Scope:** `brian-dreamhosts-projects`
- **Root repo deploys to:** `https://seo-tools-tau.vercel.app/`
- **Push `main` to trigger redeploy:** `git push origin main`
- Each standalone tool deploys independently from its own repo

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Homepage hub — 70 tools across 9 categories with search/filter |
| `shared/styles.css` | All static page styles (design system + components + mocks) |
| `shared/tool-urls.json` | URL config for migration script |
| `scripts/update-urls.js` | URL migration tool (dry-run + write modes) |
| `[category]/index.html` | 9 category pages with tool grids + content sections |
| `CLAUDE.md` | AI assistant instructions (design system, patterns, standards) |
| `docs/agents/wcag-accessibility-audit.md` | WCAG audit procedure |
