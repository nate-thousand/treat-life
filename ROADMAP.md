# Treat Life Roadmap

Status: Configuration-driven brand POC (vanilla HTML/CSS/JS).

## Completed

- [x] Design system hub (`treatlife-ai-design-system/`)
- [x] Homepage + style guide + product detail page
- [x] Token pipeline (JSON → theme → CSS)
- [x] Configuration layer (`config/` + `js/render.js` + `js/components.js`)
- [x] Three brand concepts with Concept Switcher
- [x] Per-concept asset folders with live image swapping
- [x] Fake drop form + PDP purchase placeholders
- [x] Project docs synced (`ROADMAP.md`, `POC_SCOPE.md`, `OUTPUT_CONTRACT.md`, READMEs)
- [x] Audit prompt updated for current architecture
- [x] Biggie Bones source files organized into `_source/`
- [x] Treat Kings per-flavor product crops from hero

## Phase 1 — Polish

| Task | Status | Notes |
|------|--------|-------|
| Complete Treat Kings product photography | Done | Cropped from hero; replace with final renders when available |
| Organize Biggie Bones source files | Done | UUID renders in `biggiebones/_source/` |
| Sync project docs | Done | |
| Run homepage audit | Done | See audit summary below |
| Pick winning concept | **Pending** | Treat Life vs Biggie Bones vs Treat Kings |

### Audit summary (Jul 2026)

**Result: Pass** (POC scope)

| Category | Status |
|----------|--------|
| Configuration architecture | Pass |
| Naming lock | Pass |
| Copy accuracy | Pass (tagline is brand-driven, not copy.js) |
| Navigation | Pass |
| Visual system + tokens | Pass |
| Asset drift | Pass (content lock wins over renders) |
| Brand concepts | Pass |
| Product detail | Pass |
| Voice | Pass |
| Claims compliance | Pass (concept disclaimers present) |
| Structure + a11y | Pass |
| Style guide | Pass |

**Warnings (non-blocking):**
- Treat Kings product crops are hero extractions — swap for dedicated product photography when ready
- Marketing copy references "Treat Life" generically — concept-specific copy not yet split per brand
- `sources/treatlife-content.md` lists "Live the Treat Life." as primary tagline; `treatLife` concept uses "Reward Better." by design

## Phase 2 — Pre-launch

| Task | Status | Notes |
|------|--------|-------|
| Finalize packaging renders | Partial | Concept art in asset folders |
| Legal claim review | Pending | No regulated claims until approved |
| Manufacturer + samples | Out of repo | See brand handoff |
| Wire email capture | Deferred | Formspree / ConvertKit when ready |
| Concept-specific marketing copy | Optional | Copy shared today; only identity + images swap |

## Phase 3 — Commerce (post-POC)

Explicitly out of scope per `POC_SCOPE.md` until brand decision:

- Shopify (or headless commerce)
- Real cart / checkout
- Subscription
- Amazon / Etsy

## Phase 4 — Launch

From `sources/treatlife-brand-handoff.md`:

- Instagram / TikTok
- Founding customer drop
- PR boxes
- Retail + seasonal drops
- Merchandise (bowl, bandana, tote, etc.)

## Architecture

```
Design System (tokens/ · theme/ · styles.css)
        ↓
Brand Configuration (config/brand.concepts.js · assets/{concept}/)
        ↓
Marketing Content (config/copy.js)
        ↓
Product Data (config/products.js)
        ↓
Rendered Website (index.html · product.html · js/render.js)
```

## Key files

| File | Purpose |
|------|---------|
| `config/copy.js` | Marketing copy |
| `config/products.js` | Product + PDP data |
| `config/images.js` | Per-concept image sets |
| `config/brand.concepts.js` | Brand identity |
| `js/components.js` | Reusable section renderers |
| `js/render.js` | DOM binding |
| `main.js` | Nav, forms, concept switcher |

## Brand concepts

| ID | Name | Assets folder |
|----|------|---------------|
| `biggieBones` | Biggie Bones Treat Co. | `assets/biggiebones/` |
| `treatLife` | Treat Life | `assets/treatlife/` |
| `treatKings` | Treat Kings | `assets/treatkings/` |

Concept Switcher persists selection in `localStorage` (`tl-brand-concept`).
