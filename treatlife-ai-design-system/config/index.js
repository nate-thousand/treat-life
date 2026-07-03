/**
 * Site configuration — composes design system inputs into a single config object.
 */
(function (global) {
  "use strict";

  function getStoredConceptId() {
    try {
      var stored = localStorage.getItem(global.TL_BRAND_DEFAULTS.storageKey);
      if (stored === "loyalSupply") return "treatKings";
      return global.TL_BRAND_CONCEPTS[stored]
        ? stored
        : global.TL_BRAND_DEFAULTS.conceptId;
    } catch (error) {
      return global.TL_BRAND_DEFAULTS.conceptId;
    }
  }

  function getBrand(conceptId) {
    var id = conceptId || getStoredConceptId();
    if (id === "loyalSupply") id = "treatKings";
    return global.TL_BRAND_CONCEPTS[id] || global.TL_BRAND_CONCEPTS[global.TL_BRAND_DEFAULTS.conceptId];
  }

  function getImages(conceptId) {
    var brand = getBrand(conceptId);
    var key = brand.assetKey || brand.id;
    return global.TL_IMAGE_SETS[key] || global.TL_IMAGE_SETS.treatLife;
  }

  function getProductImage(imageKey, conceptId) {
    var images = getImages(conceptId);
    return images.products[imageKey] || { src: "", alt: "" };
  }

  function getPackagingImage(imageKey, conceptId) {
    var images = getImages(conceptId);
    return images.packaging[imageKey] || { src: "", alt: "" };
  }

  function getProductById(productId) {
    var products = global.TL_PRODUCTS;
    for (var i = 0; i < products.length; i += 1) {
      if (products[i].id === productId) return products[i];
    }
    return null;
  }

  function getRelatedProducts(product) {
    if (!product || !product.relatedProductIds) return [];
    var related = [];
    for (var i = 0; i < product.relatedProductIds.length; i += 1) {
      var item = getProductById(product.relatedProductIds[i]);
      if (item) related.push(item);
    }
    return related;
  }

  function getProductFromQuery() {
    var params = new URLSearchParams(window.location.search);
    return getProductById(params.get("id"));
  }

  global.TL_CONFIG = {
    copy: global.TL_COPY,
    products: global.TL_PRODUCTS,
    imageSets: global.TL_IMAGE_SETS,
    brand: {
      concepts: global.TL_BRAND_CONCEPTS,
      defaults: global.TL_BRAND_DEFAULTS,
      getActive: getBrand
    },
    concepts: global.TL_BRAND_CONCEPTS,
    defaults: global.TL_BRAND_DEFAULTS,
    getBrand: getBrand,
    getImages: getImages,
    getStoredConceptId: getStoredConceptId,
    getProductImage: getProductImage,
    getPackagingImage: getPackagingImage,
    getProductById: getProductById,
    getRelatedProducts: getRelatedProducts,
    getProductFromQuery: getProductFromQuery
  };
})(window);
