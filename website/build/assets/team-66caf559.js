(function() {
    new Choices("#team-choice", {
            allowHTML: !0,
            searchEnabled: !1,
            removeItemButton: !0,
        }),
        document.querySelectorAll(".team-remove").forEach((e) => {
            e.onclick = () => {
                e.closest(".team-box").remove();
            };
        });
})();