(function () {
  flatpickr("#date", {}),
    document.addEventListener("DOMContentLoaded", function () {
      var t = document.querySelectorAll("[data-trigger]");
      for (let e = 0; e < t.length; ++e) {
        var a = t[e];
        new Choices(a, { allowHTML: !0, allowSearch: !1 });
      }
    });
})();
