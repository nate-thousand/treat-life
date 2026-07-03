# Treat Life AI Design System

**Source of truth** for brand, tokens, content, configuration, and deployable web surfaces.

## Structure

```
treatlife-ai-design-system/
├── index.html              # Homepage shell
├── product.html            # Product detail shell
├── styleguide.html         # Foundations + components + architecture
├── styles.css              # Layout + components (imports theme/)
├── main.js                 # Nav, forms, concept switcher
├── config/
│   ├── brand.concepts.js   # Brand identity (3 concepts)
│   ├── copy.js             # Marketing copy
│   ├── products.js         # Product + PDP data
│   ├── images.js           # Per-concept image sets
│   └── index.js            # TL_CONFIG composer
├── js/
│   ├── components.js       # Reusable section renderers
│   └── render.js           # DOM binding
├── assets/
│   ├── biggiebones/        # Biggie Bones concept photography
│   ├── treatlife/          # Treat Life concept photography
│   └── treatkings/         # Treat Kings concept photography
├── tokens/treatlife.tokens.json
├── theme/treatlife.theme.css
├── sources/                # Content + brand reference docs
├── components/component-rules.md
├── pages/homepage.schema.json
└── prompts/
```

## View locally

```bash
open index.html
# or
python3 -m http.server 8080
```

Use the **Concept** switcher (bottom-right) to preview Biggie Bones, Treat Life, or Treat Kings.

## Product detail

```
product.html?id=flavor-pb-jams
product.html?id=flavor-berry-fresh
product.html?id=flavor-gold-standard
```

## Related docs

- `../ROADMAP.md` — phase plan
- `../POC_SCOPE.md` — locked decisions
- `../OUTPUT_CONTRACT.md` — AI output requirements

## Generate / audit

- Generate: `prompts/generate-homepage.md`
- Audit: `prompts/audit-homepage.md`

## Deploy

Vercel `outputDirectory` points here. See root `vercel.json`.
