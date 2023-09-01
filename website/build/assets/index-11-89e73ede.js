var e = document.getElementById("totalInvested");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
                        formatter: function(l) {
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
        s = new ApexCharts(document.querySelector("#totalInvested"), t);
    s.render();
}
var e = document.getElementById("totalInvestments");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
                        formatter: function(o) {
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
        r = new ApexCharts(document.querySelector("#totalInvestments"), t);
    r.render();
}
var e = document.getElementById("totalReturns");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
                        formatter: function(a) {
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
        r = new ApexCharts(document.querySelector("#totalReturns"), t);
    r.render();
}
var e = document.getElementById("returnsRate");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
                        formatter: function(a) {
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
        r = new ApexCharts(document.querySelector("#returnsRate"), t);
    r.render();
}
var e = document.getElementById("totalInvestmentsStats");
if (e !== null) {
    e.innerHTML = "";
    var t = {
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
                    formatter: function(o) {
                        return o.toFixed(0) + "";
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
        n = new ApexCharts(document.querySelector("#totalInvestmentsStats"), t);
    n.render();
}