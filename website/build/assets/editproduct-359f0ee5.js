(function () {
  var e = Quill.import("ui/icons");
  (e.bold = '<i class="ri ri-bold" aria-hidden="true"></i>'),
    (e.italic = '<i class="ri ri-italic" aria-hidden="true"></i>'),
    (e.underline = '<i class="ri ri-underline" aria-hidden="true"></i>'),
    (e.strike = '<i class="ri ri-strikethrough" aria-hidden="true"></i>'),
    (e.list.ordered = '<i class="ri ri-list-ordered" aria-hidden="true"></i>'),
    (e.list.bullet = '<i class="ri ri-list-unordered" aria-hidden="true"></i>'),
    (e.link = '<i class="ri ri-links-line" aria-hidden="true"></i>'),
    (e.image = '<i class="ri ri-image-line" aria-hidden="true"></i>'),
    (e.video = '<i class="ri ri-film-line" aria-hidden="true"></i>'),
    (e["code-block"] = '<i class="ri ri-code-line" aria-hidden="true"></i>');
  var t = [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    ["image", "video"],
  ];
  new Quill("#product-editor", { modules: { toolbar: t }, theme: "snow" }),
    FilePond.registerPlugin(
      FilePondPluginImagePreview,
      FilePondPluginImageExifOrientation,
      FilePondPluginFileValidateSize,
      FilePondPluginFileEncode,
      FilePondPluginImageEdit,
      FilePondPluginFileValidateType,
      FilePondPluginImageCrop,
      FilePondPluginImageResize,
      FilePondPluginImageTransform
    );
  const n = document.querySelector(".multiple-filepond");
  FilePond.create(n),
    document.addEventListener("DOMContentLoaded", function () {
      var r = document.querySelectorAll(".product-tags");
      for (let i = 0; i < r.length; ++i) {
        var l = r[i];
        new Choices(l, {
          allowHTML: !0,
          paste: !1,
          duplicateItemsAllowed: !1,
          editItems: !0,
          removeItemButton: !0,
        });
      }
    }),
    document.addEventListener("DOMContentLoaded", function () {
      var r = document.querySelectorAll(".product-search");
      for (let i = 0; i < r.length; ++i) {
        var l = r[i];
        new Choices(l, {
          allowHTML: !0,
          searchEnabled: !1,
          removeItemButton: !0,
        });
      }
    }),
    flatpickr("#product-datetime", { enableTime: !0, dateFormat: "Y-m-d H:i" });
})();
