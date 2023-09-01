(function() {
    new Choices(".blog-tag", { allowHTML: !0, removeItemButton: !0 }), new Choices(".blog-tag2", { allowHTML: !0, removeItemButton: !0 }), document.addEventListener("DOMContentLoaded", function() {
        var r = document.querySelectorAll("[data-trigger]");
        for (let i = 0; i < r.length; ++i) {
            var a = r[i];
            new Choices(a, { allowHTML: !0, placeholderValue: "This is a placeholder set in the config", searchPlaceholderValue: "Search Crypto Currency" })
        }
    });
    var e = Quill.import("ui/icons");
    e.bold = '<i class="ri ri-bold" aria-hidden="true"></i>', e.italic = '<i class="ri ri-italic" aria-hidden="true"></i>', e.underline = '<i class="ri ri-underline" aria-hidden="true"></i>', e.strike = '<i class="ri ri-strikethrough" aria-hidden="true"></i>', e.list.ordered = '<i class="ri ri-list-ordered" aria-hidden="true"></i>', e.list.bullet = '<i class="ri ri-list-unordered" aria-hidden="true"></i>', e.link = '<i class="ri ri-links-line" aria-hidden="true"></i>', e.image = '<i class="ri ri-image-line" aria-hidden="true"></i>', e.video = '<i class="ri ri-film-line" aria-hidden="true"></i>', e["code-block"] = '<i class="ri ri-code-line" aria-hidden="true"></i>';
    var l = [
        [{ header: [1, 2, 3, 4, 5, 6, !1] }],
        [{ font: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ color: [] }, { background: [] }],
        ["image", "video"]
    ];
    new Quill("#blog-edit", {
            modules: { toolbar: l },
            theme: "snow"
        }),
        FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation, FilePondPluginFileValidateSize, FilePondPluginImageEdit);
    const t = document.querySelector(".multiple-filepond");
    FilePond.create(t), flatpickr("#blog-date", { altInput: !0, altFormat: "F j, Y", dateFormat: "Y-m-d" }), flatpickr("#blog-time", { enableTime: !0, noCalendar: !0, dateFormat: "H:i", time_24hr: !0 })
})();