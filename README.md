# Treat Life

Premium lifestyle dog treat brand — configuration-driven brand POC and AI-first design system.

## Hub (source of truth)

```
treatlife-ai-design-system/
├── index.html + product.html + styleguide.html
├── config/ + js/             # Brand, copy, products, renderers
├── styles.css + main.js
├── tokens/ theme/ sources/ components/ pages/ prompts/
└── assets/{concept}/         # Per-brand photography
```

## Docs

- `ROADMAP.md` — phase plan and status
- `POC_SCOPE.md` — locked decisions and build rules
- `OUTPUT_CONTRACT.md` — AI output requirements

## Design system sync

Visual values flow in one direction:

```
tokens/treatlife.tokens.json  →  theme/treatlife.theme.css  →  styles.css (var(--tl-*) only)
```

Content: `config/copy.js` (live) · Reference: `sources/treatlife-content.md`

## Quick start

```bash
cd treatlife-ai-design-system
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

```bash
npx vercel --prod
```

Production: https://treatlife.vercel.app

## Brand concepts

Switch via the Concept dropdown on any page:

- **Biggie Bones Treat Co.**
- **Treat Life** (default)
- **Treat Kings**

## Archive

`_archive/v1/` — superseded website folder from earlier iteration.

## Status

Concept POC only. No real commerce, backend, or regulated claims.
