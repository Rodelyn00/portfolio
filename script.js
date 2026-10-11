(function () {
  var list = document.querySelector(".info-list");
  if (!list) return;
  var items = Array.prototype.slice.call(list.querySelectorAll(".v")).map(function (box) {
    var tgt = box.querySelector("a") || box;
    return { box: box, tgt: tgt, text: tgt.textContent };
  });
  var total = items.reduce(function (n, it) { return n + it.text.length; }, 0);
  var PX_PER_CHAR = 5, progress = 0, lastY = window.scrollY;

  function render() {
    var left = Math.floor(progress), active = null;
    items.forEach(function (it) {
      var n = Math.max(0, Math.min(it.text.length, left));
      it.tgt.textContent = it.text.slice(0, n);
      it.box.classList.remove("typing");
      if (n > 0 && n < it.text.length) active = it.box;
      left -= it.text.length;
    });
    if (active) active.classList.add("typing");
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var short = document.documentElement.scrollHeight <= window.innerHeight + 40;
  if (reduce || short) { progress = total; render(); return; }
  render();

  window.addEventListener("scroll", function () {
    var y = window.scrollY, delta = y - lastY; lastY = y;
    if (delta <= 0 || progress >= total) return;
    var r = list.getBoundingClientRect();
    if (r.top > window.innerHeight * 0.9 || r.bottom < 0) return;
    progress = Math.min(total, progress + delta / PX_PER_CHAR);
    render();
  }, { passive: true });
})();

(function () {
  Array.prototype.forEach.call(document.querySelectorAll(".tw"), function (tw) {
    var on = false;
    function tap() {
      on = !on;
      tw.classList.remove("typing", "alt");
      void tw.offsetWidth;
      tw.classList.add("typing");
      if (on) tw.classList.add("alt");
    }
    tw.addEventListener("click", tap);
    tw.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tap(); }
    });
  });
})();