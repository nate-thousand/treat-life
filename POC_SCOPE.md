# Treat Life POC Scope

## Locked Decisions

| Decision | Status |
|---|---|
| POC only, no overbuild | Locked |
| Vanilla HTML/CSS/JS | Locked |
| Design system = tokens + style guide | Locked |
| Hub = `treatlife-ai-design-system/` | Locked |
| Balanced homepage messaging | Locked |
| Style guide = foundations + components | Locked |
| Fake drop form | Locked |
| Archive `v1/` | Locked |
| One `main.js` file | Locked |
| Style guide link in footer | Locked |

## Build Rules

Keep this as a static proof of concept.

Do not add:

- Shopify
- ecommerce logic
- cart
- checkout
- backend
- database
- user accounts
- animation systems
- scroll effects
- extra JavaScript libraries
- framework migration

## JavaScript Scope

Use one file: `main.js`

Allowed behavior only:

1. Mobile nav toggle support if needed
2. Fake drop form submit
3. Simple success message after submit

Do not add:

- active nav link on scroll
- smooth scroll JavaScript
- animation logic
- analytics
- external form services yet

## Repo Direction

Use `treatlife-ai-design-system/` as the source of truth.

Archive the old `v1/` folder.

The website is generated from or aligned with the design system — not the other way around.

## Style Guide

Static style guide at `treatlife-ai-design-system/styleguide.html`:

- Brand overview
- Color tokens
- Typography rules
- Logo direction
- Photography direction
- Packaging principles
- Flavor collection
- Buttons
- Product cards
- Proof strip
- Drop form
- Voice rules
- Approved taglines
- Approved product names
- Forbidden language
- Claim review notes

Footer link from homepage → style guide.

## Final Goal

A clean GitHub and Vercel ready proof of concept that shows:

- Treat Life as a premium brand concept
- A working one page website
- A reusable AI first design system structure
- A repeatable process for future branded websites
