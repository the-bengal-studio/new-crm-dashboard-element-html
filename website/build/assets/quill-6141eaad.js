(function () {
  var i = Quill.import("ui/icons");
  (i.bold = '<i class="ri ri-bold" aria-hidden="true"></i>'),
    (i.italic = '<i class="ri ri-italic" aria-hidden="true"></i>'),
    (i.underline = '<i class="ri ri-underline" aria-hidden="true"></i>'),
    (i.strike = '<i class="ri ri-strikethrough" aria-hidden="true"></i>'),
    (i.list.ordered = '<i class="ri ri-list-ordered" aria-hidden="true"></i>'),
    (i.list.bullet = '<i class="ri ri-list-unordered" aria-hidden="true"></i>'),
    (i.link = '<i class="ri ri-links-line" aria-hidden="true"></i>'),
    (i.image = '<i class="ri ri-image-line" aria-hidden="true"></i>'),
    (i.video = '<i class="ri ri-film-line" aria-hidden="true"></i>'),
    (i["code-block"] = '<i class="ri ri-code-line" aria-hidden="true"></i>');
  var e = [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", !1, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image", "video"],
    ["clean"],
  ];
  new Quill("#editor", { modules: { toolbar: e }, theme: "snow" }),
    new Quill("#quillEditorModal", { modules: { toolbar: e }, theme: "snow" });
  var l = [
    ["bold", "italic", "underline"],
    [{ header: 1 }, { header: 2 }, "blockquote"],
    ["link", "image", "code-block"],
  ];
  new Quill("#quillInline", {
    modules: { toolbar: l },
    bounds: "#quillInline",
    scrollingContainer: "#scrolling-container",
    placeholder: "Write something...",
    theme: "bubble",
  });
})();
