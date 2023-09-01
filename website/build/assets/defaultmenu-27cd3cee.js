var P = Object.defineProperty;
var W = (e, t, i) =>
  t in e
    ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (e[t] = i);
var y = (e, t, i) => (W(e, typeof t != "symbol" ? t + "" : t, i), i);
const s = document.getElementById("sidebar");
let p = document.querySelector(".main-content");
const R = document.querySelectorAll(".nav > ul > .slide.has-sub"),
  C = document.querySelectorAll(".nav > ul > .slide.has-sub > a"),
  N = document.querySelectorAll(
    ".nav > ul > .slide.has-sub .slide.has-sub > a"
  );
class T {
  constructor(t, i) {
    y(this, "instance", null);
    y(this, "reference", null);
    y(this, "popperTarget", null);
    this.init(t, i);
  }
  init(t, i) {
    (this.reference = t),
      (this.popperTarget = i),
      (this.instance = Popper.createPopper(this.reference, this.popperTarget, {
        placement: "bottom",
        strategy: "relative",
        resize: !0,
        modifiers: [{ name: "computeStyles", options: { adaptive: !1 } }],
      })),
      document.addEventListener(
        "click",
        (l) => this.clicker(l, this.popperTarget, this.reference),
        !1
      );
    const n = new ResizeObserver(() => {
      this.instance.update();
    });
    n.observe(this.popperTarget), n.observe(this.reference);
  }
  clicker(t, i, n) {
    s.classList.contains("collapsed") &&
      !i.contains(t.target) &&
      !n.contains(t.target) &&
      this.hide();
  }
  hide() {}
}
class I {
  constructor() {
    y(this, "subMenuPoppers", []);
    this.init();
  }
  init() {
    R.forEach((t) => {
      this.subMenuPoppers.push(new T(t, t.lastElementChild)),
        this.closePoppers();
    });
  }
  togglePopper(t) {
    window.getComputedStyle(t).visibility === "hidden" &&
    window.getComputedStyle(t).visibility === void 0
      ? (t.style.visibility = "visible")
      : (t.style.visibility = "hidden");
  }
  updatePoppers() {
    this.subMenuPoppers.forEach((t) => {
      (t.instance.state.elements.popper.style.display = "none"),
        t.instance.update();
    });
  }
  closePoppers() {
    this.subMenuPoppers.forEach((t) => {
      t.hide();
    });
  }
}
const S = (e, t = 300) => {
    const { parentElement: i } = e;
    i.classList.remove("open"),
      (e.style.transitionProperty = "height, margin, padding"),
      (e.style.transitionDuration = `${t}ms`),
      (e.style.boxSizing = "border-box"),
      (e.style.height = `${e.offsetHeight}px`),
      e.offsetHeight,
      (e.style.overflow = "hidden"),
      (e.style.height = 0),
      (e.style.paddingTop = 0),
      (e.style.paddingBottom = 0),
      (e.style.marginTop = 0),
      (e.style.marginBottom = 0),
      window.setTimeout(() => {
        (e.style.display = "none"),
          e.style.removeProperty("height"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          e.style.removeProperty("overflow"),
          e.style.removeProperty("transition-duration"),
          e.style.removeProperty("transition-property");
      }, t);
  },
  q = (e, t = 300) => {
    const { parentElement: i } = e;
    i.classList.add("open"), e.style.removeProperty("display");
    let { display: n } = window.getComputedStyle(e);
    n === "none" && (n = "block"), (e.style.display = n);
    const l = e.offsetHeight;
    (e.style.overflow = "hidden"),
      (e.style.height = 0),
      (e.style.paddingTop = 0),
      (e.style.paddingBottom = 0),
      (e.style.marginTop = 0),
      (e.style.marginBottom = 0),
      e.offsetHeight,
      (e.style.boxSizing = "border-box"),
      (e.style.transitionProperty = "height, margin, padding"),
      (e.style.transitionDuration = `${t}ms`),
      (e.style.height = `${l}px`),
      e.style.removeProperty("padding-top"),
      e.style.removeProperty("padding-bottom"),
      e.style.removeProperty("margin-top"),
      e.style.removeProperty("margin-bottom"),
      window.setTimeout(() => {
        e.style.removeProperty("height"),
          e.style.removeProperty("overflow"),
          e.style.removeProperty("transition-duration"),
          e.style.removeProperty("transition-property");
      }, t);
  },
  k = (e, t = 300) => {
    let i = document.querySelector("html");
    if (
      !(
        (i.getAttribute("data-nav-style") === "menu-hover" &&
          i.getAttribute("toggled") === "menu-hover-closed" &&
          window.innerWidth >= 992) ||
        (i.getAttribute("data-nav-style") === "icon-hover" &&
          i.getAttribute("toggled") === "icon-hover-closed" &&
          window.innerWidth >= 992)
      ) &&
      e &&
      e.nodeType != 3
    )
      return window.getComputedStyle(e).display === "none" ? q(e, t) : S(e, t);
  };
new I();
const O = document.querySelectorAll(".slide.has-sub.open");
O.forEach((e) => {
  e.lastElementChild.style.display = "block";
});
C.forEach((e) => {
  e.addEventListener("click", () => {
    let t = document.querySelector("html");
    if (
      !(
        (t.getAttribute("data-nav-style") === "menu-hover" &&
          t.getAttribute("toggled") === "menu-hover-closed" &&
          window.innerWidth >= 992) ||
        (t.getAttribute("data-nav-style") === "icon-hover" &&
          t.getAttribute("toggled") === "icon-hover-closed" &&
          window.innerWidth >= 992)
      )
    ) {
      const i = e.closest(".nav.sub-open");
      i &&
        i.querySelectorAll(":scope > ul > .slide.has-sub > a").forEach((n) => {
          (n.nextElementSibling.style.display === "block" ||
            window.getComputedStyle(n.nextElementSibling).display ===
              "block") &&
            S(n.nextElementSibling);
        }),
        k(e.nextElementSibling);
    }
  });
});
N.forEach((e) => {
  document.querySelector("html"),
    e.addEventListener("click", () => {
      const t = e.closest(".slide-menu");
      t &&
        t.querySelectorAll(":scope .slide.has-sub > a").forEach((i) => {
          var n;
          i.nextElementSibling &&
            ((n = i.nextElementSibling) == null ? void 0 : n.style.display) ===
              "block" &&
            S(i.nextElementSibling);
        }),
        k(e.nextElementSibling);
    });
});
window.addEventListener("resize", () => {
  let e = document.querySelector(".main-content");
  setTimeout(() => {
    window.innerWidth <= 992
      ? e.addEventListener("click", v)
      : e.removeEventListener("click", v);
  }, 100);
});
let E, r;
(() => {
  let e = document.querySelector("html");
  (E = document.querySelector(".sidebar-toggle")),
    E.addEventListener("click", g);
  let t = document.querySelector(".main-content");
  window.innerWidth <= 992
    ? t.addEventListener("click", v)
    : t.removeEventListener("click", v),
    (r = [window.innerWidth]),
    L(),
    e.getAttribute("data-nav-layout") === "horizontal" &&
    window.innerWidth >= 992
      ? (d(), t.addEventListener("click", d))
      : t.removeEventListener("click", d),
    window.addEventListener("resize", x),
    A(),
    !localStorage.getItem("Syntolayout") &&
      !localStorage.getItem("Syntonavstyles") &&
      !localStorage.getItem("Syntoverticalstyles") &&
      !document.querySelector(".landing-body") &&
      document.querySelector("html").getAttribute("data-nav-layout") !==
        "horizontal" &&
      !e.getAttribute("data-vertical-style") &&
      !e.getAttribute("data-nav-style") &&
      M(),
    g(),
    (e.getAttribute("data-nav-style") === "menu-hover" ||
      e.getAttribute("data-nav-style") === "icon-hover") &&
      window.innerWidth >= 992 &&
      d(),
    window.innerWidth < 992 && e.setAttribute("toggled", "close");
})();

function x() {
  let e = document.querySelector("html"),
    t = document.querySelector(".main-content");
  r.push(window.innerWidth),
    r.length > 2 && r.shift(),
    r.length > 1 &&
      (r[r.length - 1] < 992 &&
        r[r.length - 2] >= 992 &&
        (t.addEventListener("click", v),
        L(),
        g(),
        t.removeEventListener("click", d)),
      r[r.length - 1] >= 992 &&
        r[r.length - 2] < 992 &&
        (t.removeEventListener("click", v),
        g(),
        e.getAttribute("data-nav-layout") === "horizontal"
          ? (d(), t.addEventListener("click", d))
          : t.removeEventListener("click", d),
        !document.querySelector("html").getAttribute("toggled") ==
          "double-menu-open" && e.removeAttribute("toggled"))),
    _();
}

function v() {
  document.querySelector("html").setAttribute("toggled", "close"),
    document.querySelector("#responsive-overlay").classList.remove("active");
}

function g() {
  let e = document.querySelector("html"),
    t = e.getAttribute("data-nav-layout");
  if (window.innerWidth >= 992) {
    if (t === "vertical") {
      switch (
        (s.removeEventListener("mouseenter", u),
        s.removeEventListener("mouseleave", m),
        s.removeEventListener("click", b),
        p.removeEventListener("click", f),
        document
          .querySelectorAll(".main-menu li > .side-menu__item")
          .forEach((o) => o.removeEventListener("click", w)),
        e.getAttribute("data-vertical-style"))
      ) {
        case "closed":
          e.removeAttribute("data-nav-style"),
            e.getAttribute("toggled") === "close-menu-close"
              ? e.removeAttribute("toggled")
              : e.setAttribute("toggled", "close-menu-close");
          break;
        case "overlay":
          e.removeAttribute("data-nav-style"),
            e.getAttribute("toggled") === "icon-overlay-close"
              ? (e.removeAttribute("toggled", "icon-overlay-close"),
                s.removeEventListener("mouseenter", u),
                s.removeEventListener("mouseleave", m))
              : window.innerWidth >= 992
              ? (e.setAttribute("toggled", "icon-overlay-close"),
                s.addEventListener("mouseenter", u),
                s.addEventListener("mouseleave", m))
              : (s.removeEventListener("mouseenter", u),
                s.removeEventListener("mouseleave", m));
          break;
        case "icontext":
          e.removeAttribute("data-nav-style"),
            e.getAttribute("toggled") === "icon-text-close"
              ? (e.removeAttribute("toggled", "icon-text-close"),
                s.removeEventListener("click", b),
                p.removeEventListener("click", f))
              : (e.setAttribute("toggled", "icon-text-close"),
                window.innerWidth >= 992
                  ? (s.addEventListener("click", b),
                    p.addEventListener("click", f))
                  : (s.removeEventListener("click", b),
                    p.removeEventListener("click", f)));
          break;
        case "doublemenu":
          if (
            (e.removeAttribute("data-nav-style"),
            e.getAttribute("toggled") === "double-menu-open")
          )
            e.setAttribute("toggled", "double-menu-close"),
              document.querySelector(".slide-menu") &&
                document.querySelectorAll(".slide-menu").forEach((a) => {
                  a.classList.contains("double-menu-active") &&
                    a.classList.remove("double-menu-active");
                });
          else {
            let o = document.querySelector(".side-menu__item.active");
            o &&
              (e.setAttribute("toggled", "double-menu-open"),
              o.nextElementSibling
                ? o.nextElementSibling.classList.add("double-menu-active")
                : document.querySelector("html").setAttribute("toggled", ""));
          }
          z();
          break;
        case "detached":
          e.getAttribute("toggled") === "detached-close"
            ? (e.removeAttribute("toggled", "detached-close"),
              s.removeEventListener("mouseenter", u),
              s.removeEventListener("mouseleave", m))
            : (e.setAttribute("toggled", "detached-close"),
              window.innerWidth >= 992
                ? (s.addEventListener("mouseenter", u),
                  s.addEventListener("mouseleave", m))
                : (s.removeEventListener("mouseenter", u),
                  s.removeEventListener("mouseleave", m)));
          break;
        case "default":
          M(), e.removeAttribute("toggled");
      }
      switch (e.getAttribute("data-nav-style")) {
        case "menu-click":
          e.getAttribute("toggled") === "menu-click-closed"
            ? e.removeAttribute("toggled")
            : e.setAttribute("toggled", "menu-click-closed");
          break;
        case "menu-hover":
          e.getAttribute("toggled") === "menu-hover-closed"
            ? (e.removeAttribute("toggled"), L())
            : (e.setAttribute("toggled", "menu-hover-closed"), d());
          break;
        case "icon-click":
          e.getAttribute("toggled") === "icon-click-closed"
            ? e.removeAttribute("toggled")
            : e.setAttribute("toggled", "icon-click-closed");
          break;
        case "icon-hover":
          e.getAttribute("toggled") === "icon-hover-closed"
            ? (e.removeAttribute("toggled"), L())
            : (e.setAttribute("toggled", "icon-hover-closed"), d());
          break;
      }
    }
  } else if (e.getAttribute("toggled") === "close") {
    e.setAttribute("toggled", "open");
    let i = document.createElement("div");
    (i.id = "responsive-overlay"),
      setTimeout(() => {
        document.querySelector("html").getAttribute("toggled") == "open" &&
          (document
            .querySelector("#responsive-overlay")
            .classList.add("active"),
          document
            .querySelector("#responsive-overlay")
            .addEventListener("click", () => {
              document
                .querySelector("#responsive-overlay")
                .classList.remove("active"),
                v();
            })),
          window.addEventListener("resize", () => {
            window.screen.width >= 992 &&
              document
                .querySelector("#responsive-overlay")
                .classList.remove("active");
          });
      }, 100);
  } else e.setAttribute("toggled", "close");
}

function u() {
  document.querySelector("html").setAttribute("icon-overlay", "open");
}

function m() {
  document.querySelector("html").removeAttribute("icon-overlay");
}

function b() {
  document.querySelector("html").setAttribute("icon-text", "open");
}

function f() {
  document.querySelector("html").removeAttribute("icon-text");
}

function M() {
  let e = document.querySelector("html");
  e.setAttribute("data-nav-layout", "vertical"),
    e.setAttribute("data-vertical-style", "overlay"),
    g();
}

function L() {
  let e = window.location.pathname.split("/")[0];
  (e = location.pathname == "/" ? "index" : location.pathname.substring(1)),
    (e = e.substring(e.lastIndexOf("/") + 1)),
    document.querySelectorAll(".side-menu__item").forEach((i) => {
      if (
        (e === "/" && (e = "index"),
        i.getAttribute("href") === window.location.href)
      ) {
        i.classList.add("active"), i.parentElement.classList.add("active");
        let n = i.closest("ul"),
          l = i.closest("ul:not(.main-menu)"),
          o = !0;
        for (; o; )
          n
            ? (n.classList.add("active"),
              n.previousElementSibling.classList.add("active"),
              n.parentElement.classList.add("active"),
              q(n),
              (n = n.parentElement.closest("ul")),
              n &&
                n.closest("ul:not(.main-menu)") &&
                (l = n.closest("ul:not(.main-menu)")),
              l || (o = !1))
            : (o = !1);
      }
    });
}

function d() {
  document.querySelectorAll("ul.slide-menu").forEach((t) => {
    let i = t.closest("ul"),
      n = t.closest("ul:not(.main-menu)");
    if (i) {
      let l = i.closest("ul.main-menu");
      for (; l; )
        i.classList.add("active"),
          S(i),
          (i = i.parentElement.closest("ul")),
          (n = i.closest("ul:not(.main-menu)")),
          n || (l = !1);
    }
  });
}

function A() {
  function e() {
    let t = document.querySelectorAll(".slide"),
      i = document.querySelectorAll(".slide-menu");
    t.forEach((n, l) => {
      n.classList.contains("is-expanded") == !0 &&
        n.classList.remove("is-expanded");
    }),
      i.forEach((n, l) => {
        n.classList.contains("open") == !0 &&
          (n.classList.remove("open"), (n.style.display = "none"));
      });
  }
  e();
}
let h = document.querySelector(".slide-left"),
  c = document.querySelector(".slide-right");
h.addEventListener("click", () => {
  let e = document.querySelector(".main-menu"),
    t = document.querySelector(".main-sidebar"),
    i = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
    n = Math.ceil(
      Number(window.getComputedStyle(e).marginRight.split("px")[0])
    ),
    l = t.offsetWidth;
  e.scrollWidth > t.offsetWidth
    ? document.querySelector("html").getAttribute("dir") !== "rtl"
      ? i < 0 && !(Math.abs(i) < l)
        ? ((e.style.marginRight = 0),
          (e.style.marginLeft =
            Number(e.style.marginLeft.split("px")[0]) + Math.abs(l) + "px"),
          c.classList.remove("hidden"))
        : (i >= 0,
          (e.style.marginLeft = "0px"),
          h.classList.add("hidden"),
          c.classList.remove("hidden"))
      : n < 0 && !(Math.abs(n) < l)
      ? ((e.style.marginLeft = 0),
        (e.style.marginRight =
          Number(e.style.marginRight.split("px")[0]) + Math.abs(l) + "px"),
        c.classList.remove("hidden"))
      : (n >= 0,
        (e.style.marginRight = "0px"),
        h.classList.add("hidden"),
        c.classList.remove("hidden"))
    : ((document.querySelector(".main-menu").style.marginLeft = "0px"),
      (document.querySelector(".main-menu").style.marginRight = "0px")),
    A();
});
c.addEventListener("click", () => {
  let e = document.querySelector(".main-menu"),
    t = document.querySelector(".main-sidebar"),
    i = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
    n = Math.ceil(
      Number(window.getComputedStyle(e).marginRight.split("px")[0])
    ),
    l = e.scrollWidth - t.offsetWidth,
    o = t.offsetWidth;
  e.scrollWidth > t.offsetWidth &&
    (document.querySelector("html").getAttribute("dir") !== "rtl"
      ? Math.abs(l) > Math.abs(i) &&
        ((e.style.marginRight = 0),
        Math.abs(l) > Math.abs(i) + o ||
          ((o = Math.abs(l) - Math.abs(i)), c.classList.add("hidden")),
        (e.style.marginLeft =
          Number(e.style.marginLeft.split("px")[0]) - Math.abs(o) + "px"),
        h.classList.remove("hidden"))
      : Math.abs(l) > Math.abs(n) &&
        ((e.style.marginLeft = 0),
        Math.abs(l) > Math.abs(n) + o ||
          ((o = Math.abs(l) - Math.abs(n)), c.classList.add("hidden")),
        (e.style.marginRight =
          Number(e.style.marginRight.split("px")[0]) - Math.abs(o) + "px"),
        h.classList.remove("hidden"))),
    A();
});

function _() {
  let e = document.querySelector(".main-menu"),
    t = document.querySelector(".main-sidebar"),
    i = document.querySelector(".slide-left"),
    n = document.querySelector(".slide-right"),
    l = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
    o = Math.ceil(
      Number(window.getComputedStyle(e).marginRight.split("px")[0])
    ),
    a = e.scrollWidth - t.offsetWidth;
  e.scrollWidth > t.offsetWidth
    ? (n.classList.remove("hidden"), i.classList.add("hidden"))
    : (n.classList.add("hidden"),
      i.classList.add("hidden"),
      (e.style.marginLeft = "0px"),
      (e.style.marginRight = "0px")),
    document.querySelector("html").getAttribute("dir") !== "rtl"
      ? (e.scrollWidth > t.offsetWidth &&
          Math.abs(a) < Math.abs(l) &&
          ((e.style.marginLeft = -a + "px"),
          i.classList.remove("hidden"),
          n.classList.add("hidden")),
        l == 0
          ? (i.classList.add("hidden"), n.classList.remove("hidden"))
          : i.classList.remove("hidden"))
      : (e.scrollWidth > t.offsetWidth &&
          Math.abs(a) < Math.abs(o) &&
          ((e.style.marginRight = -a + "px"),
          i.classList.remove("hidden"),
          n.classList.add("hidden")),
        o == 0 ? i.classList.add("hidden") : i.classList.remove("hidden")),
    (l != 0 || o != 0) && i.classList.remove("hidden");
}

function z() {
  window.innerWidth >= 992 &&
    (document.querySelector("html"),
    document
      .querySelectorAll(".main-menu > li > .side-menu__item")
      .forEach((t) => {
        t.addEventListener("click", w);
      }));
}

function w() {
  var e = this;
  let t = document.querySelector("html");
  var i = e.nextElementSibling;
  i &&
    (i.classList.contains("double-menu-active") ||
      (document.querySelector(".slide-menu") &&
        document.querySelectorAll(".slide-menu").forEach((l) => {
          l.classList.contains("double-menu-active") &&
            (l.classList.remove("double-menu-active"),
            t.setAttribute("toggled", "double-menu-close"));
        }),
      i.classList.add("double-menu-active"),
      t.setAttribute("toggled", "double-menu-open")));
}
window.addEventListener("unload", () => {
  document.querySelector(".main-content").removeEventListener("click", d),
    window.removeEventListener("resize", x),
    document
      .querySelectorAll(".main-menu li > .side-menu__item")
      .forEach((i) => i.removeEventListener("click", w));
});
let D = () => {
  document.querySelectorAll(".side-menu__item").forEach((e) => {
    if (e.classList.contains("active")) {
      let t = e.getBoundingClientRect();
      e.children[0] &&
        e.parentElement.classList.contains("has-sub") &&
        t.top > 435 &&
        e.scrollIntoView({ behavior: "smooth" });
    }
  });
};
setTimeout(() => {
  D();
}, 300);
document.querySelectorAll(".side-menu__item").forEach((e) => {
  e.addEventListener("click", () => {
    let t = e.parentNode.querySelector(".child2");
    if (t) {
      const i = t.getBoundingClientRect();
      (i.right > window.innerWidth || i.bottom > window.innerHeight) &&
        document.querySelector("html").getAttribute("data-nav-layout") ==
          "horizontal" &&
        document.querySelector("html").getAttribute("dir") == "ltr" &&
        (t.style.setProperty("right", "100%", "important"),
        t.style.setProperty("left", "auto", "important")),
        t.scrollWidth <= t.clientWidth &&
          t.scrollWidth != 0 &&
          document.querySelector("html").getAttribute("data-nav-layout") ==
            "horizontal" &&
          document.querySelector("html").getAttribute("dir") == "rtl" &&
          (t.style.setProperty("left", "100%", "important"),
          t.style.setProperty("right", "auto", "important"));
    }
  });
});
