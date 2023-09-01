var e = document.getElementById("projectAnalysis");
if (e !== null) {
  e.innerHTML = "";
  var s = {
      series: [
        {
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
      yaxis: [
        {
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
    t = new ApexCharts(document.querySelector("#projectAnalysis"), s);
  t.render();
}
