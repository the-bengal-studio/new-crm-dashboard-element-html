var e = document.getElementById("subscriptionOverview");
if (e !== null) {
    e.innerHTML = "";
    var a = {
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
    };
    document.querySelector("#subscriptionOverview").innerHTML = " ";
    var s = new ApexCharts(document.querySelector("#subscriptionOverview"), a);
    s.render();
}
var e = document.getElementById("candidates-chart");
if (e !== null) {
    e.innerHTML = "";
    var r = {
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
                            formatter: function(t) {
                                return t + "%";
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
    var o = new ApexCharts(document.querySelector("#candidates-chart"), r),
        o = new ApexCharts(document.querySelector("#candidates-chart"), r);
    o.render();
}