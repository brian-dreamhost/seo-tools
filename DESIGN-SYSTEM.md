# DreamHost Design System — Complete Reference

Source: https://dreamhost.design/ (all pages) + dreamhost.com live site analysis (March 2026)

---

## 1. BRAND IDENTITY

### Mission, Vision & Noble Cause

- **Mission:** Provide personalized guidance to businesses to help them attract, captivate, and grow customers online using web tools, roadmaps, and analytics.
- **Noble Cause:** "We help people own their digital presence"
- **Vision:** "People have the freedom to choose how their digital content is shared"

### Company Name

The official name is **DreamHost** — upper camel case, both D and H capitalized, no space between.

**Never use:** Dreamhost Web Hosting, Dreamhost (lowercase h), DreamHost LLC, New Dream Network, New Dream Networks.

### Voice & Tone

| Attribute | Description |
|---|---|
| **Approachable** | Simplifies technical concepts into accessible language. Plain English, no jargon. |
| **Conversational** | Avoids formality; prioritizes authenticity over corporate speak. People first. |
| **Fun & Irreverent** | Playful humor maintained at PG-13 standards. |
| **Authentic** | Direct communication without evasion. Straight to the point. |

Copy dos: Short sentences. Active voice. Customer's level.
Copy don'ts: Corporate speak, passive voice, exclamation spam.

### Eight Core Brand Values

1. **Empower People** — Employee autonomy enables customer empowerment through proper tools
2. **Practice Shameless Honesty** — Transparency builds trust and mutual respect
3. **Give Everyone a Voice** — Diverse perspectives improve problem-solving
4. **Speak Hacker** — Creative problem-solving through free thinking and open-source software
5. **Embrace Open Source** — Leverages and contributes back to open-source projects
6. **Practice Flexibility** — Adaptability across services and company culture
7. **Provide Superhero Service** — Empowered employees deliver exceptional customer support
8. **Be Irreverent & Fun** — Avoids corporate sanitization; embraces authentic edge

Each value has corresponding SVG files (icon + typography versions) available for download from dreamhost.design.

---

## 2. LOGOS

### Primary Logos
- Primary Logo Light (SVG/PNG) — for light backgrounds
- Primary Logo Dark (SVG/PNG) — for dark backgrounds
- Recommended as the main logo for all uses

### Monochrome Versions
- Monochrome Logo Light (SVG/PNG)
- Monochrome Logo Dark (SVG/PNG)
- Usage: budget materials, printing, complex color combinations, when brand colors unavailable

### Logo Mark (Moon Symbol)
- Moon-shaped symbol without company name
- Azure (#0073EC) circle + Prince (#A644E5) circle overlap
- 4 variations: Light, Dark, Mono Light, Mono Dark
- Formats: SVG and PNG

### Size Requirements
- Minimum digital size: **150px width**
- Minimum print size: **30mm width**
- Clearspace: equal to moon icon height on all sides

### Logo Prohibitions
- Do not use old logos
- Do not change logo colors
- Do not create new logo versions
- Do not rotate or distort
- Do not add effects (shadows, gradients, etc.)
- Do not alter the font/type

---

## 3. MASCOT

**Name:** Clanky (and "the little one")

- DreamHost robots that communicate in pantomime gestures only — they do not speak
- Props and poses should make meaning apparent
- **Variations:** Original (7 poses), Ninja (6 poses), Alternative (10 poses)
- **Formats:** PNG and EPS
- **Usage:** Internal presentations, newsletters, company communication graphics ONLY
- **NOT for:** Website, panel, or any customer-facing marketing graphics

---

## 4. COLORS

### Primary

| Name | Hex | Usage |
|---|---|---|
| **Abyss** | `#000000` | Default text on light bg, page background (dark mode) |
| **Oblivion** | `#111111` | Rich black alternative, card/surface background |
| **Midnight** | `#071C26` | Dark section bg, footer, tooltips, code blocks |
| **White** | `#FFFFFF` | Default text on dark bg, light backgrounds |
| **Azure** | `#0073EC` | Primary CTA, links, focus rings, featured accents |
| **Prince** | `#A644E5` | Premium/upsell, secondary accent, decorative glow |

### Secondary

| Name | Hex | Usage |
|---|---|---|
| **Turtle** | `#00CAAA` | Success, feature highlights, checkmarks, status badges |
| **Coral** | `#FF4A48` | Error, destructive actions, warning, danger |
| **Tangerine** | `#F59D00` | Alert banners, caution, "coming soon" status |
| **Sunflower** | `#FFDA00` | Highlight accent, badges (use sparingly) |

### Grayscale / Neutral

| Name | Hex | Usage |
|---|---|---|
| **Off White** | `#F4F6F9` | Alternate section bg, card bg, icon circle backgrounds |
| **Smoke** | `#E0E4E8` | Borders, dividers, input strokes |
| **Cloudy** | `#AFBFC9` | Body text (dark mode), placeholder text, muted icons |
| **Galactic** | `#677983` | Body copy secondary, captions, muted text, labels |
| **Metal** | `#434F58` | Subheadings on dark, muted text, borders/dividers at /20 or /30 opacity |

> **Note:** Our free tools project uses Galactic as `#7E939F` (a lighter variant) to ensure WCAG AA compliance on dark backgrounds.

### Color Psychology

| Color Group | Emotional Tone |
|---|---|
| Blues & Purples | Calm, loyalty, trust |
| Greens | Nature, renewal, growth |
| Yellows & Oranges | Happiness, creative, cheerful |
| Reds | Danger, warning, passion |

### Usage Principles
- Use color sparingly to emphasize key messaging
- Apply combinations that communicate intended emotional tone
- Require a color contrast ratio of above 3.0 for text and background combinations

### Accessibility — Color Contrast (WCAG)

**Passing combinations:** White on Abyss, White on Azure, Abyss on White

**Failing combinations:** Smoke on White (never for text), Galactic on Metal, Coral on Sunflower

### Text/Background Pairings

- **On White/Off-White**: Abyss (neutral), Azure (emphasis), Prince (emphasis), Turtle (emphasis), Coral (error)
- **On Blue backgrounds**: Abyss (neutral), White (emphasis only)
- **On Black/Midnight backgrounds**: White (neutral), Cloudy (secondary), Azure/Prince/Turtle (emphasis), Coral (error)

---

## 5. TYPOGRAPHY

### Marketing Typography

**Font family:** Gilroy — modern sans-serif, used across website, blog, and printed materials.
CDN: `@import url('https://fonts.cdnfonts.com/css/gilroy-free');`

**Weights used:** Bold (700) / Semi-Bold (600) for headers, Medium (500) for body

| Style | Weight | Size (px) | Line Height (px) | Usage |
|---|---|---|---|---|
| H1 | Bold (700) | 122 | 128 | Hero headlines |
| H2 | Bold (700) | 88 | 96 | Section titles |
| H3 | Bold (700) | 72 | 88 | Sub-section titles |
| H4 | Bold (700) | 48 | 60 | Card/feature headlines |
| H5 | Bold (700) | 32 | 40 | Feature titles |
| X-Large Body | Medium (500) | 24 | 40 | Lead/intro body |
| Large Body | Medium (500) | 20 | 32 | Subheads, secondary body |
| Medium Body | Medium (500) | 16 | 32 | Standard body |
| Small Body | Medium (500) | 14 | 24 | Captions, labels, nav items |
| X-Small Body | Medium (500) | 12 | 20 | Tags, badges, legal |

**Responsive Type Scale:**
- H1: 122px desktop -> ~48px mobile
- H2: 88px desktop -> ~36px mobile

### Product Typography

**Headline font:** Ubuntu (Google Fonts) — Medium weight only
**Body font:** Proxima Nova (Adobe Fonts) — Regular weight only

| Style | Weight | Size (px) | Line Height (px) |
|---|---|---|---|
| H1 | Bold | 40 | 48 |
| H2 | Medium | 32 | 40 |
| H3 | Medium | 24 | 32 |
| H4 | Regular | 20 | 32 |
| Larger Body | Regular | 16 | 25 |
| Regular Body | Regular | 15 | 25 |

### Button Text Colors
Primary options: Azure, Prince, Turtle, Midnight, Ghost Light, Ghost Dark

### Arrow/Chevron Standard
"For consistency use only Gilroy Bold font arrow: -> <- (up) (down)"

---

## 6. ICONOGRAPHY

### Product Icons

**Purpose:** Visual representations of products and services. Should not be overused.

**26 product icons:** Academy, Build, Business, Cloud Hosting, Custom Web Design, Dedicated Hosting, Development, Dream Shop, Email Hosting, Enterprise, Grow, Managed WordPress, Management, Marketing, On Demand, Promote, Retainer, SEO, Shared Hosting, Shared WordPress, Social Marketing, Start Up, VPS Hosting, VPS WordPress, VPS, Website Builder, WooCommerce Hosting, WP Builder

**Color Treatments:**

| Style | Allowed Colors |
|---|---|
| Shaded (light backgrounds) | Blue, Purple, Green, Black |
| Shaded (dark backgrounds) | Blue, Purple, Green, Gray |
| Lined | Black (#000000) only |

**Rules:**
- DO: Use only preset product icon colors
- DON'T: Create custom versions, convert to duotone, use non-preset colors

### Standard Icons

**Source:** Font Awesome icon library, "Regular" styling option
**Minimum Size:** 50px height
**Positioning:** Icons must precede text — positioned either above or to the left

**Background Shapes:**

| Shape | Color |
|---|---|
| Circles | Off White (#F4F6F9) |
| Squares | Green, Purple, or Blue |
| White squares | Require drop shadow for visibility |

---

## 7. ILLUSTRATIONS

### Style Requirements
- Clean, consistent, and professional execution
- Convey feelings of friendliness and warmth
- People depicted must be diverse and inclusive

### Illustration Types

**Stock Illustrations:** Sourced from Good Studio library. Must be recolored to DreamHost brand palette before use.

**Representational UI:** Depict digital products, features, and workflows visually.

### Rules
- **DO:** Apply brand color palette for strong contrast; add contextual elements like related icons
- **DON'T:** Use illustrations in original downloaded state; combine elements with contrasting styles

### Template Specifications
- Blog Featured Image (full image, no content overlay)
- Blog Social Card (50% text, 50% graphics split)
- LinkedIn and Instagram (standard social dimensions)
- Twitter (platform-specific sizing)
- Export: Created in Figma, exported as JPG for blog images

---

## 8. PHOTOGRAPHY

### Philosophy
Photography should feel organic, obtainable, and authentic — conveying freedom and potential, not perfection.

### General Rules

| Aspect | Guideline |
|---|---|
| **Colors** | Natural, contrasting colors reflecting real life. No unnatural or manipulated coloring. |
| **Lighting** | Warm, natural lighting. No artificial enhancements, gradients, or lens flare. |
| **Background** | Backgrounds are story-telling elements. Crop excess; avoid overuse of blur. |
| **Content Separation** | Subjects face accompanying text. Never show subjects with backs to text. |

### Photography Categories

**People — Casual:** Everyday relaxation, sitting or leaning, daily clothing. Not lazy or unkempt.
**People — Creative:** Behind-the-scenes creation with tools and processes. Workspaces cluttered but organized.
**People — Professional:** Business settings with neat, organized spaces and business casual attire.

**Eye Contact:** Candid, unposed. Direct camera contact acceptable ONLY when conveying support/assistance.
**Collaboration:** Multiple subjects should work together or enjoy each other's company. Avoid isolated individuals.

**Abstract:** Emphasizes color, texture, emotion. Pair with black or white backgrounds. Only one abstract pairing can contain a person.

**Landscape:** Universally relatable places, not regionally identifiable. Top-down city views preferred over side-angle.

**Indoor Workspaces:** No people. Lived-in, natural, warm, inviting. Avoid sterile environments.

**Product:** Vibrant or neon colors that pop. Colors complement featured products. Technical objects relevant to product.

---

## 9. LAYOUT & SPACING

### Layout Tokens

| Token | Value |
|---|---|
| Max content width | 1600px |
| Container padding | 0 40px (horizontal) |
| Section padding | 80px (vertical, standard) |
| Section padding lg | 120px (vertical, hero/major) |
| Grid gap | 40px |
| Card padding | 32px |
| Nav height | 72px (sticky) |

### Spacing Scale (8px grid)

| Token | Value | Usage |
|---|---|---|
| sp-1 | 4px | Micro: icon-to-label |
| sp-2 | 8px | Stacked meta, inner padding |
| sp-3 | 16px | Paragraph spacing, inline gaps |
| sp-4 | 24px | Card inner gaps, form field spacing |
| sp-5 | 32px | Card padding, sub-group spacing |
| sp-6 | 40px | Grid gap, primary component gap |
| sp-7 | 64px | Intra-section spacing |
| sp-8 | 80px | Standard section vertical padding |
| sp-9 | 120px | Hero / major section padding |

### Responsive Breakpoints

| Name | Width |
|---|---|
| xs | < 480px (mobile portrait) |
| sm | 480px (mobile landscape) |
| md | 768px (tablet) |
| lg | 1024px (desktop sm) |
| xl | 1280px (desktop) |
| 2xl | 1600px (max content width) |

---

## 10. COMPONENT PATTERNS

### Buttons

Base: Gilroy Bold 16px, height 48px, padding 0 28px, border-radius 4px

| Variant | Background | Color | Border |
|---|---|---|---|
| btn-azure | #0073EC | #fff | none |
| btn-prince | #A644E5 | #fff | none |
| btn-turtle | #00CAAA | #071C26 | none |
| btn-midnight | #071C26 | #fff | none |
| btn-ghost-lt | transparent | #fff | 2px solid #fff |
| btn-ghost-dk | transparent | #071C26 | 2px solid #071C26 |

**States:** Hover: opacity 0.9, translateY(-1px). Active: translateY(0). Transition: all 0.15s ease.

**Sizes:** sm (36px/14px/0 16px), md (44px/15px/0 24px), lg (52px/16px/0 32px)

### Shadows

| Token | Value |
|---|---|
| shadow-card | 0 1px 4px rgba(0,0,0,.08) |
| shadow-card-hover | 0 8px 24px rgba(0,0,0,.12) |
| shadow-featured | 0 8px 32px rgba(0,115,236,.15) |
| shadow-nav | 0 2px 12px rgba(0,0,0,.08) |

### Border Radius

| Token | Value |
|---|---|
| radius-sm | 4px (buttons, inputs) |
| radius-md | 8px |
| radius-lg | 12px (cards) |
| radius-xl | 20px |
| radius-pill | 999px (badges) |

### Navigation
- 72px height, sticky top, white bg
- Shadow appears on scroll (shadow-nav)
- Logo: DreamHost wordmark + moon icon (left)
- Nav items: center/right — Gilroy Bold 15px, Abyss color
- CTA: btn-azure "Get Started" + "Sign In" text link (right)
- Mobile: hamburger -> full-screen overlay

### Hero (Dark)
- Background: Midnight (#071C26) or gradient to Abyss
- Padding: 120px vertical
- Layout: centered text OR 60/40 text + image split
- Eyebrow: Gilroy Bold 14px, Azure, uppercase, letter-spacing .1em
- H1: Gilroy ExtraBold 800, white, ~80-100px responsive
- Subtext: Gilroy Medium 20px, Cloudy (#AFBFC9), max-width 600px
- CTAs: btn-azure + btn-ghost-lt, gap 16px
- Trust bar: 3 stats inline, Galactic text, thin dividers

### Logo / Trust Bar
- Background: Off White or White
- Padding: 48px vertical
- Layout: flex row, space-around, 6-8 items
- Logos: muted opacity (0.5-0.65), grayscale filter, restored on hover
- Optional label: Gilroy Medium 14px Galactic, centered above

### Feature Grid (3-col)
- Background: White or Off White
- Grid: 3xN, gap 40px
- Card: White bg, 1px Smoke border, 12px radius, 32px padding
- Icon: 40x40, colored bg (Azure/Prince/Turtle at 10% opacity), 8px radius
- Title: H5 Bold, Abyss
- Body: Galactic, 500 16px/28px
- Hover: shadow-card-hover, translateY(-2px)

### Pricing Cards (3-col)
- Background: Off White
- Standard card: White bg, 1px Smoke border, 12px radius, 32px padding
- Plan name: H5 Bold Abyss
- Price: H3 Bold (Azure for featured, Abyss for others)
- Feature list: Turtle checkmarks + Medium 14px Abyss
- CTA: btn-azure full-width
- Featured card (center): 2px Azure border, shadow-featured, "Most Popular" pill badge (Azure bg, White text, xs font, radius-pill), elevated 24px above flanking cards

### Testimonials
- Background: Midnight or White
- Quote: Gilroy Medium 24px/40px
- Opening quote mark in Azure, 64px
- Attribution: Name Bold 16px, Role Medium 14px Galactic
- Avatar: 40px circle
- Layout: centered, max-width 720px

### CTA Banner
- Background: Azure (#0073EC) or Prince (#A644E5)
- H2/H3: White, Gilroy Bold
- Subtext: White at 70% opacity, Medium 20px
- CTAs on Azure bg: btn-midnight + btn-ghost-lt
- CTAs on Prince bg: btn-azure + btn-ghost-lt

### Footer
- Background: Midnight (#071C26)
- Grid: 5-col (logo col + 4 link groups)
- Logo col: white wordmark, 2-line tagline (Galactic), social icons
- Link groups: Hosting | Websites | Domains | Company
- Links: Gilroy Medium 14px, Metal default, White on hover
- Bottom: legal copy (Galactic 12px) | Privacy/Terms/Cookie links
- Border-top: 1px Metal
- Padding: 80px top, 40px bottom

---

## 11. HOMEPAGE PATTERNS (Live Site Analysis)

### Section Flow (dreamhost.com)
The homepage uses 14+ sections with dramatic black/white alternation:
1. Hero (white) — AI builder headline + product mockup
2. Domain search (off-white) — search input + TLD pricing
3. Latest deals (mixed) — 4-col promo grid
4. Why DreamHost (white) — 2x2 feature grid + landscape image
5. Flash sale (black + starry bg) — large promo with % cards
6. Hosting services (black + gradient blob) — product cards
7. Plan comparison (white) — expandable table
8. CDN (light blue gradient) — animated visualization
9. AI Builder (black) — accordion + video
10. Differentiators (white) — employee photos + 6-item grid
11. Pro services (black + image overlay) — 2x2 service grid
12. FAQ (black) — accordion
13. Support (white) — 3 channel cards
14. Footer (black)

### Key Visual Patterns
- **High contrast rhythm**: Aggressive alternation between white and black sections
- **Black sections use imagery**: Starry skies, landscape photos, gradient blobs — never plain black
- **Card radius**: ~22px on product cards (larger than 12px in design system docs)
- **Hover effects**: Subtle translateY(-1px to -4px) and scale(1.03) on cards/buttons
- **No parallax**: Clean section-by-section scroll
- **No visible `<hr>` dividers**: Sections separated by background color alternation + generous spacing
- **Progressive disclosure**: Expandable tables, accordion FAQs, "View more" toggles
- **Trust signals**: Trustpilot badge, employee ownership, uptime guarantee, 24/7 support

---

## 12. ASSETS AVAILABLE

| Asset Type | Formats | Notes |
|---|---|---|
| Primary Logo (Light/Dark) | SVG, PNG | Main logo for all uses |
| Monochrome Logo (Light/Dark) | SVG, PNG | Budget materials, print |
| Logo Mark — 4 variants | SVG, PNG | Moon symbol only |
| Product Icons (26) | SVG | Downloadable bundle |
| Standard Icons | Font Awesome Regular | Via font file or design team |
| Mascot — Original (7 poses) | PNG, EPS | Internal use only |
| Mascot — Ninja (6 poses) | PNG, EPS | Internal use only |
| Mascot — Alternative (10 poses) | PNG, EPS | Internal use only |
| Illustrations | Figma source | Recolor to brand palette |
| Brand Value Icons (8) | SVG | Icon + typography versions |

---

## 13. DESIGN SYSTEM SITEMAP

All pages at https://dreamhost.design/:

| Page | URL |
|---|---|
| Home | https://dreamhost.design/ |
| Principles | https://dreamhost.design/principles/ |
| Colors | https://dreamhost.design/colors/ |
| Product Iconography | https://dreamhost.design/iconography/product/ |
| Standard Iconography | https://dreamhost.design/iconography/standard/ |
| Illustrations | https://dreamhost.design/illustrations/ |
| Logos | https://dreamhost.design/logos/ |
| Mascot | https://dreamhost.design/mascot/ |
| Photography | https://dreamhost.design/photography/ |
| Marketing Typography | https://dreamhost.design/typography/marketing/ |
| Product Typography | https://dreamhost.design/typography/product/ |

---

## 14. DIFFERENCES: OFFICIAL DESIGN SYSTEM vs. OUR IMPLEMENTATION

| Aspect | Official Design System | Our Free Tools Implementation |
|---|---|---|
| Galactic hex | `#677983` | `#7E939F` (lighter, for WCAG AA on dark BGs) |
| Marketing headings max | 122px (h1) | Constrained to tool UI sizes |
| Product body font | Proxima Nova (Adobe) | Gilroy / system fonts |
| Product heading font | Ubuntu (Google) | Gilroy |
| Mascot usage | Internal only, never customer-facing | N/A (not used) |
| Icon library | Font Awesome Regular | Heroicons Outline |
| Standard icon min size | 50px | 24px (Heroicons) |
| Button radius | 4px | rounded-lg (8px) / rounded-2xl cards |
| Max content width | 1600px | max-w-6xl (1152px) |
| Azure on dark | Listed as passing (>3.0) | Fails WCAG AA 4.5:1 on oblivion (#111) |

---

*Last updated: March 2026*
