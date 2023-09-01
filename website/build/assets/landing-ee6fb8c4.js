document.getElementById("year").innerHTML = new Date().getFullYear();
const f = document.querySelector(".scrollToTop"),
  B = document.documentElement;
window.onscroll = () => {
  B.scrollHeight - B.clientHeight,
    window.scrollY > 100
      ? (f.style.display = "flex")
      : (f.style.display = "none");
};
f.onclick = () => {
  window.scrollTo(0, 0);
};
if (document.querySelector("#hs-overlay-switcher")) {
  const t = document.querySelector(".pickr-container-primary"),
    r = document.querySelector(".theme-container-primary"),
    s = document.querySelector(".pickr-container-background"),
    a = document.querySelector(".theme-container-background"),
    n = [
      [
        "nano",
        {
          defaultRepresentation: "RGB",
          components: {
            preview: !0,
            opacity: !1,
            hue: !0,
            interaction: {
              hex: !1,
              rgba: !0,
              hsva: !1,
              input: !0,
              clear: !1,
              save: !1,
            },
          },
        },
      ],
    ],
    o = [];
  let i = null;
  for (const [y, p] of n) {
    const c = document.createElement("button");
    (c.innerHTML = y),
      o.push(c),
      c.addEventListener("click", () => {
        const g = document.createElement("p");
        t.appendChild(g), i && i.destroyAndRemove();
        for (const m of o) m.classList[m === c ? "add" : "remove"]("active");
        (i = new Pickr(
          Object.assign({ el: g, theme: y, default: "#5e76a6" }, p)
        )),
          i.on("changestop", (m, k) => {
            let e = k.getColor().toRGBA(),
              l = document.querySelector("html");
            l.style.setProperty(
              "--color-primary",
              `${Math.floor(e[0])} ${Math.floor(e[1])} ${Math.floor(e[2])}`
            ),
              l.style.setProperty(
                "--color-primary-rgb",
                `${Math.floor(e[0])} ,${Math.floor(e[1])}, ${Math.floor(e[2])}`
              ),
              localStorage.setItem(
                "primaryRGB",
                `${Math.floor(e[0])}, ${Math.floor(e[1])}, ${Math.floor(e[2])}`
              ),
              localStorage.setItem(
                "primaryRGB1",
                `${Math.floor(e[0])} ${Math.floor(e[1])} ${Math.floor(e[2])}`
              ),
              d();
          });
      }),
      r.appendChild(c);
  }
  o[0].click();
  const u = [];
  let h = null;
  for (const [y, p] of n) {
    const c = document.createElement("button");
    (c.innerHTML = y),
      u.push(c),
      c.addEventListener("click", () => {
        const g = document.createElement("p");
        s.appendChild(g), h && h.destroyAndRemove();
        for (const m of o) m.classList[m === c ? "add" : "remove"]("active");
        (h = new Pickr(
          Object.assign({ el: g, theme: y, default: "#5e76a6" }, p)
        )),
          h.on("changestop", (m, k) => {
            let e = k.getColor().toRGBA(),
              l = document.querySelector("html");
            l.style.setProperty(
              "--body-bg",
              `${Math.floor(e[0] + 14)}
           ${Math.floor(e[1] + 14)}
            ${Math.floor(e[2] + 14)}`
            ),
              l.style.setProperty(
                "--dark-bg",
                `
          ${Math.floor(e[0])}
          ${Math.floor(e[1])}
          ${Math.floor(e[2])}

          `
              ),
              localStorage.removeItem("bgtheme"),
              d(),
              l.classList.add("dark"),
              l.classList.remove("light"),
              l.setAttribute("data-menu-styles", "dark"),
              l.setAttribute("data-header-styles", "dark"),
              (document.querySelector("#switcher-dark-theme").checked = !0),
              localStorage.setItem(
                "bodyBgRGB",
                `${Math.floor(e[0] + 14)}
           ${Math.floor(e[1] + 14)}
            ${Math.floor(e[2] + 14)}`
              ),
              localStorage.setItem(
                "darkBgRGB",
                `${Math.floor(e[0])} ${Math.floor(e[1])} ${Math.floor(e[2])}`
              );
          });
      }),
      a.appendChild(c);
  }
  u[0].click();
}
(function () {
  document.querySelector("html"),
    document.querySelector(".main-content"),
    A(),
    document.querySelector("#hs-overlay-switcher") && (L(), S());
})();

function L() {
  let t,
    r,
    s,
    a,
    n,
    o,
    i,
    u,
    h,
    y,
    p,
    c,
    g,
    m,
    k,
    e = document.querySelector("html");
  (s = document.querySelector("#switcher-light-theme")),
    (a = document.querySelector("#switcher-dark-theme")),
    (t = document.querySelector("#switcher-ltr")),
    (r = document.querySelector("#switcher-rtl")),
    (n = document.querySelector("#switcher-primary")),
    (o = document.querySelector("#switcher-primary1")),
    (i = document.querySelector("#switcher-primary2")),
    (u = document.querySelector("#switcher-primary3")),
    (h = document.querySelector("#switcher-primary4")),
    (y = document.querySelector("#switcher-background")),
    (p = document.querySelector("#switcher-background1")),
    (c = document.querySelector("#switcher-background2")),
    (g = document.querySelector("#switcher-background3")),
    (m = document.querySelector("#switcher-background4")),
    (k = document.querySelector("#reset-all")),
    s.addEventListener("click", () => {
      I(),
        localStorage.setItem("SyntolandingHeader", "light"),
        localStorage.setItem("SyntolandingMenu", "light");
    }),
    a.addEventListener("click", () => {
      P(),
        localStorage.setItem("SyntolandingMenu", "dark"),
        localStorage.setItem("SyntolandingHeader", "dark");
    }),
    n.addEventListener("click", () => {
      localStorage.setItem("primaryRGB", "58, 88, 146"),
        localStorage.setItem("primaryRGB1", "58 88 146"),
        e.style.setProperty("--color-primary-rgb", "58, 88, 146"),
        e.style.setProperty("--color-primary", "58 88 146"),
        d();
    }),
    o.addEventListener("click", () => {
      localStorage.setItem("primaryRGB", "92, 144, 163"),
        localStorage.setItem("primaryRGB1", "92 144 163"),
        e.style.setProperty("--color-primary-rgb", "92, 144, 163"),
        e.style.setProperty("--color-primary", "92 144 163"),
        d();
    }),
    i.addEventListener("click", () => {
      localStorage.setItem("primaryRGB", "172, 172, 80"),
        localStorage.setItem("primaryRGB1", "172 172 80"),
        e.style.setProperty("--color-primary-rgb", "172, 172, 80"),
        e.style.setProperty("--color-primary", "172 172 80"),
        d();
    }),
    u.addEventListener("click", () => {
      localStorage.setItem("primaryRGB", "165, 94, 131"),
        localStorage.setItem("primaryRGB1", "165 94 131"),
        e.style.setProperty("--color-primary-rgb", "165, 94, 131"),
        e.style.setProperty("--color-primary", "165 94 131"),
        d();
    }),
    h.addEventListener("click", () => {
      localStorage.setItem("primaryRGB", "87, 68, 117"),
        localStorage.setItem("primaryRGB1", "87 68 117"),
        e.style.setProperty("--color-primary-rgb", "87, 68, 117"),
        e.style.setProperty("--color-primary", "87 68 117"),
        d();
    }),
    y.addEventListener("click", () => {
      localStorage.setItem("bodyBgRGB", `${50 + 14} ${62 + 14} ${93 + 14}`),
        localStorage.setItem("darkBgRGB", "50 62 93"),
        localStorage.removeItem("SyntoHeader"),
        localStorage.removeItem("SyntoMenu"),
        e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-menu-styles", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        document
          .querySelector("html")
          .style.setProperty("--body-bg", localStorage.bodyBgRGB),
        document
          .querySelector("html")
          .style.setProperty("--dark-bg", localStorage.darkBgRGB),
        (document.querySelector("#switcher-dark-theme").checked = !0);
    }),
    p.addEventListener("click", () => {
      localStorage.setItem("bodyBgRGB", `${81 + 14} ${93 + 14} ${50 + 14}`),
        localStorage.setItem("darkBgRGB", "81 93 50"),
        localStorage.removeItem("SyntoHeader"),
        localStorage.removeItem("SyntoMenu"),
        e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-menu-styles", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        document
          .querySelector("html")
          .style.setProperty("--body-bg", localStorage.bodyBgRGB),
        document
          .querySelector("html")
          .style.setProperty("--dark-bg", localStorage.darkBgRGB),
        (document.querySelector("#switcher-dark-theme").checked = !0);
    }),
    c.addEventListener("click", () => {
      localStorage.setItem("bodyBgRGB", `${79 + 14} ${50 + 14} ${93 + 14}`),
        localStorage.setItem("darkBgRGB", "79 50 93"),
        localStorage.removeItem("SyntoHeader"),
        localStorage.removeItem("SyntoMenu"),
        e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-menu-styles", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        document
          .querySelector("html")
          .style.setProperty("--body-bg", localStorage.bodyBgRGB),
        document
          .querySelector("html")
          .style.setProperty("--dark-bg", localStorage.darkBgRGB),
        (document.querySelector("#switcher-dark-theme").checked = !0);
    }),
    g.addEventListener("click", () => {
      localStorage.setItem("bodyBgRGB", `${50 + 14} ${87 + 14} ${93 + 14}`),
        localStorage.setItem("darkBgRGB", "50 87 93"),
        localStorage.removeItem("SyntoHeader"),
        localStorage.removeItem("SyntoMenu"),
        e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-menu-styles", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        document
          .querySelector("html")
          .style.setProperty("--body-bg", localStorage.bodyBgRGB),
        document
          .querySelector("html")
          .style.setProperty("--dark-bg", localStorage.darkBgRGB),
        (document.querySelector("#switcher-dark-theme").checked = !0);
    }),
    m.addEventListener("click", () => {
      localStorage.setItem("bodyBgRGB", `${93 + 14} ${50 + 14} ${50 + 14}`),
        localStorage.setItem("darkBgRGB", "93 50 50"),
        localStorage.removeItem("SyntoHeader"),
        localStorage.removeItem("SyntoMenu"),
        e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-menu-styles", "dark"),
        e.setAttribute("data-header-styles", "dark"),
        document
          .querySelector("html")
          .style.setProperty("--body-bg", localStorage.bodyBgRGB),
        document
          .querySelector("html")
          .style.setProperty("--dark-bg", localStorage.darkBgRGB),
        (document.querySelector("#switcher-dark-theme").checked = !0);
    }),
    r.addEventListener("click", () => {
      localStorage.setItem("Syntortl", !0),
        localStorage.removeItem("Syntoltr"),
        G();
    }),
    t.addEventListener("click", () => {
      localStorage.setItem("Syntoltr", !0),
        localStorage.removeItem("Syntortl"),
        w();
    }),
    k.addEventListener("click", () => {
      let l = document.querySelector("html");
      S(),
        localStorage.clear(),
        l.removeAttribute("dir", "rtl"),
        l.setAttribute("dir", "ltr"),
        l.style.removeProperty("--color-primary"),
        l.style.removeProperty("--color-primary-rgb"),
        l.style.removeProperty("--body-bg"),
        l.style.removeProperty("--dark-bg"),
        $(),
        d();
    });
}

function w() {
  document.querySelector("html").setAttribute("dir", "ltr"),
    (document.querySelector("#switcher-ltr").checked = !0),
    S();
}

function G() {
  document.querySelector("html").setAttribute("dir", "rtl"), S();
}

function I() {
  let t = document.querySelector("html");
  t.classList.remove("dark"),
    t.classList.add("light"),
    t.style.removeProperty("--color-primary"),
    t.style.removeProperty("--color-primary-rgb"),
    t.style.removeProperty("--body-bg"),
    t.style.removeProperty("--dark-bg"),
    t.setAttribute("data-menu-styles", ""),
    t.setAttribute("data-header-styles", ""),
    localStorage.removeItem("Syntodarktheme"),
    localStorage.setItem("Syntolighttheme", !0),
    localStorage.removeItem("bodyBgRGB"),
    localStorage.removeItem("darkBgRGB"),
    localStorage.removeItem("primaryRGB1"),
    localStorage.removeItem("primaryRGB"),
    (document.querySelector("#switcher-light-theme").checked = !0),
    S();
}

function P() {
  let t = document.querySelector("html");
  t.classList.add("dark"),
    t.classList.remove("light"),
    document
      .querySelector("html")
      .style.removeProperty("--body-bg", localStorage.bodyBgRGB),
    document
      .querySelector("html")
      .style.removeProperty("--dark-bg", localStorage.darkBgRGB),
    d(),
    localStorage.setItem("Syntodarktheme", !0),
    localStorage.removeItem("Syntolighttheme"),
    S(),
    t.style.removeProperty("--color-primary"),
    t.style.removeProperty("--color-primary-rgb");
}

function $() {
  let t = document.querySelector("html");
  S(),
    localStorage.clear(),
    d(),
    w(),
    I(),
    t.setAttribute("data-menu-styles", "light");
}

function S() {
  localStorage.getItem("Syntodarktheme") &&
    (document.querySelector("#switcher-dark-theme").checked = !0),
    localStorage.getItem("Syntolighttheme") &&
      (document.querySelector("#switcher-light-theme").checked = !0),
    localStorage.getItem("Syntortl") &&
      (document.querySelector("#switcher-rtl").checked = !0),
    localStorage.getItem("Syntoltr") &&
      (document.querySelector("#switcher-ltr").checked = !0);
}
let q;

function d() {
  (q = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary-rgb")
    .trim()),
    localStorage.getItem("primaryRGB"),
    document.querySelector("#salesOverview") !== null &&
      setTimeout(() => {
        salesOverview();
      }, 100);
}
d();

function A() {
  if (
    (localStorage.primaryRGB &&
      (document.querySelector(".theme-container-primary") &&
        (document.querySelector(".theme-container-primary").value =
          localStorage.primaryRGB),
      document
        .querySelector("html")
        .style.setProperty("--color-primary", localStorage.primaryRGB1),
      document
        .querySelector("html")
        .style.setProperty("--color-primary-rgb", localStorage.primaryRGB)),
    localStorage.bodyBgRGB)
  ) {
    document.querySelector(".theme-container-background") &&
      (document.querySelector(".theme-container-background").value =
        localStorage.bodyBgRGB),
      document
        .querySelector("html")
        .style.setProperty("--body-bg", localStorage.bodyBgRGB),
      document
        .querySelector("html")
        .style.setProperty("--dark-bg", localStorage.darkBgRGB);
    let t = document.querySelector("html");
    t.classList.add("dark"),
      t.classList.remove("light"),
      t.setAttribute("data-menu-styles", "dark"),
      t.setAttribute("data-header-styles", "dark"),
      (document.querySelector("#switcher-dark-theme").checked = !0);
  }
  if (localStorage.Syntodarktheme) {
    let t = document.querySelector("html");
    t.classList.add("dark"), t.classList.remove("light");
  }
  if (localStorage.Syntortl) {
    let t = document.querySelector("html");
    setTimeout(() => {
      t.setAttribute("dir", "rtl");
    }, 100);
  }
}
window.addEventListener("scroll", R);

function R() {
  for (var t = document.querySelectorAll(".reveal"), r = 0; r < t.length; r++) {
    var s = window.innerHeight,
      a = t[r].getBoundingClientRect().top,
      n = 150;
    a < s - n ? t[r].classList.add("active") : t[r].classList.remove("active");
  }
}
R();
const E = document.querySelectorAll(".side-menu__item");
E.forEach((t) => {
  t != "javascript:void(0);" &&
    t !== "#" &&
    t.addEventListener("click", (r) => {
      var s;
      r.preventDefault(),
        (s = document.querySelector(t.getAttribute("href"))) == null ||
          s.scrollIntoView({ behavior: "smooth", offsetTop: 1 - 60 });
    });
});

function M(t) {
  const r = document.querySelectorAll(".side-menu__item"),
    s =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  r.forEach((a) => {
    var u;
    const n = a.getAttribute("href");
    let o;
    n != "javascript:void(0);" && n !== "#" && (o = document.querySelector(n));
    const i = s + 73;
    (o == null ? void 0 : o.offsetTop) <= i &&
    (o == null ? void 0 : o.offsetTop) + o.offsetHeight > i
      ? (a.parentElement.parentElement.classList.contains("child1") &&
          a.parentElement.parentElement.parentElement.children[0].classList.add(
            "active"
          ),
        a.classList.add("active"),
        (u = a.closest(".child1")) != null &&
          u.previousElementSibling &&
          a.closest(".child1").previousElementSibling.classList.add("active"))
      : a.classList.remove("active");
  });
}
window.document.addEventListener("scroll", M);
var b = 1;
setInterval(() => {
  document.querySelectorAll(".count-up").forEach((t) => {
    t.getAttribute("data-count") >= b && ((b = b + 1), (t.innerText = b));
  });
}, 50);
new Swiper(".testimonials-swipe", {
  autoplay: { delay: 2e3, disableOnInteraction: !1 },
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: !0,
  freeMode: !0,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 2, spaceBetween: 50 },
    1400: { slidesPerView: 4, spaceBetween: 50 },
  },
});
let v = document.querySelector("html");
v.setAttribute("dir", "ltr");
v.setAttribute("data-nav-layout", "horizontal");
v.setAttribute("data-nav-style", "menu-click");
v.setAttribute("data-menu-position", "fixed");
(() => {
  var t = document.querySelector(".app-sidebar");
  t.clientHeight;

  function r() {
    window.pageYOffset > 2
      ? t.classList.add("sticky-pin")
      : t.classList.remove("sticky-pin");
  }
  window.addEventListener("scroll", r),
    window.addEventListener("DOMContentLoaded", r);
})();
