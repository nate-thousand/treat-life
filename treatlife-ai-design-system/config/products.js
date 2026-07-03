/**
 * Product data — structured objects for Product Grid, Product Card, and Product Detail pages.
 * Values match the live homepage exactly; detail fields use concept language only.
 */
(function (global) {
  "use strict";

  global.TL_PRODUCTS = [
    {
      id: "flavor-pb-jams",
      name: "PB & The Jams",
      flavor: "Peanut Butter + Blueberry",
      description:
        "Peanut butter, blueberry, and hip hop energy. The playful flavor in the launch set.",
      imageKey: "pb-jams",
      category: "launch-collection",
      collection: "Launch Collection",
      cardClass: "product-pb",
      buttonLabel: "View Flavor",
      price: "$24.00",
      size: "8 oz (227 g)",
      benefits: [
        "Human grade ingredient standard",
        "Simple recipe — no unnecessary extras",
        "Collectible flavor-specific packaging",
        "Crafted for everyday rewards"
      ],
      ingredients: [
        "Peanut Butter",
        "Blueberry",
        "Rolled Oats",
        "Honey",
        "Coconut Oil"
      ],
      nutrition: {
        servingSize: "1 treat (concept)",
        calories: "—",
        crudeProtein: "—",
        crudeFat: "—",
        crudeFiber: "—",
        moisture: "—",
        note: "Concept values pending nutritional analysis and legal review."
      },
      relatedProductIds: ["flavor-berry-fresh", "flavor-gold-standard"]
    },
    {
      id: "flavor-berry-fresh",
      name: "Berry Fresh",
      flavor: "Strawberry + Banana",
      description:
        "Bright, clean, and energetic. A fruit forward everyday treat with premium visual impact.",
      imageKey: "berry-fresh",
      category: "launch-collection",
      collection: "Launch Collection",
      cardClass: "product-berry",
      buttonLabel: "View Flavor",
      price: "$24.00",
      size: "8 oz (227 g)",
      benefits: [
        "Human grade ingredient standard",
        "Bright fruit-forward profile",
        "Collectible flavor-specific packaging",
        "Built for daily treat rituals"
      ],
      ingredients: [
        "Strawberry",
        "Banana",
        "Rolled Oats",
        "Honey",
        "Coconut Oil"
      ],
      nutrition: {
        servingSize: "1 treat (concept)",
        calories: "—",
        crudeProtein: "—",
        crudeFat: "—",
        crudeFiber: "—",
        moisture: "—",
        note: "Concept values pending nutritional analysis and legal review."
      },
      relatedProductIds: ["flavor-pb-jams", "flavor-gold-standard"]
    },
    {
      id: "flavor-gold-standard",
      name: "Gold Standard",
      flavor: "Sweet Potato + Honey",
      description:
        "Sweet potato and honey with a classic premium profile. The flagship flavor.",
      imageKey: "gold-standard",
      category: "launch-collection",
      collection: "Launch Collection",
      cardClass: "product-gold",
      buttonLabel: "View Flavor",
      price: "$24.00",
      size: "8 oz (227 g)",
      benefits: [
        "Human grade ingredient standard",
        "Classic premium flavor profile",
        "Collectible flavor-specific packaging",
        "Flagship launch flavor"
      ],
      ingredients: [
        "Sweet Potato",
        "Honey",
        "Rolled Oats",
        "Peanut Butter",
        "Coconut Oil"
      ],
      nutrition: {
        servingSize: "1 treat (concept)",
        calories: "—",
        crudeProtein: "—",
        crudeFat: "—",
        crudeFiber: "—",
        moisture: "—",
        note: "Concept values pending nutritional analysis and legal review."
      },
      relatedProductIds: ["flavor-pb-jams", "flavor-berry-fresh"]
    }
  ];
})(window);
