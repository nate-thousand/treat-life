# Audit Treat Life Site

Review the Treat Life implementation against the design system. Report pass/fail per category with specific fixes.

## Inputs

- `index.html`, `product.html`, `styleguide.html`, `styles.css`, `main.js`
- `config/*.js`, `js/*.js`
- `sources/treatlife-content.md`
- `components/component-rules.md`
- `pages/homepage.schema.json`
- `tokens/treatlife.tokens.json`
- `assets/README.md`
- `../POC_SCOPE.md`, `../OUTPUT_CONTRACT.md`, `../ROADMAP.md`

## Audit checklist

### 1. Configuration architecture
- [ ] Copy lives in `config/copy.js` — not hardcoded in HTML
- [ ] Products live in `config/products.js`
- [ ] Images resolved via `TL_CONFIG.getImages(conceptId)`
- [ ] Brand identity in `config/brand.concepts.js`
- [ ] Components render from `js/components.js` — no duplicate product markup

### 2. Naming lock
- [ ] Flavors: PB & The Jams, Berry Fresh, Gold Standard
- [ ] No reference to "Golden Flow" in UI copy
- [ ] No non-launch flavors (e.g. Pumpkin Power) in UI copy

### 3. Copy accuracy
Compare `config/copy.js` to `sources/treatlife-content.md`:

| Section | Key copy |
|---------|----------|
| Announcement | Human Grade. Dog Approved. |
| Hero subheadline | Human grade ingredients… |
| Proof strip | 4 items with exact titles and copy |
| Products eyebrow | Launch Collection |
| Products headline | Three Flavors. Endless Loyalty. |
| Brand headline | Designed for People With Good Taste. |
| Drop headline | First batch. Founding customers. |

**Note:** Hero headline and footer tagline are brand-driven (`data-brand-tagline`), not in `copy.js`. Default concept `treatLife` uses tagline from `brand.concepts.js`.

Flag paraphrasing or missing sections.

### 4. Navigation
- [ ] Links: Treats, Brand, Ingredients, Drop (exact labels)
- [ ] CTA: Join the Drop
- [ ] Footer: Treats, Brand, Ingredients, Drop, Contact, Style Guide
- [ ] No external social links in footer
- [ ] PDP nav links use `index.html#` prefix

### 5. Visual system
- [ ] Dark backgrounds throughout — no white sections
- [ ] Gold for eyebrows, accents, primary CTAs
- [ ] Flavor accents via modifier classes: `.product-pb`, `.product-berry`, `.product-gold`
- [ ] Buttons: square corners, uppercase, bold
- [ ] Display headings use Bebas Neue stack

### 5b. Token sync
- [ ] `tokens/treatlife.tokens.json` is source of truth
- [ ] `theme/treatlife.theme.css` mirrors JSON as `--tl-*`
- [ ] `styles.css` uses only `var(--tl-*)` — no raw hex
- [ ] Style guide swatches use `.sg-swatch-*` — no inline hex

### 5c. Class name contract
Per `components/component-rules.md`:

- [ ] `.announcement-bar`, `.site-nav`, `.hero-section`, `.value-strip`
- [ ] `.product-card` + flavor modifiers
- [ ] `.pdp-section`, `.pdp-grid` on product detail
- [ ] `.drop-section`, `.site-footer`
- [ ] No parallel or renamed component classes

### 5d. Asset drift
- [ ] UI copy does not transcribe unapproved packaging claims (Made in USA, etc.)
- [ ] Flavor names match content lock, not render-only labels
- [ ] Per-concept folders: `assets/biggiebones/`, `assets/treatlife/`, `assets/treatkings/`
- [ ] Standard filenames in each concept folder (see `assets/README.md`)

### 6. Brand concepts
- [ ] Three concepts: biggieBones, treatLife, treatKings
- [ ] Concept Switcher updates name, tagline, title, favicon, images
- [ ] Selection persists in `localStorage` (`tl-brand-concept`)
- [ ] Legacy `loyalSupply` key maps to `treatKings`

### 7. Product detail page
- [ ] `product.html?id=flavor-pb-jams` renders all PDP fields from config
- [ ] Related products section shows sibling flavors
- [ ] Add to Cart / Buy Now are fake (concept preview only)
- [ ] 404 state for invalid product id

### 8. Voice
- [ ] No woof / bark / pawsome / fur baby language
- [ ] No design-system labels in UI (e.g. color accent names)
- [ ] Product cards show flavor profile, not accent color names

### 9. Claims compliance
- [ ] No unapproved regulated claims on public surfaces
- [ ] Concept disclaimer in footer
- [ ] Nutrition table uses placeholder values with review note

### 10. Structure & accessibility
- [ ] Homepage section order matches schema
- [ ] Anchor IDs: `#treats`, `#brand`, `#ingredients`, `#drop`, `#flavor-*`
- [ ] No bare `href="#"` links
- [ ] Images have alt text
- [ ] Email form has screen-reader label
- [ ] Responsive at mobile and desktop

### 11. Style guide
- [ ] Configuration architecture section present
- [ ] Component demos driven by config (product grid, proof strip)
- [ ] Photography gallery swaps with concept switcher
- [ ] Footer link from homepage

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

Be specific. Quote offending copy or CSS when flagging issues.
