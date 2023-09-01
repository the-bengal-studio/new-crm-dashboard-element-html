(function () {
  document.querySelector("html"), document.querySelector(".main-content"), o();
})();

function o() {
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
        .style.setProperty("--color-primary-rgb", localStorage.primaryRGB),
      localStorage.primaryRGB == "172, 172, 80" &&
        document.querySelector("#switcher-primary2") &&
        (document.querySelector("#switcher-primary2").checked = !0),
      localStorage.primaryRGB == "58, 88, 146" &&
        document.querySelector("#switcher-primary") &&
        (document.querySelector("#switcher-primary").checked = !0),
      localStorage.primaryRGB == "92, 144, 163" &&
        document.querySelector("#switcher-primary1") &&
        (document.querySelector("#switcher-primary1").checked = !0),
      localStorage.primaryRGB == "165, 94, 131" &&
        document.querySelector("#switcher-primary3") &&
        (document.querySelector("#switcher-primary3").checked = !0),
      localStorage.primaryRGB == "87, 68, 117" &&
        document.querySelector("#switcher-primary4") &&
        (document.querySelector("#switcher-primary4").checked = !0)),
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
    let e = document.querySelector("html");
    e.classList.add("dark"),
      e.classList.remove("light"),
      localStorage.removeItem("Syntolighttheme"),
      e.setAttribute("data-menu-styles", "dark"),
      e.setAttribute("data-header-styles", "dark"),
      !document.querySelector(".authentication-page") &&
        !document.querySelector(".cover1") &&
        (document.querySelector("#switcher-dark-theme").checked = !0),
      localStorage.bodyBgRGB == "64 76 107" &&
        document.querySelector("#switcher-background") &&
        (document.querySelector("#switcher-background").checked = !0),
      localStorage.bodyBgRGB == "95 107 64" &&
        document.querySelector("#switcher-background1") &&
        (document.querySelector("#switcher-background1").checked = !0),
      localStorage.bodyBgRGB == "93 64 107" &&
        document.querySelector("#switcher-background2") &&
        (document.querySelector("#switcher-background2").checked = !0),
      localStorage.bodyBgRGB == "64 101 107" &&
        document.querySelector("#switcher-background3") &&
        (document.querySelector("#switcher-background3").checked = !0),
      localStorage.bodyBgRGB == "107 64 64" &&
        document.querySelector("#switcher-background4") &&
        (document.querySelector("#switcher-background4").checked = !0);
  }
  if (localStorage.Syntodarktheme) {
    let e = document.querySelector("html");
    e.classList.add("dark"), e.classList.remove("light");
  }
  if (localStorage.Syntolighttheme) {
    let e = document.querySelector("html");
    e.classList.add("light"),
      e.classList.remove("dark"),
      document.querySelector("html").getAttribute("data-nav-layout") ==
        "horizontal" &&
        (console.log("hhh"),
        document
          .querySelector("html")
          .setAttribute("data-menu-styles", "light"));
  }
  if (
    (localStorage.Syntortl &&
      document.querySelector("html").setAttribute("dir", "rtl"),
    localStorage.Syntolayout)
  ) {
    let e = document.querySelector("html");
    switch (localStorage.getItem("Syntolayout")) {
      case "vertical":
        e.setAttribute("data-nav-layout", "vertical");
        break;
      case "horizontal":
        e.setAttribute("data-nav-layout", "horizontal");
        let t = document.querySelector(".main-menu"),
          r = document.querySelector(".main-sidebar");
        setTimeout(() => {
          !document.querySelector(".authentication-page") &&
            !document.querySelector(".cover1") &&
            t.scrollWidth < r.offsetWidth &&
            (document.getElementById("slide-right").classList.add("hidden"),
            document.getElementById("slide-left").classList.add("hidden"));
        }, 500);
        break;
    }
  }
}
