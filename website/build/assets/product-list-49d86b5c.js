let e = document.querySelector(".check-all");
e.addEventListener("click", t);

function t() {
    e.checked ?
        document
        .querySelectorAll(".product-checkbox input")
        .forEach(function(c) {
            c.closest(".product-list").classList.add("selected"),
                (c.checked = !0);
        }) :
        document
        .querySelectorAll(".product-checkbox input")
        .forEach(function(c) {
            c.closest(".product-list").classList.remove("selected"),
                (c.checked = !1);
        });
}
flatpickr("#daterange", { mode: "range", dateFormat: "d-m-y" });
flatpickr(".product-date", {});
let l = document.querySelectorAll(".product-btn");
l.forEach((c) => {
    c.onclick = () => {
        c.closest(".product-list").remove();
    };
});