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

# Treat Life

Premium lifestyle dog-treat brand — a configuration-driven brand proof of concept and AI-first design system.

> **Prototype status:** This repository is maintained as a portfolio case study. Its former public Vercel deployment is no longer available; run it locally using the instructions below.

## What it demonstrates

- A shared token and theme architecture
- Configuration-driven copy, products, and page rendering
- Multiple brand concepts expressed through one system
- An explicit output contract for AI-assisted design work

## Repository structure

```text
treatlife-ai-design-system/
├── index.html + product.html + styleguide.html
├── config/ + js/             # Brand, copy, products, renderers
├── styles.css + main.js
├── tokens/ theme/ sources/ components/ pages/ prompts/
└── assets/{concept}/         # Per-brand photography
```

## Documentation

- `ROADMAP.md` — phase plan and status
- `POC_SCOPE.md` — locked decisions and build rules
- `OUTPUT_CONTRACT.md` — AI output requirements

## Design-system flow

```text
tokens/treatlife.tokens.json → theme/treatlife.theme.css → styles.css
```

Live content is defined in `config/copy.js`; `sources/treatlife-content.md` is the editorial reference.

## Run locally

```bash
cd treatlife-ai-design-system
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Brand concepts

Use the Concept dropdown to switch among:

- **Biggie Bones Treat Co.**
- **Treat Life** (default)
- **Treat Kings**

## Archive

`_archive/v1/` contains the superseded first website iteration.

## Scope

Concept proof of concept only. No real commerce, backend, or regulated claims.
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

Production: https://treat-life.vercel.app

## Brand concepts

Switch via the Concept dropdown on any page:

- **Biggie Bones Treat Co.**
- **Treat Life** (default)
- **Treat Kings**

## Archive

`_archive/v1/` — superseded website folder from earlier iteration.

## Status

Concept POC only. No real commerce, backend, or regulated claims.

