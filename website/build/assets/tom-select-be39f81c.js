(function() {
    new TomSelect("#input-tags", { persist: !1, createOnBlur: !0, create: !0 }),
        new TomSelect("#select-beast", {
            create: !0,
            sortField: { field: "text", direction: "asc" },
        }),
        new TomSelect("#select-beast-disabled"),
        new TomSelect("#select-state", { maxItems: 8 });
})();