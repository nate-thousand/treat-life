# Brand Assets

Concept-specific photography lives in subfolders. The Concept Switcher loads the matching set at runtime.

## Folder structure

```
assets/
├── biggiebones/     # Biggie Bones Treat Co.
│   ├── _source/     # Original UUID renders (not wired to site)
│   └── *.png        # Standard-named active assets
├── treatlife/       # Treat Life
└── treatkings/      # Treat Kings
    └── _source/     # Full hero source for cropping
```

## Standard filenames (each concept folder)

| File | Use |
|------|-----|
| `hero-lifestyle.png` | Homepage hero |
| `flavor-pb-jams.png` | PB & The Jams product card + PDP |
| `flavor-berry-fresh.png` | Berry Fresh product card + PDP |
| `flavor-gold-standard.png` | Gold Standard product card + PDP |
| `brand-board.png` | Brand story section |
| `brand-board-unboxing.png` | Copy system Box card |
| `style-guide.png` | Copy system Brand card |

## Configuration

Image sets: `config/images.js`  
Resolved at runtime: `TL_CONFIG.getImages(conceptId)`

## Adding assets

1. Place renders in the concept folder using standard filenames above
2. Keep original source files in `_source/` if needed
3. Do not reference image paths in components — use `TL_CONFIG.getProductImage()` / `getPackagingImage()`

## Content lock

UI copy and flavor names come from `config/copy.js` and `config/products.js` — not from packaging art in renders.
