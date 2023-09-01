(function () {
  new Swiper(".active-chat", {
    slidesPerView: 5,
    breakpoints: {
      400: { slidesPerView: 6 },
      600: { slidesPerView: 9 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 6 },
      1400: { slidesPerView: 6 },
    },
  });
  var r = document.getElementById("messagelist"),
    o = document.getElementById("chatlist"),
    a = document.getElementById("profile-list");
  new SimpleBar(r, { autoHide: !0 }),
    new SimpleBar(o, { autoHide: !0 }),
    new SimpleBar(a, { autoHide: !0 }),
    document
      .querySelector(".responsive-chat-close")
      .addEventListener("click", () => {
        document
          .querySelector(".main-chart-wrapper")
          .classList.remove("responsive-chat-open");
      }),
    document.querySelectorAll(".responsive-userinfo-open").forEach((s) => {
      s.addEventListener("click", () => {
        document.querySelector("#chat-user-details").classList.add("open"),
          document.querySelector(".main-chat-area").classList.add("close");
      });
    }),
    document.querySelector(".user-close").addEventListener("click", () => {
      document.querySelector("#chat-user-details").classList.remove("open"),
        document.querySelector(".main-chat-area").classList.remove("close");
    }),
    document.querySelector(".chat-info").addEventListener("click", () => {
      document.querySelector("#chat-user-details").classList.remove("open");
    }),
    document.querySelector(".chat-content").addEventListener("click", () => {
      document.querySelector("#chat-user-details").classList.remove("open");
    });
  const t = document.querySelector(".search-chat-icon"),
    c = document.querySelector(".search-chat-input"),
    e = (s) => {
      s.stopPropagation(),
        s.target.closest(".search-chat-input") ||
          (c.classList.toggle("active"),
          c.classList.contains("active")
            ? document.addEventListener("click", e)
            : document.removeEventListener("click", e));
    };
  t.addEventListener("click", e);
})();
window.changeTheInfo = (r, o, a, t) => {
  document.querySelectorAll(".checkforactive").forEach((e) => {
    e.classList.remove("active");
  }),
    r.closest("li").classList.add("active"),
    document.querySelectorAll(".chatnameperson").forEach((e) => {
      e.innerText = o;
    });
  let c = `https://website/build/assets/img/users/${a}.jpg`;
  document.querySelectorAll(".chatimageperson").forEach((e) => {
    e.src = c;
  }),
    document.querySelectorAll(".chatstatusperson").forEach((e) => {
      e.classList.remove("online"),
        e.classList.remove("offline"),
        e.classList.add(t);
    }),
    (document.querySelector(".chatpersonstatus").innerText = t),
    document
      .querySelector(".main-chart-wrapper")
      .classList.add("responsive-chat-open");
};
