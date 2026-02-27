# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of free marketing tools built for DreamHost. The root `index.html` is a parent hub linking to 7 category pages. Each category page lists its tools. Individual tools are standalone React apps in their own subfolders, deployed to Vercel via GitHub.

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

Run this evaluation **before building any tool** — during planning, before any code is written. The purpose is to ensure every tool we ship is genuinely valuable to a small business marketer, not just a checkbox on a feature list. The agent should deeply empathize with the target user, challenge assumptions, and modify the plan if needed.

### Target User

A small business owner or marketer who:
- Is not a developer or SEO expert
- Has limited time and budget
- Needs tools that produce immediate, actionable results
- Will only bookmark and return to tools that save real time
- Judges tools by "did this actually help me?" not "is this technically impressive?"

### Evaluation Criteria

Score each criterion as **High / Medium / Low**. A tool that scores **Low on any High-weight criterion** must be redesigned or cut. A tool that scores **Low on 2+ Medium-weight criteria** should be reconsidered.

| Criterion | Question | Weight |
|-----------|----------|--------|
| **Return frequency** | Will users come back more than once? Or is this a one-and-done tool? | High |
| **Time saved** | Does this save >2 minutes vs. the current best free alternative? | High |
| **Differentiation** | Is the best free alternative meaningfully worse than what we're building? | High |
| **Accuracy** | Can we deliver results that are reliably correct with a client-side app? | High |
| **Actionability** | Does every output come with a clear "do this next" step? | Medium |
| **Audience fit** | Does a non-expert small business marketer actually need this? | Medium |
| **Standalone viability** | Is this a real tool or just a feature that belongs inside another tool? | Medium |
| **Premise validity** | Is the underlying concept still relevant and accurate in 2026? | Medium |
| **Build complexity** | Can we build this well within our stack (client-side React)? | Low |
| **SEO value** | Will this page rank for valuable search terms? | Low |

### Usefulness Traps to Check For

The agent must explicitly check for and flag these patterns:

1. **The Scoreless Score** — Tool produces a number (0-100) with no explanation, benchmarks, or actionable next step. *Rule: Every score needs plain-language meaning, a benchmark, and one specific improvement action.*

2. **The Generic Generator** — AI-powered tool that produces output indistinguishable from asking ChatGPT. *Rule: Generators must use structured inputs that create meaningfully different outputs, produce formatted artifacts a chatbot can't (JSON-LD, HTML email signatures), or provide a workflow/framework — not just raw text.*

3. **The One-Visit Tool** — Solves a problem the user has exactly once, then never returns. *Rule: Not disqualifying, but one-visit tools must complete in <30 seconds. Consider embedding as a feature inside a higher-traffic tool instead.*

4. **The Outdated Premise** — Built on advice or assumptions that are no longer accurate. *Rule: Before building, verify the underlying premise is still valid. "Would an expert recommend this approach in 2026?"*

5. **The Context-Free Calculator** — Does math the user could do on their phone, without interpretation. *Rule: Every calculator must include benchmarks, projections, or scenario comparisons. The value is in the "so what?" not the arithmetic.*

6. **The Impossible Accuracy Problem** — Promises to preview/simulate something that varies too much to be reliable. *Rule: If accuracy can't be reasonable, scope to what works (3-4 major platforms with disclaimers) or don't build it.*

7. **The Feature Masquerading as a Tool** — Can be fully expressed as a single input + single output. *Rule: If it fits in one text field and one result, it's probably a feature. Combine with a related tool that drives repeat visits.*

8. **The "Works for Experts" Tool** — Only useful if you already understand the domain well enough to not need it. *Rule: Every input must have sensible defaults and plain-language explanations. If a user doesn't know what "minimum detectable effect" means, the tool must explain it.*

### Integration Philosophy

Our default stance is **self-contained, client-side tools with zero backend dependencies**. This keeps tools free forever, fast, and private (no user data leaves the browser).

- **Preferred**: Pure client-side logic, browser APIs (Canvas, Clipboard, File API, Web Workers, etc.)
- **Acceptable**: Free, public APIs with no auth required (e.g., PageSpeed Insights API, public DNS lookups, open data sets)
- **Ask the user first**: Free APIs that require an API key (e.g., Google Search Console API, free-tier services) — present as an optional enhancement, not a requirement
- **Avoid**: Paid APIs, rate-limited services that would break under real usage, any dependency that could disappear or start charging
- **Never**: APIs that require users to create accounts or share credentials with our tool

When the Competitive Research Agent identifies a feature gap that requires an API, it must classify the integration using the tiers above and present the trade-off to the user via questionnaire before including it in scope.

### Competitive Research Sub-Agent

The Usefulness Agent may deploy a **Competitive Research Agent** at its discretion. This is a strictly read-only research agent — it does not write code or modify files. It can also be invoked directly by the user for retroactive audits of tools already built.

#### When to Deploy

The Usefulness Agent should deploy this sub-agent when:
- A new tool is being planned and the competitive landscape is unclear
- The Usefulness Agent scores "Differentiation" as uncertain and needs real data
- The user explicitly requests a competitive audit of an existing or planned tool
- A tool category is being prioritized and we need to know which tool to build first

#### Sub-Agent Workflow

1. **Identify search queries** — Determine the 3-5 queries a target user would search to find this type of tool (e.g., "free SERP preview tool", "google search result previewer", "meta tag checker free")
2. **Audit top-ranking competitors** — For each query, examine the top 5-10 results via web search and fetch. For each competitor:
   - What features does it offer?
   - Is it truly free, freemium, or bait-and-switch (free to use, pay to export)?
   - What's the UX quality? (Fast? Clean? Ad-heavy? Mobile-friendly?)
   - What are users complaining about? (Check for obvious UX pain points, missing features, outdated data)
3. **Build a feature matrix** — Create a table: rows = features, columns = competitors + our planned tool. Mark each as present/absent/partial.
4. **Identify feature gaps** — What do the top 2-3 competitors offer that our plan doesn't? Classify each gap:
   - **Must-have gap**: Competitors all have it; users expect it. We need it or we look incomplete.
   - **Differentiator opportunity**: No competitor does this well (or at all). This is our angle.
   - **Nice-to-have**: Some competitors have it, but it's not core to the user's job-to-be-done.
   - **Skip**: Competitor feature that adds bloat, requires paid APIs, or doesn't fit our audience.
5. **Assess integration requirements** — For each must-have or differentiator feature:
   - Can it be built client-side? If yes, recommend it.
   - Does it require a free public API? If yes, identify the specific API, confirm it's free/no-auth, and recommend it.
   - Does it require a paid or authenticated API? If yes, flag it and classify per the Integration Philosophy tiers above. Present to the user as an optional enhancement with clear trade-offs.
6. **Produce recommendations** — Specific, actionable feature additions or modifications to the plan, ranked by impact.

#### Sub-Agent Output Format

```
## Competitive Research: [Tool Name]

### Search Queries Analyzed
- "[query 1]" — [X results examined]
- "[query 2]" — [X results examined]

### Top Competitors
| Competitor | URL | Free? | Key Strengths | Key Weaknesses |
|------------|-----|-------|---------------|----------------|
| [Name] | [URL] | Yes/Freemium/No | [strengths] | [weaknesses] |

### Feature Matrix
| Feature | Competitor A | Competitor B | Competitor C | Our Plan |
|---------|-------------|-------------|-------------|----------|
| [Feature 1] | Yes | Yes | No | Yes |
| [Feature 2] | Yes | No | Yes | Missing |

### Feature Gap Analysis
**Must-have gaps** (need these to be competitive):
- [Feature]: [why it's expected, how to build it, client-side feasible: yes/no]

**Differentiator opportunities** (our angle to stand out):
- [Feature]: [why no one does this well, how we'd do it better]

**Nice-to-have** (consider for v2):
- [Feature]: [context]

**Skip** (not worth it):
- [Feature]: [why — paid API, bloat, wrong audience, etc.]

### Integration Requirements
| Feature | Implementation | API Required? | Tier | Recommendation |
|---------|---------------|---------------|------|----------------|
| [Feature] | [approach] | None / Free public / Free w/ key / Paid | Preferred/Acceptable/Ask user/Avoid | [Include/Optional/Skip] |

### Summary Recommendations
[Ranked list of specific changes to the plan, with rationale]
```

#### Retroactive Mode

When invoked by the user on an existing live tool, the sub-agent follows the same workflow but adds:
- Compare our live tool's current feature set against the competitor matrix
- Flag features we're missing that competitors have added since our launch
- Recommend specific enhancements, prioritized by user impact
- Note any competitors that have launched since our tool went live

### Usefulness Agent Workflow

1. **Read the plan** — Understand what the tool does, who it's for, and how it works
2. **Identify the user's job-to-be-done** — What specific task is the user trying to accomplish? What's the pain point?
3. **Deploy Competitive Research Agent** (at discretion) — If the competitive landscape is unclear, differentiation is uncertain, or the tool is high-investment, deploy the sub-agent to gather real data before scoring
4. **Score against criteria** — Evaluate each of the 10 criteria above, informed by competitive research if available
5. **Check for traps** — Explicitly test against all 8 trap patterns
6. **Propose modifications** — If the tool scores poorly, suggest specific changes:
   - Rebrand/reframe the concept (e.g., "Spam Word Checker" → "Email Deliverability Checklist")
   - Add a differentiating feature informed by competitive gaps
   - Merge with another tool (e.g., "Website Speed Impact Calculator" → tab inside Core Web Vitals Checker)
   - Scope down to what can be done well (e.g., "Email Preview Renderer" → just Gmail + Outlook + Apple Mail with disclaimers)
   - Kill it if nothing saves it (e.g., "Word & Character Counter" as a standalone tool)
   - For features requiring APIs, present user questionnaire with trade-offs per Integration Philosophy
7. **Issue a verdict** — One of:
   - **BUILD** — Tool is genuinely useful as planned
   - **BUILD WITH MODIFICATIONS** — Useful concept, but needs the specified changes
   - **RECONSIDER** — The premise needs significant rethinking before proceeding
   - **DON'T BUILD** — Better to invest the time elsewhere; explain why

### Output Format

```
## Usefulness Evaluation: [Tool Name]

### User Story
As a [specific user type], I need to [specific task] because [specific pain point].

### Competitive Landscape
[Summarized from Competitive Research Agent if deployed, or from general knowledge]
- [Existing alternative 1]: [quality assessment]
- [Existing alternative 2]: [quality assessment]
- Our angle: [what makes ours worth using]
- Key feature gaps to close: [list]
- Key differentiator opportunities: [list]

### Criteria Scores
| Criterion | Score | Rationale |
|-----------|-------|-----------|
| Return frequency | High/Med/Low | [why] |
| Time saved | High/Med/Low | [why] |
| ... | ... | ... |

### Trap Check
- [ ] Scoreless Score: [pass/fail + detail]
- [ ] Generic Generator: [pass/fail + detail]
- [ ] One-Visit Tool: [pass/fail + detail]
- [ ] Outdated Premise: [pass/fail + detail]
- [ ] Context-Free Calculator: [pass/fail + detail]
- [ ] Impossible Accuracy: [pass/fail + detail]
- [ ] Feature Not Tool: [pass/fail + detail]
- [ ] Works for Experts: [pass/fail + detail]

### Modifications Required
[Specific, actionable changes — or "None" if BUILD]

### Integration Decisions (if applicable)
[For any feature that requires an API or external dependency, present as a user question]
| Feature | What It Adds | Requires | Tier | Trade-off |
|---------|-------------|----------|------|-----------|
| [Feature] | [user benefit] | [API/service name] | Preferred/Acceptable/Ask user | [what we gain vs. what we risk] |

Recommendation: [Include / Make optional / Skip] — [rationale]

### Verdict: [BUILD / BUILD WITH MODIFICATIONS / RECONSIDER / DON'T BUILD]
[1-2 sentence summary of why]
```

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
