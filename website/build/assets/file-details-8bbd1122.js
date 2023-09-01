(function () {
  GLightbox({
    selector: ".gallery",
    openEffect: "zoom",
    cssEfects: { zoom: { in: "zoomIn", out: "zoomOut" } },
  }),
    new Swiper(".mySwiper", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      slidesPerView: 1,
      loop: !0,
      spaceBetween: 20,
      breakpoints: {
        400: { slidesPerView: 2 },
        500: { slidesPerView: 3 },
        700: { slidesPerView: 4 },
        992: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
        1500: { slidesPerView: 5 },
      },
    });
})();
