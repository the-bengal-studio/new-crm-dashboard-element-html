(function() {
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateSize,
        FilePondPluginImageEdit
    );
    const i = document.querySelector(".multiple-filepond");
    FilePond.create(i),
        (Chart.defaults.elements.arc.borderWidth = 0),
        (Chart.defaults.datasets.doughnut.cutout = "75%"),
        new Chart(document.getElementById("storage-circle"), {
            type: "doughnut",
            data: {
                datasets: [{
                    label: "My First Dataset",
                    data: [75, 25],
                    backgroundColor: ["rgb(94, 166, 142)", "rgb(249, 250, 251)"],
                }, ],
            },
            plugins: [{
                afterUpdate: function(e) {
                    e.getDatasetMeta(0).data.forEach(function(a) {
                        a.round = {
                            x: (e.chartArea.left + e.chartArea.right) / 2,
                            y: (e.chartArea.top + e.chartArea.bottom) / 2,
                            radius: (a.outerRadius + a.innerRadius) / 2,
                            thickness: (a.outerRadius - a.innerRadius) / 2,
                            backgroundColor: a.options.backgroundColor,
                        };
                    });
                },
                afterDraw: (e) => {
                    const { ctx: t, canvas: a } = e;
                    e.getDatasetMeta(0).data.forEach((n) => {
                        Math.PI / 2 - n.startAngle;
                        const o = Math.PI / 2 - n.endAngle;
                        t.save(),
                            t.translate(n.round.x, n.round.y),
                            (t.fillStyle = n.options.backgroundColor),
                            t.beginPath(),
                            t.arc(
                                n.round.radius * Math.sin(o),
                                n.round.radius * Math.cos(o),
                                n.round.thickness,
                                0,
                                2 * Math.PI
                            ),
                            t.closePath(),
                            t.fill(),
                            t.restore();
                    });
                },
            }, ],
        });
})();