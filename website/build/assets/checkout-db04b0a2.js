(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var n = document.querySelectorAll(".billing-search");
    for (let e = 0; e < n.length; ++e) {
      var t = n[e];
      new Choices(t, {
        allowHTML: !0,
        searchEnabled: !1,
        removeItemButton: !0,
      });
    }
  });
})();
