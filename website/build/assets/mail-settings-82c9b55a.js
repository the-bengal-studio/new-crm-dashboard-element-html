let r = function(a) {
    var e = new FileReader();
    (e.onload = function() {
        var t = document.getElementById("profile-img");
        a.target.files[0].type.match("image.*") ?
            (t.src = e.result) :
            ((a.target.value = ""), alert("please select a valid image"));
    }),
    e.readAsDataURL(a.target.files[0]);
};
(function() {
    document.addEventListener("DOMContentLoaded", function() {
            var e = document.querySelectorAll("[data-trigger]");
            for (let l = 0; l < e.length; ++l) {
                var t = e[l];
                new Choices(t, {
                    allowHTML: !0,
                    placeholderValue: "",
                    searchPlaceholderValue: "",
                });
            }
        }),
        document.querySelector("#profile-change").addEventListener("change", r);
})();