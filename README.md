# Treat Life

Premium lifestyle dog treat brand — static POC site and AI-first design system.

## Hub (source of truth)

```
treatlife-ai-design-system/
├── index.html              # Homepage
├── styleguide.html         # Living design system
├── styles.css + main.js
├── tokens/ theme/ sources/ components/ pages/ prompts/
└── assets/
```

## Docs

- `POC_SCOPE.md` — locked decisions and build rules
- `OUTPUT_CONTRACT.md` — AI output requirements

## Design system sync

Visual values flow in one direction:

```
tokens/treatlife.tokens.json  →  theme/treatlife.theme.css  →  styles.css (var(--tl-*) only)
```

Copy lock: `sources/treatlife-content.md`. Asset drift warnings: `assets/README.md`.

## Quick start

```bash
open treatlife-ai-design-system/index.html
```

## Deploy

```bash
npx vercel --prod
```

Production: https://treatlife.vercel.app

## Archive

`_archive/v1/` — superseded website folder from earlier iteration.

## Status

Concept POC only. No commerce, backend, or regulated claims.
