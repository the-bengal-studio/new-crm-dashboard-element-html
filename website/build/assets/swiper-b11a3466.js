(function () {
  new Swiper(".Swiperslide-1", {
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    spaceBetween: 2,
  }),
    new Swiper(".mySwiper1", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 2,
    }),
    new Swiper(".mySwiper-page", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: !0,
        clickable: !0,
      },
      spaceBetween: 2,
    }),
    new Swiper(".mySwiper3", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      pagination: { el: ".swiper-pagination", type: "progressbar" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 2,
    }),
    new Swiper(".mySwiper4", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      scrollbar: { el: ".swiper-scrollbar", hide: !0 },
      spaceBetween: 2,
    }),
    new Swiper(".mySwiper5", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      direction: "vertical",
      pagination: { el: ".swiper-pagination", clickable: !0 },
      spaceBetween: 2,
    }),
    new Swiper(".mySwiper6", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 50 },
        1400: { slidesPerView: 6, spaceBetween: 20 },
      },
    }),
    new Swiper(".mySwiper7", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: !0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 50 },
        1400: { slidesPerView: 6, spaceBetween: 20 },
      },
    }),
    new Swiper(".mySwiper8", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
    new Swiper(".mySwiper9", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      effect: "cube",
      grabCursor: !0,
      cubeEffect: {
        shadow: !0,
        slideShadows: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
    new Swiper(".mySwiper10", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      effect: "coverflow",
      grabCursor: !0,
      centeredSlides: !0,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0,
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
    new Swiper(".mySwiper11", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      effect: "flip",
      grabCursor: !0,
      pagination: { el: ".swiper-pagination" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    new Swiper(".mySwiper12", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      effect: "cards",
      grabCursor: !0,
    }),
    new Swiper(".mySwiper13", {
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      zoom: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
    });
})();
