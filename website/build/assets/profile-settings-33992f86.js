let n = function(e) {
        var t = new FileReader();
        (t.onload = function() {
            var a = document.getElementById("profile-img");
            e.target.files[0].type.match("image.*") ?
                (a.src = t.result) :
                ((e.target.value = ""), alert("please select a valid image"));
        }),
        t.readAsDataURL(e.target.files[0]);
    },
    i = function(e) {
        var t = new FileReader();
        (t.onload = function() {
            var a = document.getElementById("profile-img2");
            e.target.files[0].type.match("image.*") ?
                (a.src = t.result) :
                ((e.target.value = ""), alert("please select a valid image"));
        }),
        t.readAsDataURL(e.target.files[0]);
    };
(function() {
    flatpickr(".date", {}),
        document.addEventListener("DOMContentLoaded", function() {
            var a = document.querySelectorAll("[data-trigger]");
            for (let l = 0; l < a.length; ++l) {
                var r = a[l];
                new Choices(r, { allowHTML: !0, searchEnabled: !1 });
            }
        });
    let e = document.querySelector("#profile-change"),
        t = document.querySelector("#profile-change2");
    e.addEventListener("change", n),
        t.addEventListener("change", i),
        document.addEventListener("DOMContentLoaded", function() {
            var a = document.querySelectorAll(".skills");
            for (let l = 0; l < a.length; ++l) {
                var r = a[l];
                new Choices(r, {
                    allowHTML: !0,
                    paste: !1,
                    duplicateItemsAllowed: !1,
                    editItems: !0,
                    removeItemButton: !0,
                });
            }
        });
})();