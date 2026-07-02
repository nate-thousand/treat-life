/**
 * Treat Life — minimal client JS (POC)
 *
 * Scope:
 *   1. Mobile nav toggle (only when Bootstrap is NOT handling it)
 *   2. Fake drop-form submit with success state
 *   3. Brand concept switcher (name + tagline only)
 *
 * Remove or replace when wiring Formspree, ConvertKit, Shopify, etc.
 */
(function () {
  "use strict";

  var CONCEPT_STORAGE_KEY = "tl-brand-concept";
  var DEFAULT_CONCEPT = "treatLife";
  var PAGE_TITLE_SUFFIX = " | Premium Human Grade Dog Treats";

  var concepts = {
    biggieBones: {
      name: "Biggie Bones Treat Co.",
      tagline: "Living That Treat Life."
    },
    treatLife: {
      name: "Treat Life",
      tagline: "Reward Better."
    },
    loyalSupply: {
      name: "Loyal Supply Co.",
      tagline: "Built for Good Dogs."
    }
  };

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

  function getStoredConceptId() {
    try {
      var stored = localStorage.getItem(CONCEPT_STORAGE_KEY);
      return concepts[stored] ? stored : DEFAULT_CONCEPT;
    } catch (error) {
      return DEFAULT_CONCEPT;
    }
  }

  function applyConcept(conceptId) {
    var concept = concepts[conceptId];
    if (!concept) return;

    document.querySelectorAll("[data-brand-name]").forEach(function (el) {
      el.textContent = concept.name;
    });

    document.querySelectorAll("[data-brand-tagline]").forEach(function (el) {
      el.textContent = concept.tagline;
    });

    document.title = concept.name + PAGE_TITLE_SUFFIX;

    var select = document.getElementById("conceptSelect");
    if (select && select.value !== conceptId) {
      select.value = conceptId;
    }

    try {
      localStorage.setItem(CONCEPT_STORAGE_KEY, conceptId);
    } catch (error) {
      /* ignore */
    }
  }

  function initConceptSwitcher() {
    if (!document.querySelector("[data-brand-name]")) return;

    var panel = document.createElement("div");
    panel.className = "concept-switcher";
    panel.setAttribute("aria-label", "Brand concept preview");

    panel.innerHTML =
      '<label class="concept-switcher-label" for="conceptSelect">Concept</label>' +
      '<select id="conceptSelect" class="concept-switcher-select">' +
      '<option value="biggieBones">Biggie Bones</option>' +
      '<option value="treatLife">Treat Life</option>' +
      '<option value="loyalSupply">Loyal Supply</option>' +
      "</select>";

    document.body.appendChild(panel);

    var select = document.getElementById("conceptSelect");
    var activeId = getStoredConceptId();

    select.value = activeId;
    applyConcept(activeId);

    select.addEventListener("change", function () {
      applyConcept(select.value);
    });
  }

  initNavToggle();
  initDropForm();
  initConceptSwitcher();
})();
