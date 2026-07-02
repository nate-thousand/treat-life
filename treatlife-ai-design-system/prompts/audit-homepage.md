# Audit Treat Life Homepage

Review a Treat Life homepage implementation against the design system. Report pass/fail per category with specific fixes.

## Inputs

- Files in `treatlife-ai-design-system/` (`index.html`, `styleguide.html`, `styles.css`, `main.js`)
- `sources/treatlife-content.md`
- `components/component-rules.md`
- `pages/homepage.schema.json`
- `tokens/treatlife.tokens.json`
- `../POC_SCOPE.md`
- `../OUTPUT_CONTRACT.md`

## Audit checklist

### 1. Naming lock
- [ ] Brand is "Treat Life" (correct casing in UI)
- [ ] Flavors: PB & The Jams, Berry Fresh, Gold Standard
- [ ] No reference to "Golden Flow"

### 2. Copy accuracy
Compare each section to `treatlife-content.md`:

| Section | Required headline / key copy |
|---------|------------------------------|
| Announcement | Human Grade. Dog Approved. |
| Hero | Live the Treat Life. |
| Proof strip | 4 items with exact titles and copy |
| Products eyebrow | Launch Collection |
| Products headline | Three Flavors. Endless Loyalty. |
| Brand headline | Designed for People With Good Taste. |
| Drop headline | First batch. Founding customers. |
| Footer tagline | Live the Treat Life. |

Flag any drift, paraphrasing, or missing sections.

### 3. Navigation
- [ ] Links: Treats, Brand, Ingredients, Drop (exact labels)
- [ ] CTA: Join the Drop
- [ ] No deprecated labels (Shop, Our Story, Contact in primary nav)

### 4. Visual system
- [ ] Dark backgrounds throughout — no white sections
- [ ] Gold used for eyebrows, accents, primary CTAs
- [ ] Flavor accents scoped to correct products via modifier classes:
  - PB & The Jams → `.product-pb` / `--tl-pink`
  - Berry Fresh → `.product-berry` / `--tl-berry`
  - Gold Standard → `.product-gold` / `--tl-mustard`
- [ ] Buttons: square corners, uppercase, bold
- [ ] Display headings use Bebas Neue or approved display stack

### 4b. Token sync
- [ ] `tokens/treatlife.tokens.json` is the source of truth for visual values
- [ ] `theme/treatlife.theme.css` mirrors JSON as `--tl-*` custom properties
- [ ] `styles.css` uses only `var(--tl-*)` — no raw hex or rgba
- [ ] `styleguide.html` swatches use `.sg-swatch-*` classes — no inline hex

### 4c. Class name contract
Compare `index.html` against `components/component-rules.md` Class Name Contract:

- [ ] Announcement bar uses `.announcement-bar`
- [ ] Navbar uses `.site-nav`, `.tl-logo`, `.nav-toggle`, `.nav-menu`
- [ ] Hero uses `.hero-section`, `.hero-grid`, `.hero-title`, `.hero-actions`
- [ ] Proof strip uses `.value-strip`, `.value-item`
- [ ] Product cards use `.product-card` + `.product-pb` / `.product-berry` / `.product-gold`
- [ ] Drop panel uses `.drop-section`, `.drop-panel`, `.drop-form`
- [ ] Footer uses `.site-footer`, `.footer-note`
- [ ] No parallel or renamed component classes

### 4d. Asset drift
Compare visible asset content to `sources/treatlife-content.md` and `assets/README.md`:

- [ ] No "Golden Flow" in UI copy (forbidden)
- [ ] No "Pumpkin Power" or other non-launch flavors in UI copy
- [ ] No unapproved claims transcribed from packaging renders (e.g. Made in USA)
- [ ] Flavor names in UI match content lock, not render-only labels

### 5. Voice
- [ ] No woof / bark / pawsome / fur baby language
- [ ] No cartoon or farmhouse aesthetic cues
- [ ] Copy is short and confident, not playful-pet-store

### 6. Claims compliance
- [ ] No unapproved regulated claims (Made in USA, no artificial, etc.)
- [ ] Concept disclaimer present if pre-launch

### 7. Structure & accessibility
- [ ] Section order matches schema
- [ ] Anchor IDs: `#treats`, `#brand`, `#ingredients`, `#drop`, `#flavor-*`
- [ ] No bare `href="#"` links (see OUTPUT_CONTRACT.md)
- [ ] Images have alt text from content source
- [ ] Email form has label (visible or screen-reader)
- [ ] Responsive layout at mobile and desktop

### 8. SEO
- [ ] Title: `Treat Life | Premium Human Grade Dog Treats`
- [ ] Meta description matches content source

### 9. Style guide
- [ ] Brand overview, target customer, core values
- [ ] Color tokens, typography, logo direction
- [ ] Photography direction, packaging principles, flavor collection
- [ ] Components: buttons, proof strip, product card, drop form
- [ ] Voice rules, approved taglines, approved names, forbidden language, claim notes
- [ ] Footer link to style guide on homepage

## Output format

```markdown
## Audit: [pass | fail]

### Critical (must fix)
- ...

### Warnings (should fix)
- ...

### Passed
- ...

### Score: X/11 categories
```

Be specific. Quote the offending copy or CSS value when flagging issues.
