# Treat Life AI Design System

**Source of truth** for Treat Life brand, tokens, content, and deployable web surfaces.

## Structure

```
treatlife-ai-design-system/
├── index.html              # Homepage (deploy root)
├── styleguide.html         # Foundations + components + voice rules
├── styles.css              # Layout + components (imports theme/)
├── main.js                 # Nav toggle + fake drop form
├── assets/                     # Brand photography (see assets/README.md)
│   ├── hero-lifestyle.png
│   ├── flavor-pb-jams.png
│   ├── flavor-berry-fresh.png
│   ├── flavor-gold-standard.png
│   ├── brand-board.png
│   ├── brand-board-unboxing.png
│   └── style-guide.png
├── tokens/treatlife.tokens.json
├── theme/treatlife.theme.css
├── sources/                # Content + brand docs (single copy)
├── components/component-rules.md
├── pages/homepage.schema.json
└── prompts/
```

## View locally

```bash
open index.html
```

## Related docs

- `../POC_SCOPE.md` — locked decisions
- `../OUTPUT_CONTRACT.md` — AI output rules

## Generate / audit

- Generate: `prompts/generate-homepage.md`
- Audit: `prompts/audit-homepage.md`

## Deploy

Vercel `outputDirectory` points here. See root `vercel.json`.
