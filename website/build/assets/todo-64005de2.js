(function() {
    let o = document.querySelector(".check-all");
    o.addEventListener("click", l);

    function l() {
        o.checked ?
            document.querySelectorAll(".todo-checkbox input").forEach(function(e) {
                e.closest(".todo-box").classList.add("selected"), (e.checked = !0);
            }) :
            document.querySelectorAll(".todo-checkbox input").forEach(function(e) {
                e.closest(".todo-box").classList.remove("selected"), (e.checked = !1);
            });
    }
    dragula([document.querySelector(".todo-drag")]),
        document.addEventListener("DOMContentLoaded", function() {
            var e = document.querySelectorAll(".todo-choice");
            for (let t = 0; t < e.length; ++t) {
                var c = e[t];
                new Choices(c, {
                    allowHTML: !0,
                    searchEnabled: !1,
                    removeItemButton: !0,
                });
            }
        }),
        document.querySelectorAll(".todo-remove").forEach((e) => {
            e.onclick = () => {
                e.closest(".todo-box").remove();
            };
        }),
        flatpickr("#addignedDate", { enableTime: !0, dateFormat: "Y-m-d H:i" }),
        flatpickr("#targetDate", { enableTime: !0, dateFormat: "Y-m-d H:i" }),
        new Choices("#choices-multiple-remove-button", {
            allowHTML: !0,
            removeItemButton: !0,
        });
})();