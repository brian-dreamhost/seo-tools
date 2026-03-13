# Usefulness Audit: SEO Tools

**Audit Date:** 2026-03-02
**Auditor:** Usefulness Agent (Claude Opus 4.6)
**Standard:** Would a power user choose this over a dedicated SaaS product?
**Core Test:** Could a user get the same output by typing into a Word doc or ChatGPT prompt?

---

## Schema Markup Generator

**Classification:** REAL TOOL
**Overall Score:** 4.0/5

| Dimension | Score | Notes |
|---|---|---|
| Does Real Work | 4/5 | Generates valid JSON-LD from structured form input with proper schema.org nesting, conditional logic, and data type coercion. This is genuine computation — building correct nested JSON-LD with @context, @type hierarchies, ISO duration strings, and proper array handling is tedious and error-prone by hand. However, no external validation (schema.org API, Google Rich Results API) is integrated. |
| Practical | 5/5 | Covers 15 schema types including all the most common ones (LocalBusiness, Organization, Article, FAQPage, Product, HowTo, Event, Recipe, Video, JobPosting, etc.). Handles real edge cases: mixed attendance mode events (online + offline locations), salary ranges for job postings, opening hours with multi-day spans, conditional fields based on selections. |
| Fully Featured | 4/5 | Copy code, download JSON, syntax-highlighted output, rich result previews for 8 schema types, live preview pane, mobile preview drawer, proper form validation with scroll-to-error. Missing: no URL fetch to auto-populate fields from existing page metadata, no batch generation, no "validate against Google" integration, no WordPress/Shopify plugin-specific install instructions. |
| Saves Time | 4/5 | Replaces manual JSON-LD writing, which is genuinely painful. The form-to-JSON pipeline with live preview eliminates the back-and-forth of editing raw JSON. However, it does not replace needing to go to Google Rich Results Test separately — a direct validation integration would save another manual step. |
| Clear UX | 5/5 | Excellent three-screen flow: Select type -> Fill form -> Export code. Split-pane editor with sticky live preview on desktop. Mobile gets a bottom drawer for preview. Primary/optional field separation with collapsible section. Clear "Finish & Export" CTA. Back navigation at every step. Syntax highlighting with color-coded keys, values, numbers, and URLs. |
| Instructive | 4/5 | Every field has a tooltip with concrete examples (e.g., "Your official business name as it appears on signage and legal documents. Example: 'Sunrise Bakery'"). Required fields are marked. Character limits shown on relevant fields. Rich Result Preview tab shows approximate SERP appearance. Output page includes 4-step installation instructions and links to validators. Missing: no inline guidance explaining WHY certain fields matter for SEO (e.g., "Google uses aggregateRating to show star snippets"). |
| Trustworthy | 4/5 | Follows current schema.org specs. Uses correct @type nesting, proper URL prefixes for schema.org enums (e.g., `https://schema.org/InStock`). ISO 8601 duration format for time fields. Output includes disclaimer about rich results not being guaranteed. Links to schema.org reference and Google Rich Results Test. Dev mode "Fill Test Data" button is still present in production — should be removed. |

### Key Issues

1. **Dev mode artifacts in production**: Both `dummyData.js` import and "Fill Test Data" buttons are wrapped in DEV MODE comments but are still shipped. These should be behind an environment variable or removed entirely for the production build.

2. **No external validation**: The tool generates JSON-LD but never validates it against schema.org or Google's API. A user must manually copy the output and paste it into Google Rich Results Test. This is a missed opportunity — the tool could validate inline and flag warnings/errors before the user leaves.

3. **No URL-based auto-populate**: Power users managing existing pages would benefit from entering a URL and having the tool fetch existing schema markup, OG tags, or page metadata to pre-fill the form. This would transform the tool from "generate new markup" to "audit and improve existing markup."

4. **No `@id` or cross-referencing**: Advanced schema usage requires `@id` properties for entity linking. The generator does not support this, which limits usefulness for sites with complex schema graphs.

5. **Missing some Google-recommended properties**: For example, Article schema does not include `isAccessibleForFree`, Product schema does not include `hasMerchantReturnPolicy` (now recommended), and JobPosting does not include `directApply`.

6. **No multi-schema generation**: Users often need multiple schema blocks on one page (e.g., Organization + WebSite + BreadcrumbList). The tool only generates one at a time with no way to combine them.

### Recommended Upgrades (prioritized)

1. **Add inline schema validation** (high impact, medium effort): Use the schema.org validation endpoint or Google's Rich Results API to validate the generated JSON-LD before export. Show errors/warnings inline with field-level feedback. This single feature would make it dramatically more useful than manual JSON-LD writing.

2. **Remove dev mode code from production** (high impact, low effort): Strip the "Fill Test Data" button and dummy data imports. Use Vite's `import.meta.env.DEV` conditional or remove entirely.

3. **Add URL fetch to auto-populate** (high impact, high effort): Let users enter a page URL and extract existing structured data (JSON-LD, Microdata, RDFa) and metadata (title, description, OG tags) to pre-fill the form. This transforms the tool from "create new" to "audit and improve existing," which is the more common power-user workflow.

4. **Support multi-schema output** (medium impact, medium effort): Allow users to generate multiple schema blocks and combine them into a single `<script>` tag with a `@graph` array. This is how most real-world implementations work.

5. **Add Google-recommended property warnings** (medium impact, low effort): When a user skips Google-recommended (but not required) properties, show a yellow warning hint like "Google recommends including aggregateRating for Product rich results."

6. **Add `@id` support for entity linking** (low impact, medium effort): Allow advanced users to set `@id` values and reference other entities, enabling proper schema graphs.

---

## SERP Preview Tool

**Classification:** BORDERLINE
**Overall Score:** 3.4/5

| Dimension | Score | Notes |
|---|---|---|
| Does Real Work | 2/5 | This is fundamentally a WYSIWYG previewer — the user manually types title, description, URL, and OG image, and the tool renders mock previews. The pixel-width truncation using Canvas API is genuine computation (binary search for truncation point matching Google's actual rendering), and the rich result feature toggles add value. But the core workflow is: type text in, see formatted text out. No URL fetch, no live metadata extraction, no validation against Google's actual rendering engine. |
| Practical | 3/5 | Shows Google Desktop, Google Mobile, Facebook, and Twitter/X previews — the four most important. Rich result feature toggles (Product, Reviews, Sitelinks, FAQ, Breadcrumbs, Date, Video) add genuine planning value. But the biggest miss is that it does not fetch a real URL's existing metadata. A user who already has a published page must manually re-type their title, description, and URL instead of just pasting the URL and seeing the preview instantly. |
| Fully Featured | 4/5 | Four preview tabs, seven rich result feature types, character count with status indicators (optimal/warning/over), meta tag export with copy button, proper HTML escaping in exports. The pixel-width measurement uses Canvas API to match Google's actual rendering width. Missing: no Bing preview, no LinkedIn preview, no favicon upload, no side-by-side A/B comparison mode. |
| Saves Time | 2/5 | For the "planning a new page" use case, it provides modest value — you can see character limits and truncation before publishing. But competing free tools (e.g., Mangools SERP Simulator, Portent SERP Preview, Sistrix SERP Snippet Generator) all do this AND many also fetch live URLs. The biggest time-saver would be URL fetch — paste a URL, see exactly how it currently appears, then tweak. Without that, users are doing double data entry. |
| Clear UX | 5/5 | Very clean layout: metadata form at top, rich result features in collapsible toggles, preview tabs below, export section at bottom. Character counts with color-coded progress bars. Toggle switches for each rich result feature with inline configuration. Empty states with helpful placeholder text. Desktop/Mobile preview containers accurately sized. |
| Instructive | 3/5 | Character count shows optimal ranges with status labels ("Optimal," "Over limit," "Too short"). Footer links to Google Snippet Guide and Open Graph Protocol. But there is no explanation of WHY the limits exist, no tips on writing better titles/descriptions for CTR, no context on which rich result features require which schema types to actually work, and no guidance on OG image dimensions. |
| Trustworthy | 4/5 | Pixel-width truncation matches Google's actual rendering (uses 20px and 14px Arial with correct max widths). Character limits follow current Google guidelines. Facebook and Twitter previews use correct card formats. Star rating rendering is accurate with partial fill support. Disclaimer note: "approximate preview — actual appearance may vary." Minor issue: Google Mobile preview does not show rich result features (only Desktop does). |

### Key Issues

1. **No URL fetch — the #1 missing feature**: The tool requires users to manually type all metadata. The most common real-world use case is "how does my existing page look in search?" A URL fetch would instantly make this 3x more useful. The Open Graph Debugger tool in the Social Media category already does URL fetching — this tool should too.

2. **Fails the notepad test for basic use**: Without rich result features enabled, this tool is essentially four text inputs that render styled text. A user could get the same basic result from dozens of free SERP preview tools. The rich result feature toggles save it from being a pure notepad, but they are also manually configured rather than detected from actual page markup.

3. **Dev mode artifacts still present**: The `DUMMY_DATA` object and "Fill Test Data" button are still in production code, wrapped in DEV MODE comments.

4. **Google Mobile preview lacks rich result features**: The desktop preview shows all seven rich result types, but the mobile preview only shows basic title/description/URL. Since mobile search is the majority of Google traffic, this is a significant gap.

5. **No validation or scoring**: The tool shows character counts but does not score or grade the overall metadata quality. A "SERP Score" that evaluates title keyword placement, description CTA presence, URL readability, and schema completeness would add real analytical value.

6. **Rich result features are disconnected from schema**: The tool lets users toggle rich result features for preview purposes, but there is no connection to actually generating the schema markup needed to achieve those results. At minimum, it should warn "This requires FAQPage schema on your page" when FAQ is toggled, or better yet, generate the corresponding JSON-LD.

### Recommended Upgrades (prioritized)

1. **Add URL fetch and auto-populate** (critical, high effort): Allow users to paste a URL and automatically extract the page's `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:image`, existing JSON-LD, and any structured data. Parse and display what Google currently sees. This single feature transforms the tool from a BORDERLINE notepad into a genuine diagnostic tool. Use a Vercel serverless function as proxy to avoid CORS issues (same pattern as the GBP audit tool).

2. **Remove dev mode code** (high impact, low effort): Strip `DUMMY_DATA`, `fillTestData`, and the "Fill Test Data" button from the production build.

3. **Add rich results to mobile preview** (high impact, medium effort): Port the product, reviews, sitelinks, FAQ, breadcrumbs, date, and video rendering from `GoogleDesktopPreview` to `GoogleMobilePreview`. Mobile SERP is the majority of traffic.

4. **Add metadata quality scoring** (high impact, medium effort): Create a "SERP Score" panel that evaluates: title length (pixel-width based), description completeness, keyword presence in title, URL readability, OG image presence and dimensions, and schema coverage. Score 0-100 with actionable recommendations.

5. **Link rich result features to schema generation** (medium impact, medium effort): When a user enables a rich result feature (e.g., FAQ, Product), generate or link to the corresponding JSON-LD schema markup. This could integrate with the Schema Markup Generator tool — a "Generate Schema for This" button that opens the schema generator pre-filled.

6. **Add A/B comparison mode** (medium impact, medium effort): Let users compare two title/description variants side by side in the same preview format. Content teams routinely A/B test metadata for CTR — this would serve that workflow.

7. **Add LinkedIn preview** (low impact, low effort): LinkedIn is the most important social platform for B2B content sharing. Add a fifth preview tab with LinkedIn's card format.

---

## Cross-Tool Observations

### The SEO Category is Underdeveloped

With only 2 of 9 planned tools live, the SEO category is the weakest in the collection. The two live tools are solid but could both be elevated significantly by adding URL-based workflows (fetch existing page data, validate live, diagnose issues). The SEO audience is the most tool-savvy of all the categories — they will benchmark these tools against Ahrefs, Screaming Frog, and Google Search Console.

### Common Pattern: Manual Input Where URL Fetch Should Exist

Both tools share the same fundamental weakness: they require manual data entry where a URL fetch would be dramatically more useful. The GBP audit tool (cited in CLAUDE.md as the gold standard) takes a URL/identifier and goes and checks something real. Both SEO tools should follow that pattern:

- **Schema Markup Generator**: Enter a URL -> extract existing schema -> show what is missing -> generate the fix
- **SERP Preview Tool**: Enter a URL -> fetch actual metadata -> show how it currently appears -> let user tweak and see improvements

### Integration Opportunity

These two tools have obvious synergy. The SERP Preview Tool's rich result toggles are purely visual mockups — they should link to the Schema Markup Generator to actually create the schema needed to achieve those results. A "Generate Schema" button on each rich result feature that opens the schema generator pre-filled would create a powerful two-tool workflow.

---

## Summary Table

| Tool | Classification | Score | Top Priority |
|---|---|---|---|
| Schema Markup Generator | REAL TOOL | 4.0/5 | Add inline schema validation |
| SERP Preview Tool | BORDERLINE | 3.4/5 | Add URL fetch and auto-populate |
