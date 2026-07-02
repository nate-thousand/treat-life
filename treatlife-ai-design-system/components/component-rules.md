# Treat Life Component Rules

Version: 1.0
Applies to: Web, Shopify, email, social templates

Read `sources/treatlife-content.md` for copy. Read `sources/treatlife-brand-handoff.md` for positioning. Use `tokens/treatlife.tokens.json` and `theme/treatlife.theme.css` for visual values.

**Visual sync:** Update JSON first → mirror in `theme/treatlife.theme.css` → use only `var(--tl-*)` in `styles.css`. No raw hex in layout CSS.

---

## Class Name Contract

Homepage and style guide implementations must use these exact class names. Do not invent parallel names for the same component.

| Component | Required root class | Required child classes |
|-----------|---------------------|------------------------|
| Announcement bar | `.announcement-bar` | — |
| Navbar | `.site-nav` | `.tl-logo`, `.tl-shield`, `.nav-toggle`, `.nav-menu`, `.nav-links`, `.btn.btn-outline-gold` |
| Hero | `.hero-section` | `.hero-grid`, `.eyebrow`, `.hero-title`, `.hero-rule`, `.hero-copy`, `.hero-actions`, `.hero-image-card` |
| Proof strip | `.value-strip` | `.value-grid`, `.value-item`, `.value-icon` |
| Products section | `.product-section.section-pad` | `.section-header`, `.product-grid` |
| Product card | `.product-card` + flavor modifier | `.product-accent`, `.product-pack.product-pack-photo`, `.product-body`, `.accent-label`, `.btn.btn-card` |
| Product flavor modifiers | — | `.product-pb`, `.product-berry`, `.product-gold` |
| Brand section | `.story-section.section-pad` | `.story-grid`, `.story-copy`, `.brand-image-card` |
| Copy system | `.copy-system.section-pad` | `.copy-grid`, `.copy-card`, `.copy-card-featured`, `.copy-label`, `.copy-card-image` |
| Drop panel | `.drop-section` | `.drop-panel`, `.drop-form`, `.form-control`, `.drop-success` |
| Footer | `.site-footer` | `.footer-grid`, `.footer-logo`, `.footer-links`, `.social-links`, `.footer-note` |
| Buttons | `.btn` + variant | `.btn-gold`, `.btn-ghost`, `.btn-outline-gold`, `.btn-lg`, `.btn-card` |
| Utilities | — | `.container`, `.section-pad`, `.text-center`, `.eyebrow`, `.sr-only` |

**Flavor modifier mapping:**

| Flavor | Card class | Anchor ID |
|--------|------------|-----------|
| PB & The Jams | `.product-pb` | `#flavor-pb-jams` |
| Berry Fresh | `.product-berry` | `#flavor-berry-fresh` |
| Gold Standard | `.product-gold` | `#flavor-gold-standard` |

**Style guide page:** Root body class `.sg-page`. Swatches use `.sg-swatch-color` + `.sg-swatch-*` classes from theme — never inline hex.

**Do not:** Rename `.product-card` to `.flavor-card`, `.value-strip` to `.proof-bar`, or add flavor-specific button classes outside the modifier system.

---

## Global Rules

- Dark surfaces only. No white background sections.
- Black + gold is the primary system. Flavor accents are secondary and scoped to product contexts.
- Typography is confident and uppercase for display. Body copy stays short and direct.
- No cartoon dogs, paw puns, farmhouse aesthetics, or pet-aisle clichés.
- Buttons are square-cornered, uppercase, and bold.
- Use concept language only. Do not publish final regulated product claims.

---

## Announcement Bar

**Purpose:** Single-line brand proof at the top of every page.

| Property | Value |
|----------|-------|
| Copy | `Human Grade. Dog Approved.` |
| Background | Gold gradient (`--tl-gradient-announcement`) |
| Text | Black, uppercase, wide letter-spacing |
| Height | Compact — one line only |

**Do not:** Add links, carousels, or secondary messages.

---

## Navbar

**Purpose:** Primary navigation and drop CTA.

| Element | Rule |
|---------|------|
| Logo | `Treat Life` with optional shield mark |
| Links | Treats, Brand, Ingredients, Drop |
| CTA | `Join the Drop` — outline gold button |
| Behavior | Sticky, dark translucent background, gold border bottom |

**Do not:** Use "Shop", "Our Story", or more than four nav items.

---

## Hero

**Purpose:** Brand statement and primary conversion entry.

| Element | Copy / rule |
|---------|-------------|
| Eyebrow | `Premium Dog Treats` |
| Headline | `Live the Treat Life.` |
| Subheadline | Human grade + good dogs + good taste (see content source) |
| Primary CTA | `Shop Treats` → `#treats` |
| Secondary CTA | `View Concept` → `#brand` |
| Image | Editorial packaging/lifestyle — not stock pet store |

**Layout:** Display headline left, image right on desktop. Gold rule divider between headline and copy.

---

## Proof Strip (Value Items)

**Purpose:** Four proof points — maps to `#ingredients`.

| # | Title | Copy |
|---|-------|------|
| 1 | Human Grade | Real ingredients. Real benefits. |
| 2 | Simple Ingredient Standard | No junky fillers. No unnecessary extras. No compromises. |
| 3 | Dog Approved | Crafted for dogs. Designed for modern homes. |
| 4 | Premium Batch Standard | Built for quality, consistency, and strong shelf presence. |

**Visual:** 4-column grid on desktop, 2×2 on mobile. Gold titles, muted body. Icon optional — geometric only.

**Do not:** Use unverified claims like "Made in USA" or "No Artificial Anything" unless legally approved.

---

## Product Card

**Purpose:** Launch flavor presentation.

| Element | Rule |
|---------|------|
| Accent bar | Top stripe in flavor color |
| Pack mock | Brand name, flavor name (script), flavor profile, "Human Grade Dog Treats" |
| Accent label | e.g. `Dusty Pink Accent` |
| CTA | `View Flavor` — full-width, flavor-colored button |

**Flavor token mapping:**

| Flavor | Token | Hex |
|--------|-------|-----|
| PB & The Jams | `--tl-pink` | `#a94a64` |
| Berry Fresh | `--tl-berry` | `#8b1f24` |
| Gold Standard | `--tl-mustard` | `#b88b2e` |

**Do not:** Use deprecated name `Golden Flow`.

---

## Brand Section

**Purpose:** Positioning narrative + brand board image.

| Element | Copy |
|---------|------|
| Eyebrow | `The Brand` |
| Headline | `Designed for People With Good Taste.` |
| Body | Counter-not-pantry positioning (see content source) |
| Image | Brand board with packaging and merch |

---

## Copy System Cards

**Purpose:** Show packaging copy hierarchy.

Three equal cards: **Front**, **Box**, **Box** (featured), **Brand**.

Center card (`Good Dogs. Good Treats. Good Taste.`) may receive elevated border/glow treatment.

---

## Drop Panel (Email Capture)

**Purpose:** Launch list signup.

| Element | Copy |
|---------|------|
| Eyebrow | `Limited Drops` |
| Headline | `First batch. Founding customers.` |
| Input placeholder | `Email address` |
| Button | `Notify Me` |
| Success | `You are on the list. Welcome to the Treat Life.` |

**Visual:** Centered panel, gold border, dark gradient fill.

---

## Footer

| Column | Content |
|--------|---------|
| Brand | Logo + `Live the Treat Life.` |
| Nav | Treats, Brand, Ingredients, Drop |
| Social | Instagram, TikTok, Contact |

Include concept disclaimer when shipping pre-launch surfaces.

---

## Voice Checklist

Before shipping any component copy:

- [ ] Short, confident sentences
- [ ] No woof/bark/pawsome language
- [ ] Flavor names match naming lock
- [ ] Taglines from approved list in content source
- [ ] No final regulated claims without legal review
