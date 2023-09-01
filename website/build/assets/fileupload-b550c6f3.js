(function () {
  new Dropzone(".dropzone", { url: "file-upload" }).on("addedfile", (t) => {}),
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
  const e = document.querySelector(".basic-filepond"),
    i = document.querySelector(".multiple-filepond"),
    o = document.querySelector(".circular-filepond");
  FilePond.create(e),
    FilePond.create(i),
    FilePond.create(o, {
      labelIdle: '<span class="filepond--label-action">Choose File</span>',
      imagePreviewHeight: 170,
      imageCropAspectRatio: "1:1",
      imageResizeTargetWidth: 200,
      imageResizeTargetHeight: 200,
      stylePanelLayout: "compact circle",
      styleLoadIndicatorPosition: "center bottom",
      styleProgressIndicatorPosition: "right bottom",
      styleButtonRemoveItemPosition: "left bottom",
      styleButtonProcessItemPosition: "right bottom",
    });
})();
