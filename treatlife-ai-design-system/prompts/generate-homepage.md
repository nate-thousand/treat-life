# Generate Treat Life Homepage

You are building the Treat Life promotional homepage — a premium lifestyle dog treat brand.

## Required inputs

1. `sources/treatlife-content.md`
2. `sources/treatlife-brand-handoff.md`
3. `tokens/treatlife.tokens.json`
4. `theme/treatlife.theme.css`
5. `components/component-rules.md`
6. `pages/homepage.schema.json`
7. `../POC_SCOPE.md`
8. `../OUTPUT_CONTRACT.md`

## Output location

Write to **`treatlife-ai-design-system/`** (the hub):

- `index.html` — vanilla HTML, no frameworks
- `styles.css` — imports `theme/treatlife.theme.css`
- `main.js` — nav toggle + fake drop form only
- Update `styleguide.html` when foundations or components change

## Hard constraints

See `../POC_SCOPE.md` for locked decisions and forbidden additions.

### Visual
- Dark theme only. Black + gold + flavor accents on product cards.
- Bebas Neue (display), Inter (body).

### Copy
- Exact copy from `treatlife-content.md`
- Flavors: PB & The Jams, Berry Fresh, Gold Standard
- Never: Golden Flow

### Structure
Announcement → Nav → Hero → Proof (`#ingredients`) → Treats (`#treats`) → Brand → Copy system → Drop → Footer

### Links
No bare `#`. See OUTPUT_CONTRACT.md.

## After generation

Self-check against `prompts/audit-homepage.md`.
