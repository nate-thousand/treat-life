/**
 * Marketing copy — all user-facing strings outside brand identity.
 * Components consume copy.*; never hardcode strings in HTML or JS renderers.
 */
(function (global) {
  "use strict";

  global.TL_COPY = {
    meta: {
      description:
        "Treat Life is a premium lifestyle dog treat brand made with human grade ingredients, modern packaging, and collectible flavor drops for design conscious dog owners."
    },

    announcement: "Human Grade. Dog Approved.",

    nav: {
      links: [
        { label: "Treats", href: "#treats" },
        { label: "Brand", href: "#brand" },
        { label: "Ingredients", href: "#ingredients" },
        { label: "Drop", href: "#drop" }
      ],
      primaryAction: { label: "Join the Drop", href: "#drop" }
    },

    hero: {
      eyebrow: "Premium Dog Treats",
      subheadline:
        "Human grade ingredients. Designed for good dogs. Built for people with good taste.",
      primaryButton: { label: "Shop Treats", href: "#treats" },
      secondaryButton: { label: "View Concept", href: "#brand" }
    },

    proofStrip: {
      id: "ingredients",
      items: [
        {
          icon: "◎",
          title: "Human Grade",
          copy: "Real ingredients. Real benefits."
        },
        {
          icon: "◇",
          title: "Simple Ingredient Standard",
          copy: "No junky fillers. No unnecessary extras. No compromises."
        },
        {
          icon: "●",
          title: "Dog Approved",
          copy: "Crafted for dogs. Designed for modern homes."
        },
        {
          icon: "✚",
          title: "Premium Batch Standard",
          copy: "Built for quality, consistency, and strong shelf presence."
        }
      ]
    },

    products: {
      id: "treats",
      eyebrow: "Launch Collection",
      headline: "Three Flavors. Endless Loyalty.",
      intro:
        "A premium treat system with collectible packaging, flavor specific accents, and a dark shelf ready brand language."
    },

    about: {
      id: "brand",
      eyebrow: "The Brand",
      headline: "Designed for People With Good Taste.",
      body: [
        "Treat Life is a premium lifestyle dog brand for modern dog owners who care about ingredients, design, packaging, and the products they bring into their homes.",
        "The goal is simple: dog treats good enough to leave on the counter instead of hiding in the pantry."
      ]
    },

    copySystem: {
      cards: [
        {
          label: "Front",
          headline: "Treat Life",
          supportingCopy: "Human Grade Dog Treats",
          imageKey: "frontPanel",
          featured: false
        },
        {
          label: "Box",
          headline: "Good Dogs.<br>Good Treats.<br>Good Taste.",
          supportingCopy: "Packaging copy system",
          imageKey: "unboxing",
          featured: true
        },
        {
          label: "Brand",
          headline: "Reward Better.",
          supportingCopy: "Short. Confident. No pet aisle clichés.",
          imageKey: "styleGuide",
          featured: false
        }
      ]
    },

    faq: {
      items: []
    },

    cta: {
      id: "drop",
      eyebrow: "Limited Drops",
      headline: "First batch. Founding customers.",
      body: "Join the launch list for early access to the first Treat Life flavors, packaging, merchandise, and product drops.",
      inputPlaceholder: "Email address",
      inputLabel: "Email address",
      button: "Notify Me",
      successMessage: "You are on the list. Welcome to the Treat Life."
    },

    footer: {
      links: [
        { label: "Treats", href: "#treats" },
        { label: "Brand", href: "#brand" },
        { label: "Ingredients", href: "#ingredients" },
        { label: "Drop", href: "#drop" },
        { label: "Contact", href: "mailto:hello@treatlife.com" },
        { label: "Style Guide", href: "styleguide.html" }
      ],
      disclaimer: "Concept site. Product claims pending legal review."
    },

    productPage: {
      collectionLabel: "Collection",
      benefitsLabel: "Key Benefits",
      ingredientsLabel: "Ingredients",
      sizeLabel: "Size",
      quantityLabel: "Quantity",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      nutritionLabel: "Nutrition & Product Details",
      shippingNote:
        "Concept site — shipping calculated at checkout. Founding drop orders ship in premium Treat Life packaging.",
      relatedHeadline: "Related Products",
      cartSuccess: "Added to cart (concept preview only).",
      buyNowSuccess: "Buy Now is a concept preview only.",
      notFoundTitle: "Product Not Found",
      notFoundBody: "This flavor is not in the launch collection.",
      backToTreats: "Back to Treats"
    }
  };
})(window);
