/* =============================================================
   main.js — ignition + scroll reveal（依存ゼロ）
   ============================================================= */
(function () {
  "use strict";

  /* --- page-load ignition（"I" が灯る） --- */
  function ignite() { document.body.classList.add("is-loaded"); }
  if (document.readyState === "complete") ignite();
  else window.addEventListener("load", function () { setTimeout(ignite, 60); });

  /* --- scroll reveal (fadeInUp) --- */
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // 同じ親内の順番で段階的に遅延
  targets.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) {
      return c.classList && c.classList.contains("reveal");
    });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.setProperty("--reveal-delay", (i * 0.12) + "s");
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });

  targets.forEach(function (el) { io.observe(el); });
})();
