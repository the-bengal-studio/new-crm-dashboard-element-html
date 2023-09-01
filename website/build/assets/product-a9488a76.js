(function () {
  var u = new Swiper(".mySwiper", {
    loop: !0,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: !0,
    watchSlidesProgress: !0,
  });
  new Swiper(".mySwiper2", {
    loop: !0,
    spaceBetween: 10,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: { swiper: u },
  }),
    document.addEventListener("DOMContentLoaded", function () {
      var r = document.querySelectorAll(".product-des-select");
      for (let t = 0; t < r.length; ++t) {
        var d = r[t];
        new Choices(d, { allowHTML: !1 });
      }
    });
  var o = document.getElementById("product-quantity-minus"),
    l = document.getElementById("product-quantity-plus"),
    n = document.getElementById("product-quantity"),
    e = 0,
    i = 0,
    a = 30;
  (o.onclick = function () {
    e > i && ((e = e - 1), (n.value = e));
  }),
    (l.onclick = function () {
      e < a && ((e = e + 1), (n.value = e));
    }),
    new Swiper(".related-product-slide", {
      loop: !0,
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: !0,
    });
})();
