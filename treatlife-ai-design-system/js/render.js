/**
 * Site renderer — binds TL_CONFIG to page DOM.
 */
(function (global) {
  "use strict";

  function setText(selector, text) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i += 1) {
      nodes[i].textContent = text;
    }
  }

  function setAttr(selector, attr, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function mountInnerHtml(selector, html) {
    var node = document.querySelector(selector);
    if (node) node.innerHTML = html;
  }

  function applyBrand(brand, product) {
    setText("[data-brand-name]", brand.name);
    setText("[data-brand-tagline]", brand.tagline);

    if (product) {
      document.title =
        product.name + " | " + brand.name + global.TL_CONFIG.defaults.pageTitleSuffix;
    } else {
      document.title = brand.browserTitle;
    }

    var favicon = document.querySelector("[data-brand-favicon]");
    if (favicon) favicon.setAttribute("href", brand.favicon);

    var ogImage = document.querySelector("[data-brand-social-preview]");
    if (ogImage) ogImage.setAttribute("content", brand.socialPreviewImage);
  }

  function renderPageChrome(options) {
    var opts = options || {};
    var basePath = opts.basePath || "";
    var conceptId = opts.conceptId;
    var copy = global.TL_CONFIG.copy;
    var brand = global.TL_CONFIG.getBrand(conceptId);

    applyBrand(brand, opts.product || null);

    setAttr('meta[name="description"]', "content", copy.meta.description);
    setText("[data-copy-announcement]", copy.announcement);

    mountInnerHtml(
      "[data-mount-nav-links]",
      global.TL_COMPONENTS.renderNavLinks({ basePath: basePath })
    );
    setText("[data-copy-nav-cta]", copy.nav.primaryAction.label);
    setAttr(
      "[data-copy-nav-cta]",
      "href",
      basePath ? basePath + copy.nav.primaryAction.href : copy.nav.primaryAction.href
    );

    mountInnerHtml(
      "[data-mount-footer-links]",
      global.TL_COMPONENTS.renderFooterLinks({ basePath: basePath })
    );
    setText("[data-copy-footer-disclaimer]", copy.footer.disclaimer);
  }

  function renderSite(conceptId) {
    var copy = global.TL_CONFIG.copy;
    var images = global.TL_CONFIG.getImages(conceptId);

    renderPageChrome({ conceptId: conceptId });

    setText("[data-copy-hero-eyebrow]", copy.hero.eyebrow);
    setText("[data-copy-hero-subheadline]", copy.hero.subheadline);
    setText("[data-copy-hero-primary]", copy.hero.primaryButton.label);
    setAttr("[data-copy-hero-primary]", "href", copy.hero.primaryButton.href);
    setText("[data-copy-hero-secondary]", copy.hero.secondaryButton.label);
    setAttr("[data-copy-hero-secondary]", "href", copy.hero.secondaryButton.href);

    setAttr("[data-copy-hero-image]", "src", images.hero.src);
    setAttr("[data-copy-hero-image]", "alt", images.hero.alt);

    mountInnerHtml("[data-mount-proof-strip]", global.TL_COMPONENTS.renderProofStrip());

    setText("[data-copy-products-eyebrow]", copy.products.eyebrow);
    setText("[data-copy-products-headline]", copy.products.headline);
    setText("[data-copy-products-intro]", copy.products.intro);
    mountInnerHtml("[data-mount-product-grid]", global.TL_COMPONENTS.renderProductGrid({ conceptId: conceptId }));

    setText("[data-copy-about-eyebrow]", copy.about.eyebrow);
    setText("[data-copy-about-headline]", copy.about.headline);
    var aboutBody = document.querySelector("[data-mount-about-body]");
    if (aboutBody) {
      var bodyHtml = "";
      for (var i = 0; i < copy.about.body.length; i += 1) {
        bodyHtml +=
          '<p class="story-copy">' +
          global.TL_COMPONENTS.escapeHtml(copy.about.body[i]) +
          "</p>";
      }
      aboutBody.innerHTML = bodyHtml;
    }

    setAttr("[data-copy-about-image]", "src", images.packaging.brandBoard.src);
    setAttr("[data-copy-about-image]", "alt", images.packaging.brandBoard.alt);

    mountInnerHtml("[data-mount-copy-system]", global.TL_COMPONENTS.renderCopySystemCards({ conceptId: conceptId }));

    setText("[data-copy-cta-eyebrow]", copy.cta.eyebrow);
    setText("[data-copy-cta-headline]", copy.cta.headline);
    setText("[data-copy-cta-body]", copy.cta.body);
    setAttr("[data-copy-cta-input]", "placeholder", copy.cta.inputPlaceholder);
    setText("[data-copy-cta-input-label]", copy.cta.inputLabel);
    setText("[data-copy-cta-button]", copy.cta.button);
    setText("[data-copy-cta-success]", copy.cta.successMessage);
  }

  function renderProductPage(conceptId) {
    var product = global.TL_CONFIG.getProductFromQuery();
    var copy = global.TL_CONFIG.copy.productPage;

    renderPageChrome({ basePath: "index.html", product: product, conceptId: conceptId });

    if (product) {
      mountInnerHtml(
        "[data-mount-pdp]",
        global.TL_COMPONENTS.renderProductDetail(product, { conceptId: conceptId })
      );
      setText("[data-copy-pdp-related-headline]", copy.relatedHeadline);
      mountInnerHtml(
        "[data-mount-related-products]",
        global.TL_COMPONENTS.renderRelatedProducts(product, { conceptId: conceptId })
      );
      var relatedSection = document.querySelector("[data-pdp-related-section]");
      if (relatedSection) relatedSection.hidden = false;
    } else {
      mountInnerHtml(
        "[data-mount-pdp]",
        global.TL_COMPONENTS.renderProductNotFound()
      );
      var missingRelated = document.querySelector("[data-pdp-related-section]");
      if (missingRelated) missingRelated.hidden = true;
    }
  }

  function applyImages(conceptId) {
    var images = global.TL_CONFIG.getImages(conceptId);
    var renderOpts = { conceptId: conceptId };

    setAttr("[data-copy-hero-image]", "src", images.hero.src);
    setAttr("[data-copy-hero-image]", "alt", images.hero.alt);
    setAttr("[data-copy-about-image]", "src", images.packaging.brandBoard.src);
    setAttr("[data-copy-about-image]", "alt", images.packaging.brandBoard.alt);

    if (document.querySelector("[data-mount-product-grid]")) {
      mountInnerHtml(
        "[data-mount-product-grid]",
        global.TL_COMPONENTS.renderProductGrid(renderOpts)
      );
    }

    if (document.querySelector("[data-mount-copy-system]")) {
      mountInnerHtml(
        "[data-mount-copy-system]",
        global.TL_COMPONENTS.renderCopySystemCards(renderOpts)
      );
    }

    if (document.querySelector("[data-mount-sg-product-grid]")) {
      mountInnerHtml(
        "[data-mount-sg-product-grid]",
        global.TL_COMPONENTS.renderProductGrid({
          linkPrefix: "product.html?id=",
          conceptId: conceptId
        })
      );
    }

    if (document.querySelector("[data-product-root]")) {
      var product = global.TL_CONFIG.getProductFromQuery();
      if (product) {
        mountInnerHtml(
          "[data-mount-pdp]",
          global.TL_COMPONENTS.renderProductDetail(product, renderOpts)
        );
        mountInnerHtml(
          "[data-mount-related-products]",
          global.TL_COMPONENTS.renderRelatedProducts(product, renderOpts)
        );
        if (window.initProductPageHandlers) {
          window.initProductPageHandlers();
        }
      }
    }

    var sgImages = document.querySelectorAll("[data-sg-image]");
    for (var i = 0; i < sgImages.length; i += 1) {
      var img = sgImages[i];
      var key = img.getAttribute("data-sg-image");
      var asset = null;

      if (key === "hero") asset = images.hero;
      else if (key === "brandBoard") asset = images.packaging.brandBoard;
      else if (key === "unboxing") asset = images.packaging.unboxing;
      else if (key === "styleGuide") asset = images.packaging.styleGuide;
      else asset = images.products[key];

      if (asset) {
        img.setAttribute("src", asset.src);
        img.setAttribute("alt", asset.alt);
      }
    }
  }

  function renderStyleGuideDemos(conceptId) {
    mountInnerHtml(
      "[data-mount-sg-proof-strip]",
      global.TL_COMPONENTS.renderProofStrip()
    );
    mountInnerHtml(
      "[data-mount-sg-product-grid]",
      global.TL_COMPONENTS.renderProductGrid({
        linkPrefix: "product.html?id=",
        conceptId: conceptId
      })
    );
  }

  global.TL_RENDER = {
    applyBrand: applyBrand,
    applyImages: applyImages,
    renderPageChrome: renderPageChrome,
    renderSite: renderSite,
    renderProductPage: renderProductPage,
    renderStyleGuideDemos: renderStyleGuideDemos
  };

  function initRender() {
    var conceptId = global.TL_CONFIG.getStoredConceptId();

    if (document.body && document.body.dataset && document.body.dataset.page === "styleguide") {
      global.TL_RENDER.renderStyleGuideDemos(conceptId);
      global.TL_RENDER.applyImages(conceptId);
    } else if (document.querySelector("[data-product-root]")) {
      global.TL_RENDER.renderProductPage(conceptId);
    } else if (document.querySelector("[data-site-root]")) {
      global.TL_RENDER.renderSite(conceptId);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRender);
  } else {
    initRender();
  }
})(window);
