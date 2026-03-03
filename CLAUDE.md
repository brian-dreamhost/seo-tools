# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of free marketing tools built for DreamHost. The root `index.html` is a parent hub linking to 9 category pages. Each category page lists its tools. Individual tools are standalone React apps in their own subfolders, deployed to Vercel via GitHub.

### Site Structure

```
root/
├── index.html                  ← Parent hub (Free Marketing Tools)
├── shared/
│   └── styles.css              ← Shared CSS for all static pages
├── seo/
│   └── index.html              ← SEO Tools category (9 tools)
├── social-media/
│   └── index.html              ← Social Media Tools category (9 tools)
├── copywriting/
│   └── index.html              ← Copywriting Tools category (9 tools)
├── email-marketing/
│   └── index.html              ← Email Marketing Tools category (9 tools)
├── analytics/
│   └── index.html              ← Analytics & Calculators category (6 tools)
├── design/
│   └── index.html              ← Design & Branding Tools category (5 tools)
├── local-business/
│   └── index.html              ← Local Business Tools category (9 tools)
├── legal-compliance/
│   └── index.html              ← Legal & Compliance Tools category (9 tools)
├── advertising/
│   └── index.html              ← Advertising Tools category (5 tools)
├── schema-markup-generator/    ← Standalone React app (own git repo)
├── metadata-preview-tool/      ← SERP Preview Tool — Standalone React app (own git repo)
└── core-web-vitals-checker/    ← Standalone React app (own git repo)
```

### Shared CSS

All static HTML pages (hub + category pages) use `shared/styles.css` via relative path (`../shared/styles.css` from category pages, `./shared/styles.css` from root). This file contains the DreamHost design system tokens, layout, tile, breadcrumb, and responsive styles.

### Live Tool Projects

**SEO Tools:**

| Folder | Description | Vercel URL |
|---|---|---|
| `schema-markup-generator` | JSON-LD structured data generator | https://schema-generator-ochre.vercel.app/ |
| `metadata-preview-tool` | SERP Preview Tool | https://metadata-preview-tool.vercel.app/ |
| `core-web-vitals-checker` | LCP, INP, CLS performance checker | TBD |

**Social Media Tools:**

| Folder | Description | Vercel URL |
|---|---|---|
| `social-media-post-previewer` | Post preview across Facebook, X, LinkedIn, Instagram | https://social-media-post-previewer-blond.vercel.app/ |
| `hashtag-generator` | Hashtag suggestions by topic, niche, platform | https://hashtag-generator-self.vercel.app/ |
| `social-media-bio-generator` | Platform-optimized bios for all major networks | https://social-media-bio-generator.vercel.app/ |
| `social-image-resizer` | Canvas-based image resizer for all platform dimensions | https://social-image-resizer-nu.vercel.app/ |
| `open-graph-debugger` | OG tag validator with social share previews | https://open-graph-debugger.vercel.app/ |
| `platform-character-counter` | Live char count for 8 platforms with truncation previews | https://platform-character-counter.vercel.app/ |
| `engagement-rate-calculator` | ER calculator with benchmarks and improvement tips | https://engagement-rate-calculator.vercel.app/ |
| `best-time-to-post` | Weekly heatmap by platform and industry | https://best-time-to-post.vercel.app/ |
| `social-media-caption-generator` | Platform-optimized captions with tone + hashtag options | https://social-media-caption-generator.vercel.app/ |

**Copywriting Tools:**

| Folder | Description | Vercel URL |
|---|---|---|
| `copy-readability-optimizer` | Readability + side-by-side copy comparison | https://copy-readability-optimizer.vercel.app/ |
| `tone-voice-analyzer` | Brand voice profile + consistency checker | https://tone-voice-analyzer.vercel.app/ |
| `headline-analyzer` | Headline scoring on balance, length, sentiment | https://headline-analyzer-gold.vercel.app/ |
| `cta-generator` | Psychology-backed CTA variations | https://cta-generator-nine.vercel.app/ |
| `product-description-builder` | AIDA/PAS/FAB product descriptions | https://product-description-builder.vercel.app/ |
| `word-character-counter` | Real-time counts with platform limits | https://word-character-counter-tau.vercel.app/ |
| `before-after-copy-comparer` | Side-by-side diff with readability scores | https://before-after-copy-comparer.vercel.app/ |
| `value-proposition-generator` | 5-framework value prop generator with clarity scores | https://value-proposition-generator.vercel.app/ |
| `story-framework-generator` | 5 narrative frameworks with social adaptation | https://story-framework-generator.vercel.app/ |

**Email Marketing Tools:**

| Folder | Description | Vercel URL |
|---|---|---|
| `email-subject-line-tester` | Subject line scoring with A/B comparison | https://email-subject-line-tester.vercel.app/ |
| `email-signature-generator` | HTML email signature builder with 4 templates | https://email-signature-generator-sooty.vercel.app/ |
| `email-deliverability-checker` | Spam trigger, link, image, compliance scanner | https://email-deliverability-checker-seven.vercel.app/ |
| `plain-text-email-formatter` | HTML to plain text email converter | https://plain-text-email-formatter.vercel.app/ |
| `email-preview-renderer` | Gmail, Outlook, Apple Mail render preview | https://email-preview-renderer.vercel.app/ |
| `email-preheader-preview` | Subject + preheader preview across 7 clients | https://email-preheader-preview.vercel.app/ |
| `email-cta-button-generator` | Bulletproof HTML buttons with Outlook VML | https://email-cta-button-generator.vercel.app/ |
| `email-metrics-calculator` | Email metrics benchmarked against 20 industries | https://email-metrics-calculator.vercel.app/ |
| `email-list-growth-calculator` | List growth projections with scenarios | https://email-list-growth-calculator.vercel.app/ |

**Local Business Tools:**

| Folder | Description | Vercel URL |
|---|---|---|
| `google-business-profile-audit` | GBP optimization checklist with 35 items and scoring | https://google-business-profile-audit.vercel.app/ |
| `review-response-generator` | Template-based review response generator for all star ratings | https://review-response-generator-beta.vercel.app/ |
| `review-request-template-builder` | Multi-channel review request templates with QR codes | https://review-request-template-builder.vercel.app/ |
| `local-business-schema-generator` | LocalBusiness JSON-LD with 19 subtypes | https://local-business-schema-generator.vercel.app/ |
| `local-seo-keyword-generator` | Location-based keyword variations with intent mapping | https://local-seo-keyword-generator.vercel.app/ |
| `local-business-description-writer` | Directory listing manager for 9 platforms | https://local-business-description-writer.vercel.app/ |
| `service-area-map-planner` | Interactive map with radius, polygon, multi-zone drawing | https://service-area-map-planner.vercel.app/ |
| `nap-consistency-checker` | NAP comparison workbook with diff algorithm | https://nap-consistency-checker.vercel.app/ |
| `local-competitor-comparison` | Competitive analysis wizard with radar charts | https://local-competitor-comparison.vercel.app/ |

### Category Tool Lists

**SEO Tools** (9 tools — 2 live):
Schema Markup Generator, SERP Preview Tool, Core Web Vitals Checker, Robots.txt Generator, AI Crawler Control Center, Redirect Map Builder, AI Search Snippet Previewer, Content Readability & Citability Scorer, XML Sitemap Generator

**Social Media Tools** (9 tools — all live):
Social Media Post Previewer, Hashtag Generator, Social Media Bio Generator, Social Image Resizer, Open Graph Debugger, Platform Character Counter, Engagement Rate Calculator, Best Time to Post, Social Media Caption Generator

**Copywriting Tools** (9 tools — all live):
Copy Readability Optimizer, Tone & Voice Analyzer, Headline Analyzer, Call-to-Action Generator, Product Description Builder, Word & Character Counter, Before/After Copy Comparer, Value Proposition Generator, Story Framework Generator

**Email Marketing Tools** (9 tools — all live):
Email Subject Line Tester, Email Signature Generator, Email Deliverability Checker, Plain Text Email Formatter, Email Preview Renderer, Email Preheader Preview, Email CTA Button Generator, Email Metrics Calculator, Email List Growth Calculator

**Analytics & Calculators** (6 tools):
Marketing ROI Calculator, A/B Test Sample Size Calculator, Conversion Rate Calculator, Ad Spend Budget Planner, Website Speed Impact Calculator, UTM Link Builder

**Design & Branding Tools** (5 tools):
Color Palette Generator, Contrast Checker (WCAG), Favicon Generator, Font Pairing Tool, Brand Color Extractor

**Local Business Tools** (9 tools — all live):
Google Business Profile Audit, Review Response Generator, Review Request Template Builder, Local Business Schema Generator, Local SEO Keyword Generator, Local Directory Listing Manager, Service Area Map Planner, NAP Consistency Checker, Local Competitor Comparison

**Legal & Compliance Tools** (9 tools):
Privacy Policy Generator, Terms of Service Generator, Cookie Policy & Banner Generator, Website Accessibility Checker, GDPR/CCPA Compliance Checker, Disclaimer Generator, Return & Refund Policy Generator, Website Legal Page Audit, Color Contrast Checker

**Advertising Tools** (5 tools):
Google Ads Preview Tool, ROAS Calculator, Facebook Ad Copy Generator, Ad Size Reference Guide, Landing Page Checklist Auditor

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
| `galactic` | `#7E939F` | Muted text, labels, placeholders |
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
  --color-galactic: #7E939F;
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

**Breadcrumbs (required on every tool app):**
- Every standalone tool must include a breadcrumb nav at the top of the page, above the header
- Pattern: `Free Tools / [Category Name] / [Tool Name]`
- "Free Tools" and category name are azure links; tool name is cloudy (current page)
- Links use full Vercel URLs since tools are on separate domains:
  - Hub: `https://seo-tools-tau.vercel.app/`
  - Categories: `https://seo-tools-tau.vercel.app/seo/`, `https://seo-tools-tau.vercel.app/social-media/`, etc.
- Tailwind classes: `<nav className="mb-8 text-sm text-galactic">` with `text-azure hover:text-white transition-colors` links and `mx-2 text-metal` separators

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

## Parallel Agent Strategy

**Always use parallel agents.** This project involves many independent tools in isolated folders. Running agents in parallel cuts wall-clock time by 3–4x. Default to parallel execution whenever tasks don't share files.

### When to parallelize

- **Building tools**: Spawn one build agent per tool. Each owns its own folder — no file conflicts possible. Run 3–4 simultaneously.
- **Auditing**: After deployment, run audit agents on multiple tools at the same time.
- **Fixing**: Run fix agents on multiple tools simultaneously (each agent owns its folder).
- **Research + build**: A Plan/Explore agent can research while a build agent works on an already-planned tool.

### How to launch parallel agents

Send a single message with multiple `Task` tool calls. All launch simultaneously:

```
Task(subagent_type="general-purpose", prompt="Build X in folder x/...")
Task(subagent_type="general-purpose", prompt="Build Y in folder y/...")
Task(subagent_type="general-purpose", prompt="Build Z in folder z/...")
```

Use `run_in_background=true` for longer tasks when you want to continue coordinating without blocking. You'll be notified when each completes.

### Agent handoff pattern

1. **Orchestrator** (main Claude): plans, coordinates, merges results, handles Vercel URLs, commits to shared files (hub/category pages)
2. **Build agents**: each builds one tool end-to-end (scaffold → components → build → git push)
3. **Audit agents**: run web-design-guidelines review on a deployed URL
4. **Fix agents**: apply all audit findings to a specific tool folder

Give each agent complete, self-contained instructions — they start fresh with no prior context.

### Constraints

- Agents cannot share state or communicate mid-task
- Never assign two agents to the same file at the same time
- Vercel import still requires a manual step from the user
- The main Claude coordinates final commits to shared files (index.html, CLAUDE.md, etc.)

---

## Usefulness Agent

You are a Usefulness Agent. Your job is to evaluate and improve every tool in this project against a single standard: would a power user choose this over a dedicated SaaS product?

### Tools Must DO Something, Not Just Format Something

The minimum bar for a "tool" is that it performs work the user cannot easily do themselves in a text editor or spreadsheet. If the output is just the user's input rearranged or wrapped in a template, it's a notepad, not a tool.

**A real tool takes action:**
- Makes an external request (API call, URL fetch, DNS lookup, live data check)
- Performs analysis the user couldn't do by hand in under 30 seconds
- Generates output that required computation, not just substitution
- Validates against a live or authoritative data source, not just a regex

**The Google Business Profile Audit Tool is the standard to match:**
- Takes a URL or identifier as input
- Goes and fetches/checks something real
- Returns findings the user didn't already know
- Surfaces actionable gaps, not just a reflection of what they entered

**Apply this test to every tool before shipping:**
Ask: "Could a user get the same output by typing their input into a Word doc or ChatGPT prompt?"
If yes → the tool needs an external data source, live check, computed analysis, or API integration to justify existing.

**Upgrade paths for tools that are currently notepads:**
- Generators → add scoring, validation, or comparison against real benchmarks
- Previewers → fetch live metadata from the actual URL instead of accepting manual input
- Analyzers → run against a real standard or dataset, not just pattern-match the input
- Calculators → pull live benchmarks or industry averages to contextualize the result

**Preferred live data sources to integrate (where applicable):**
- URL/page content: fetch and parse directly
- DNS/WHOIS: public lookup APIs
- PageSpeed/CWV: Google PageSpeed Insights API (free, no auth required)
- Structured data: Google Rich Results API or schema.org validation
- Open Graph / meta: direct URL fetch and parse
- Accessibility: axe-core or similar client-side engine

### The Usefulness Standard

A tool passes the bar when it satisfies ALL of the following:

**Practical, not just novel**
- Solves a real workflow problem, not a toy version of one
- Handles edge cases a beginner wouldn't think of but a power user definitely would
- Works with realistic, messy inputs — not just happy-path examples

**Fully featured**
- Includes every output a user would need to act on the result immediately (no "next step" left undone)
- Offers configuration/options for the most common variations (not just defaults)
- Supports copy, export, or direct-use output (not just display)
- Validates inputs and gives useful error messages, not silent failures

**Saves real time**
- Replaces at least one external tool, tab, or manual step
- Provides output ready to paste, publish, or deploy — zero reformatting needed
- Batch input support where the use case naturally involves multiple items

**Clear visual hierarchy**
- Primary action is immediately obvious without reading instructions
- Input → Output flow is spatially obvious (left-to-right or top-to-bottom)
- Labels describe outcomes, not mechanics ("Generate Schema" not "Submit")
- Results are visually distinct from controls — no hunting for the output

**Instructive without being verbose**
- Inline contextual help explains WHY, not just WHAT (e.g., "Max 160 chars — Google truncates beyond this")
- Field-level hints anticipate the most common user mistake
- One example pre-loaded or available on demand so users understand expected input format
- No wall-of-text instructions before the tool — get them into the tool first

**Trustworthy output**
- Output follows current best practices (not 2019 specs)
- Cites or references the standard it's following where relevant
- Flags when output is an estimate vs. authoritative (e.g., readability scores, timing recommendations)
- Never outputs placeholder text, broken formatting, or incomplete results

### Your Process

When asked to build or audit a tool:

1. **Define the power user** — Who uses this professionally? What do they already know? What do they need that beginners don't?
2. **List the jobs-to-be-done** — What are all the things a user needs to accomplish with this tool?
3. **Audit against the standard** — Score each dimension above and identify the gaps
4. **Propose and implement improvements** — Prioritize changes with the highest usefulness-to-effort ratio
5. **Final check** — Would you personally use this tool again next week? If not, what's missing?

### Non-Negotiables

- No lorem ipsum, no placeholder outputs
- No broken states or empty results for valid inputs
- Every tool must have a working copy/export mechanism
- Mobile usability is required, not optional
- Dark mode support where the design system supports it
- Performance: tool must be interactive in under 2 seconds on a standard connection

## UX Quality Control Checklist

Run this checklist after every tool build. A dedicated UX QC agent should read every component file, check against each item, report issues with `file:line` references, and fix any issues found.

- **Responsive**: test at 320px, 375px, 768px, 1024px, 1440px widths. Specifically check:
  - No horizontal overflow or scrollbars at any breakpoint
  - Text does not overflow containers or get clipped
  - Flex/grid layouts stack properly on mobile (flex-col on small, flex-row on large)
  - Preview cards and embedded content scale down without breaking
  - Form inputs are full-width on mobile, not truncated
  - Padding/margins reduce appropriately on small screens (e.g., `p-4` not `p-8` on mobile)
  - Tab bars remain usable at 320px (scrollable or wrapped, not overlapping)
  - Images maintain aspect ratio and don't overflow their containers
  - Touch targets are at least 44x44px on mobile
  - Font sizes are readable on mobile (minimum 14px for body text)
- **Empty states**: all forms empty, partial data, single field filled
- **Error states**: invalid input, oversized files, broken image URLs
- **Keyboard nav**: all interactive elements reachable via Tab, Enter/Space to activate
- **Focus visibility**: focus rings visible on all buttons, inputs, tabs
- **Color contrast**: text meets WCAG AA against its background
- **Design system compliance**: all colors, spacing, radii match DreamHost tokens
- **Interactive feedback**: hover, focus, active, disabled states all present
- **Loading/transition states**: smooth animations, no layout shift
- **Typography hierarchy**: headings, body, muted text use correct tokens
- **Cross-browser**: no Tailwind features that break in Safari/Firefox
