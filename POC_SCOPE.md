# Treat Life POC Scope

## Locked Decisions

| Decision | Status |
|---|---|
| POC only, no overbuild | Locked |
| Vanilla HTML/CSS/JS | Locked |
| Design system = tokens + style guide | Locked |
| Hub = `treatlife-ai-design-system/` | Locked |
| Configuration-driven brand system | Locked |
| Three previewable brand concepts | Locked |
| Balanced homepage messaging | Locked |
| Style guide = foundations + components + architecture | Locked |
| Fake drop form + fake PDP actions | Locked |
| Archive `v1/` | Locked |
| Style guide link in footer | Locked |

## Build Rules

Keep this as a static proof of concept.

Do not add:

- Shopify
- real ecommerce logic
- real cart / checkout
- backend
- database
- user accounts
- animation systems
- scroll effects
- extra JavaScript libraries
- framework migration

## JavaScript Scope

Vanilla JS only. No libraries.

| File | Role |
|------|------|
| `config/*.js` | Brand, copy, products, images |
| `js/components.js` | Reusable section renderers |
| `js/render.js` | DOM binding from config |
| `main.js` | Nav toggle, fake forms, concept switcher |

Allowed behavior:

1. Mobile nav toggle
2. Fake drop form submit + success message
3. Fake PDP Add to Cart / Buy Now
4. Brand concept switcher (identity + assets)

Do not add:

- active nav link on scroll
- smooth scroll JavaScript
- animation logic
- analytics
- external form services yet

## Pages

| Page | File |
|------|------|
| Homepage | `index.html` |
| Product detail | `product.html?id={product-id}` |
| Style guide | `styleguide.html` |

## Repo Direction

Use `treatlife-ai-design-system/` as the source of truth.

Archive the old `v1/` folder.

The website is rendered from configuration + design system — not hardcoded markup.

See `ROADMAP.md` for phase plan.

## Style Guide

Static style guide at `treatlife-ai-design-system/styleguide.html`:

- Configuration architecture
- Brand overview
- Color tokens
- Typography rules
- Logo direction
- Photography direction
- Packaging principles
- Flavor collection
- Buttons, product cards, proof strip, drop form, PDP
- Voice rules, approved taglines, approved names
- Forbidden language, claim review notes

Footer link from homepage → style guide.

## Final Goal

A clean GitHub and Vercel ready proof of concept that shows:

- Multiple brand concepts on one design system
- A working homepage + product detail page
- A reusable AI-first design system structure
- A repeatable process for future branded websites
