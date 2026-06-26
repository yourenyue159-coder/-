/* =============================================================
   main.js — scroll reveal (fadeInUp)
   原サイトは jQuery + WOW.js。ここは依存ゼロの IntersectionObserver。
   ============================================================= */
(function () {
  "use strict";

  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // 段階的な遅延（同じ親内の順番で 0.08s ずつ）
  targets.forEach(function (el) {
    var siblings = Array.prototype.filter.call(
      el.parentNode.children,
      function (c) { return c.classList && c.classList.contains("reveal"); }
    );
    var index = siblings.indexOf(el);
    if (index > 0) el.style.setProperty("--reveal-delay", (index * 0.08) + "s");
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
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });
})();
