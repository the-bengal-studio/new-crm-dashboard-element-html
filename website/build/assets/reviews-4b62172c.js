(function () {
  new Swiper(".swipe2", {
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    slidesPerView: 1,
    watchSlidesProgress: !0,
    spaceBetween: 30,
    freeMode: !0,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 2, spaceBetween: 50 },
      1400: { slidesPerView: 4, spaceBetween: 50 },
    },
  });
})();
