/**
 * Reusable homepage section components — single markup source for index + style guide.
 * All copy, product data, and images come from TL_CONFIG.
 */
(function (global) {
  "use strict";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderProductCard(product, options) {
    var opts = options || {};
    var image = global.TL_CONFIG.getProductImage(product.imageKey, opts.conceptId);
    var hrefPrefix = opts.linkPrefix;
    var href;

    if (hrefPrefix === undefined) {
      href = "product.html?id=" + product.id;
    } else {
      href = hrefPrefix + product.id;
    }

    return (
      '<article class="product-card ' +
      escapeHtml(product.cardClass) +
      '" id="' +
      escapeHtml(product.id) +
      '">' +
      '<div class="product-accent"></div>' +
      '<div class="product-pack product-pack-photo">' +
      '<img src="' +
      escapeHtml(image.src) +
      '" alt="' +
      escapeHtml(image.alt) +
      '">' +
      "</div>" +
      '<div class="product-body">' +
      '<span class="accent-label">' +
      escapeHtml(product.flavor) +
      "</span>" +
      "<h4>" +
      escapeHtml(product.name) +
      "</h4>" +
      "<p>" +
      escapeHtml(product.description) +
      "</p>" +
      '<a href="' +
      escapeHtml(href) +
      '" class="btn btn-card">' +
      escapeHtml(product.buttonLabel) +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  function renderProductGrid(options) {
    var products = global.TL_CONFIG.products;
    var html = "";

    for (var i = 0; i < products.length; i += 1) {
      html += renderProductCard(products[i], options);
    }

    return html;
  }

  function renderProofStrip() {
    var copy = global.TL_CONFIG.copy.proofStrip;
    var html = "";

    for (var i = 0; i < copy.items.length; i += 1) {
      var item = copy.items[i];
      html +=
        '<div class="value-item">' +
        '<div class="value-icon" aria-hidden="true">' +
        escapeHtml(item.icon) +
        "</div>" +
        "<h3>" +
        escapeHtml(item.title) +
        "</h3>" +
        "<p>" +
        escapeHtml(item.copy) +
        "</p>" +
        "</div>";
    }

    return html;
  }

  function renderCopySystemCards(options) {
    var opts = options || {};
    var cards = global.TL_CONFIG.copy.copySystem.cards;
    var html = "";

    for (var i = 0; i < cards.length; i += 1) {
      var card = cards[i];
      var image = global.TL_CONFIG.getPackagingImage(card.imageKey, opts.conceptId);
      var featuredClass = card.featured ? " copy-card-featured" : "";

      html +=
        '<article class="copy-card' +
        featuredClass +
        '">' +
        '<span class="copy-label">' +
        escapeHtml(card.label) +
        "</span>" +
        '<div class="copy-card-image">' +
        '<img src="' +
        escapeHtml(image.src) +
        '" alt="' +
        escapeHtml(image.alt) +
        '">' +
        "</div>" +
        "<h3>" +
        card.headline +
        "</h3>" +
        "<p>" +
        escapeHtml(card.supportingCopy) +
        "</p>" +
        "</article>";
    }

    return html;
  }

  function renderNavLinks(options) {
    var opts = options || {};
    var basePath = opts.basePath || "";
    var links = global.TL_CONFIG.copy.nav.links;
    var html = "";

    for (var i = 0; i < links.length; i += 1) {
      var href = basePath ? basePath + links[i].href : links[i].href;
      html +=
        "<li><a href=\"" +
        escapeHtml(href) +
        "\">" +
        escapeHtml(links[i].label) +
        "</a></li>";
    }

    return html;
  }

  function renderFooterLinks(options) {
    var opts = options || {};
    var basePath = opts.basePath || "";
    var links = global.TL_CONFIG.copy.footer.links;
    var html = "";

    for (var i = 0; i < links.length; i += 1) {
      var href =
        links[i].href.indexOf("#") === 0 && basePath
          ? basePath + links[i].href
          : links[i].href;
      html +=
        '<a href="' +
        escapeHtml(href) +
        '">' +
        escapeHtml(links[i].label) +
        "</a>";
    }

    return html;
  }

  function renderListItems(items) {
    var html = "";
    for (var i = 0; i < items.length; i += 1) {
      html += "<li>" + escapeHtml(items[i]) + "</li>";
    }
    return html;
  }

  function renderNutritionRows(nutrition) {
    return (
      "<tr><th>Serving Size</th><td>" +
      escapeHtml(nutrition.servingSize) +
      "</td></tr>" +
      "<tr><th>Calories</th><td>" +
      escapeHtml(nutrition.calories) +
      "</td></tr>" +
      "<tr><th>Crude Protein</th><td>" +
      escapeHtml(nutrition.crudeProtein) +
      "</td></tr>" +
      "<tr><th>Crude Fat</th><td>" +
      escapeHtml(nutrition.crudeFat) +
      "</td></tr>" +
      "<tr><th>Crude Fiber</th><td>" +
      escapeHtml(nutrition.crudeFiber) +
      "</td></tr>" +
      "<tr><th>Moisture</th><td>" +
      escapeHtml(nutrition.moisture) +
      "</td></tr>"
    );
  }

  function renderProductDetail(product, options) {
    var opts = options || {};
    var copy = global.TL_CONFIG.copy.productPage;
    var image = global.TL_CONFIG.getProductImage(product.imageKey, opts.conceptId);

    return (
      '<div class="container">' +
      '<p class="pdp-back"><a href="index.html#treats">' +
      escapeHtml(copy.backToTreats) +
      "</a></p>" +
      '<div class="pdp-grid ' +
      escapeHtml(product.cardClass) +
      '">' +
      '<div class="pdp-media">' +
      '<div class="product-accent"></div>' +
      '<div class="pdp-image-card product-pack-photo">' +
      '<img src="' +
      escapeHtml(image.src) +
      '" alt="' +
      escapeHtml(image.alt) +
      '">' +
      "</div>" +
      "</div>" +
      '<div class="pdp-info">' +
      '<p class="eyebrow">' +
      escapeHtml(product.collection) +
      "</p>" +
      '<h1 class="pdp-title">' +
      escapeHtml(product.name) +
      "</h1>" +
      '<p class="pdp-flavor">' +
      escapeHtml(product.flavor) +
      "</p>" +
      '<p class="pdp-description">' +
      escapeHtml(product.description) +
      "</p>" +
      '<div class="pdp-block">' +
      '<h2 class="pdp-label">' +
      escapeHtml(copy.benefitsLabel) +
      "</h2>" +
      '<ul class="pdp-list">' +
      renderListItems(product.benefits) +
      "</ul>" +
      "</div>" +
      '<div class="pdp-block">' +
      '<h2 class="pdp-label">' +
      escapeHtml(copy.ingredientsLabel) +
      "</h2>" +
      '<p class="pdp-ingredients">' +
      escapeHtml(product.ingredients.join(", ")) +
      "</p>" +
      "</div>" +
      '<p class="pdp-size"><span class="pdp-label-inline">' +
      escapeHtml(copy.sizeLabel) +
      ":</span> " +
      escapeHtml(product.size) +
      "</p>" +
      '<p class="pdp-price">' +
      escapeHtml(product.price) +
      "</p>" +
      '<div class="pdp-purchase">' +
      '<label class="pdp-quantity-label" for="pdpQuantity">' +
      escapeHtml(copy.quantityLabel) +
      "</label>" +
      '<input id="pdpQuantity" class="form-control pdp-quantity" type="number" min="1" max="99" value="1" inputmode="numeric">' +
      '<div class="pdp-actions">' +
      '<button class="btn btn-gold btn-lg pdp-add-to-cart" type="button" data-pdp-add-to-cart>' +
      escapeHtml(copy.addToCart) +
      "</button>" +
      '<button class="btn btn-ghost btn-lg pdp-buy-now" type="button" data-pdp-buy-now>' +
      escapeHtml(copy.buyNow) +
      "</button>" +
      "</div>" +
      '<p class="pdp-action-success" id="pdpActionSuccess" role="status" hidden></p>' +
      "</div>" +
      '<p class="pdp-shipping">' +
      escapeHtml(copy.shippingNote) +
      "</p>" +
      '<details class="pdp-nutrition">' +
      "<summary>" +
      escapeHtml(copy.nutritionLabel) +
      "</summary>" +
      '<table class="pdp-nutrition-table">' +
      "<tbody>" +
      renderNutritionRows(product.nutrition) +
      "</tbody>" +
      "</table>" +
      '<p class="pdp-nutrition-note">' +
      escapeHtml(product.nutrition.note) +
      "</p>" +
      "</details>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function renderProductNotFound() {
    var copy = global.TL_CONFIG.copy.productPage;
    return (
      '<div class="container pdp-not-found">' +
      "<h1>" +
      escapeHtml(copy.notFoundTitle) +
      "</h1>" +
      "<p>" +
      escapeHtml(copy.notFoundBody) +
      "</p>" +
      '<a href="index.html#treats" class="btn btn-gold">' +
      escapeHtml(copy.backToTreats) +
      "</a>" +
      "</div>"
    );
  }

  function renderRelatedProducts(product, options) {
    var opts = options || {};
    var related = global.TL_CONFIG.getRelatedProducts(product);
    var html = "";

    for (var i = 0; i < related.length; i += 1) {
      html += renderProductCard(related[i], opts);
    }

    return html;
  }

  global.TL_COMPONENTS = {
    escapeHtml: escapeHtml,
    renderProductCard: renderProductCard,
    renderProductGrid: renderProductGrid,
    renderProofStrip: renderProofStrip,
    renderCopySystemCards: renderCopySystemCards,
    renderNavLinks: renderNavLinks,
    renderFooterLinks: renderFooterLinks,
    renderProductDetail: renderProductDetail,
    renderProductNotFound: renderProductNotFound,
    renderRelatedProducts: renderRelatedProducts
  };
})(window);
