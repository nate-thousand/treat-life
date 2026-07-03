/**
 * Treat Life — client JS (POC)
 */
(function () {
  "use strict";

  function bootstrapHandlesNav() {
    return (
      typeof window.bootstrap !== "undefined" &&
      document.querySelector('[data-bs-toggle="collapse"]')
    );
  }

  function initNavToggle() {
    if (bootstrapHandlesNav()) return;

    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  function initDropForm() {
    var form = document.getElementById("dropForm");
    var success = document.getElementById("dropSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      success.hidden = false;
      form.reset();
    });
  }

  function initProductPageHandlers() {
    var addBtn = document.querySelector("[data-pdp-add-to-cart]");
    var buyBtn = document.querySelector("[data-pdp-buy-now]");
    var success = document.getElementById("pdpActionSuccess");
    if (!success) return;

    var copy = window.TL_CONFIG.copy.productPage;

    if (addBtn) {
      addBtn.onclick = function () {
        success.textContent = copy.cartSuccess;
        success.hidden = false;
      };
    }

    if (buyBtn) {
      buyBtn.onclick = function () {
        success.textContent = copy.buyNowSuccess;
        success.hidden = false;
      };
    }
  }

  window.initProductPageHandlers = initProductPageHandlers;

  function applyConcept(conceptId) {
    var brand = window.TL_CONFIG.getBrand(conceptId);
    if (!brand) return;

    var product = document.querySelector("[data-product-root]")
      ? window.TL_CONFIG.getProductFromQuery()
      : null;

    try {
      localStorage.setItem(window.TL_CONFIG.defaults.storageKey, conceptId);
    } catch (error) {
      /* ignore */
    }

    window.TL_RENDER.applyBrand(brand, product);
    window.TL_RENDER.applyImages(conceptId);

    var select = document.getElementById("conceptSelect");
    if (select && select.value !== conceptId) {
      select.value = conceptId;
    }
  }

  function initConceptSwitcher() {
    if (!document.querySelector("[data-brand-name]")) return;

    var panel = document.createElement("div");
    panel.className = "concept-switcher";
    panel.setAttribute("aria-label", "Brand concept preview");

    var optionsHtml = "";
    var conceptIds = Object.keys(window.TL_CONFIG.concepts);
    var labels = {
      biggieBones: "Biggie Bones",
      treatLife: "Treat Life",
      treatKings: "Treat Kings"
    };

    for (var i = 0; i < conceptIds.length; i += 1) {
      var id = conceptIds[i];
      optionsHtml +=
        '<option value="' +
        id +
        '">' +
        (labels[id] || window.TL_CONFIG.concepts[id].name) +
        "</option>";
    }

    panel.innerHTML =
      '<label class="concept-switcher-label" for="conceptSelect">Concept</label>' +
      '<select id="conceptSelect" class="concept-switcher-select">' +
      optionsHtml +
      "</select>";

    document.body.appendChild(panel);

    var select = document.getElementById("conceptSelect");
    var activeId = window.TL_CONFIG.getStoredConceptId();

    select.value = activeId;
    applyConcept(activeId);

    select.addEventListener("change", function () {
      applyConcept(select.value);
    });
  }

  initNavToggle();
  initDropForm();
  initProductPageHandlers();
  initConceptSwitcher();
})();
