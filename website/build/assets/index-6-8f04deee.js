var e = document.getElementById("audienceReport");
if (e !== null) {
    e.innerHTML = "";
    var o = {
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
                    formatter: function(r) {
                        return r.toFixed(0) + "";
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
        a = new ApexCharts(document.querySelector("#audienceReport"), o);
    a.render();
}
var e = document.getElementById("sessions");
if (e !== null) {
    e.innerHTML = "";
    var o = {
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
                            formatter: function(s) {
                                return s + "%";
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
    var t = new ApexCharts(document.querySelector("#sessions"), o);
    t.render();
}
var e = document.getElementById("audience");
if (e !== null) {
    e.innerHTML = "";
    var o = {
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
        t = new ApexCharts(document.querySelector("#audience"), o);
    t.render();
}
var e = document.getElementById("session2");
if (e !== null) {
    e.innerHTML = "";
    var o = {
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
        t = new ApexCharts(document.querySelector("#session2"), o);
    t.render();
}