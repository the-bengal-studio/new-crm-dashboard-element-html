(function() {
    var n = GLightbox({ selector: ".glightbox" });
    n.on("slide_changed", ({ prev: i, current: l }) => {}),
        GLightbox({ selector: ".gallery" }),
        GLightbox({ selector: ".gallery2" });
    var t = GLightbox({ selector: ".gallery3" });
    t.on("slide_changed", ({ prev: i, current: l }) => {
        const { slideIndex: r, slideNode: g, slideConfig: d, player: e } = l;
        e &&
            (e.ready || e.on("ready", (o) => {}),
                e.on("play", (o) => {}),
                e.on("volumechange", (o) => {}),
                e.on("ended", (o) => {}));
    });
})();