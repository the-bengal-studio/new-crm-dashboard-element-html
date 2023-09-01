window.addEventListener("load", () => {
  const t = document.querySelectorAll("[data-hs-theme-click-value]");
  let e = document.querySelector("html");
  t.forEach((r) => {
    r.addEventListener("click", () => {
      e.classList.contains("dark")
        ? (e.classList.remove("dark"),
          localStorage.removeItem("layout-theme"),
          localStorage.removeItem("Syntodarktheme"),
          localStorage.removeItem("SyntoMenu"),
          localStorage.removeItem("SyntoHeader"),
          localStorage.removeItem("darkBgRGB"),
          localStorage.removeItem("bodyBgRGB"),
          e.setAttribute("data-menu-styles", "dark"),
          e.setAttribute("data-header-styles", "light"),
          e.style.removeProperty("--body-bg"),
          e.style.removeProperty("--dark-bg"),
          document.querySelector("#hs-overlay-switcher") &&
            (document.getElementById("switcher-light-theme").checked = !0))
        : (document.querySelector("#hs-overlay-switcher") &&
            (document.getElementById("switcher-dark-theme").checked = !0),
          e.setAttribute("class", "dark"),
          localStorage.setItem("layout-theme", "dark"),
          e.setAttribute("data-header-styles", "dark"),
          e.setAttribute("data-menu-styles", "dark"),
          localStorage.removeItem("SyntoMenu"),
          localStorage.removeItem("SyntoHeader"),
          localStorage.setItem("Syntodarktheme", !0),
          localStorage.removeItem("Syntolighttheme"),
          localStorage.setItem("SyntoMenu", "dark"),
          localStorage.setItem("SyntoHeader", "dark"));
    });
  });
});
