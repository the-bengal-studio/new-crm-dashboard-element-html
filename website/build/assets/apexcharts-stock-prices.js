(function() {
    new Swiper(".mySwiper8", {
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        spaceBetween: 30,
        effect: "fade",
    });
})(); = document.getElementById("salesOverview");
if (U !== null) {
    U.innerHTML = "";
    var ue = {
            series: [{
                    name: "Income",
                    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
                },
                {
                    name: "Expenses",
                    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
                },
            ],
            chart: {
                animations: { enabled: !1 },
                height: 300,
                type: "bar",
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "55%",
                    endingShape: "rounded",
                    borderRadius: 5,
                },
            },
            dataLabels: { enabled: !1 },
            legend: { show: !1 },
            stroke: { show: !0, width: 3, colors: ["transparent"] },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                    formatter: function(e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
        },
        Qe = new ApexCharts(document.querySelector("#salesOverview"), ue);
    Qe.render();
}
var U = document.getElementById("visitors");
if (U !== null) {
    U.innerHTML = "";
    var ue = {
            series: [{ data: [400, 470, 540, 690, 1100, 1380] }],
            chart: { type: "bar", height: 370, toolbar: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 1,
                    colorStops: [
                        { offset: 0, color: "#60a5fa", opacity: 1 },
                        { offset: 100, color: "#5a66f1", opacity: 1 },
                    ],
                },
            },
            plotOptions: { bar: { borderRadius: 4, horizontal: !0 } },
            colors: ["#5e76a6"],
            grid: { borderColor: "transparent" },
            dataLabels: { enabled: !1 },
            xaxis: {
                categories: [
                    "Facebook",
                    "Instagram",
                    "Dribble",
                    "Twitter",
                    "Chrome",
                    "Pininterest",
                ],
                labels: {
                    show: !0,
                    style: {
                        colors: "#adb5be",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label",
                    },
                },
            },
            yaxis: {
                labels: {
                    show: !0,
                    style: {
                        colors: "#adb5be",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
            },
        },
        Ze = new ApexCharts(document.querySelector("#visitors"), ue);
    Ze.render();
}
var le = document.getElementById("sales-donut");
if (le) {
    le.getContext("2d");
    var X = Chart.getChart("sales-donut");
    X && X.destroy(),
        (X = new Chart(le, {
            type: "doughnut",
            data: {
                labels: ["Items", "Revenue"],
                datasets: [{
                    data: [60, 40],
                    backgroundColor: ["rgb(90, 102, 241)", "rgb(96, 165, 250)"],
                    borderWidth: 0,
                }, ],
            },
            options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: { legend: { display: !1 } },
                cutout: 90,
            },
        }));
}

function Et(e) {
    Qe.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}

function Ct(e) {
    function t(r, o, a) {
        return "#" + ((1 << 24) | (r << 16) | (o << 8) | a).toString(16).slice(1);
    }
    Ze.updateOptions({
        colors: [t(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 1,
                colorStops: [
                    { offset: 0, color: "#60a5fa", opacity: 1 },
                    { offset: 100, color: "rgb(" + e + ")", opacity: 1 },
                ],
            },
        },
    });
}

function Mt(e) {
    (X.data.datasets[0] = {
        data: [50, 30, 30],
        backgroundColor: ["rgb(" + e + ")", "rgb(96, 165, 250)"],
        borderWidth: 0,
    }),
    X.update();
}
var Ne = document.getElementById("earnings");
if (Ne !== null) {
    Ne.innerHTML = "";
    var Dt = {
            series: [{
                    name: "Orders",
                    type: "bar",
                    data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
                },
                {
                    name: "Sales",
                    type: "line",
                    data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
                },
            ],
            chart: {
                animations: { enabled: !1 },
                height: 310,
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "35%",
                    endingShape: "rounded",
                    borderRadius: 2,
                },
            },
            dataLabels: { enabled: !1 },
            legend: {
                position: "top",
                fontSize: "12px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
            },
            stroke: { curve: "smooth", width: [5, 1] },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    style: {
                        colors: "rgb(107 ,114 ,128)",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                    },
                    formatter: function(e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
        },
        et = new ApexCharts(document.querySelector("#earnings"), Dt);
    et.render();
}

function Rt(e) {
    et.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll("[data-trigger]");
    for (let r = 0; r < e.length; ++r) {
        var t = e[r];
        new Choices(t, { allowHTML: !0, searchEnabled: !1 });
    }
});
var c = document.getElementById("crypto");
if (c !== null) {
    c.innerHTML = "";
    var Tt = {
            series: [{
                data: [
                    { x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                    { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] },
                    {
                        x: new Date(15387822e5),
                        y: [6630.71, 6648.95, 6623.34, 6635.65],
                    },
                    { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] },
                    { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] },
                    {
                        x: new Date(15387876e5),
                        y: [6624.53, 6636.03, 6621.68, 6624.31],
                    },
                    { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] },
                    { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] },
                    { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] },
                    { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] },
                    {
                        x: new Date(15387966e5),
                        y: [6608.02, 6610.68, 6601.99, 6608.91],
                    },
                    { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] },
                    { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] },
                    { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] },
                    { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] },
                    { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] },
                    { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] },
                    { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                    { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] },
                    {
                        x: new Date(15388128e5),
                        y: [6619.43, 6620.35, 6610.05, 6615.53],
                    },
                    { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] },
                    { x: new Date(15388164e5), y: [6615.19, 6621.6, 6608.2, 6620] },
                    { x: new Date(15388182e5), y: [6619.54, 6625.17, 6614.15, 6620] },
                    { x: new Date(153882e7), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                    { x: new Date(15388218e5), y: [6625.95, 6626, 6611.66, 6617.58] },
                    { x: new Date(15388236e5), y: [6619, 6625.97, 6595.27, 6598.86] },
                    { x: new Date(15388254e5), y: [6598.86, 6598.88, 6570, 6587.16] },
                    { x: new Date(15388272e5), y: [6588.86, 6600, 6580, 6593.4] },
                    { x: new Date(1538829e6), y: [6593.99, 6598.89, 6585, 6587.81] },
                    { x: new Date(15388308e5), y: [6587.81, 6592.73, 6567.14, 6578] },
                    { x: new Date(15388326e5), y: [6578.35, 6581.72, 6567.39, 6579] },
                    {
                        x: new Date(15388344e5),
                        y: [6579.38, 6580.92, 6566.77, 6575.96],
                    },
                    { x: new Date(15388362e5), y: [6575.96, 6589, 6571.77, 6588.92] },
                    { x: new Date(1538838e6), y: [6588.92, 6594, 6577.55, 6589.22] },
                    { x: new Date(15388398e5), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                    { x: new Date(15388416e5), y: [6597.5, 6600, 6588.39, 6596.25] },
                    { x: new Date(15388434e5), y: [6598.03, 6600, 6588.73, 6595.97] },
                    { x: new Date(15388452e5), y: [6595.97, 6602.01, 6588.17, 6602] },
                    { x: new Date(1538847e6), y: [6602, 6607, 6596.51, 6599.95] },
                    {
                        x: new Date(15388488e5),
                        y: [6600.63, 6601.21, 6590.39, 6591.02],
                    },
                    { x: new Date(15388506e5), y: [6591.02, 6603.08, 6591, 6591] },
                    { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] },
                    { x: new Date(15388542e5), y: [6593.13, 6596.01, 6590, 6593.34] },
                    { x: new Date(1538856e6), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                    {
                        x: new Date(15388578e5),
                        y: [6593.86, 6604.28, 6586.57, 6600.01],
                    },
                    {
                        x: new Date(15388596e5),
                        y: [6601.81, 6603.21, 6592.78, 6596.25],
                    },
                    { x: new Date(15388614e5), y: [6596.25, 6604.2, 6590, 6602.99] },
                    { x: new Date(15388632e5), y: [6602.99, 6606, 6584.99, 6587.81] },
                    { x: new Date(1538865e6), y: [6587.81, 6595, 6583.27, 6591.96] },
                    { x: new Date(15388668e5), y: [6591.97, 6596.07, 6585, 6588.39] },
                    { x: new Date(15388686e5), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                    { x: new Date(15388704e5), y: [6596.44, 6601, 6590, 6596.55] },
                    { x: new Date(15388722e5), y: [6598.91, 6605, 6596.61, 6600.02] },
                    { x: new Date(1538874e6), y: [6600.55, 6605, 6589.14, 6593.01] },
                    { x: new Date(15388758e5), y: [6593.15, 6605, 6592, 6603.06] },
                    { x: new Date(15388776e5), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                    { x: new Date(15388794e5), y: [6604.44, 6604.44, 6600, 6603.5] },
                    { x: new Date(15388812e5), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                    { x: new Date(1538883e6), y: [6603.85, 6605, 6600, 6604.07] },
                    { x: new Date(15388848e5), y: [6604.98, 6606, 6604.07, 6606] },
                ],
            }, ],
            chart: { type: "candlestick", height: 330, toolbar: { show: !1 } },
            plotOptions: {
                candlestick: { colors: { upward: "#5a66f1", downward: "#60a5fa" } },
            },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            title: { align: "left" },
            xaxis: {
                type: "datetime",
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
            yaxis: {
                tooltip: { enabled: !0 },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "10px" },
                },
            },
        },
        tt = new ApexCharts(document.querySelector("#crypto"), Tt);
    tt.render();
}

function Pt(e) {
    tt.updateOptions({
        plotOptions: {
            candlestick: {
                colors: { upward: "rgb(" + e + ")", downward: "#60a5fa" },
            },
        },
    });
}
var c = document.getElementById("bitcoin-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var ae = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#28d193"],
    };
    document.getElementById("bitcoin-price-graph").innerHTML = "";
    var ae = new ApexCharts(document.querySelector("#bitcoin-price-graph"), ae);
    ae.render();
}
var c = document.getElementById("etherium-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var ne = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31,
                37, 39, 62, 51, 35, 41,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#ff534d"],
    };
    document.getElementById("etherium-price-graph").innerHTML = "";
    var ne = new ApexCharts(document.querySelector("#etherium-price-graph"), ne);
    ne.render();
}
var c = document.getElementById("dash-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var ie = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27,
                93, 53, 62, 51, 35, 41,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#28d193"],
    };
    document.getElementById("dash-price-graph").innerHTML = "";
    var ie = new ApexCharts(document.querySelector("#dash-price-graph"), ie);
    ie.render();
}
var c = document.getElementById("ripple-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var se = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45,
                54, 38, 62, 51, 35, 41,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#28d193"],
    };
    document.getElementById("ripple-price-graph").innerHTML = "";
    var se = new ApexCharts(document.querySelector("#ripple-price-graph"), se);
    se.render();
}
var c = document.getElementById("iota-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var ce = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65,
                35, 27, 93, 53, 46, 31,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#ff534d"],
    };
    document.getElementById("iota-price-graph").innerHTML = "";
    var ce = new ApexCharts(document.querySelector("#iota-price-graph"), ce);
    ce.render();
}
var c = document.getElementById("neo-price-graph");
if (c !== null) {
    c.innerHTML = "";
    var de = {
        chart: {
            type: "line",
            height: 20,
            width: 120,
            sparkline: { enabled: !0 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: void 0,
            width: 1.5,
            dashArray: 0,
        },
        fill: { gradient: { enabled: !1 } },
        tooltip: { enabled: !1 },
        series: [{
            name: "Value",
            data: [
                62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27,
                54, 37, 39, 0, 45, 54, 38,
            ],
        }, ],
        yaxis: { min: 0, show: !1 },
        xaxis: { axisBorder: { show: !1 } },
        yaxis: { axisBorder: { show: !1 } },
        colors: ["#ff534d"],
    };
    document.getElementById("neo-price-graph").innerHTML = "";
    var de = new ApexCharts(document.querySelector("#neo-price-graph"), de);
    de.render();
}
var V = document.getElementById("subscriptionOverview");
if (V !== null) {
    V.innerHTML = "";
    var Ft = {
        series: [{
                name: "Total Candidates",
                type: "column",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
            },
            {
                name: "Total Candidates",
                type: "area",
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
            },
            {
                name: "Shortlisted",
                type: "line",
                data: [25, 48, 48, 82, 65, 73, 53, 86, 65, 90, 50, 90],
            },
        ],
        chart: {
            height: 240,
            type: "line",
            stacked: !1,
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
        },
        grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
        colors: ["rgb(90,102,241)", "rgb(203,213,225)", "rgb(96, 165 ,250)"],
        legend: { show: !1 },
        stroke: { width: [0, 0, 2], curve: "smooth" },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "20%",
                endingShape: "rounded",
                borderRadius: 5,
            },
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        markers: { size: 0 },
        yaxis: {
            title: {
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
            labels: {
                style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                formatter: function(e) {
                    return e.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            type: "month",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisBorder: {
                show: !0,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: !0,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
                style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
            },
        },
    };
    document.querySelector("#subscriptionOverview").innerHTML = " ";
    var rt = new ApexCharts(document.querySelector("#subscriptionOverview"), Ft);
    rt.render();
}
var V = document.getElementById("candidates-chart");
if (V !== null) {
    V.innerHTML = "";
    var Je = {
        series: [1754, 1234],
        labels: ["Accepted", "Rejected"],
        chart: {
            height: 220,
            type: "donut",
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 5,
                left: 0,
                blur: 3,
                color: "#525050",
                opacity: 0.1,
            },
        },
        dataLabels: { enabled: !1 },
        legend: { show: !1 },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "round",
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: !1,
                donut: {
                    size: "90%",
                    background: "transparent",
                    labels: {
                        show: !0,
                        name: { show: !0, fontSize: "20px", color: "#495057", offsetY: -4 },
                        value: {
                            show: !0,
                            fontSize: "18px",
                            color: void 0,
                            offsetY: 8,
                            formatter: function(e) {
                                return e + "%";
                            },
                        },
                        total: {
                            show: !0,
                            showAlways: !0,
                            label: "Total",
                            fontSize: "22px",
                            fontWeight: 600,
                            color: "#495057",
                        },
                    },
                },
            },
        },
        colors: ["rgb(90,102,241)", "#60a5fa"],
    };
    document.querySelector("#candidates-chart").innerHTML = " ";
    var me = new ApexCharts(document.querySelector("#candidates-chart"), Je),
        me = new ApexCharts(document.querySelector("#candidates-chart"), Je);
    me.render();
}

function Ot(e) {
    rt.updateOptions({
        colors: ["rgb(" + e + ")", "#d1dae5", "rgb(96, 165 ,250)"],
    });
}

function zt(e) {
    me.updateOptions({ colors: ["rgb(" + e + ")", "#60a5fa"] });
}
var _e = document.getElementById("nft-statistics");
if (_e !== null) {
    _e.innerHTML = "";
    var Ht = {
        series: [{
            data: [
                { x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(15387822e5), y: [6630.71, 6648.95, 6623.34, 6635.65] },
                { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] },
                { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] },
                { x: new Date(15387876e5), y: [6624.53, 6636.03, 6621.68, 6624.31] },
                { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] },
                { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] },
                { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] },
                { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] },
                { x: new Date(15387966e5), y: [6608.02, 6610.68, 6601.99, 6608.91] },
                { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] },
                { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] },
                { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] },
                { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] },
                { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] },
                { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] },
                { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] },
                { x: new Date(15388128e5), y: [6619.43, 6620.35, 6610.05, 6615.53] },
                { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] },
                { x: new Date(15388164e5), y: [6615.19, 6621.6, 6608.2, 6620] },
                { x: new Date(15388182e5), y: [6619.54, 6625.17, 6614.15, 6620] },
                { x: new Date(153882e7), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                { x: new Date(15388218e5), y: [6625.95, 6626, 6611.66, 6617.58] },
                { x: new Date(15388236e5), y: [6619, 6625.97, 6595.27, 6598.86] },
                { x: new Date(15388254e5), y: [6598.86, 6598.88, 6570, 6587.16] },
                { x: new Date(15388272e5), y: [6588.86, 6600, 6580, 6593.4] },
                { x: new Date(1538829e6), y: [6593.99, 6598.89, 6585, 6587.81] },
                { x: new Date(15388308e5), y: [6587.81, 6592.73, 6567.14, 6578] },
                { x: new Date(15388326e5), y: [6578.35, 6581.72, 6567.39, 6579] },
                { x: new Date(15388344e5), y: [6579.38, 6580.92, 6566.77, 6575.96] },
                { x: new Date(15388362e5), y: [6575.96, 6589, 6571.77, 6588.92] },
                { x: new Date(1538838e6), y: [6588.92, 6594, 6577.55, 6589.22] },
                { x: new Date(15388398e5), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                { x: new Date(15388416e5), y: [6597.5, 6600, 6588.39, 6596.25] },
                { x: new Date(15388434e5), y: [6598.03, 6600, 6588.73, 6595.97] },
                { x: new Date(15388452e5), y: [6595.97, 6602.01, 6588.17, 6602] },
                { x: new Date(1538847e6), y: [6602, 6607, 6596.51, 6599.95] },
                { x: new Date(15388488e5), y: [6600.63, 6601.21, 6590.39, 6591.02] },
                { x: new Date(15388506e5), y: [6591.02, 6603.08, 6591, 6591] },
                { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] },
                { x: new Date(15388542e5), y: [6593.13, 6596.01, 6590, 6593.34] },
                { x: new Date(1538856e6), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                { x: new Date(15388578e5), y: [6593.86, 6604.28, 6586.57, 6600.01] },
                { x: new Date(15388596e5), y: [6601.81, 6603.21, 6592.78, 6596.25] },
                { x: new Date(15388614e5), y: [6596.25, 6604.2, 6590, 6602.99] },
                { x: new Date(15388632e5), y: [6602.99, 6606, 6584.99, 6587.81] },
                { x: new Date(1538865e6), y: [6587.81, 6595, 6583.27, 6591.96] },
                { x: new Date(15388668e5), y: [6591.97, 6596.07, 6585, 6588.39] },
                { x: new Date(15388686e5), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                { x: new Date(15388704e5), y: [6596.44, 6601, 6590, 6596.55] },
                { x: new Date(15388722e5), y: [6598.91, 6605, 6596.61, 6600.02] },
                { x: new Date(1538874e6), y: [6600.55, 6605, 6589.14, 6593.01] },
                { x: new Date(15388758e5), y: [6593.15, 6605, 6592, 6603.06] },
                { x: new Date(15388776e5), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                { x: new Date(15388794e5), y: [6604.44, 6604.44, 6600, 6603.5] },
                { x: new Date(15388812e5), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                { x: new Date(1538883e6), y: [6603.85, 6605, 6600, 6604.07] },
                { x: new Date(15388848e5), y: [6604.98, 6606, 6604.07, 6606] },
            ],
        }, ],
        chart: { type: "candlestick", height: 420, toolbar: { show: !1 } },
        plotOptions: {
            candlestick: { colors: { upward: "#5a66f1", downward: "#60a5fa" } },
        },
        grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
        title: { align: "left" },
        xaxis: {
            type: "datetime",
            labels: {
                rotate: -90,
                style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
            },
        },
        yaxis: {
            tooltip: { enabled: !0 },
            labels: {
                rotate: -90,
                style: { colors: "rgb(107 ,114 ,128)", fontSize: "10px" },
            },
        },
    };
    document.querySelector("#nft-statistics").innerHTML = "";
    var ot = new ApexCharts(document.querySelector("#nft-statistics"), Ht);
    ot.render();
}

function Wt(e) {
    ot.updateOptions({
        plotOptions: {
            candlestick: {
                colors: { upward: "rgb(" + e + ")", downward: "#60a5fa" },
            },
        },
    });
}
typeof Swiper < "u" &&
    new Swiper(".pagination-dynamic", {
        pagination: { el: ".swiper-pagination", dynamicBullets: !0, clickable: !0 },
        loop: !0,
        autoplay: { delay: 1500, disableOnInteraction: !1 },
    });
var w = document.getElementById("audienceReport");
if (w !== null) {
    w.innerHTML = "";
    var $ = {
            series: [{
                name: "Session",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 100],
            }, ],
            chart: {
                height: 300,
                type: "bar",
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            plotOptions: {
                bar: { columnWidth: "55%", endingShape: "rounded", borderRadius: 4 },
            },
            dataLabels: { enabled: !1 },
            legend: { show: !1 },
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                    formatter: function(e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
        },
        lt = new ApexCharts(document.querySelector("#audienceReport"), $);
    lt.render();
}

function $t(e) {
    function t(r, o, a) {
        return "#" + ((1 << 24) | (r << 16) | (o << 8) | a).toString(16).slice(1);
    }
    lt.updateOptions({
        colors: [t(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
    });
}
var w = document.getElementById("sessions");
if (w !== null) {
    w.innerHTML = "";
    var $ = {
        series: [1754, 1234, 878, 270],
        labels: ["Mobile", "Tablet", "Desktop", "Others"],
        chart: { height: 325, type: "donut" },
        dataLabels: { enabled: !1 },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            fontSize: "15px",
            fontWeight: 500,
            labels: { color: ["rgb(100, 116, 139)"] },
        },
        stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "round",
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
        plotOptions: {
            pie: {
                expandOnClick: !1,
                donut: {
                    size: "80%",
                    background: "transparent",
                    labels: {
                        show: !0,
                        name: { show: !0, fontSize: "20px", color: "#495057", offsetY: -4 },
                        value: {
                            show: !0,
                            fontSize: "32px",
                            fontWeight: 600,
                            offsetY: 8,
                            formatter: function(t) {
                                return t + "%";
                            },
                        },
                        total: {
                            show: !0,
                            showAlways: !0,
                            label: "Total",
                            fontSize: "25px",
                            color: "rgb(100, 116, 139)",
                        },
                    },
                },
            },
        },
        colors: [
            "rgba(90,102,241, 1)",
            "rgba(96,165,250, 1)",
            "rgba(234,179 ,8, 1)",
            "rgba(203,213,225, 1)",
        ],
    };
    document.querySelector("#sessions").innerHTML = " ";
    var D = new ApexCharts(document.querySelector("#sessions"), $);
    D.render();
}

function Gt(e) {
    D.updateOptions({
        colors: [
            "rgba(" + e + ", 1)",
            "rgba(96,165,250, 1)",
            "rgba(234,179 ,8, 1)",
            "rgba(203,213,225, 1)",
        ],
    });
}
var w = document.getElementById("audience");
if (w !== null) {
    w.innerHTML = "";
    var $ = {
            series: [
                { data: [44, 55, 41, 64, 22, 43, 21] },
                { data: [53, 32, 33, 52, 13, 44, 32] },
            ],
            chart: { type: "bar", height: 280, toolbar: { show: !1 } },
            plotOptions: { bar: { horizontal: !0, dataLabels: { position: "top" } } },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            dataLabels: {
                enabled: !1,
                offsetX: -6,
                style: { fontSize: "12px", colors: ["#fff"] },
            },
            legend: { show: !1 },
            stroke: { show: !0, width: 1, colors: ["#fff"] },
            tooltip: { shared: !0, intersect: !1 },
            xaxis: {
                categories: ["Jan", "feb", "mar", "apr", "jun", "jul", "aug"],
                labels: {
                    show: !0,
                    style: {
                        colors: "#8c9097",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label",
                    },
                },
            },
            yaxis: {
                labels: {
                    show: !0,
                    style: {
                        colors: "#8c9097",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
            },
        },
        D = new ApexCharts(document.querySelector("#audience"), $);
    D.render();
}

function Nt(e) {
    D.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}
var w = document.getElementById("session2");
if (w !== null) {
    w.innerHTML = "";
    var $ = {
            series: [40, 40, 20],
            chart: { type: "polarArea", height: 350, width: 450 },
            labels: ["Male", "Female", "Others"],
            stroke: { colors: ["#fff"] },
            fill: { opacity: 0.8 },
            legend: { position: "bottom" },
            colors: ["#5e76a6", "#d5dde7", "#a68e5e"],
            responsive: [{
                breakpoint: 480,
                options: { chart: { width: 200 }, legend: { position: "bottom" } },
            }, ],
        },
        D = new ApexCharts(document.querySelector("#session2"), $);
    D.render();
}

function Jt(e) {
    D.updateOptions({
        colors: ["rgb(" + e + ")", "rgb(203,213,225)", "rgb(96,165,250)"],
    });
}
var Ye = document.getElementById("projectAnalysis");
if (Ye !== null) {
    Ye.innerHTML = "";
    var _t = {
            series: [{
                    name: "Projects",
                    type: "column",
                    data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8],
                },
                {
                    name: "Tasks",
                    type: "column",
                    data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5],
                },
                { name: "Revenue", type: "line", data: [20, 29, 37, 35, 44, 43, 50] },
            ],
            chart: {
                toolbar: { show: !1 },
                height: 370,
                type: "line",
                stacked: !1,
                fontFamily: "Poppins, Arial, sans-serif",
            },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)", strokeDashArray: 3 },
            dataLabels: { enabled: !1 },
            title: { text: void 0 },
            xaxis: { categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
            yaxis: [{
                    show: !0,
                    axisTicks: { show: !0 },
                    axisBorder: { show: !1, color: "#4eb6d0" },
                    labels: { style: { colors: "#4eb6d0" } },
                    title: { text: void 0 },
                    tooltip: { enabled: !0 },
                },
                {
                    show: !1,
                    seriesName: "Projects",
                    opposite: !0,
                    axisTicks: { show: !0 },
                    axisBorder: { show: !1 },
                    labels: { style: { colors: "#00E396" } },
                    title: { text: void 0 },
                },
                {
                    show: !1,
                    seriesName: "Revenue",
                    opposite: !0,
                    axisTicks: { show: !0 },
                    axisBorder: { show: !1 },
                    labels: { show: !1 },
                    title: { text: void 0 },
                },
            ],
            tooltip: { enabled: !0 },
            colors: ["#5a66f1", "#60a5fa", "#d5dde7"],
            legend: {
                show: !0,
                position: "top",
                offsetX: 40,
                fontSize: "13px",
                fontWeight: "normal",
                labels: { colors: "#acb1b1" },
                markers: { width: 10, height: 10 },
            },
            stroke: { width: [0, 0, 1.5], curve: "straight", dashArray: [0, 0, 0] },
            plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } },
        },
        at = new ApexCharts(document.querySelector("#projectAnalysis"), _t);
    at.render();
}

function Yt(e) {
    at.updateOptions({ colors: ["rgb(" + e + ")", "#60a5fa", "#d5dde7"] });
}
var je = document.getElementById("performanceReport");
if (je !== null) {
    je.innerHTML = "";
    var jt = {
            series: [{
                    name: "Designing",
                    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
                },
                {
                    name: "Development",
                    data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27],
                },
                { name: "SEO", data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14] },
            ],
            chart: {
                type: "bar",
                height: 310,
                stacked: !0,
                toolbar: { show: !1 },
                zoom: { enabled: !0 },
            },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            responsive: [{
                breakpoint: 480,
                options: { legend: { position: "bottom", offsetX: -10, offsetY: 0 } },
            }, ],
            colors: ["#5a66f1", "#60a5fa", "#d5dde7"],
            legend: { show: !0, borderRadius: 5, position: "top" },
            plotOptions: { bar: { columnWidth: "20%", borderRadius: 5 } },
            dataLabels: { enabled: !1 },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            fill: { opacity: 1 },
        },
        nt = new ApexCharts(document.querySelector("#performanceReport"), jt);
    nt.render();
}

function Xt(e) {
    nt.updateOptions({ colors: ["rgb(" + e + ")", "#60a5fa", "#d5dde7"] });
}
var K = document.getElementById("revenue");
if (K !== null) {
    K.innerHTML = "";
    var ye = {
            series: [{
                    name: "Deals",
                    type: "column",
                    data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
                },
                {
                    name: "Revenue",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51],
                },
            ],
            chart: { height: 280, type: "line", stacked: !1, toolbar: { show: !1 } },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            dataLabels: { enabled: !1 },
            legend: { position: "top" },
            colors: ["#5a66f1", "rgb(203,213,225)"],
            stroke: { width: [1, 1], curve: ["straight", "smooth"] },
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            legend: { show: !1, position: "top" },
            plotOptions: { bar: { columnWidth: "15%", borderRadius: 1 } },
        },
        it = new ApexCharts(document.querySelector("#revenue"), ye);
    it.render();
}

function Ut(e) {
    function t(r, o, a) {
        return "#" + ((1 << 24) | (r << 16) | (o << 8) | a).toString(16).slice(1);
    }
    it.updateOptions({
        colors: [
            t(e.split(",")[0], e.split(",")[1], e.split(",")[2]),
            "rgb(203,213,225)",
        ],
    });
}
var K = document.getElementById("leads");
if (K !== null) {
    K.innerHTML = "";
    var ye = {
            series: [{ data: [400, 430, 470, 540, 600, 800] }],
            chart: { type: "bar", height: 380, toolbar: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 1,
                    colorStops: [
                        { offset: 0, color: "#60a5fa", opacity: 1 },
                        { offset: 100, color: "#5a66f1", opacity: 1 },
                    ],
                },
            },
            plotOptions: { bar: { borderRadius: 4, horizontal: !0 } },
            colors: ["#5e76a6"],
            grid: { borderColor: "transparent" },
            dataLabels: { enabled: !1 },
            xaxis: {
                categories: [
                    "Marketing",
                    "Digital",
                    "Web",
                    "Advertisement",
                    "Employee Referal",
                    "Other",
                ],
                labels: {
                    show: !0,
                    style: {
                        colors: "#adb5be",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-xaxis-label",
                    },
                },
            },
            yaxis: {
                labels: {
                    show: !0,
                    style: {
                        colors: "#adb5be",
                        fontSize: "11px",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
            },
        },
        st = new ApexCharts(document.querySelector("#leads"), ye);
    st.render();
}

function Vt(e) {
    function t(r, o, a) {
        return "#" + ((1 << 24) | (r << 16) | (o << 8) | a).toString(16).slice(1);
    }
    st.updateOptions({
        colors: [t(e.split(",")[0], e.split(",")[1], e.split(",")[2])],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 1,
                colorStops: [
                    { offset: 0, color: "#60a5fa", opacity: 1 },
                    { offset: 100, color: "rgb(" + e + ")", opacity: 1 },
                ],
            },
        },
    });
}
var Xe = document.getElementById("statistics");
if (Xe !== null) {
    Xe.innerHTML = "";
    var Kt = {
            series: [{
                    name: "Income",
                    data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
                },
                {
                    name: "Expenses",
                    data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
                },
            ],
            chart: {
                animations: { enabled: !1 },
                height: 390,
                type: "bar",
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "35%",
                    endingShape: "rounded",
                    borderRadius: [2, 2],
                },
            },
            dataLabels: { enabled: !1 },
            legend: {
                position: "top",
                fontSize: "12px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
            },
            stroke: { curve: "smooth", width: [5, 5] },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    style: {
                        colors: "rgb(107 ,114 ,128)",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                    },
                    formatter: function(e) {
                        return e.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
        },
        ct = new ApexCharts(document.querySelector("#statistics"), Kt);
    ct.render();
}

function Qt(e) {
    ct.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}
var g = document.getElementById("totalInvested");
if (g !== null) {
    g.innerHTML = "";
    var I = {
            series: [{ data: [34, 55, 41, 67, 22, 43, 21] }],
            chart: {
                sparkline: { enabled: !0 },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 3,
                    right: 6,
                    blur: 3,
                    color: ["#5a66f1"],
                    opacity: 0.3,
                },
                type: "line",
                height: 50,
                width: 100,
            },
            tooltip: {
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function(e) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
            colors: ["#5a66f1"],
            stroke: { width: 2, curve: "smooth" },
            xaxis: { crosshairs: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
            },
        },
        dt = new ApexCharts(document.querySelector("#totalInvested"), I);
    dt.render();
}

function Zt(e) {
    dt.updateOptions({ colors: ["rgb(" + e + ")"] });
}
var g = document.getElementById("totalInvestments");
if (g !== null) {
    g.innerHTML = "";
    var I = {
            series: [{ data: [34, 55, 41, 47, 32, 53, 31] }],
            chart: {
                sparkline: { enabled: !0 },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 3,
                    right: 6,
                    blur: 3,
                    color: ["#60a5fa"],
                    opacity: 0.3,
                },
                type: "line",
                height: 50,
                width: 100,
            },
            tooltip: {
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function(t) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
            colors: ["#60a5fa"],
            stroke: { width: [1.2], curve: ["smooth"] },
            xaxis: { crosshairs: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
            },
        },
        Q = new ApexCharts(document.querySelector("#totalInvestments"), I);
    Q.render();
}
var g = document.getElementById("totalReturns");
if (g !== null) {
    g.innerHTML = "";
    var I = {
            series: [{ data: [31, 53, 32, 47, 41, 55, 44] }],
            chart: {
                sparkline: { enabled: !0 },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 3,
                    right: 6,
                    blur: 3,
                    color: ["#eab308"],
                    opacity: 0.3,
                },
                type: "line",
                height: 50,
                width: 100,
            },
            tooltip: {
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function(r) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
            colors: ["#eab308"],
            stroke: { width: [1.2], curve: ["smooth"] },
            xaxis: { crosshairs: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
            },
        },
        Q = new ApexCharts(document.querySelector("#totalReturns"), I);
    Q.render();
}
var g = document.getElementById("returnsRate");
if (g !== null) {
    g.innerHTML = "";
    var I = {
            series: [{ data: [21, 43, 22, 45, 35, 55, 34] }],
            chart: {
                sparkline: { enabled: !0 },
                dropShadow: {
                    enabled: !0,
                    enabledOnSeries: void 0,
                    top: 3,
                    right: 6,
                    blur: 3,
                    color: ["#f43f5e"],
                    opacity: 0.3,
                },
                type: "line",
                height: 50,
                width: 100,
            },
            tooltip: {
                x: { show: !1 },
                y: {
                    title: {
                        formatter: function(r) {
                            return "";
                        },
                    },
                },
                marker: { show: !1 },
            },
            colors: ["#f43f5e"],
            stroke: { width: [1.5], curve: ["smooth"] },
            xaxis: { crosshairs: { show: !1 } },
            fill: {
                type: "gradient",
                gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
            },
        },
        Q = new ApexCharts(document.querySelector("#returnsRate"), I);
    Q.render();
}
var g = document.getElementById("totalInvestmentsStats");
if (g !== null) {
    g.innerHTML = "";
    var I = {
            series: [{
                    name: "Invested Value",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                    name: "Total Returns",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
            ],
            chart: {
                height: 300,
                type: "area",
                stacked: !1,
                zoom: { enabled: !1 },
                toolbar: { show: !1 },
            },
            stroke: { width: [0, 0], curve: "smooth" },
            grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            plotOptions: {
                bar: {
                    horizontal: !1,
                    columnWidth: "40%",
                    endingShape: "rounded",
                    borderRadius: 5,
                },
            },
            dataLabels: { enabled: !1 },
            legend: { show: !1 },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: !1,
                    shade: ["dark", "light"],
                    type: "vertical",
                    opacityFrom: [1, 0.85],
                    opacityTo: [1, 0.55],
                    stops: [0, 100, 100, 100],
                },
            },
            yaxis: {
                title: {
                    style: {
                        color: "#adb5be",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        cssClass: "apexcharts-yaxis-label",
                    },
                },
                labels: {
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                    formatter: function(t) {
                        return t.toFixed(0) + "";
                    },
                },
            },
            xaxis: {
                type: "month",
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisBorder: {
                    show: !0,
                    color: "rgba(119, 119, 142, 0.05)",
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: !0,
                    borderType: "solid",
                    color: "rgba(119, 119, 142, 0.05)",
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                labels: {
                    rotate: -90,
                    style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
                },
            },
        },
        ut = new ApexCharts(document.querySelector("#totalInvestmentsStats"), I);
    ut.render();
}

function er(e) {
    ut.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}
var Ue = document.getElementById("earningsReport");
if (Ue !== null) {
    Ue.innerHTML = "";
    var tr = {
            series: [{
                    name: "Students",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35],
                },
                {
                    name: "Earnings",
                    type: "line",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27],
                },
            ],
            chart: { toolbar: { show: !1 }, type: "line", height: 340 },
            grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
            colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            dataLabels: { enabled: !1 },
            stroke: { width: [1, 2], curve: ["straight", "smooth"] },
            legend: { show: !1 },
            xaxis: { axisBorder: { color: "#e9e9e9" } },
            plotOptions: { bar: { columnWidth: "22%", borderRadius: 2 } },
        },
        mt = new ApexCharts(document.querySelector("#earningsReport"), tr);
    mt.render();
}

function rr(e) {
    mt.updateOptions({ colors: ["rgb(" + e + ")", "rgb(203,213,225)"] });
}
(function() {
    var o = document.getElementById("btcCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{ data: [34, 55, 41, 67, 22, 43, 21] }],
                chart: {
                    sparkline: { enabled: !0 },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#47bbed"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function(m) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
                colors: ["#47bbed"],
                stroke: { width: [1.5], curve: ["smooth"] },
                xaxis: { crosshairs: { show: !1 } },
                fill: {
                    type: "gradient",
                    gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
                },
            },
            t = new ApexCharts(document.querySelector("#btcCoin"), e);
        t.render();
    }
    var o = document.getElementById("ethCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{ data: [34, 55, 41, 47, 32, 53, 31] }],
                chart: {
                    sparkline: { enabled: !0 },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#60a5fa"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function(R) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
                colors: ["#60a5fa"],
                stroke: { width: [1.5], curve: ["smooth"] },
                xaxis: { crosshairs: { show: !1 } },
                fill: {
                    type: "gradient",
                    gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
                },
            },
            r = new ApexCharts(document.querySelector("#ethCoin"), e);
        r.render();
    }
    var o = document.getElementById("dshCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{ data: [31, 53, 32, 47, 41, 55, 44] }],
                chart: {
                    sparkline: { enabled: !0 },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#FF534D"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function(y) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
                colors: ["#FF534D"],
                stroke: { width: [1.5], curve: ["smooth"] },
                xaxis: { crosshairs: { show: !1 } },
                fill: {
                    type: "gradient",
                    gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
                },
            },
            r = new ApexCharts(document.querySelector("#dshCoin"), e);
        r.render();
    }
    var o = document.getElementById("glmCoin");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{ data: [21, 43, 22, 45, 35, 55, 34] }],
                chart: {
                    sparkline: { enabled: !0 },
                    dropShadow: {
                        enabled: !0,
                        enabledOnSeries: void 0,
                        top: 3,
                        right: 6,
                        blur: 3,
                        color: ["#FFBE14"],
                        opacity: 0.2,
                    },
                    type: "line",
                    height: 20,
                    width: 100,
                },
                tooltip: {
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function(y) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
                colors: ["#FFBE14"],
                stroke: { width: [1.5], curve: ["smooth"] },
                xaxis: { crosshairs: { show: !1 } },
                fill: {
                    type: "gradient",
                    gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
                },
            },
            r = new ApexCharts(document.querySelector("#glmCoin"), e);
        r.render();
    }
    var o = document.getElementById("totalRevenue");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{
                    name: "Revenue",
                    data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55],
                }, ],
                chart: { height: 180, type: "area", sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                stroke: { width: [1.4], show: !0, curve: ["smooth"] },
                xaxis: { crosshairs: { show: !1 } },
                legend: { show: !1 },
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                markers: { size: 0 },
                colors: ["#60a5fa"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.7,
                        stops: [0, 100],
                    },
                },
            },
            r = new ApexCharts(document.querySelector("#totalRevenue"), e);
        r.render();
    }
    var o = document.getElementById("sessionsByDevice");
    if (o !== null) {
        o.innerHTML = "";
        var e = {
                series: [{
                        name: "Tablet",
                        data: [
                            [10, 35, 80]
                        ]
                    },
                    {
                        name: "Mobile",
                        data: [
                            [22, 10, 80]
                        ]
                    },
                    {
                        name: "Desktop",
                        data: [
                            [25, 25, 150]
                        ]
                    },
                ],
                chart: { height: 350, type: "bubble", toolbar: { show: !1 } },
                grid: { borderColor: "#f3f3f3", strokeDashArray: 3 },
                colors: ["#f43f63", "#60a5fa", "#6366f1"],
                dataLabels: { enabled: !1 },
                legend: {
                    show: !0,
                    fontSize: "13px",
                    labels: { colors: "#959595" },
                    markers: { width: 10, height: 10 },
                },
                xaxis: {
                    min: 0,
                    max: 50,
                    labels: { show: !1 },
                    axisBorder: { show: !1 },
                },
                yaxis: { max: 50, labels: { show: !1 } },
            },
            a = new ApexCharts(document.querySelector("#sessionsByDevice"), e);
        a.render();
    }
    if (typeof jsVectorMap < "u") {
        var n = [
                { name: "Russia", coords: [61, 105], style: { fill: "#60a5fa" } },
                { name: "Geenland", coords: [72, -42], style: { fill: "#6366f1" } },
                { name: "Canada", coords: [56, -106], style: { fill: "#ff534d" } },
                { name: "Palestine", coords: [31.5, 34.8], style: { fill: "#ffbe14" } },
                {
                    name: "Brazil",
                    coords: [-14.235, -51.9253],
                    style: { fill: "#f43f63" },
                },
            ],
            o = document.getElementById("users-map");
        o !== null &&
            ((o.innerHTML = ""),
                new jsVectorMap({
                    map: "world_merc",
                    selector: "#users-map",
                    markersSelectable: !0,
                    onMarkerSelected(R, y, x) {},
                    labels: {
                        markers: {
                            render: function(R) {
                                return R.name;
                            },
                        },
                    },
                    markers: n,
                    markerStyle: {
                        hover: { stroke: "#DDD", strokeWidth: 3, fill: "#FFF" },
                        selected: { fill: "#ff525d" },
                    },
                    markerLabelStyle: {
                        initial: {
                            fontFamily: "Poppins",
                            fontSize: 13,
                            fontWeight: 500,
                            fill: "#35373e",
                        },
                    },
                }));
    }
})();

function or(e) {
    var t = {
        series: [{ data: [17, 22, 37, 47, 39, 28, 14], name: "Revenue" }],
        chart: {
            type: "bar",
            height: 235,
            toolbar: { show: !1 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 6,
                left: 6,
                blur: 3,
                color: "#000",
                opacity: 0.05,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "35%",
                borderRadius: 4,
                horizontal: !1,
                colors: {
                    ranges: [
                        { from: 41, to: 1 / 0, color: "rgb(" + e + ")" },
                        { from: 0, to: 40, color: "rgba(" + e + ", 0.2)" },
                    ],
                },
            },
        },
        dataLabels: { enabled: !1 },
        grid: {
            show: !1,
            borderColor: "transparent",
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            yaxis: { lines: { show: !1 } },
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
            colors: "#fff",
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            labels: { rotate: -90, style: { fontFamily: "Inter, sans-serif" } },
        },
        yaxis: {
            colors: "#fff",
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            labels: { show: !1 },
        },
    };
    document.querySelector("#report").innerHTML = "";
    var r = new ApexCharts(document.querySelector("#report"), t);
    r.render();
}

function lr(e) {
    var t = {
        series: [
            { name: "Job Applied", type: "line", data: [25, 50, 30, 55, 20, 45, 30] },
            { name: "Job Viewed", type: "area", data: [35, 25, 40, 30, 45, 35, 60] },
        ],
        chart: {
            height: 320,
            type: "line",
            stacked: !1,
            toolbar: { show: !1 },
            dropShadow: {
                enabled: !0,
                enabledOnSeries: void 0,
                top: 7,
                left: 1,
                blur: 3,
                color: "#000",
                opacity: 0.2,
            },
        },
        colors: ["rgba(" + e + ", 1)", "rgba(" + e + ", 0.1)"],
        grid: {
            borderColor: "#e9edf4",
            padding: { top: 10, right: 0, bottom: 0, left: 0 },
        },
        stroke: { width: [2, 2], curve: "smooth", dashArray: [0, 4] },
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        markers: { size: 4, hover: { size: 5 } },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shadeIntensity: 1,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        legend: {
            show: !0,
            position: "top",
            fontFamily: "Inter, sans-serif",
            markers: { width: 10, height: 10 },
        },
        xaxis: {
            type: "week",
            axisBorder: {
                show: !0,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: !0,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: { rotate: -90 },
        },
        yaxis: {
            title: {
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                },
            },
            labels: {
                formatter: function(o) {
                    return o.toFixed(0) + "";
                },
            },
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function(o) {
                    return typeof o < "u" ? o.toFixed(0) + " points" : o;
                },
            },
        },
    };
    document.querySelector("#views").innerHTML = "";
    var r = new ApexCharts(document.querySelector("#views"), t);
    r.render();
}
const he = 300,
    d = document.getElementById("sidebar");
let Z = document.querySelector(".main-content");
const ar = document.querySelectorAll(".nav > ul > .slide.has-sub"),
    nr = document.querySelectorAll(".nav > ul > .slide.has-sub > a"),
    ir = document.querySelectorAll(
        ".nav > ul > .slide.has-sub .slide.has-sub > a"
    );
class sr {
    constructor(t, r) {
        j(this, "instance", null);
        j(this, "reference", null);
        j(this, "popperTarget", null);
        this.init(t, r);
    }
    init(t, r) {
        (this.reference = t),
        (this.popperTarget = r),
        (this.instance = Popper.createPopper(this.reference, this.popperTarget, {
            placement: "bottom",
            strategy: "relative",
            resize: !0,
            modifiers: [{ name: "computeStyles", options: { adaptive: !1 } }],
        })),
        document.addEventListener(
            "click",
            (a) => this.clicker(a, this.popperTarget, this.reference), !1
        );
        const o = new ResizeObserver(() => {
            this.instance.update();
        });
        o.observe(this.popperTarget), o.observe(this.reference);
    }
    clicker(t, r, o) {
        d.classList.contains("collapsed") &&
            !r.contains(t.target) &&
            !o.contains(t.target) &&
            this.hide();
    }
    hide() {}
}
class cr {
    constructor() {
        j(this, "subMenuPoppers", []);
        this.init();
    }
    init() {
        ar.forEach((t) => {
            this.subMenuPoppers.push(new sr(t, t.lastElementChild)),
                this.closePoppers();
        });
    }
    togglePopper(t) {
        window.getComputedStyle(t).visibility === "hidden" &&
            window.getComputedStyle(t).visibility === void 0 ?
            (t.style.visibility = "visible") :
            (t.style.visibility = "hidden");
    }
    updatePoppers() {
        this.subMenuPoppers.forEach((t) => {
            (t.instance.state.elements.popper.style.display = "none"),
            t.instance.update();
        });
    }
    closePoppers() {
        this.subMenuPoppers.forEach((t) => {
            t.hide();
        });
    }
}
const re = (e, t = he) => {
        const { parentElement: r } = e;
        r.classList.remove("open"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = `${t}ms`),
            (e.style.boxSizing = "border-box"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = 0),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
                (e.style.display = "none"),
                e.style.removeProperty("height"),
                    e.style.removeProperty("padding-top"),
                    e.style.removeProperty("padding-bottom"),
                    e.style.removeProperty("margin-top"),
                    e.style.removeProperty("margin-bottom"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property");
            }, t);
    },
    yt = (e, t = he) => {
        const { parentElement: r } = e;
        r.classList.add("open"), e.style.removeProperty("display");
        let { display: o } = window.getComputedStyle(e);
        o === "none" && (o = "block"), (e.style.display = o);
        const a = e.offsetHeight;
        (e.style.overflow = "hidden"),
        (e.style.height = 0),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        e.offsetHeight,
            (e.style.boxSizing = "border-box"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = `${t}ms`),
            (e.style.height = `${a}px`),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
                e.style.removeProperty("height"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property");
            }, t);
    },
    ht = (e, t = he) => {
        let r = document.querySelector("html");
        if (!(
                (r.getAttribute("data-nav-style") === "menu-hover" &&
                    r.getAttribute("toggled") === "menu-hover-closed" &&
                    window.innerWidth >= 992) ||
                (r.getAttribute("data-nav-style") === "icon-hover" &&
                    r.getAttribute("toggled") === "icon-hover-closed" &&
                    window.innerWidth >= 992)
            ) &&
            e &&
            e.nodeType != 3
        )
            return window.getComputedStyle(e).display === "none" ?
                yt(e, t) :
                re(e, t);
    };
new cr();
const dr = document.querySelectorAll(".slide.has-sub.open");
dr.forEach((e) => {
    e.lastElementChild.style.display = "block";
});
nr.forEach((e) => {
    e.addEventListener("click", () => {
        let t = document.querySelector("html");
        if (!(
                (t.getAttribute("data-nav-style") === "menu-hover" &&
                    t.getAttribute("toggled") === "menu-hover-closed" &&
                    window.innerWidth >= 992) ||
                (t.getAttribute("data-nav-style") === "icon-hover" &&
                    t.getAttribute("toggled") === "icon-hover-closed" &&
                    window.innerWidth >= 992)
            )) {
            const r = e.closest(".nav.sub-open");
            r &&
                r.querySelectorAll(":scope > ul > .slide.has-sub > a").forEach((o) => {
                    (o.nextElementSibling.style.display === "block" ||
                        window.getComputedStyle(o.nextElementSibling).display ===
                        "block") &&
                    re(o.nextElementSibling);
                }),
                ht(e.nextElementSibling);
        }
    });
});
ir.forEach((e) => {
    document.querySelector("html"),
        e.addEventListener("click", () => {
            const t = e.closest(".slide-menu");
            t &&
                t.querySelectorAll(":scope .slide.has-sub > a").forEach((r) => {
                    var o;
                    r.nextElementSibling &&
                        ((o = r.nextElementSibling) == null ? void 0 : o.style.display) ===
                        "block" &&
                        re(r.nextElementSibling);
                }),
                ht(e.nextElementSibling);
        });
});
window.addEventListener("resize", () => {
    let e = document.querySelector(".main-content");
    setTimeout(() => {
        window.innerWidth <= 992 ?
            e.addEventListener("click", W) :
            e.removeEventListener("click", W);
    }, 100);
});
let Ve, p;
(() => {
    let e = document.querySelector("html");
    (Ve = document.querySelector(".sidebar-toggle")),
    Ve.addEventListener("click", f);
    let t = document.querySelector(".main-content");
    window.innerWidth <= 992 ?
        t.addEventListener("click", W) :
        t.removeEventListener("click", W),
        (p = [window.innerWidth]),
        M(),
        e.getAttribute("data-nav-layout") === "horizontal" &&
        window.innerWidth >= 992 ?
        (u(), t.addEventListener("click", u)) :
        t.removeEventListener("click", u),
        window.addEventListener("resize", gt),
        fe(), !localStorage.getItem("Syntolayout") &&
        !localStorage.getItem("Syntonavstyles") &&
        !localStorage.getItem("Syntoverticalstyles") &&
        !document.querySelector(".landing-body") &&
        document.querySelector("html").getAttribute("data-nav-layout") !==
        "horizontal" &&
        !e.getAttribute("data-vertical-style") &&
        !e.getAttribute("data-nav-style") &&
        ge(),
        f(),
        (e.getAttribute("data-nav-style") === "menu-hover" ||
            e.getAttribute("data-nav-style") === "icon-hover") &&
        window.innerWidth >= 992 &&
        u(),
        window.innerWidth < 992 && e.setAttribute("toggled", "close");
})();

function gt() {
    let e = document.querySelector("html"),
        t = document.querySelector(".main-content");
    p.push(window.innerWidth),
        p.length > 2 && p.shift(),
        p.length > 1 &&
        (p[p.length - 1] < 992 &&
            p[p.length - 2] >= 992 &&
            (t.addEventListener("click", W),
                M(),
                f(),
                t.removeEventListener("click", u)),
            p[p.length - 1] >= 992 &&
            p[p.length - 2] < 992 &&
            (t.removeEventListener("click", W),
                f(),
                e.getAttribute("data-nav-layout") === "horizontal" ?
                (u(), t.addEventListener("click", u)) :
                t.removeEventListener("click", u), !document.querySelector("html").getAttribute("toggled") ==
                "double-menu-open" && e.removeAttribute("toggled"))),
        vt();
}

function W() {
    document.querySelector("html").setAttribute("toggled", "close"),
        document.querySelector("#responsive-overlay").classList.remove("active");
}

function f() {
    let e = document.querySelector("html"),
        t = e.getAttribute("data-nav-layout");
    if (window.innerWidth >= 992) {
        if (t === "vertical") {
            switch (
                (d.removeEventListener("mouseenter", O),
                    d.removeEventListener("mouseleave", z),
                    d.removeEventListener("click", ee),
                    Z.removeEventListener("click", te),
                    document
                    .querySelectorAll(".main-menu li > .side-menu__item")
                    .forEach((n) => n.removeEventListener("click", pe)),
                    e.getAttribute("data-vertical-style"))
            ) {
                case "closed":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("toggled") === "close-menu-close" ?
                        e.removeAttribute("toggled") :
                        e.setAttribute("toggled", "close-menu-close");
                    break;
                case "overlay":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("toggled") === "icon-overlay-close" ?
                        (e.removeAttribute("toggled", "icon-overlay-close"),
                            d.removeEventListener("mouseenter", O),
                            d.removeEventListener("mouseleave", z)) :
                        window.innerWidth >= 992 ?
                        (e.setAttribute("toggled", "icon-overlay-close"),
                            d.addEventListener("mouseenter", O),
                            d.addEventListener("mouseleave", z)) :
                        (d.removeEventListener("mouseenter", O),
                            d.removeEventListener("mouseleave", z));
                    break;
                case "icontext":
                    e.removeAttribute("data-nav-style"),
                        e.getAttribute("toggled") === "icon-text-close" ?
                        (e.removeAttribute("toggled", "icon-text-close"),
                            d.removeEventListener("click", ee),
                            Z.removeEventListener("click", te)) :
                        (e.setAttribute("toggled", "icon-text-close"),
                            window.innerWidth >= 992 ?
                            (d.addEventListener("click", ee),
                                Z.addEventListener("click", te)) :
                            (d.removeEventListener("click", ee),
                                Z.removeEventListener("click", te)));
                    break;
                case "doublemenu":
                    if (
                        (e.removeAttribute("data-nav-style"),
                            e.getAttribute("toggled") === "double-menu-open")
                    )
                        e.setAttribute("toggled", "double-menu-close"),
                        document.querySelector(".slide-menu") &&
                        document.querySelectorAll(".slide-menu").forEach((m) => {
                            m.classList.contains("double-menu-active") &&
                                m.classList.remove("double-menu-active");
                        });
                    else {
                        let n = document.querySelector(".side-menu__item.active");
                        n &&
                            (e.setAttribute("toggled", "double-menu-open"),
                                n.nextElementSibling ?
                                n.nextElementSibling.classList.add("double-menu-active") :
                                document.querySelector("html").setAttribute("toggled", ""));
                    }
                    gr();
                    break;
                case "detached":
                    e.getAttribute("toggled") === "detached-close" ?
                        (e.removeAttribute("toggled", "detached-close"),
                            d.removeEventListener("mouseenter", O),
                            d.removeEventListener("mouseleave", z)) :
                        (e.setAttribute("toggled", "detached-close"),
                            window.innerWidth >= 992 ?
                            (d.addEventListener("mouseenter", O),
                                d.addEventListener("mouseleave", z)) :
                            (d.removeEventListener("mouseenter", O),
                                d.removeEventListener("mouseleave", z)));
                    break;
                case "default":
                    ge(), e.removeAttribute("toggled");
            }
            switch (e.getAttribute("data-nav-style")) {
                case "menu-click":
                    e.getAttribute("toggled") === "menu-click-closed" ?
                        e.removeAttribute("toggled") :
                        e.setAttribute("toggled", "menu-click-closed");
                    break;
                case "menu-hover":
                    e.getAttribute("toggled") === "menu-hover-closed" ?
                        (e.removeAttribute("toggled"), M()) :
                        (e.setAttribute("toggled", "menu-hover-closed"), u());
                    break;
                case "icon-click":
                    e.getAttribute("toggled") === "icon-click-closed" ?
                        e.removeAttribute("toggled") :
                        e.setAttribute("toggled", "icon-click-closed");
                    break;
                case "icon-hover":
                    e.getAttribute("toggled") === "icon-hover-closed" ?
                        (e.removeAttribute("toggled"), M()) :
                        (e.setAttribute("toggled", "icon-hover-closed"), u());
                    break;
            }
        }
    } else if (e.getAttribute("toggled") === "close") {
        e.setAttribute("toggled", "open");
        let r = document.createElement("div");
        (r.id = "responsive-overlay"),
        setTimeout(() => {
            document.querySelector("html").getAttribute("toggled") == "open" &&
                (document
                    .querySelector("#responsive-overlay")
                    .classList.add("active"),
                    document
                    .querySelector("#responsive-overlay")
                    .addEventListener("click", () => {
                        document
                            .querySelector("#responsive-overlay")
                            .classList.remove("active"),
                            W();
                    })),
                window.addEventListener("resize", () => {
                    window.screen.width >= 992 &&
                        document
                        .querySelector("#responsive-overlay")
                        .classList.remove("active");
                });
        }, 100);
    } else e.setAttribute("toggled", "close");
}

function O() {
    document.querySelector("html").setAttribute("icon-overlay", "open");
}

function z() {
    document.querySelector("html").removeAttribute("icon-overlay");
}

function ee() {
    document.querySelector("html").setAttribute("icon-text", "open");
}

function te() {
    document.querySelector("html").removeAttribute("icon-text");
}

function ur() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "closed"),
        f();
}

function mr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "detached"),
        f();
}

function yr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "icontext"),
        f();
}

function ge() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "overlay"),
        f();
}

function hr() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "doublemenu"),
        f();
    const t = document.querySelectorAll(".main-menu > li > .side-menu__item"),
        r = document.createElement("div");
    r.style.setProperty("position", "fixed"),
        r.style.setProperty("display", "none"),
        r.style.setProperty("padding", "0.5rem"),
        r.style.setProperty("font-weight", "500"),
        r.style.setProperty("font-size", "0.75rem"),
        r.style.setProperty("background-color", "rgb(15, 23 ,42)"),
        r.style.setProperty("color", "rgb(255, 255 ,255)"),
        r.style.setProperty("margin-inline-start", "45px"),
        r.style.setProperty("border-radius", "0.25rem"),
        r.style.setProperty("z-index", "99"),
        t.forEach((o) => {
            o.addEventListener("mouseenter", () => {
                    r.style.setProperty("display", "block"),
                        (r.textContent = o.querySelector(".side-menu__label").textContent),
                        document.querySelector("html").getAttribute("data-vertical-style") ==
                        "doublemenu" && o.appendChild(r);
                }),
                o.addEventListener("mouseleave", () => {
                    r.style.setProperty("display", "none"),
                        (r.textContent = o.querySelector(".side-menu__label").textContent),
                        document
                        .querySelector("html")
                        .getAttribute("data-vertical-style") == "doublemenu" &&
                        o.removeChild(r);
                });
        });
}

function ft() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-click"),
        f(),
        e.getAttribute("data-nav-layout") === "vertical" && M();
}

function pt() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-hover"),
        e.removeAttribute("hor-style"),
        e.removeAttribute("data-vertical-style"),
        f(),
        e.getAttribute("toggled") === "menu-hover-closed" && u();
}

function bt() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "icon-click"),
        f(),
        e.getAttribute("data-nav-layout") === "vertical" && M();
}

function St() {
    document.querySelector("html").setAttribute("data-nav-style", "icon-hover"),
        f(),
        u();
}

function M() {
    let e = window.location.pathname.split("/")[0];
    (e = location.pathname == "/" ? "index" : location.pathname.substring(1)),
    (e = e.substring(e.lastIndexOf("/") + 1)),
    document.querySelectorAll(".side-menu__item").forEach((r) => {
        if (
            (e === "/" && (e = "index"),
                r.getAttribute("href") === window.location.href)
        ) {
            r.classList.add("active"), r.parentElement.classList.add("active");
            let o = r.closest("ul"),
                a = r.closest("ul:not(.main-menu)"),
                n = !0;
            for (; n;)
                o ?
                (o.classList.add("active"),
                    o.previousElementSibling.classList.add("active"),
                    o.parentElement.classList.add("active"),
                    yt(o),
                    (o = o.parentElement.closest("ul")),
                    o &&
                    o.closest("ul:not(.main-menu)") &&
                    (a = o.closest("ul:not(.main-menu)")),
                    a || (n = !1)) :
                (n = !1);
        }
    });
}

function u() {
    document.querySelectorAll("ul.slide-menu").forEach((t) => {
        let r = t.closest("ul"),
            o = t.closest("ul:not(.main-menu)");
        if (r) {
            let a = r.closest("ul.main-menu");
            for (; a;)
                r.classList.add("active"),
                re(r),
                (r = r.parentElement.closest("ul")),
                (o = r.closest("ul:not(.main-menu)")),
                o || (a = !1);
        }
    });
}

function fe() {
    function e() {
        let t = document.querySelectorAll(".slide"),
            r = document.querySelectorAll(".slide-menu");
        t.forEach((o, a) => {
                o.classList.contains("is-expanded") == !0 &&
                    o.classList.remove("is-expanded");
            }),
            r.forEach((o, a) => {
                o.classList.contains("open") == !0 &&
                    (o.classList.remove("open"), (o.style.display = "none"));
            });
    }
    e();
}
let H = document.querySelector(".slide-left"),
    A = document.querySelector(".slide-right");
H.addEventListener("click", () => {
    let e = document.querySelector(".main-menu"),
        t = document.querySelector(".main-sidebar"),
        r = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
        o = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        a = t.offsetWidth;
    e.scrollWidth > t.offsetWidth ?
        document.querySelector("html").getAttribute("dir") !== "rtl" ?
        r < 0 && !(Math.abs(r) < a) ?
        ((e.style.marginRight = 0),
            (e.style.marginLeft =
                Number(e.style.marginLeft.split("px")[0]) + Math.abs(a) + "px"),
            A.classList.remove("hidden")) :
        (r >= 0,
            (e.style.marginLeft = "0px"),
            H.classList.add("hidden"),
            A.classList.remove("hidden")) :
        o < 0 && !(Math.abs(o) < a) ?
        ((e.style.marginLeft = 0),
            (e.style.marginRight =
                Number(e.style.marginRight.split("px")[0]) + Math.abs(a) + "px"),
            A.classList.remove("hidden")) :
        (o >= 0,
            (e.style.marginRight = "0px"),
            H.classList.add("hidden"),
            A.classList.remove("hidden")) :
        ((document.querySelector(".main-menu").style.marginLeft = "0px"),
            (document.querySelector(".main-menu").style.marginRight = "0px")),
        fe();
});
A.addEventListener("click", () => {
    let e = document.querySelector(".main-menu"),
        t = document.querySelector(".main-sidebar"),
        r = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
        o = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        a = e.scrollWidth - t.offsetWidth,
        n = t.offsetWidth;
    e.scrollWidth > t.offsetWidth &&
        (document.querySelector("html").getAttribute("dir") !== "rtl" ?
            Math.abs(a) > Math.abs(r) &&
            ((e.style.marginRight = 0),
                Math.abs(a) > Math.abs(r) + n ||
                ((n = Math.abs(a) - Math.abs(r)), A.classList.add("hidden")),
                (e.style.marginLeft =
                    Number(e.style.marginLeft.split("px")[0]) - Math.abs(n) + "px"),
                H.classList.remove("hidden")) :
            Math.abs(a) > Math.abs(o) &&
            ((e.style.marginLeft = 0),
                Math.abs(a) > Math.abs(o) + n ||
                ((n = Math.abs(a) - Math.abs(o)), A.classList.add("hidden")),
                (e.style.marginRight =
                    Number(e.style.marginRight.split("px")[0]) - Math.abs(n) + "px"),
                H.classList.remove("hidden"))),
        fe();
});

function vt() {
    let e = document.querySelector(".main-menu"),
        t = document.querySelector(".main-sidebar"),
        r = document.querySelector(".slide-left"),
        o = document.querySelector(".slide-right"),
        a = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
        n = Math.ceil(
            Number(window.getComputedStyle(e).marginRight.split("px")[0])
        ),
        m = e.scrollWidth - t.offsetWidth;
    e.scrollWidth > t.offsetWidth ?
        (o.classList.remove("hidden"), r.classList.add("hidden")) :
        (o.classList.add("hidden"),
            r.classList.add("hidden"),
            (e.style.marginLeft = "0px"),
            (e.style.marginRight = "0px")),
        document.querySelector("html").getAttribute("dir") !== "rtl" ?
        (e.scrollWidth > t.offsetWidth &&
            Math.abs(m) < Math.abs(a) &&
            ((e.style.marginLeft = -m + "px"),
                r.classList.remove("hidden"),
                o.classList.add("hidden")),
            a == 0 ?
            (r.classList.add("hidden"), o.classList.remove("hidden")) :
            r.classList.remove("hidden")) :
        (e.scrollWidth > t.offsetWidth &&
            Math.abs(m) < Math.abs(n) &&
            ((e.style.marginRight = -m + "px"),
                r.classList.remove("hidden"),
                o.classList.add("hidden")),
            n == 0 ? r.classList.add("hidden") : r.classList.remove("hidden")),
        (a != 0 || n != 0) && r.classList.remove("hidden");
}

function gr() {
    window.innerWidth >= 992 &&
        (document.querySelector("html"),
            document
            .querySelectorAll(".main-menu > li > .side-menu__item")
            .forEach((t) => {
                t.addEventListener("click", pe);
            }));
}

function pe() {
    var e = this;
    let t = document.querySelector("html");
    var r = e.nextElementSibling;
    r &&
        (r.classList.contains("double-menu-active") ||
            (document.querySelector(".slide-menu") &&
                document.querySelectorAll(".slide-menu").forEach((a) => {
                    a.classList.contains("double-menu-active") &&
                        (a.classList.remove("double-menu-active"),
                            t.setAttribute("toggled", "double-menu-close"));
                }),
                r.classList.add("double-menu-active"),
                t.setAttribute("toggled", "double-menu-open")));
}
window.addEventListener("unload", () => {
    document.querySelector(".main-content").removeEventListener("click", u),
        window.removeEventListener("resize", gt),
        document
        .querySelectorAll(".main-menu li > .side-menu__item")
        .forEach((r) => r.removeEventListener("click", pe));
});
let fr = () => {
    document.querySelectorAll(".side-menu__item").forEach((e) => {
        if (e.classList.contains("active")) {
            let t = e.getBoundingClientRect();
            e.children[0] &&
                e.parentElement.classList.contains("has-sub") &&
                t.top > 435 &&
                e.scrollIntoView({ behavior: "smooth" });
        }
    });
};
setTimeout(() => {
    fr();
}, 300);
document.querySelectorAll(".side-menu__item").forEach((e) => {
    e.addEventListener("click", () => {
        let t = e.parentNode.querySelector(".child2");
        if (t) {
            const r = t.getBoundingClientRect();
            (r.right > window.innerWidth || r.bottom > window.innerHeight) &&
            document.querySelector("html").getAttribute("data-nav-layout") ==
                "horizontal" &&
                document.querySelector("html").getAttribute("dir") == "ltr" &&
                (t.style.setProperty("right", "100%", "important"),
                    t.style.setProperty("left", "auto", "important")),
                t.scrollWidth <= t.clientWidth &&
                t.scrollWidth != 0 &&
                document.querySelector("html").getAttribute("data-nav-layout") ==
                "horizontal" &&
                document.querySelector("html").getAttribute("dir") == "rtl" &&
                (t.style.setProperty("left", "100%", "important"),
                    t.style.setProperty("right", "auto", "important"));
        }
    });
});
let wt;
(function() {
    document.querySelector("html"),
        (wt = document.querySelector(".main-content")),
        vr(),
        document.querySelector("#hs-overlay-switcher") &&
        (pr(),
            L(),
            setTimeout(() => {
                L();
            }, 1e3)),
        (document.getElementById("year").innerHTML = new Date().getFullYear());
    var e = document.getElementById("sidebar-scroll");
    if (
        (new SimpleBar(e, { autoHide: !0 }),
            document.querySelector("#hs-overlay-switcher"))
    ) {
        var t = document.getElementById("switcher-body");
        new SimpleBar(t, { autoHide: !0 });
        const y = document.querySelector(".pickr-container-primary"),
            x = document.querySelector(".theme-container-primary"),
            q = document.querySelector(".pickr-container-background"),
            B = document.querySelector(".theme-container-background"),
            _ = [
                [
                    "nano",
                    {
                        defaultRepresentation: "RGB",
                        components: {
                            preview: !0,
                            opacity: !1,
                            hue: !0,
                            interaction: {
                                hex: !1,
                                rgba: !0,
                                hsva: !1,
                                input: !0,
                                clear: !1,
                                save: !1,
                            },
                        },
                    },
                ],
            ],
            T = [];
        let P = null;
        for (const [E, G] of _) {
            const h = document.createElement("button");
            (h.innerHTML = E),
            T.push(h),
                h.addEventListener("click", () => {
                    const C = document.createElement("p");
                    y.appendChild(C), P && P.destroyAndRemove();
                    for (const k of T) k.classList[k === h ? "add" : "remove"]("active");
                    (P = new Pickr(
                        Object.assign({ el: C, theme: E, default: "#5e76a6" }, G)
                    )),
                    P.on("changestop", (k, N) => {
                        let i = N.getColor().toRGBA(),
                            b = document.querySelector("html");
                        b.style.setProperty(
                                "--color-primary",
                                `${Math.floor(i[0])} ${Math.floor(i[1])} ${Math.floor(i[2])}`
                            ),
                            b.style.setProperty(
                                "--color-primary-rgb",
                                `${Math.floor(i[0])} ,${Math.floor(i[1])}, ${Math.floor(
                    i[2]
                  )}`
                            ),
                            localStorage.setItem(
                                "primaryRGB",
                                `${Math.floor(i[0])}, ${Math.floor(i[1])}, ${Math.floor(
                    i[2]
                  )}`
                            ),
                            localStorage.setItem(
                                "primaryRGB1",
                                `${Math.floor(i[0])} ${Math.floor(i[1])} ${Math.floor(i[2])}`
                            ),
                            v();
                    });
                }),
                x.appendChild(h);
        }
        T[0].click();
        const Y = [];
        let F = null;
        for (const [E, G] of _) {
            const h = document.createElement("button");
            (h.innerHTML = E),
            Y.push(h),
                h.addEventListener("click", () => {
                    const C = document.createElement("p");
                    q.appendChild(C), F && F.destroyAndRemove();
                    for (const k of T) k.classList[k === h ? "add" : "remove"]("active");
                    (F = new Pickr(
                        Object.assign({ el: C, theme: E, default: "#5e76a6" }, G)
                    )),
                    F.on("changestop", (k, N) => {
                        let i = N.getColor().toRGBA(),
                            b = document.querySelector("html");
                        b.style.setProperty(
                                "--body-bg",
                                `${Math.floor(i[0] + 14)}
             ${Math.floor(i[1] + 14)}
              ${Math.floor(i[2] + 14)}`
                            ),
                            b.style.setProperty(
                                "--dark-bg",
                                `
            ${Math.floor(i[0])}
            ${Math.floor(i[1])}
            ${Math.floor(i[2])}
  
            `
                            ),
                            localStorage.removeItem("bgtheme"),
                            v(),
                            b.classList.add("dark"),
                            b.classList.remove("light"),
                            b.setAttribute("data-menu-styles", "dark"),
                            b.setAttribute("data-header-styles", "dark"),
                            (document.querySelector("#switcher-dark-theme").checked = !0),
                            localStorage.setItem(
                                "bodyBgRGB",
                                `${Math.floor(i[0] + 14)}
             ${Math.floor(i[1] + 14)}
              ${Math.floor(i[2] + 14)}`
                            ),
                            localStorage.setItem(
                                "darkBgRGB",
                                `${Math.floor(i[0])} ${Math.floor(i[1])} ${Math.floor(i[2])}`
                            );
                    });
                }),
                B.appendChild(h);
        }
        Y[0].click();
    }
    let r = ".box";
    document.querySelectorAll(".box-remove").forEach((y) => {
            y.addEventListener("click", function(x) {
                return x.preventDefault(), this.closest(r).remove(), !1;
            });
        }),
        document.querySelectorAll(".box-fullscreen").forEach((y) => {
            y.addEventListener("click", function(x) {
                let B = this.closest(r);
                return (
                    B.classList.toggle("box-fullscreen"),
                    B.classList.remove("box-collapsed"),
                    x.preventDefault(), !1
                );
            });
        });
    const n = document.querySelector(".scrollToTop"),
        m = document.documentElement;
    (window.onscroll = () => {
        m.scrollHeight - m.clientHeight,
            window.scrollY > 100 ?
            (n.style.display = "flex") :
            (n.style.display = "none");
    }),
    (n.onclick = () => {
        window.scrollTo(0, 0);
    }),
    document.querySelectorAll(".header-remove-btn").forEach((y, x) => {
        y.addEventListener("click", (q) => {
            q.preventDefault(),
                q.stopPropagation(),
                y.parentNode.remove(),
                document.getElementById("allCartsContainer") &&
                ((document.getElementById("cart-data").innerText = `${
              document.getElementById("allCartsContainer").children.length
            } Items`),
                    (document.getElementById("cart-data2").innerText = `${
              document.getElementById("allCartsContainer").children.length
            }`)),
                document.getElementById("allNotifyContainer") &&
                (document.getElementById("notify-data").innerText = `${
              document.getElementById("allNotifyContainer").children.length
            }`),
                document.getElementById("allCartsContainer") &&
                document.getElementById("allCartsContainer").children.length == 0 &&
                (document.getElementById(
                    "allCartsContainer"
                ).parentNode.innerHTML = `
                        <div class="p-6 pb-8 text-center">
                          <div>
                            <i class="ri ri-shopping-cart-2-line leading-none text-4xl avatar avatar-lg bg-primary/20 text-primary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
                            <div class="mt-5">
                              <p class="text-base font-semibold text-gray-800 dark:text-white mb-1">
                                No Items In Cart
                              </p>
                              <p class="text-xs text-gray-500 dark:text-white/70">
                              When you have Items added here , they will appear here.
                              </p>
                              <a href="javascript:void(0);" class="m-0 ti-btn ti-btn-primary py-1 mt-5"><i class="ti ti-arrow-right text-base leading-none"></i>Continue Shopping</a>
                            </div>
                          </div>
                        </div>`),
                document.getElementById("allNotifyContainer") &&
                document.getElementById("allNotifyContainer").children.length ==
                0 &&
                (document.getElementById(
                    "allNotifyContainer"
                ).parentNode.innerHTML = `
          <div class="p-6 pb-8 text-center">
          <div>
            <i class="ri ri-notification-off-line leading-none text-4xl avatar avatar-lg bg-secondary/20 text-secondary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
            <div class="mt-5">
              <p class="text-base font-semibold text-gray-800 dark:text-white mb-1">
                No Notifications Found
              </p>
              <p class="text-xs text-gray-500 dark:text-white/70">
              When you have notifications added here , they will appear here.
              </p>
            </div>
          </div>
        </div>`);
        });
    });
})();
var J = document.documentElement;
window.openFullscreen = function() {
    let e = document.querySelector(".full-screen-open"),
        t = document.querySelector(".full-screen-close");
    !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement ?
        (J.requestFullscreen ?
            J.requestFullscreen() :
            J.webkitRequestFullscreen ?
            J.webkitRequestFullscreen() :
            J.msRequestFullscreen && J.msRequestFullscreen(),
            t.classList.add("block"),
            t.classList.remove("hidden"),
            e.classList.add("hidden")) :
        (document.exitFullscreen ?
            document.exitFullscreen() :
            document.webkitExitFullscreen ?
            document.webkitExitFullscreen() :
            document.msExitFullscreen && document.msExitFullscreen(),
            t.classList.remove("block"),
            e.classList.remove("hidden"),
            t.classList.add("hidden"),
            e.classList.add("block"));
};

function pr() {
    let e,
        t,
        r,
        o,
        a,
        n,
        m,
        R,
        y,
        x,
        q,
        B,
        _,
        T,
        P,
        Y,
        F,
        E,
        G,
        h,
        C,
        k,
        N,
        i,
        b,
        be,
        Se,
        ve,
        we,
        xe,
        ke,
        qe,
        Ae,
        Le,
        Ie,
        Be,
        Ee,
        Ce,
        Me,
        De,
        Re,
        Te,
        Pe,
        Fe,
        Oe,
        ze,
        He,
        We,
        $e,
        Ge,
        l = document.querySelector("html");
    (a = document.querySelector("#switcher-light-theme")),
    (n = document.querySelector("#switcher-dark-theme")),
    (e = document.querySelector("#switcher-ltr")),
    (t = document.querySelector("#switcher-rtl")),
    (r = document.querySelector("#switcher-vertical")),
    (o = document.querySelector("#switcher-horizontal")),
    (m = document.querySelector("#switcher-boxed")),
    (R = document.querySelector("#switcher-full-width")),
    (B = document.querySelector("#switcher-menu-fixed")),
    (x = document.querySelector("#switcher-menu-scroll")),
    (q = document.querySelector("#switcher-header-fixed")),
    (y = document.querySelector("#switcher-header-scroll")),
    (_ = document.querySelector("#switcher-header-light")),
    (T = document.querySelector("#switcher-header-dark")),
    (P = document.querySelector("#switcher-header-primary")),
    (Y = document.querySelector("#switcher-header-gradient")),
    (k = document.querySelector("#switcher-header-transparent")),
    (F = document.querySelector("#switcher-menu-light")),
    (E = document.querySelector("#switcher-menu-dark")),
    (G = document.querySelector("#switcher-menu-primary")),
    (h = document.querySelector("#switcher-menu-gradient")),
    (C = document.querySelector("#switcher-menu-transparent")),
    (N = document.querySelector("#switcher-regular")),
    (i = document.querySelector("#switcher-classic")),
    (b = document.querySelector("#switcher-default-menu")),
    (ke = document.querySelector("#switcher-menu-click")),
    (qe = document.querySelector("#switcher-menu-hover")),
    (Ae = document.querySelector("#switcher-icon-click")),
    (Le = document.querySelector("#switcher-icon-hover")),
    (be = document.querySelector("#switcher-closed-menu")),
    (Se = document.querySelector("#switcher-icontext-menu")),
    (we = document.querySelector("#switcher-icon-overlay")),
    (xe = document.querySelector("#switcher-double-menu")),
    (ve = document.querySelector("#switcher-detached")),
    document.querySelector("#resetbtn"),
        (Ie = document.querySelector("#switcher-primary")),
        (Be = document.querySelector("#switcher-primary1")),
        (Ee = document.querySelector("#switcher-primary2")),
        (Ce = document.querySelector("#switcher-primary3")),
        (Me = document.querySelector("#switcher-primary4")),
        (De = document.querySelector("#switcher-background")),
        (Re = document.querySelector("#switcher-background1")),
        (Te = document.querySelector("#switcher-background2")),
        (Pe = document.querySelector("#switcher-background3")),
        (Fe = document.querySelector("#switcher-background4")),
        (Oe = document.querySelector("#switcher-bg-img")),
        (ze = document.querySelector("#switcher-bg-img1")),
        (He = document.querySelector("#switcher-bg-img2")),
        (We = document.querySelector("#switcher-bg-img3")),
        ($e = document.querySelector("#switcher-bg-img4")),
        (Ge = document.querySelector("#reset-all")),
        Ie.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "58, 88, 146"),
                localStorage.setItem("primaryRGB1", "58 88 146"),
                l.style.setProperty("--color-primary-rgb", "58, 88, 146"),
                l.style.setProperty("--color-primary", "58 88 146"),
                v();
        }),
        Be.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "92, 144, 163"),
                localStorage.setItem("primaryRGB1", "92 144 163"),
                l.style.setProperty("--color-primary-rgb", "92, 144, 163"),
                l.style.setProperty("--color-primary", "92 144 163"),
                v();
        }),
        Ee.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "172, 172, 80"),
                localStorage.setItem("primaryRGB1", "172 172 80"),
                l.style.setProperty("--color-primary-rgb", "172, 172, 80"),
                l.style.setProperty("--color-primary", "172 172 80"),
                v();
        }),
        Ce.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "165, 94, 131"),
                localStorage.setItem("primaryRGB1", "165 94 131"),
                l.style.setProperty("--color-primary-rgb", "165, 94, 131"),
                l.style.setProperty("--color-primary", "165 94 131"),
                v();
        }),
        Me.addEventListener("click", () => {
            localStorage.setItem("primaryRGB", "87, 68, 117"),
                localStorage.setItem("primaryRGB1", "87 68 117"),
                l.style.setProperty("--color-primary-rgb", "87, 68, 117"),
                l.style.setProperty("--color-primary", "87 68 117"),
                v();
        }),
        De.addEventListener("click", () => {
            localStorage.setItem("bodyBgRGB", `${50 + 14} ${62 + 14} ${93 + 14}`),
                localStorage.setItem("darkBgRGB", "50 62 93"),
                localStorage.removeItem("SyntoHeader"),
                localStorage.removeItem("SyntoMenu"),
                l.classList.add("dark"),
                l.classList.remove("light"),
                l.setAttribute("data-menu-styles", "dark"),
                l.setAttribute("data-header-styles", "dark"),
                document
                .querySelector("html")
                .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                .querySelector("html")
                .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0);
        }),
        Re.addEventListener("click", () => {
            localStorage.setItem("bodyBgRGB", `${81 + 14} ${93 + 14} ${50 + 14}`),
                localStorage.setItem("darkBgRGB", "81 93 50"),
                localStorage.removeItem("SyntoHeader"),
                localStorage.removeItem("SyntoMenu"),
                l.classList.add("dark"),
                l.classList.remove("light"),
                l.setAttribute("data-menu-styles", "dark"),
                l.setAttribute("data-header-styles", "dark"),
                document
                .querySelector("html")
                .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                .querySelector("html")
                .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0);
        }),
        Te.addEventListener("click", () => {
            localStorage.setItem("bodyBgRGB", `${79 + 14} ${50 + 14} ${93 + 14}`),
                localStorage.setItem("darkBgRGB", "79 50 93"),
                localStorage.removeItem("SyntoHeader"),
                localStorage.removeItem("SyntoMenu"),
                l.classList.add("dark"),
                l.classList.remove("light"),
                l.setAttribute("data-menu-styles", "dark"),
                l.setAttribute("data-header-styles", "dark"),
                document
                .querySelector("html")
                .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                .querySelector("html")
                .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0);
        }),
        Pe.addEventListener("click", () => {
            localStorage.setItem("bodyBgRGB", `${50 + 14} ${87 + 14} ${93 + 14}`),
                localStorage.setItem("darkBgRGB", "50 87 93"),
                localStorage.removeItem("SyntoHeader"),
                localStorage.removeItem("SyntoMenu"),
                l.classList.add("dark"),
                l.classList.remove("light"),
                l.setAttribute("data-menu-styles", "dark"),
                l.setAttribute("data-header-styles", "dark"),
                document
                .querySelector("html")
                .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                .querySelector("html")
                .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0);
        }),
        Fe.addEventListener("click", () => {
            localStorage.setItem("bodyBgRGB", `${93 + 14} ${50 + 14} ${50 + 14}`),
                localStorage.setItem("darkBgRGB", "93 50 50"),
                localStorage.removeItem("SyntoHeader"),
                localStorage.removeItem("SyntoMenu"),
                l.classList.add("dark"),
                l.classList.remove("light"),
                l.setAttribute("data-menu-styles", "dark"),
                l.setAttribute("data-header-styles", "dark"),
                document
                .querySelector("html")
                .style.setProperty("--body-bg", localStorage.bodyBgRGB),
                document
                .querySelector("html")
                .style.setProperty("--dark-bg", localStorage.darkBgRGB),
                (document.querySelector("#switcher-dark-theme").checked = !0);
        }),
        Oe.addEventListener("click", () => {
            l.setAttribute("bg-img", "bgimg1"),
                localStorage.setItem("bgimg", "bgimg1");
        }),
        ze.addEventListener("click", () => {
            l.setAttribute("bg-img", "bgimg2"),
                localStorage.setItem("bgimg", "bgimg2");
        }),
        He.addEventListener("click", () => {
            l.setAttribute("bg-img", "bgimg3"),
                localStorage.setItem("bgimg", "bgimg3");
        }),
        We.addEventListener("click", () => {
            l.setAttribute("bg-img", "bgimg4"),
                localStorage.setItem("bgimg", "bgimg4");
        }),
        $e.addEventListener("click", () => {
            l.setAttribute("bg-img", "bgimg5"),
                localStorage.setItem("bgimg", "bgimg5");
        }),
        a.addEventListener("click", () => {
            qt(), localStorage.setItem("SyntoHeader", "light");
        }),
        n.addEventListener("click", () => {
            br(),
                localStorage.setItem("SyntoMenu", "dark"),
                localStorage.setItem("SyntoHeader", "dark");
        }),
        F.addEventListener("click", () => {
            l.setAttribute("data-menu-styles", "light"),
                localStorage.setItem("SyntoMenu", "light");
        }),
        G.addEventListener("click", () => {
            l.setAttribute("data-menu-styles", "color"),
                localStorage.setItem("SyntoMenu", "color");
        }),
        E.addEventListener("click", () => {
            l.setAttribute("data-menu-styles", "dark"),
                localStorage.setItem("SyntoMenu", "dark");
        }),
        h.addEventListener("click", () => {
            l.setAttribute("data-menu-styles", "gradient"),
                localStorage.setItem("SyntoMenu", "gradient");
        }),
        C.addEventListener("click", () => {
            l.setAttribute("data-menu-styles", "transparent"),
                localStorage.setItem("SyntoMenu", "transparent");
        }),
        _.addEventListener("click", () => {
            l.setAttribute("data-header-styles", "light"),
                localStorage.setItem("SyntoHeader", "light");
        }),
        P.addEventListener("click", () => {
            l.setAttribute("data-header-styles", "color"),
                localStorage.setItem("SyntoHeader", "color");
        }),
        T.addEventListener("click", () => {
            l.setAttribute("data-header-styles", "dark"),
                localStorage.setItem("SyntoHeader", "dark");
        }),
        Y.addEventListener("click", () => {
            l.setAttribute("data-header-styles", "gradient"),
                localStorage.setItem("SyntoHeader", "gradient");
        }),
        k.addEventListener("click", () => {
            l.setAttribute("data-header-styles", "transparent"),
                localStorage.setItem("SyntoHeader", "transparent");
        }),
        R.addEventListener("click", () => {
            l.setAttribute("data-width", "fullwidth"),
                localStorage.setItem("Syntofullwidth", !0),
                localStorage.removeItem("Syntoboxed");
        }),
        m.addEventListener("click", () => {
            l.setAttribute("data-width", "boxed"),
                localStorage.setItem("Syntoboxed", !0),
                localStorage.removeItem("Syntofullwidth"),
                vt();
        }),
        N.addEventListener("click", () => {
            l.setAttribute("data-page-style", "regular"),
                localStorage.setItem("Syntoregular", !0),
                localStorage.removeItem("Syntoclassic");
        }),
        i.addEventListener("click", () => {
            l.setAttribute("data-page-style", "classic"),
                localStorage.setItem("Syntoclassic", !0),
                localStorage.removeItem("Syntoregular");
        }),
        q.addEventListener("click", () => {
            l.setAttribute("data-header-position", "fixed"),
                localStorage.setItem("Syntoheaderfixed", !0),
                localStorage.removeItem("Syntoheaderscrollable");
        }),
        y.addEventListener("click", () => {
            l.setAttribute("data-header-position", "scrollable"),
                localStorage.setItem("Syntoheaderscrollable", !0),
                localStorage.removeItem("Syntoheaderfixed");
        }),
        B.addEventListener("click", () => {
            l.setAttribute("data-menu-position", "fixed"),
                localStorage.setItem("Syntomenufixed", !0),
                localStorage.removeItem("Syntomenuscrollable");
        }),
        x.addEventListener("click", () => {
            l.setAttribute("data-menu-position", "scrollable"),
                localStorage.setItem("Syntomenuscrollable", !0),
                localStorage.removeItem("Syntomenufixed");
        }),
        b.addEventListener("click", () => {
            l.setAttribute("data-vertical-style", "default"),
                l.setAttribute("data-nav-layout", "vertical"),
                f(),
                localStorage.removeItem("Syntoverticalstyles");
        }),
        be.addEventListener("click", () => {
            ur(), localStorage.setItem("Syntoverticalstyles", "closed");
        }),
        ve.addEventListener("click", () => {
            mr(), localStorage.setItem("Syntoverticalstyles", "detached");
        }),
        Se.addEventListener("click", () => {
            yr(), localStorage.setItem("Syntoverticalstyles", "icontext");
        }),
        we.addEventListener("click", () => {
            ge(), localStorage.setItem("Syntoverticalstyles", "overlay");
        }),
        xe.addEventListener("click", () => {
            hr(), localStorage.setItem("Syntoverticalstyles", "doublemenu");
        }),
        ke.addEventListener("click", () => {
            l.removeAttribute("data-vertical-style"),
                ft(),
                localStorage.setItem("Syntonavstyles", "menu-click"),
                localStorage.removeItem("Syntoverticalstyles");
        }),
        qe.addEventListener("click", () => {
            l.removeAttribute("data-vertical-style"),
                pt(),
                localStorage.setItem("Syntonavstyles", "menu-hover"),
                localStorage.removeItem("Syntoverticalstyles");
        }),
        Ae.addEventListener("click", () => {
            l.removeAttribute("data-vertical-style"),
                bt(),
                localStorage.setItem("Syntonavstyles", "icon-click"),
                localStorage.removeItem("Syntoverticalstyles"),
                (document.querySelector(".main-menu").style.marginLeft = "0px"),
                (document.querySelector(".main-menu").style.marginRight = "0px");
        }),
        Le.addEventListener("click", () => {
            l.removeAttribute("data-vertical-style"),
                St(),
                localStorage.setItem("Syntonavstyles", "icon-hover"),
                localStorage.removeItem("Syntoverticalstyles"),
                (document.querySelector(".main-menu").style.marginLeft = "0px"),
                (document.querySelector(".main-menu").style.marginRight = "0px");
        }),
        r.addEventListener("click", () => {
            let S = document.querySelector(".main-content");
            localStorage.setItem("Syntolayout", "vertical"),
                At(),
                M(),
                S.removeEventListener("click", u),
                document.querySelectorAll(".slide").forEach((oe) => {
                    oe.classList.contains("open") &&
                        !oe.classList.contains("active") &&
                        (oe.querySelector("ul").style.display = "none");
                });
        }),
        o.addEventListener("click", () => {
            let S = document.querySelector(".main-content");
            l.removeAttribute("data-vertical-style"),
                localStorage.setItem("Syntolayout", "horizontal"),
                localStorage.removeItem("Syntoverticalstyles"),
                Lt(),
                u(),
                S.addEventListener("click", u);
        }),
        t.addEventListener("click", () => {
            localStorage.setItem("Syntortl", !0),
                localStorage.removeItem("Syntoltr"),
                kt(),
                document.querySelector("#color-slider") &&
                document.querySelectorAll(".noUi-origin").forEach((S) => {
                    S.classList.add("!transform-none");
                });
        }),
        e.addEventListener("click", () => {
            localStorage.setItem("Syntoltr", !0),
                localStorage.removeItem("Syntortl"),
                xt(),
                document.querySelector("#color-slider") &&
                document.querySelectorAll(".noUi-origin").forEach((S) => {
                    S.classList.remove("!transform-none");
                });
        }),
        Ge.addEventListener("click", () => {
            Sr(),
                M(),
                document.querySelectorAll(".slide").forEach((S) => {
                    S.classList.contains("open") &&
                        !S.classList.contains("active") &&
                        (console.log(S), (S.querySelector("ul").style.display = "none"));
                });
        });
}

function xt() {
    document.querySelector("html").setAttribute("dir", "ltr"),
        (document.querySelector("#switcher-ltr").checked = !0),
        L();
}

function kt() {
    document.querySelector("html").setAttribute("dir", "rtl"), L();
}

function qt() {
    let e = document.querySelector("html");
    e.classList.remove("dark"),
        e.classList.add("light"),
        e.setAttribute("data-header-styles", "light"),
        e.setAttribute("data-menu-styles", "dark"),
        (document.querySelector("#switcher-light-theme").checked = !0),
        (document.querySelector("#switcher-menu-dark").checked = !0),
        (document.querySelector("#switcher-header-light").checked = !0),
        v(),
        localStorage.setItem("Syntolighttheme", !0),
        localStorage.removeItem("Syntodarktheme"),
        localStorage.removeItem("SyntobgColor"),
        localStorage.removeItem("Syntoheaderbg"),
        localStorage.removeItem("Syntobgwhite"),
        localStorage.removeItem("Syntomenubg"),
        localStorage.removeItem("darkBgRGB"),
        localStorage.removeItem("bodyBgRGB"),
        localStorage.removeItem("SyntoMenu"),
        L(),
        e.style.removeProperty("--body-bg"),
        e.style.removeProperty("--dark-bg"),
        document.querySelector("html").getAttribute("data-nav-layout") ==
        "horizontal" &&
        (document.querySelector("html").setAttribute("data-menu-styles", "light"),
            (document.querySelector("#switcher-menu-light").checked = !0));
}

function br() {
    let e = document.querySelector("html");
    e.classList.add("dark"),
        e.classList.remove("light"),
        e.setAttribute("data-header-styles", "dark"),
        e.setAttribute("data-menu-styles", "dark"),
        (document.querySelector("#switcher-menu-dark").checked = !0),
        (document.querySelector("#switcher-header-dark").checked = !0),
        document
        .querySelector("html")
        .style.removeProperty("--body-bg", localStorage.bodyBgRGB),
        document
        .querySelector("html")
        .style.removeProperty("--dark-bg", localStorage.darkBgRGB),
        v(),
        localStorage.setItem("Syntodarktheme", !0),
        localStorage.removeItem("Syntolighttheme"),
        localStorage.removeItem("bodyBgRGB"),
        localStorage.removeItem("SyntobgColor"),
        localStorage.removeItem("Syntoheaderbg"),
        localStorage.removeItem("Syntobgwhite"),
        localStorage.removeItem("Syntomenubg"),
        L();
}

function At() {
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"),
        e.setAttribute("data-vertical-style", "overlay"),
        e.removeAttribute("data-nav-style"),
        localStorage.removeItem("Syntonavstyles"),
        e.removeAttribute("toggled"),
        (document.querySelector("#switcher-vertical").checked = !0),
        (document.querySelector("#switcher-default-menu").checked = !0),
        (document.querySelector("#switcher-menu-click").checked = !1),
        (document.querySelector("#switcher-menu-hover").checked = !1),
        (document.querySelector("#switcher-icon-click").checked = !1),
        (document.querySelector("#switcher-icon-hover").checked = !1),
        L(),
        (document.querySelector(".main-menu").style.marginLeft = "0px"),
        (document.querySelector(".main-menu").style.marginRight = "0px"),
        e.setAttribute("data-menu-styles", "dark");
}

function Lt() {
    document.querySelector("#switcher-horizontal") &&
        (document.querySelector("#switcher-horizontal").checked = !0);
    let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "horizontal"),
        e.getAttribute("data-nav-style") ||
        e.setAttribute("data-nav-style", "menu-click"), !localStorage.SyntoMenu &&
        !localStorage.bodyBgRGB &&
        e.setAttribute("data-menu-styles", "light"),
        L();
}

function Sr() {
    let e = document.querySelector("html");
    L(),
        localStorage.clear(),
        qt(),
        document.querySelector("#color-slider") &&
        document.querySelectorAll(".noUi-origin").forEach((t) => {
            t.classList.remove("!transform-none");
        }),
        e.removeAttribute("data-nav-style"),
        e.removeAttribute("data-menu-position"),
        e.removeAttribute("data-header-position"),
        e.removeAttribute("data-width"),
        e.removeAttribute("data-page-style"),
        e.removeAttribute("bg-img"),
        e.style.removeProperty("--color-primary"),
        e.style.removeProperty("--color-primary-rgb"),
        e.style.removeProperty("--body-bg"),
        e.style.removeProperty("--dark-bg"),
        xt(),
        At(),
        wt.removeEventListener("click", u),
        (document.querySelector("#switcher-classic").checked = !1),
        (document.querySelector("#switcher-regular").checked = !0),
        (document.querySelector("#switcher-full-width").checked = !0),
        (document.querySelector("#switcher-boxed").checked = !1),
        (document.querySelector("#switcher-menu-fixed").checked = !0),
        (document.querySelector("#switcher-menu-scroll").checked = !1),
        (document.querySelector("#switcher-header-fixed").checked = !0),
        (document.querySelector("#switcher-header-scroll").checked = !1),
        (document.querySelector("#switcher-default-menu").checked = !0),
        (document.querySelector("#switcher-closed-menu").checked = !1),
        (document.querySelector("#switcher-icontext-menu").checked = !1),
        (document.querySelector("#switcher-icon-overlay").checked = !1),
        (document.querySelector("#switcher-detached").checked = !1),
        (document.querySelector("#switcher-double-menu").checked = !1),
        v(),
        (document.querySelector(".main-menu").style.marginLeft = "0px"),
        (document.querySelector(".main-menu").style.marginRight = "0px"),
        (document.querySelector("#switcher-primary").checked = !0),
        (document.querySelector("#switcher-background").checked = !0),
        document.querySelectorAll(".has-sub").forEach((t) => {
            t.classList.contains("open") &&
                !t.classList.contains("active") &&
                (t.classList.remove("open"), (t.querySelector("ul").style = ""));
        });
}

function L() {
    if (
        (localStorage.getItem("Syntodarktheme") ?
            (document.querySelector("#switcher-dark-theme").checked = !0) :
            (document.querySelector("#switcher-light-theme").checked = !0),
            localStorage.getItem("Syntolayout") === "horizontal" ?
            (document.querySelector("#switcher-horizontal").checked = !0) :
            (document.querySelector("#switcher-vertical").checked = !0),
            localStorage.getItem("Syntortl") ?
            (document.querySelector("#switcher-rtl").checked = !0) :
            (document.querySelector("#switcher-ltr").checked = !0),
            localStorage.getItem("SyntoHeader") === "light" &&
            (document.querySelector("#switcher-header-light").checked = !0),
            localStorage.getItem("SyntoHeader") === "color" &&
            (document.querySelector("#switcher-header-primary").checked = !0),
            localStorage.getItem("SyntoHeader") === "gradient" &&
            (document.querySelector("#switcher-header-gradient").checked = !0),
            localStorage.getItem("SyntoHeader") === "dark" &&
            (document.querySelector("#switcher-header-dark").checked = !0),
            localStorage.getItem("SyntoHeader") === "transparent" &&
            (document.querySelector("#switcher-header-transparent").checked = !0),
            localStorage.getItem("SyntoMenu") === "light" &&
            (document.querySelector("#switcher-menu-light").checked = !0),
            localStorage.getItem("SyntoMenu") === "color" &&
            (document.querySelector("#switcher-menu-primary").checked = !0),
            localStorage.getItem("SyntoMenu") === "gradient" &&
            (document.querySelector("#switcher-menu-gradient").checked = !0),
            localStorage.getItem("SyntoMenu") === "dark" &&
            (document.querySelector("#switcher-menu-dark").checked = !0),
            localStorage.getItem("SyntoMenu") === "transparent" &&
            (document.querySelector("#switcher-menu-transparent").checked = !0),
            localStorage.getItem("Syntoboxed") &&
            (document.querySelector("#switcher-boxed").checked = !0),
            localStorage.getItem("Syntoheaderscrollable") &&
            (document.querySelector("#switcher-header-scroll").checked = !0),
            localStorage.getItem("Syntomenuscrollable") &&
            (document.querySelector("#switcher-menu-scroll").checked = !0),
            localStorage.getItem("Syntoheaderfixed") &&
            (document.querySelector("#switcher-header-fixed").checked = !0),
            localStorage.getItem("Syntomenufixed") &&
            (document.querySelector("#switcher-menu-fixed").checked = !0),
            localStorage.getItem("Syntoclassic") &&
            (document.querySelector("#switcher-classic").checked = !0),
            localStorage.Syntoverticalstyles)
    )
        switch (localStorage.getItem("Syntoverticalstyles")) {
            case "default":
                document.querySelector("#switcher-default-menu").checked = !0;
                break;
            case "closed":
                document.querySelector("#switcher-closed-menu").checked = !0;
                break;
            case "icontext":
                document.querySelector("#switcher-icontext-menu").checked = !0;
                break;
            case "overlay":
                document.querySelector("#switcher-icon-overlay").checked = !0;
                break;
            case "detached":
                document.querySelector("#switcher-detached").checked = !0;
                break;
            case "doublemenu":
                document.querySelector("#switcher-double-menu").checked = !0;
                break;
            default:
                document.querySelector("#switcher-default-menu").checked = !0;
                break;
        }
    if (localStorage.Syntonavstyles)
        switch (localStorage.getItem("Syntonavstyles")) {
            case "menu-click":
                document.querySelector("#switcher-menu-click").checked = !0;
                break;
            case "menu-hover":
                document.querySelector("#switcher-menu-hover").checked = !0;
                break;
            case "icon-click":
                document.querySelector("#switcher-icon-click").checked = !0;
                break;
            case "icon-hover":
                document.querySelector("#switcher-icon-hover").checked = !0;
                break;
        }
}
let s, Ke;

function v() {
    (Ke = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary-rgb")
        .trim()),
    (s = localStorage.getItem("primaryRGB") || Ke),
    document.querySelector("#salesOverview") !== null &&
        setTimeout(() => {
            Et(s);
        }, 100),
        document.querySelector("#visitors") !== null && Ct(s),
        document.querySelector("#sales-donut") !== null && Mt(s),
        document.querySelector("#earnings") !== null && Rt(s),
        document.querySelector("#crypto") !== null && Pt(s),
        document.querySelector("#subscriptionOverview") !== null && Ot(s),
        document.querySelector("#candidates-chart") !== null && zt(s),
        document.querySelector("#nft-statistics") !== null && Wt(s),
        document.querySelector("#audienceReport") !== null && $t(s),
        document.querySelector("#sessions") !== null && Gt(s),
        document.querySelector("#audience") !== null && Nt(s),
        document.querySelector("#session2") !== null && Jt(s),
        document.querySelector("#projectAnalysis") !== null && Yt(s),
        document.querySelector("#performanceReport") !== null && Xt(s),
        document.querySelector("#revenue") !== null && Ut(s),
        document.querySelector("#leads") !== null && Vt(s),
        document.querySelector("#statistics") !== null && Qt(s),
        document.querySelector("#totalInvested") !== null && Zt(s),
        document.querySelector("#totalInvestmentsStats") !== null && er(s),
        document.querySelector("#earningsReport") !== null && rr(s),
        document.querySelector("#report") !== null && or(s),
        document.querySelector("#views") !== null && lr(s);
}
v();

function vr() {
    if (
        (localStorage.primaryRGB &&
            (document.querySelector(".theme-container-primary") &&
                (document.querySelector(".theme-container-primary").value =
                    localStorage.primaryRGB),
                document
                .querySelector("html")
                .style.setProperty("--color-primary", localStorage.primaryRGB1),
                document
                .querySelector("html")
                .style.setProperty("--color-primary-rgb", localStorage.primaryRGB),
                localStorage.primaryRGB == "172, 172, 80" &&
                document.querySelector("#switcher-primary2") &&
                (document.querySelector("#switcher-primary2").checked = !0),
                localStorage.primaryRGB == "58, 88, 146" &&
                document.querySelector("#switcher-primary") &&
                (document.querySelector("#switcher-primary").checked = !0),
                localStorage.primaryRGB == "92, 144, 163" &&
                document.querySelector("#switcher-primary1") &&
                (document.querySelector("#switcher-primary1").checked = !0),
                localStorage.primaryRGB == "165, 94, 131" &&
                document.querySelector("#switcher-primary3") &&
                (document.querySelector("#switcher-primary3").checked = !0),
                localStorage.primaryRGB == "87, 68, 117" &&
                document.querySelector("#switcher-primary4") &&
                (document.querySelector("#switcher-primary4").checked = !0)),
            localStorage.bodyBgRGB)
    ) {
        document.querySelector(".theme-container-background") &&
            (document.querySelector(".theme-container-background").value =
                localStorage.bodyBgRGB),
            document
            .querySelector("html")
            .style.setProperty("--body-bg", localStorage.bodyBgRGB),
            document
            .querySelector("html")
            .style.setProperty("--dark-bg", localStorage.darkBgRGB);
        let e = document.querySelector("html");
        e.classList.add("dark"),
            e.classList.remove("light"),
            localStorage.removeItem("Syntolighttheme"),
            e.setAttribute("data-menu-styles", "dark"),
            e.setAttribute("data-header-styles", "dark"), !document.querySelector(".authentication-page") &&
            !document.querySelector(".cover1") &&
            (document.querySelector("#switcher-dark-theme").checked = !0),
            localStorage.bodyBgRGB == "64 76 107" &&
            document.querySelector("#switcher-background") &&
            (document.querySelector("#switcher-background").checked = !0),
            localStorage.bodyBgRGB == "95 107 64" &&
            document.querySelector("#switcher-background1") &&
            (document.querySelector("#switcher-background1").checked = !0),
            localStorage.bodyBgRGB == "93 64 107" &&
            document.querySelector("#switcher-background2") &&
            (document.querySelector("#switcher-background2").checked = !0),
            localStorage.bodyBgRGB == "64 101 107" &&
            document.querySelector("#switcher-background3") &&
            (document.querySelector("#switcher-background3").checked = !0),
            localStorage.bodyBgRGB == "107 64 64" &&
            document.querySelector("#switcher-background4") &&
            (document.querySelector("#switcher-background4").checked = !0);
    }
    if (localStorage.Syntodarktheme) {
        let e = document.querySelector("html");
        e.classList.add("dark"), e.classList.remove("light");
    }
    if (localStorage.Syntolighttheme) {
        let e = document.querySelector("html");
        e.classList.add("light"),
            e.classList.remove("dark"),
            document.querySelector("html").getAttribute("data-nav-layout") ==
            "horizontal" &&
            (console.log("hhh"),
                document
                .querySelector("html")
                .setAttribute("data-menu-styles", "light"));
    }
    if (
        (localStorage.Syntortl &&
            document.querySelector("html").setAttribute("dir", "rtl"),
            localStorage.Syntolayout)
    ) {
        let e = document.querySelector("html");
        switch (localStorage.getItem("Syntolayout")) {
            case "vertical":
                e.setAttribute("data-nav-layout", "vertical");
                break;
            case "horizontal":
                e.setAttribute("data-nav-layout", "horizontal");
                let r = document.querySelector(".main-menu"),
                    o = document.querySelector(".main-sidebar");
                setTimeout(() => {
                    !document.querySelector(".authentication-page") &&
                        !document.querySelector(".cover1") &&
                        r.scrollWidth < o.offsetWidth &&
                        (document.getElementById("slide-right").classList.add("hidden"),
                            document.getElementById("slide-left").classList.add("hidden"));
                }, 500);
                break;
        }
    }
    if (localStorage.Syntoverticalstyles) {
        let e = document.querySelector("html");
        switch (localStorage.getItem("Syntoverticalstyles")) {
            case "closed":
                e.setAttribute("data-vertical-style", "closed"),
                    e.removeAttribute("data-nav-style"),
                    localStorage.removeItem("Syntonavstyles");
                break;
            case "icontext":
                e.setAttribute("data-vertical-style", "icontext"),
                    e.removeAttribute("data-nav-style"),
                    localStorage.removeItem("Syntonavstyles");
                break;
            case "overlay":
                e.setAttribute("data-vertical-style", "overlay"),
                    e.removeAttribute("data-nav-style"),
                    localStorage.removeItem("Syntonavstyles");
                break;
            case "detached":
                e.setAttribute("data-vertical-style", "detached"),
                    e.removeAttribute("data-nav-style"),
                    localStorage.removeItem("Syntonavstyles");
                break;
            case "doublemenu":
                e.setAttribute("data-vertical-style", "doublemenu"),
                    e.removeAttribute("data-nav-style"),
                    localStorage.removeItem("Syntonavstyles");
                const r = document.querySelectorAll(
                        ".main-menu > li > .side-menu__item"
                    ),
                    o = document.createElement("div");
                (o.className = "custome-tooltip"),
                o.style.setProperty("position", "fixed"),
                    o.style.setProperty("display", "none"),
                    o.style.setProperty("padding", "0.5rem"),
                    o.style.setProperty("font-weight", "500"),
                    o.style.setProperty("font-size", "0.75rem"),
                    o.style.setProperty("background-color", "rgb(15, 23 ,42)"),
                    o.style.setProperty("color", "rgb(255, 255 ,255)"),
                    o.style.setProperty("margin-inline-start", "45px"),
                    o.style.setProperty("border-radius", "0.25rem"),
                    o.style.setProperty("z-index", "99"),
                    r.forEach((a) => {
                        a.addEventListener("mouseenter", () => {
                                o.style.setProperty("display", "block"),
                                    (o.textContent =
                                        a.querySelector(".side-menu__label").textContent),
                                    document
                                    .querySelector("html")
                                    .getAttribute("data-vertical-style") == "doublemenu" &&
                                    a.appendChild(o);
                            }),
                            a.addEventListener("mouseleave", () => {
                                o.style.setProperty("display", "none"),
                                    (o.textContent =
                                        a.querySelector(".side-menu__label").textContent),
                                    document
                                    .querySelector("html")
                                    .getAttribute("data-vertical-style") == "doublemenu" &&
                                    a.removeChild(o);
                            });
                    });
                break;
        }
    }
    if (localStorage.Syntonavstyles) {
        let e = document.querySelector("html");
        switch (localStorage.getItem("Syntonavstyles")) {
            case "menu-click":
                e.setAttribute("data-nav-style", "menu-click"),
                    localStorage.removeItem("Syntoverticalstyles"), !document.querySelector(".authentication-page") &&
                    !document.querySelector(".cover1") &&
                    ft(),
                    e.removeAttribute("data-vertical-style");
                break;
            case "menu-hover":
                e.setAttribute("data-nav-style", "menu-hover"),
                    localStorage.removeItem("Syntoverticalstyles"), !document.querySelector(".authentication-page") &&
                    !document.querySelector(".cover1") &&
                    pt(),
                    e.removeAttribute("data-vertical-style");
                break;
            case "icon-click":
                e.setAttribute("data-nav-style", "icon-click"),
                    localStorage.removeItem("Syntoverticalstyles"), !document.querySelector(".authentication-page") &&
                    !document.querySelector(".cover1") &&
                    bt(),
                    e.removeAttribute("data-vertical-style");
                break;
            case "icon-hover":
                e.setAttribute("data-nav-style", "icon-hover"),
                    localStorage.removeItem("Syntoverticalstyles"), !document.querySelector(".authentication-page") &&
                    !document.querySelector(".cover1") &&
                    St(),
                    e.removeAttribute("data-vertical-style");
                break;
        }
    }
    if (
        (localStorage.Syntoclassic &&
            document.querySelector("html").setAttribute("data-page-style", "classic"),
            localStorage.Syntoboxed &&
            document.querySelector("html").setAttribute("data-width", "boxed"),
            localStorage.Syntoheaderfixed &&
            document
            .querySelector("html")
            .setAttribute("data-header-position", "fixed"),
            localStorage.Syntoheaderscrollable &&
            document
            .querySelector("html")
            .setAttribute("data-header-position", "scrollable"),
            localStorage.Syntomenufixed &&
            document
            .querySelector("html")
            .setAttribute("data-menu-position", "fixed"),
            localStorage.Syntomenuscrollable &&
            document
            .querySelector("html")
            .setAttribute("data-menu-position", "scrollable"),
            localStorage.SyntoMenu)
    ) {
        let e = document.querySelector("html");
        switch (localStorage.getItem("SyntoMenu")) {
            case "light":
                e.setAttribute("data-menu-styles", "light");
                break;
            case "dark":
                e.setAttribute("data-menu-styles", "dark");
                break;
            case "color":
                e.setAttribute("data-menu-styles", "color");
                break;
            case "gradient":
                e.setAttribute("data-menu-styles", "gradient");
                break;
            case "transparent":
                e.setAttribute("data-menu-styles", "transparent");
                break;
        }
    }
    if (localStorage.SyntoHeader) {
        let e = document.querySelector("html");
        switch (localStorage.getItem("SyntoHeader")) {
            case "light":
                e.setAttribute("data-header-styles", "light");
                break;
            case "dark":
                e.setAttribute("data-header-styles", "dark");
                break;
            case "color":
                e.setAttribute("data-header-styles", "color");
                break;
            case "gradient":
                e.setAttribute("data-header-styles", "gradient");
                break;
            case "transparent":
                e.setAttribute("data-header-styles", "transparent");
                break;
        }
    }
    if (localStorage.bgimg) {
        let e = document.querySelector("html"),
            t = localStorage.getItem("bgimg");
        if (
            (e.setAttribute("bg-img", t),
                document.querySelector("#hs-overlay-switcher"))
        )
            switch (t) {
                case "bgimg1":
                    document.querySelector("#switcher-bg-img").checked = !0;
                    break;
                case "bgimg2":
                    document.querySelector("#switcher-bg-img1").checked = !0;
                    break;
                case "bgimg3":
                    document.querySelector("#switcher-bg-img2").checked = !0;
                    break;
                case "bgimg4":
                    document.querySelector("#switcher-bg-img3").checked = !0;
                    break;
                case "bgimg5":
                    document.querySelector("#switcher-bg-img4").checked = !0;
                    break;
            }
    }
}
document.querySelector("#hs-overlay-switcher") &&
    document.querySelector("html").getAttribute("data-nav-layout") ===
    "horizontal" &&
    !document.querySelector(".landing-body") &&
    Lt();
document.querySelector("html").getAttribute("dir") === "rtl" &&
    document.querySelector("#hs-overlay-switcher") &&
    kt();