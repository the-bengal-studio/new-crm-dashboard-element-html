var e = document.getElementById("performanceReport");
if (e !== null) {
  e.innerHTML = "";
  var a = {
      series: [
        {
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
      responsive: [
        {
          breakpoint: 480,
          options: { legend: { position: "bottom", offsetX: -10, offsetY: 0 } },
        },
      ],
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
    o = new ApexCharts(document.querySelector("#performanceReport"), a);
  o.render();
}
