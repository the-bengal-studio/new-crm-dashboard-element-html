let n = function (e) {
    var t = new FileReader();
    (t.onload = function () {
      var a = document.getElementById("profile-img");
      e.target.files[0].type.match("image.*")
        ? (a.src = t.result)
        : ((e.target.value = ""), alert("please select a valid image"));
    }),
      t.readAsDataURL(e.target.files[0]);
  },
  o = function (e) {
    var t = new FileReader();
    (t.onload = function () {
      var a = document.getElementById("profile-img2");
      e.target.files[0].type.match("image.*")
        ? (a.src = t.result)
        : ((e.target.value = ""), alert("please select a valid image"));
    }),
      t.readAsDataURL(e.target.files[0]);
  };
(function () {
  let e = document.querySelector("#profile-change"),
    t = document.querySelector("#profile-change2");
  e.addEventListener("change", n), t.addEventListener("change", o);
  var a = GLightbox();
  a.on("open", (l) => {}),
    GLightbox({ selector: ".gallery" }),
    document.addEventListener("DOMContentLoaded", function () {
      var l = document.querySelectorAll("[data-trigger]");
      for (let r = 0; r < l.length; ++r) {
        var i = l[r];
        new Choices(i, { allowHTML: !0, searchEnabled: !1 });
      }
    });
})();
