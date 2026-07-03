/**
 * Concept-specific image sets — one folder per brand under assets/.
 * Resolved at runtime via TL_CONFIG.getImages(conceptId).
 */
(function (global) {
  "use strict";

  function imageSet(basePath, brandName) {
    return {
      hero: {
        src: basePath + "hero-lifestyle.png",
        alt: brandName + " premium packaging with dogs"
      },
      products: {
        "pb-jams": {
          src: basePath + "flavor-pb-jams.png",
          alt: brandName + " PB and The Jams packaging"
        },
        "berry-fresh": {
          src: basePath + "flavor-berry-fresh.png",
          alt: brandName + " Berry Fresh packaging"
        },
        "gold-standard": {
          src: basePath + "flavor-gold-standard.png",
          alt: brandName + " Gold Standard packaging"
        }
      },
      lifestyle: {
        hero: {
          src: basePath + "hero-lifestyle.png",
          alt: brandName + " hero lifestyle shot"
        }
      },
      packaging: {
        brandBoard: {
          src: basePath + "brand-board.png",
          alt: brandName + " brand board with packaging and merchandise"
        },
        unboxing: {
          src: basePath + "brand-board-unboxing.png",
          alt: brandName + " shipping box interior"
        },
        styleGuide: {
          src: basePath + "style-guide.png",
          alt: brandName + " brand style guide"
        },
        frontPanel: {
          src: basePath + "flavor-pb-jams.png",
          alt: brandName + " packaging front panel"
        }
      }
    };
  }

  global.TL_IMAGE_SETS = {
    biggieBones: imageSet("assets/biggiebones/", "Biggie Bones"),
    treatLife: imageSet("assets/treatlife/", "Treat Life"),
    treatKings: imageSet("assets/treatkings/", "Treat Kings")
  };
})(window);
