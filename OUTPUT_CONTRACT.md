# Treat Life Output Contract

Version: 1.2  
Applies to: AI agents, contributors, and generated web surfaces

**Hub:** `treatlife-ai-design-system/`  
**Scope:** `POC_SCOPE.md`  
**Roadmap:** `ROADMAP.md`

---

## 1. Project intent

Treat Life is a **proof-of-concept** for a premium lifestyle **dog treat** brand platform.

| In scope | Out of scope |
|----------|--------------|
| Static HTML/CSS/JS in design system hub | React, Next.js, build pipelines |
| Tokens + style guide | Shopify, real cart, checkout |
| Configuration-driven copy + products | Final regulated product claims |
| Three brand concepts + asset switching | Backend, database, analytics |
| Fake email capture + fake PDP actions | External form services (yet) |

---

## 2. Source of truth (read order)

1. `config/copy.js` — live marketing copy
2. `config/products.js` — product + PDP data
3. `config/images.js` — per-concept image sets
4. `config/brand.concepts.js` — brand identity
5. `sources/treatlife-content.md` — copy reference / lock
6. `sources/treatlife-brand-handoff.md`
7. `tokens/treatlife.tokens.json`
8. `theme/treatlife.theme.css`
9. `components/component-rules.md`
10. `pages/homepage.schema.json`
11. `../POC_SCOPE.md`

**Deploy output:** `index.html`, `product.html`, `styleguide.html`, `styles.css`, `config/`, `js/`, `main.js`, `assets/`

---

## 3. Stack requirements

- Vanilla HTML/CSS/JS only
- Config layer: `config/*.js`
- Render layer: `js/render.js`, `js/components.js`
- Behavior: `main.js` (nav, forms, concept switcher)
- No smooth scroll JS, scroll-spy, animations, libraries
- Dark surfaces only — use `--tl-*` tokens

### Configuration architecture

```
Design System → Brand Config → Marketing Copy → Product Data → Rendered Website
```

Components consume `TL_CONFIG`. Never hardcode copy, product data, or image paths in HTML.

### Token sync workflow

1. Edit `tokens/treatlife.tokens.json` first (source of truth)
2. Mirror values in `theme/treatlife.theme.css` as `--tl-*` custom properties
3. Use only `var(--tl-*)` in `styles.css` — no raw hex or rgba
4. Style guide swatches use `.sg-swatch-*` classes from theme — no inline hex
5. Run `prompts/audit-homepage.md` before shipping

**Asset drift:** Concept renders in `assets/{concept}/` may contradict `sources/treatlife-content.md`. Content wins for UI copy. See `assets/README.md`.

---

## 4. Page structure

### Homepage

Announcement bar → Navbar → Hero → Proof strip → Products → Brand → Copy system → Drop → Footer

Hero headline = active brand tagline (`data-brand-tagline`). Subheadline and body copy from `config/copy.js`.

### Product detail

`product.html?id=flavor-pb-jams` — rendered from `config/products.js` + `config/copy.js`.

---

## 5. Style guide requirements

File: `styleguide.html`

Must include: configuration architecture, brand overview, target customer, core values, color tokens, typography, logo direction, photography direction, packaging principles, flavor collection, buttons, proof strip, product card, PDP, drop form, voice rules, approved taglines, approved names, forbidden language, claim review notes.

---

## 6. Link contract

No bare `href="#"`. Logo → `#top` (or `index.html` on PDP). Style guide → footer only. No external social links in footer.

---

## 7. Brand concepts

| ID | Name | Assets |
|----|------|--------|
| `biggieBones` | Biggie Bones Treat Co. | `assets/biggiebones/` |
| `treatLife` | Treat Life | `assets/treatlife/` |
| `treatKings` | Treat Kings | `assets/treatkings/` |

Concept Switcher swaps identity + photography. Marketing copy is shared unless extended per concept.

---

## 8. Audit

Run `prompts/audit-homepage.md` before shipping.
