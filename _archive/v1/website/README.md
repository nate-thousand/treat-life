# Treat Life Website (v1)

Vanilla HTML/CSS/JS promotional homepage. **This folder is the Vercel deploy target.**

## Files

```
v1/website/
├── index.html
├── styleguide.html
├── styles.css
├── main.js
├── theme/treatlife.theme.css
└── assets/
```

## View locally

```bash
open index.html
```

## Theme sync

`theme/treatlife.theme.css` is a deploy copy. Source of truth:

`treatlife-ai-design-system/theme/treatlife.theme.css`

Update both when changing tokens.

## JavaScript

`main.js` handles mobile nav (when Bootstrap is absent) and fake drop-form submit. Replace form handler when wiring Formspree, ConvertKit, or Shopify.
