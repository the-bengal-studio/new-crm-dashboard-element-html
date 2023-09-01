document.addEventListener("DOMContentLoaded", function() {
    var d = document.querySelectorAll("[data-trigger]");
    for (let a = 0; a < d.length; ++a) {
        var s = d[a];
        new Choices(s, { allowHTML: !0, searchEnabled: !1 });
    }
});
var e = document.getElementById("crypto");
if (e !== null) {
    e.innerHTML = "";
    var y = {
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
        w = new ApexCharts(document.querySelector("#crypto"), y);
    w.render();
}
var e = document.getElementById("bitcoin-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
    var t = new ApexCharts(document.querySelector("#bitcoin-price-graph"), t);
    t.render();
}
var e = document.getElementById("etherium-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var n = {
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
    var n = new ApexCharts(document.querySelector("#etherium-price-graph"), n);
    n.render();
}
var e = document.getElementById("dash-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var r = {
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
    var r = new ApexCharts(document.querySelector("#dash-price-graph"), r);
    r.render();
}
var e = document.getElementById("ripple-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var l = {
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
    var l = new ApexCharts(document.querySelector("#ripple-price-graph"), l);
    l.render();
}
var e = document.getElementById("iota-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var o = {
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
    var o = new ApexCharts(document.querySelector("#iota-price-graph"), o);
    o.render();
}
var e = document.getElementById("neo-price-graph");
if (e !== null) {
    e.innerHTML = "";
    var i = {
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
    var i = new ApexCharts(document.querySelector("#neo-price-graph"), i);
    i.render();
}