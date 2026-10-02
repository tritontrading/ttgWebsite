/* TTG application link — single source of truth for the legacy static pages.
 *
 * To change the application form, update APPLY_URL below. Every legacy page
 * marks its apply links with `data-apply-link` and this script wires them up,
 * so there is exactly one place to edit.
 */
(function () {
  var APPLY_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdfXBTLXA6OsW1Kaco9lp6bi-726-bZoRD9FWYwBUjH_2Ckbg/viewform";

  function wire() {
    document.querySelectorAll("[data-apply-link]").forEach(function (el) {
      if (el.tagName === "A") {
        el.setAttribute("href", APPLY_URL);
      } else {
        // e.g. the footer <button> on the old recruitment pages
        el.addEventListener("click", function () {
          window.open(APPLY_URL, "_blank", "noopener");
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
