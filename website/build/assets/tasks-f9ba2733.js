(function() {
    dragula([
            document.querySelector("#task-left"),
            document.querySelector("#task-left1"),
            document.querySelector("#task-right"),
            document.querySelector("#task-right1"),
        ]),
        document.addEventListener("DOMContentLoaded", function() {
            var e = document.querySelectorAll(".task-choice");
            for (let t = 0; t < e.length; ++t) {
                var o = e[t];
                new Choices(o, {
                    allowHTML: !0,
                    searchEnabled: !1,
                    removeItemButton: !0,
                });
            }
        }),
        flatpickr("#addignedDate", { enableTime: !0, dateFormat: "Y-m-d H:i" }),
        flatpickr("#targetDate", { enableTime: !0, dateFormat: "Y-m-d H:i" }),
        new Choices("#choices-multiple-remove-button", {
            allowHTML: !0,
            removeItemButton: !0,
        }),
        document.querySelectorAll(".task-remove").forEach((e) => {
            e.onclick = () => {
                e.closest(".task-box").remove();
            };
        });
})();