# Treat Life Output Contract

Version: 1.1  
Applies to: AI agents, contributors, and generated web surfaces

**Hub:** `treatlife-ai-design-system/`  
**Scope:** `POC_SCOPE.md`

---

## 1. Project intent

Treat Life is a **proof-of-concept** for a premium lifestyle **dog treat** brand.

| In scope | Out of scope |
|----------|--------------|
| Static HTML/CSS/JS in design system hub | React, Next.js, build pipelines |
| Tokens + style guide | Shopify, cart, checkout |
| Concept copy | Final regulated product claims |
| Fake email capture (`main.js`) | Backend, database, analytics |

---

## 2. Source of truth (read order)

1. `sources/treatlife-content.md`
2. `sources/treatlife-brand-handoff.md`
3. `tokens/treatlife.tokens.json`
4. `theme/treatlife.theme.css`
5. `components/component-rules.md`
6. `pages/homepage.schema.json`
7. `../POC_SCOPE.md`

**Deploy output:** `treatlife-ai-design-system/index.html` (+ `styleguide.html`, `styles.css`, `main.js`)

---

## 3. Stack requirements

- Vanilla HTML/CSS/JS only
- One JS file: `main.js` (nav toggle if Bootstrap absent + fake drop form)
- No smooth scroll JS, scroll-spy, animations, libraries
- Dark surfaces only — use `--tl-*` tokens

### Token sync workflow

1. Edit `tokens/treatlife.tokens.json` first (source of truth)
2. Mirror values in `theme/treatlife.theme.css` as `--tl-*` custom properties
3. Use only `var(--tl-*)` in `styles.css` — no raw hex or rgba
4. Style guide swatches use `.sg-swatch-*` classes from theme — no inline hex
5. Run `prompts/audit-homepage.md` before shipping

**Asset drift:** Concept renders in `assets/` may contradict `sources/treatlife-content.md`. Content wins for UI copy. See `assets/README.md`.

---

## 4. Homepage structure

1. Announcement bar → Navbar → Hero → Proof strip → Products → Brand → Copy system → Drop → Footer

Balanced messaging: lifestyle headline, treats clear in subheadline + hero image.

---

## 5. Style guide requirements

File: `styleguide.html`

Must include: brand overview, target customer, core values, color tokens, typography, logo direction, photography direction, packaging principles, flavor collection, buttons, proof strip, product card, drop form, voice rules, approved taglines, approved names, forbidden language, claim review notes.

---

## 6. Link contract

No bare `href="#"`. Logo → `#top`. Social → instagram.com/treatlife, tiktok.com/@treatlife. Style guide → footer only.

---

## 7. Audit

Run `prompts/audit-homepage.md` before shipping.
