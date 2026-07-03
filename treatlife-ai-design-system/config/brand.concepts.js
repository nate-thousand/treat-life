/**
 * Brand configuration — identity layer swappable via Concept Switcher.
 * Each concept includes its own asset folder under assets/.
 */
(function (global) {
  "use strict";

  var PAGE_TITLE_SUFFIX = " | Premium Human Grade Dog Treats";
  var PLACEHOLDER_FAVICON =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0d0d0d"/><circle cx="16" cy="16" r="6" fill="#d4af37"/></svg>'
    );

  global.TL_BRAND_CONCEPTS = {
    biggieBones: {
      id: "biggieBones",
      name: "Biggie Bones Treat Co.",
      tagline: "Living That Treat Life.",
      assetKey: "biggieBones",
      logo: { type: "text", shield: "●" },
      favicon: PLACEHOLDER_FAVICON,
      browserTitle: "Biggie Bones Treat Co." + PAGE_TITLE_SUFFIX,
      footerBrandName: "Biggie Bones Treat Co.",
      socialPreviewImage: "assets/biggiebones/hero-lifestyle.png",
      copyright: "© Biggie Bones Treat Co. All rights reserved."
    },
    treatLife: {
      id: "treatLife",
      name: "Treat Life",
      tagline: "Reward Better.",
      assetKey: "treatLife",
      logo: { type: "text", shield: "●" },
      favicon: PLACEHOLDER_FAVICON,
      browserTitle: "Treat Life" + PAGE_TITLE_SUFFIX,
      footerBrandName: "Treat Life",
      socialPreviewImage: "assets/treatlife/hero-lifestyle.png",
      copyright: "© Treat Life. All rights reserved."
    },
    treatKings: {
      id: "treatKings",
      name: "Treat Kings",
      tagline: "Built for Good Dogs.",
      assetKey: "treatKings",
      logo: { type: "text", shield: "●" },
      favicon: PLACEHOLDER_FAVICON,
      browserTitle: "Treat Kings" + PAGE_TITLE_SUFFIX,
      footerBrandName: "Treat Kings",
      socialPreviewImage: "assets/treatkings/hero-lifestyle.png",
      copyright: "© Treat Kings. All rights reserved."
    }
  };

  global.TL_BRAND_DEFAULTS = {
    conceptId: "treatLife",
    storageKey: "tl-brand-concept",
    pageTitleSuffix: PAGE_TITLE_SUFFIX
  };
})(window);
