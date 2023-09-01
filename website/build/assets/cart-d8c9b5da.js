(function () {
  document.querySelectorAll(".cart-btn").forEach((t) => {
    t.onclick = () => {
      t.closest(".cart-box").remove(),
        document.querySelectorAll(".cart-btn").length ||
          (document.querySelector(".cart-empty").classList.remove("hidden"),
          document.querySelector(".cart-full").classList.add("hidden"));
    };
  });
  var c = document.querySelectorAll(".product-quantity-minus"),
    l = document.querySelectorAll(".product-quantity-plus"),
    n = 0,
    u = 30;
  c.forEach((t) => {
    t.onclick = function (r) {
      let e = r.currentTarget.nextElementSibling.value;
      e > n && ((e = e - 1), (r.currentTarget.nextElementSibling.value = e));
    };
  }),
    l.forEach((t) => {
      t.onclick = function (r) {
        let e = r.currentTarget.previousElementSibling.value;
        e < u &&
          ((e = Number(e) + 1),
          (r.currentTarget.previousElementSibling.value = e));
      };
    });
})();
