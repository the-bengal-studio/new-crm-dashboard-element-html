let l = function (e) {
    var a = new FileReader();
    (a.onload = function () {
      var t = document.getElementById("profile-img");
      e.target.files[0].type.match("image.*")
        ? (t.src = a.result)
        : ((e.target.value = ""), alert("please select a valid image"));
    }),
      a.readAsDataURL(e.target.files[0]);
  },
  r = function (e) {
    var a = new FileReader();
    (a.onload = function () {
      var t = document.getElementById("profile-img2");
      e.target.files[0].type.match("image.*")
        ? (t.src = a.result)
        : ((e.target.value = ""), alert("please select a valid image"));
    }),
      a.readAsDataURL(e.target.files[0]);
  };
(function () {
  let e = document.querySelector("#profile-change"),
    a = document.querySelector("#profile-change2");
  e.addEventListener("change", l), a.addEventListener("change", r);
})();
