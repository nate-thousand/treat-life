# Treat Life Assets

Brand photography and reference images for the POC site.

**Content lock:** `sources/treatlife-content.md` wins for all UI copy, flavor names, and claims. Assets are concept renders — do not transcribe visible packaging text into the site if it conflicts with the content source.

## Active assets

| File | Use |
|------|-----|
| `hero-lifestyle.png` | Homepage hero — golden retriever + french bulldog |
| `flavor-pb-jams.png` | PB & The Jams product + copy Front card |
| `flavor-berry-fresh.png` | Berry Fresh product photography |
| `flavor-gold-standard.png` | Gold Standard product photography |
| `brand-board.png` | Homepage brand section + style guide |
| `brand-board-unboxing.png` | Copy system Box card — shipping box interior |
| `style-guide.png` | Copy system Brand card + style guide |

## Archive

| File | Notes |
|------|-------|
| `hero-dogs-legacy.png` | Previous hero (lab + golden retriever on steps). Not used on site. |

## Asset vs content drift

These renders may show copy or names that differ from `sources/treatlife-content.md`. Use assets for mood and layout only — never copy conflicting text into UI.

| Asset | Visible in render | Content lock | Action |
|-------|-------------------|--------------|--------|
| `hero-lifestyle.png` | "Pumpkin Power" flavor label | Launch flavors: PB & The Jams, Berry Fresh, Gold Standard | Use as lifestyle hero only. Do not add Pumpkin Power to site copy. |
| `brand-board.png` | "Golden Flow" flavor name | Forbidden — use **Gold Standard** | Use for brand mood board. Never reference Golden Flow in UI. |
| `flavor-pb-jams.png` | "Made in USA", crown mark | Claims pending legal review; logo direction prefers shield + paw | Product photography only. Do not publish unapproved claims from packaging art. |
| `flavor-berry-fresh.png` | Packaging microcopy may vary | Berry Fresh naming + Deep Berry accent | Match flavor name from content source, not render text. |
| `flavor-gold-standard.png` | Packaging microcopy may vary | Gold Standard naming + Muted Mustard accent | Match flavor name from content source, not render text. |
| `brand-board-unboxing.png` | Box interior collateral copy | "Good Dogs. Good Treats. Good Taste." is approved | Featured copy card may echo approved tagline; ignore other render-only text. |
| `style-guide.png` | Reference board labels | Follow style guide + token names | Visual reference only. |

## Site usage

- `index.html` — hero, product cards, brand section, copy system cards
- `styleguide.html` — photography gallery, brand visual reference

## Naming convention

```
hero-{descriptor}.png
flavor-{slug}.png
brand-board.png
brand-board-unboxing.png
style-guide.png
```

## Notes

- Product shots are concept renders. Packaging copy may differ from `sources/treatlife-content.md`.
- Do not deploy until approved.
