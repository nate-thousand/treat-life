/**
 * Treat Life — minimal client JS (POC)
 *
 * Scope:
 *   1. Mobile nav toggle (only when Bootstrap is NOT handling it)
 *   2. Fake drop-form submit with success state
 *
 * Remove or replace when wiring Formspree, ConvertKit, Shopify, etc.
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

  initNavToggle();
  initDropForm();
})();
